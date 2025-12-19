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
      className="min-h-screen bg-zinc-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
    >
      {/* Subtle background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-96 h-96 rounded-full bg-lime-400/10 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-lime-500/10 blur-3xl"
        />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-zinc-400 hover:text-lime-400 mb-8 transition-colors inline-flex"
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
          <motion.div 
            variants={itemVariants} 
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center justify-center gap-3 mb-6"
              animate={iconPulse}
            >
              <Shield className="w-12 h-12 text-lime-400" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security at Atomik
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    ease: 'easeOut',
                    delay: 0.3 + (index * 0.1)
                  }}
                  className="bg-zinc-900/40 backdrop-blur-sm rounded-2xl border border-zinc-800 p-6 cursor-default transition-all duration-300 hover:border-lime-400/50 hover:shadow-[0_0_15px_rgba(163,230,53,0.1)] hover:-translate-y-1"
                >
                  <motion.div
                    className="flex items-start gap-4"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      animate={iconPulse}
                      className="flex items-center justify-center flex-shrink-0"
                    >
                      <IconComponent className="w-8 h-8 text-lime-400" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {guarantee.title}
                      </h3>
                      <p className="text-zinc-400 leading-relaxed">
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
          >
            <motion.a
              href="/atomik-security-whitepaper.pdf"
              download="Atomik Security & Trust Document.pdf"
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 60px rgba(132,204,22,0.5)',
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center justify-center px-10 py-4 text-base font-bold text-zinc-950 bg-lime-400 rounded-lg hover:bg-lime-300 transition-all duration-300 shadow-lg shadow-lime-400/30 hover:shadow-xl hover:shadow-lime-400/40"
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

