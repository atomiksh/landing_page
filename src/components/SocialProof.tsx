import { motion } from 'framer-motion'

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
      staggerChildren: 0.15,
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

export default function SocialProof() {
  return (
    <section className="py-16 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs md:text-sm text-slate-400 uppercase tracking-[0.2em] font-medium mb-10"
          >
            Seamlessly imports from industry-standard tools
          </motion.p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-8 md:gap-16"
          >
            {integrations.map((tool) => (
              <motion.span
                key={tool.name}
                variants={itemVariants}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className="text-2xl md:text-3xl font-bold text-slate-300 hover:text-slate-400 transition-all cursor-default"
              >
                {tool.name}
              </motion.span>
            ))}
            <motion.span
              variants={itemVariants}
              className="text-2xl md:text-3xl font-medium text-slate-300 italic"
            >
              ...and more
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
