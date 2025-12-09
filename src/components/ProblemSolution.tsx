import { motion } from 'framer-motion'
import { X, Check, Sparkles } from 'lucide-react'

const comparisons = [
  {
    before: 'Hours writing reports manually',
    after: 'Auto-generate from findings',
  },
  {
    before: 'Inconsistent formatting',
    after: 'Branded templates every time',
  },
  {
    before: 'Copy-pasting evidence',
    after: 'Drag & drop screenshots',
  },
  {
    before: 'No client visibility',
    after: 'Live collaboration & status',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
}

export default function ProblemSolution() {
  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-20 left-10 w-72 h-72 rounded-full bg-red-200 blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-emerald-200 blur-3xl"
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
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm mb-6"
          >
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-slate-600">Transform Your Workflow</span>
          </motion.div>
          <h2 className="section-title mb-4">
            Stop Wasting Time on Reports
          </h2>
          <p className="section-subtitle">
            See how Atomik transforms your security reporting workflow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative"
          >
            <motion.div 
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-subtle h-full"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <motion.div 
                  className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <X className="w-5 h-5 text-red-500" />
                </motion.div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-800">Before Atomik</h3>
                  <p className="text-sm text-slate-500">The old way</p>
                </div>
              </div>

              <motion.ul 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-5"
              >
                {comparisons.map((item, index) => (
                  <motion.li
                    key={index}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3"
                  >
                    <motion.div 
                      className="mt-0.5 w-6 h-6 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.2, backgroundColor: '#FEE2E2' }}
                    >
                      <X className="w-4 h-4 text-red-400" />
                    </motion.div>
                    <span className="text-slate-600">{item.before}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
            className="relative"
          >
            <motion.div 
              className="bg-white rounded-2xl border-2 border-emerald-200 p-8 shadow-subtle h-full relative overflow-hidden"
              whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(16,185,129,0.15)' }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Animated glow effect */}
              <motion.div 
                className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-full blur-3xl"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Check className="w-5 h-5 text-emerald-600" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-800">With Atomik</h3>
                    <p className="text-sm text-emerald-600 font-medium">The new standard</p>
                  </div>
                </div>

                <motion.ul 
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-5"
                >
                  {comparisons.map((item, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div 
                        className="mt-0.5 w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0"
                        whileHover={{ scale: 1.2, backgroundColor: '#D1FAE5' }}
                      >
                        <Check className="w-4 h-4 text-emerald-600" />
                      </motion.div>
                      <span className="text-slate-700 font-medium">{item.after}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
