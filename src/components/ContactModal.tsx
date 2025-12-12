import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Send, Loader2, MessageSquare, Mail, User, Sparkles, Building2, AlertCircle } from 'lucide-react'
import { validateFormData } from '../utils/validation'
import { sanitizeName, sanitizeEmail, sanitizeCompany, sanitizeMessage } from '../utils/sanitization'
import { generateCSRFToken, checkRateLimit, clearRateLimit } from '../utils/security'
import { getSecurityConfig } from '../config/security'
import { 
  logHoneypotTrigger, 
  logValidationFailure, 
  logSanitization, 
  logXSSAttempt,
  trackFormSubmission 
} from '../utils/monitoring'

// Get max lengths from config
const getMaxLengths = () => {
  const config = getSecurityConfig()
  return config.maxLengths
}

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const config = getSecurityConfig()
  const maxLengths = getMaxLengths()
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    honeypot: '', // Honeypot field for bot detection
  })
  const [validationErrors, setValidationErrors] = useState<{
    name?: string
    email?: string
    company?: string
    message?: string
  }>({})
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [csrfToken] = useState(() => generateCSRFToken())
  const formRef = useRef<HTMLFormElement>(null)

  // Reset form when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setFormData({ name: '', email: '', company: '', message: '', honeypot: '' })
      setValidationErrors({})
      setSubmitError(null)
      setIsSubmitted(false)
    }
  }, [isOpen])

  // Sanitize inputs on change
  const handleInputChange = (field: keyof typeof formData, value: string) => {
    let sanitizedValue = value
    const originalLength = value.length
    
    // Check for potential XSS attempts
    if (config.enableSanitization && /<script|javascript:|on\w+\s*=/i.test(value)) {
      logXSSAttempt(value, field)
    }
    
    // Apply sanitization if enabled
    if (config.enableSanitization) {
      switch (field) {
        case 'name':
          sanitizedValue = sanitizeName(value)
          break
        case 'email':
          sanitizedValue = sanitizeEmail(value)
          break
        case 'company':
          sanitizedValue = sanitizeCompany(value)
          break
        case 'message':
          sanitizedValue = sanitizeMessage(value)
          break
        case 'honeypot':
          // Don't sanitize honeypot - we want to detect if it's filled
          sanitizedValue = value
          break
      }
      
      // Log if sanitization modified the input
      if (originalLength !== sanitizedValue.length) {
        logSanitization(originalLength, sanitizedValue.length, field)
      }
    }
    
    setFormData({ ...formData, [field]: sanitizedValue })
    // Clear error for this field when user starts typing
    if (validationErrors[field as keyof typeof validationErrors]) {
      setValidationErrors({ ...validationErrors, [field]: undefined })
    }
    setSubmitError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const startTime = Date.now()
    setSubmitError(null)
    setValidationErrors({})

    // Honeypot check - if filled, it's likely a bot
    if (config.enableHoneypot && formData.honeypot) {
      logHoneypotTrigger()
      return // Silently fail
    }

    // Rate limiting check
    const rateLimit = checkRateLimit()
    if (!rateLimit.allowed) {
      setSubmitError(
        `Too many submissions. Please wait ${rateLimit.retryAfter} seconds before trying again.`
      )
      trackFormSubmission(false, Date.now() - startTime)
      return
    }

    // Validate form data
    if (config.enableValidation) {
      const validation = validateFormData({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message,
      })

      if (!validation.isValid) {
        setValidationErrors(validation.errors)
        // Log validation failures
        Object.entries(validation.errors).forEach(([field, error]) => {
          if (error) logValidationFailure(field, error)
        })
        trackFormSubmission(false, Date.now() - startTime)
        return
      }
    }

    setIsSubmitting(true)

    try {
      // Sanitize data before sending (if enabled)
      const sanitizedData = {
        name: config.enableSanitization ? sanitizeName(formData.name) : formData.name,
        email: config.enableSanitization ? sanitizeEmail(formData.email) : formData.email,
        company: config.enableSanitization ? sanitizeCompany(formData.company) : formData.company,
        message: config.enableSanitization ? sanitizeMessage(formData.message) : formData.message,
        _subject: `[Atomik Sales] New inquiry from ${config.enableSanitization ? sanitizeName(formData.name) : formData.name}`,
        ...(config.enableCSRF && csrfToken ? { _csrf: csrfToken } : {}), // CSRF token
      }

      const headers: HeadersInit = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
      
      // Add CSRF header if enabled
      if (config.enableCSRF && csrfToken) {
        headers['X-CSRF-Token'] = csrfToken
      }

      const response = await fetch('https://formsubmit.co/ajax/iriof@atomik.sh', {
        method: 'POST',
        headers,
        body: JSON.stringify(sanitizedData),
      })

      const duration = Date.now() - startTime

      if (response.ok) {
        clearRateLimit() // Clear rate limit on success
        trackFormSubmission(true, duration)
        setIsSubmitted(true)
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', company: '', message: '', honeypot: '' })
          setValidationErrors({})
          onClose()
        }, 3000)
      } else {
        const errorText = await response.text()
        setSubmitError('Failed to send message. Please try again later.')
        trackFormSubmission(false, duration)
        console.error('Form submission error:', response.status, errorText)
      }
    } catch (error) {
      const duration = Date.now() - startTime
      setSubmitError('Network error. Please check your connection and try again.')
      trackFormSubmission(false, duration)
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 px-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              {/* Header with gradient */}
              <div className="relative px-6 py-6 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"
                  animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-2">
                    <motion.div
                      className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <MessageSquare className="w-5 h-5" />
                    </motion.div>
                    <div>
                      <h2 className="text-xl font-bold">
                        Contact Sales
                      </h2>
                      <p className="text-emerald-100 text-sm">
                        We'll get back to you within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
                <motion.button
                  onClick={onClose}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8"
                  >
                    <motion.div 
                      className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center mx-auto mb-4"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Sparkles className="w-8 h-8 text-emerald-600" />
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-slate-500">
                      Our team will reach out to you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    {/* Hidden FormSubmit fields */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    
                    {/* Honeypot field - hidden from users but visible to bots */}
                    <input
                      type="text"
                      name="website"
                      value={formData.honeypot}
                      onChange={(e) => handleInputChange('honeypot', e.target.value)}
                      style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden="true"
                    />
                    
                    {/* Error message */}
                    {submitError && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm"
                      >
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{submitError}</span>
                      </motion.div>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                      >
                        <label
                          htmlFor="name"
                          className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2"
                        >
                          <User className="w-4 h-4 text-slate-400" />
                          Name
                        </label>
                        <motion.input
                          type="text"
                          id="name"
                          name="name"
                          required
                          maxLength={maxLengths.name}
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          whileFocus={{ scale: 1.01 }}
                          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white outline-none transition-all text-sm ${
                            validationErrors.name ? 'border-red-300' : 'border-slate-200'
                          }`}
                          placeholder="Your name"
                        />
                        {validationErrors.name && (
                          <p className="mt-1 text-xs text-red-600">{validationErrors.name}</p>
                        )}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <label
                          htmlFor="company"
                          className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2"
                        >
                          <Building2 className="w-4 h-4 text-slate-400" />
                          Company
                        </label>
                        <motion.input
                          type="text"
                          id="company"
                          name="company"
                          maxLength={maxLengths.company}
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          whileFocus={{ scale: 1.01 }}
                          className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white outline-none transition-all text-sm ${
                            validationErrors.company ? 'border-red-300' : 'border-slate-200'
                          }`}
                          placeholder="Company name"
                        />
                        {validationErrors.company && (
                          <p className="mt-1 text-xs text-red-600">{validationErrors.company}</p>
                        )}
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <label
                        htmlFor="email"
                        className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2"
                      >
                        <Mail className="w-4 h-4 text-slate-400" />
                        Email
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        required
                        maxLength={maxLengths.email}
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        whileFocus={{ scale: 1.01 }}
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white outline-none transition-all text-sm ${
                          validationErrors.email ? 'border-red-300' : 'border-slate-200'
                        }`}
                        placeholder="you@company.com"
                      />
                      {validationErrors.email && (
                        <p className="mt-1 text-xs text-red-600">{validationErrors.email}</p>
                      )}
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <label
                        htmlFor="message"
                        className="flex items-center gap-2 text-sm font-medium text-slate-700 mb-2"
                      >
                        <MessageSquare className="w-4 h-4 text-slate-400" />
                        Message
                      </label>
                      <motion.textarea
                        id="message"
                        name="message"
                        required
                        rows={3}
                        maxLength={maxLengths.message}
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        whileFocus={{ scale: 1.01 }}
                        className={`w-full px-4 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:bg-white outline-none transition-all resize-none text-sm ${
                          validationErrors.message ? 'border-red-300' : 'border-slate-200'
                        }`}
                        placeholder="Tell us about your team and requirements..."
                      />
                      <div className="flex justify-between items-center mt-1">
                        {validationErrors.message && (
                          <p className="text-xs text-red-600">{validationErrors.message}</p>
                        )}
                        <p className="text-xs text-slate-400 ml-auto">
                          {formData.message.length}/{maxLengths.message}
                        </p>
                      </div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(16,185,129,0.3)' }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 px-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </form>
                )}
              </div>

              {/* Footer */}
              {!isSubmitted && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="px-6 py-4 bg-slate-50 border-t border-slate-100"
                >
                  <p className="text-xs text-slate-400 text-center">
                    By submitting, you agree to our{' '}
                    <a href="#" className="text-emerald-600 hover:underline">Privacy Policy</a>
                    {' '}and{' '}
                    <a href="#" className="text-emerald-600 hover:underline">Terms of Service</a>
                  </p>
                </motion.div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
