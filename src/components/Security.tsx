import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Shield, Lock, Key, FileText, ShieldCheck, Server } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}


const iconPulse = {
  scale: [1, 1.05, 1],
  transition: {
    duration: 2,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

const securityGuarantees = [
  {
    icon: Server,
    title: 'Data Isolation',
    description: 'Multi-tenant architecture with strict organization-level isolation',
  },
  {
    icon: Lock,
    title: 'Encryption',
    description: 'TLS in transit, encryption at rest (configurable)',
  },
  {
    icon: Key,
    title: 'Access Control',
    description: 'Role-based access control enforced at API level',
  },
  {
    icon: FileText,
    title: 'Audit Logging',
    description: 'Comprehensive logging of all actions',
  },
  {
    icon: ShieldCheck,
    title: 'Input Validation',
    description: 'Defense against injection attacks',
  },
  {
    icon: Shield,
    title: 'On-Premise Option',
    description: 'Complete data sovereignty (Q2 2026)',
  },
]

export default function Security() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-b from-slate-50 to-white"
    >
      {/* Subtle background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 mb-8 transition-colors inline-flex"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header Section */}
          <motion.div variants={itemVariants} className="mb-12 text-center">
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              animate={iconPulse}
            >
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center">
                <Shield className="w-8 h-8 text-emerald-600" />
              </div>
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Security at Atomik
            </h1>
            <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
              We believe in radical transparency. Here is how we secure your client data.
            </p>
          </motion.div>

          {/* Security Guarantees Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {securityGuarantees.map((guarantee, index) => {
              const IconComponent = guarantee.icon
              return (
                <motion.div
                  key={guarantee.title}
                  variants={itemVariants}
                  className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow cursor-default"
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  custom={index}
                >
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={iconPulse}
                      className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0"
                    >
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-800 mb-2">
                        {guarantee.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {guarantee.description}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              )
            })}
          </div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center"
          >
            <motion.a
              href="/atomik-security-whitepaper.pdf"
              download="Atomik Security & Trust Document.pdf"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 60px rgba(16,185,129,0.4)',
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center btn-primary text-base px-10 py-4 shadow-lg shadow-emerald-500/20 transition-all duration-300"
            >
              Download Full Security Architecture (PDF)
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

