import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

interface FAQProps {
  onContactClick: () => void
}

const faqs = [
  {
    question: "What's included in the free plan?",
    answer: "The free Community plan includes 1 active project, basic vulnerability templates, watermarked PDF exports, 50 AI prompts per month, and access to our community support. It's perfect for testing the platform before upgrading.",
  },
  {
    question: "How does AI report generation work?",
    answer: "Our AI analyzes your findings and generates professional, detailed narratives including descriptions, impact assessments, and remediation recommendations. Simply input your technical findings, and Atomik produces client-ready text that you can review and customize. The AI is trained on thousands of real security reports to ensure accuracy and relevance.",
  },
  {
    question: "Can I use my own branding?",
    answer: "Yes! Consultant and Studio plans allow you to customize report templates with your company logo, colors, fonts, and styling. Studio customers can create fully white-labeled reports with no mention of Atomik.",
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. Security is our top priority. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). We conduct regular security assessments and your findings data is never used to train our AI models.",
  },
  {
    question: "Do you offer team plans?",
    answer: "Yes! The Studio plan supports team collaboration with features like shared projects, role-based permissions, activity tracking, and up to 5 team members. It also includes a client portal and white-label reports.",
  },
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time with no penalties. Monthly subscriptions end at the end of the billing period. Annual subscriptions can be cancelled and won't renew.",
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
