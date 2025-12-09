import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Sparkles, Building2, Zap, Crown, User } from 'lucide-react'

const plans = [
  {
    name: 'Community',
    priceMonthly: '$0',
    priceYearly: '$0',
    period: '/year',
    description: 'For Testing',
    icon: Zap,
    color: 'from-slate-500 to-slate-600',
    highlightedFeatures: [
      { text: '5 AI Prompts/mo', icon: Sparkles },
    ],
    features: [
      'Unlimited Projects',
      'Watermarked PDF Export',
      '5 AI Prompts/month',
      'Community Support',
      'Manual Finding Entry',
    ],
    cta: 'Current Plan',
    ctaStyle: 'secondary',
    highlighted: false,
    recommended: false,
    savings: null,
  },
  {
    name: 'Consultant',
    priceMonthly: '$49',
    priceYearly: '$490',
    period: '/year',
    description: 'For Freelancers',
    icon: User,
    color: 'from-emerald-500 to-teal-600',
    highlightedFeatures: [
      { text: '3 Clean Exports/mo', icon: Sparkles },
      { text: '500 AI Prompts/mo', icon: Zap },
    ],
    features: [
      'Unlimited Projects',
      '3 Clean Exports/month',
      'PDF & DOCX Export',
      'Scanner Import (Burp/Nessus)',
      '500 AI Prompts/month',
      'Priority Support',
    ],
    cta: 'Upgrade Now',
    ctaStyle: 'primary',
    highlighted: false,
    recommended: false,
    savings: '$98',
  },
  {
    name: 'Studio',
    priceMonthly: '$129',
    priceYearly: '$1290',
    period: '/year',
    description: 'For Teams',
    icon: Building2,
    color: 'from-emerald-500 to-teal-600',
    highlightedFeatures: [
      { text: '10 Clean Exports/mo', icon: Sparkles },
      { text: '500 AI Prompts/mo', icon: Zap },
    ],
    features: [
      'Everything in Consultant',
      '10 Clean Exports/month',
      'White-label Reports',
      'Team Collaboration',
      'Custom Branding',
      'Dedicated Support',
    ],
    cta: 'Upgrade Now',
    ctaStyle: 'primary',
    highlighted: true,
    recommended: true,
    savings: '$258',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true)

  return (
    <section id="pricing" className="py-24 md:py-32 bg-slate-50 overflow-hidden relative">
      {/* Animated background */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-emerald-200 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.15, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-100 blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <Crown className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-slate-600">Simple Pricing</span>
          </motion.div>
          <h2 className="section-title mb-4">Choose Your Plan</h2>
          <p className="section-subtitle mb-8">
            Start free. Upgrade when you're ready. Cancel anytime.
          </p>

          {/* Toggle */}
          <motion.div 
            className="inline-flex items-center gap-1 p-1.5 bg-white rounded-full border border-slate-200 shadow-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={() => setIsYearly(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                !isYearly
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </motion.button>
            <motion.button
              onClick={() => setIsYearly(true)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                isYearly
                  ? 'bg-emerald-500 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Yearly
              <motion.span 
                className={`text-xs px-2 py-0.5 rounded-full font-semibold ${
                  isYearly ? 'bg-emerald-400 text-white' : 'bg-emerald-100 text-emerald-700'
                }`}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Save 17%
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              whileHover={{ 
                y: plan.highlighted ? -12 : -8,
                transition: { type: 'spring', stiffness: 400 }
              }}
              className={`relative bg-white rounded-2xl p-6 ${
                plan.highlighted
                  ? 'border-2 border-emerald-400 shadow-xl shadow-emerald-500/10'
                  : 'border border-slate-200 shadow-lg'
              }`}
            >
              {plan.recommended && (
                <motion.div 
                  className="absolute -top-3 right-4 px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full shadow-lg flex items-center gap-1"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, type: 'spring' }}
                >
                  <Check className="w-3 h-3" />
                  Recommended
                </motion.div>
              )}

              <div className="mb-4">
                <h3 className="text-xl font-bold text-slate-800">{plan.name}</h3>
                <p className="text-sm text-slate-500">{plan.description}</p>
              </div>

              <div className="mb-4">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={isYearly ? 'yearly' : 'monthly'}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="flex items-baseline gap-1"
                  >
                    <span className="text-4xl font-bold text-slate-900">
                      {isYearly ? plan.priceYearly : plan.priceMonthly}
                    </span>
                    <span className="text-slate-500 text-sm">
                      {isYearly ? '/year' : '/month'}
                    </span>
                  </motion.div>
                </AnimatePresence>
                {isYearly && plan.savings && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center gap-1 mt-2 px-2 py-1 bg-emerald-50 border border-emerald-200 rounded-full"
                  >
                    <span className="text-xs font-semibold text-emerald-700">
                      Save {plan.savings}/year
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Highlighted Features */}
              {plan.highlightedFeatures && plan.highlightedFeatures.length > 0 && (
                <div className="space-y-2 mb-4">
                  {plan.highlightedFeatures.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-2 text-amber-600"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <feature.icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{feature.text}</span>
                    </motion.div>
                  ))}
                </div>
              )}

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={feature} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: featureIndex * 0.05 }}
                  >
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      plan.highlighted ? 'text-emerald-500' : 'text-slate-400'
                    }`} />
                    <span className="text-slate-600 text-sm">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href="https://app.atomik.sh"
                whileHover={{ scale: 1.02, boxShadow: plan.ctaStyle === 'primary' ? '0 8px 25px rgba(16,185,129,0.25)' : undefined }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-3 px-4 rounded-xl font-semibold transition-all block text-center ${
                  plan.ctaStyle === 'primary'
                    ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional info */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-slate-500 mt-12"
        >
          Start with the free Community plan. Upgrade anytime.
        </motion.p>
      </div>
    </section>
  )
}
