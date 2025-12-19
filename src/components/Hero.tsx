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
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-zinc-950">
      {/* Animated background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-indigo-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-indigo-600/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-indigo-400/15 blur-3xl"
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-zinc-700 mb-8 cursor-pointer backdrop-blur-sm"
          >
            <motion.span
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-indigo-400"
            />
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="text-sm font-medium text-zinc-200">
              AI-Powered Report Automation
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white mb-6"
          >
            The AI-Powered Pentest Reporting Tool.
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-zinc-300 font-normal max-w-3xl mx-auto mb-4 leading-relaxed"
          >
            Atomik is the automated pentest reporting software that turns vulnerability data into professional PDFs. Powered by AI. Built for pros. Reports in minutes, not days.
          </motion.p>

          {/* Value proposition */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-indigo-400 font-semibold mb-10"
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
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(99,102,241,0.6)' }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white bg-indigo-500 rounded-lg hover:bg-indigo-400 transition-all duration-300 shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/60"
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
            className="text-xs md:text-sm text-zinc-400 uppercase tracking-[0.2em] font-medium mb-8"
          >
            Seamlessly imports from Burp Suite, Nessus, Qualys, and OpenVAS.
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
                className="text-xl md:text-2xl font-bold text-zinc-400 hover:text-zinc-300 transition-colors cursor-default"
              >
                {tool.name}
              </motion.span>
            ))}
            <motion.span
              variants={itemVariants}
              className="text-xl md:text-2xl font-medium text-zinc-400 italic"
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
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none" />
          <motion.div animate={floatAnimation}>
            <DashboardMockup />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
