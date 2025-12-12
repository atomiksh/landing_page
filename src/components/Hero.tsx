import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import DashboardMockup from './DashboardMockup'

const integrations = [
  { name: 'Burp Suite' },
  { name: 'Nessus' },
  { name: 'Qualys' },
  { name: 'OpenVAS' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
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

const floatAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: 'easeInOut',
  },
}

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden gradient-hero">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-200/50 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-teal-200/50 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-100/30 blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-200 mb-8 cursor-pointer"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-emerald-500"
            />
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">
              AI-Powered Report Automation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 mb-6"
          >
            Pentest Reports in{' '}
            <motion.span
              className="text-gradient inline-block"
              animate={{ 
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Minutes
            </motion.span>.{' '}
            <br className="hidden sm:block" />
            Not Days.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-slate-500 font-normal max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            Atomik automates your security report workflow — from vulnerability
            management to client-ready PDFs. Powered by AI. Built for pros.
          </motion.p>

          {/* Value proposition */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-emerald-600 font-semibold mb-10"
          >
            You can focus on hacking and get paid faster.
          </motion.p>

          {/* CTA - Single button */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center mb-16"
          >
            <motion.a
              href="https://app.atomik.sh"
              whileHover={{ scale: 1.05, boxShadow: '0 0 60px rgba(16,185,129,0.4)' }}
              whileTap={{ scale: 0.98 }}
              className="group btn-primary text-base px-10 py-4 shadow-glow transition-all duration-300"
            >
              Get Started Free
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Integration text - New style */}
          <motion.p
            variants={itemVariants}
            className="text-xs md:text-sm text-slate-400 uppercase tracking-[0.2em] font-medium mb-8"
          >
            Seamlessly imports from industry-standard tools
          </motion.p>

          {/* Integration logos - Gray minimal style */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-12"
          >
            {integrations.map((tool) => (
              <motion.span
                key={tool.name}
                variants={itemVariants}
                whileHover={{ opacity: 1 }}
                className="text-xl md:text-2xl font-bold text-slate-300 hover:text-slate-400 transition-colors cursor-default"
              >
                {tool.name}
              </motion.span>
            ))}
            <motion.span
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium text-slate-300 italic"
            >
              ...and more
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 pointer-events-none" />
          <motion.div animate={floatAnimation}>
            <DashboardMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
