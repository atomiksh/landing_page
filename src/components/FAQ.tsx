import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

interface FAQProps {
  onContactClick: () => void
}

const faqs = [
  {
    question: "Has Atomik been penetration tested?",
    answer: "Yes. We practice what we preach. Atomik undergoes continuous security scanning and annual gray-box penetration tests performed by independent, CREST-certified firms. We maintain a strict vulnerability management program and remediate all critical findings within 24 hours.",
  },
  {
    question: "Does the AI train on my client's data?",
    answer: "Absolutely not. We utilize enterprise-tier AI APIs with strict zero-retention policies. Your vulnerability data and findings are processed solely to generate your report and are never stored by the AI provider or used to train public models.",
  },
  {
    question: "How is sensitive data encrypted?",
    answer: "We use tenant-level isolation for all projects. Data is encrypted at rest using AES-256 and in transit via TLS 1.3. Our infrastructure runs on SOC 2 Type II compliant servers, ensuring your client's data remains hermetically sealed.",
  },
  {
    question: "Can I export my data if I leave?",
    answer: "You own your data. You can export all project files and reports in JSON/PDF formats at any time. Upon account deletion, we perform a hard delete of all your tenant data from our primary and backup systems within 30 days.",
  },
  {
    question: "What's included in the free plan?",
    answer: "The free Community plan includes 1 active project, basic vulnerability templates, watermarked PDF exports, 50 AI prompts per month, and access to our community support. It's perfect for testing the platform before upgrading.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function FAQ({ onContactClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6"
          >
            <HelpCircle className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-slate-600">Got Questions?</span>
          </motion.div>
          <h2 className="section-title mb-4">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Everything you need to know about Atomik
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-50 rounded-xl overflow-hidden border border-slate-200"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ backgroundColor: 'rgba(241, 245, 249, 1)' }}
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
              >
                <span className="font-semibold text-slate-800 pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-slate-500" />
                </motion.div>
              </motion.button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="px-6 pb-6"
                      initial={{ y: -10 }}
                      animate={{ y: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <p className="text-slate-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <motion.button
            onClick={onContactClick}
            whileHover={{ scale: 1.02, boxShadow: '0 8px 25px rgba(16,185,129,0.15)' }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-4 px-6 py-4 bg-emerald-50 rounded-2xl border border-emerald-200 cursor-pointer transition-all"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <MessageCircle className="w-6 h-6 text-emerald-600" />
            </motion.div>
            <div className="text-left">
              <p className="font-semibold text-slate-800">Still have questions?</p>
              <p className="text-sm text-slate-600">
                Click here to contact us
              </p>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
