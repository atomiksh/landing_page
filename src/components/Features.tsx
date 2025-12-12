import { motion } from 'framer-motion'
import { 
  LayoutDashboard, 
  Users, 
  FolderPlus, 
  Shield,
  Palette,
  FileText,
  Zap,
  Brain
} from 'lucide-react'

const features = [
  {
    title: 'Productivity Dashboard',
    description: 'Access all your important data at a glance. Track projects, findings, and deadlines from a single powerful dashboard.',
    icon: LayoutDashboard,
    size: 'large',
    preview: (
      <div className="mt-4 p-4 bg-slate-50 rounded-lg">
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: 'Active Projects', value: '12' },
            { label: 'Findings', value: '247' },
            { label: 'Reports Sent', value: '34' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-white p-3 rounded-lg border border-slate-200 text-center"
              whileHover={{ y: -2 }}
            >
              <p className="text-2xl font-bold text-slate-800">{stat.value}</p>
              <p className="text-xs text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Client & Project CRM',
    description: 'Manage all your clients and projects in a beautiful CRM-style view. Keep everything organized in one place.',
    icon: Users,
    size: 'medium',
    preview: (
      <div className="mt-4 space-y-2">
        {['Acme Corp', 'TechStart Inc', 'SecureBank'].map((client, i) => (
          <motion.div 
            key={client}
            className="flex items-center gap-3 p-2 bg-slate-50 rounded-lg"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs">
              {client.charAt(0)}
            </div>
            <span className="text-sm text-slate-700">{client}</span>
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: 'Auto Report Structure',
    description: 'Add a project and Atomik automatically creates the complete report structure. Send professional reports in no time.',
    icon: FolderPlus,
    size: 'medium',
    preview: (
      <div className="mt-4 p-3 bg-slate-50 rounded-lg">
        <div className="space-y-1.5 text-xs">
          {['Executive Summary', 'Methodology', 'Findings', 'Recommendations'].map((section, i) => (
            <motion.div
              key={section}
              className="flex items-center gap-2 text-slate-600"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-4 h-4 rounded bg-slate-200 flex items-center justify-center">
                <span className="text-slate-500 text-[10px]">✓</span>
              </div>
              {section}
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'OWASP Templates Library',
    description: 'Pre-built database of OWASP Top 10 vulnerability templates for Web, Mobile, API and LLM. Add, edit, or create your own.',
    icon: Shield,
    size: 'large',
    preview: (
      <div className="mt-4 flex flex-wrap gap-2">
        {['Web', 'Mobile', 'API', 'LLM'].map((type, i) => (
          <motion.span
            key={type}
            className="px-4 py-2 bg-slate-100 text-slate-600 rounded-full text-sm font-medium border border-slate-200 hover:bg-slate-200 transition-colors"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: 'spring' }}
          >
            {type}
          </motion.span>
        ))}
      </div>
    ),
  },
  {
    title: 'AI-Powered Editor',
    description: 'No time to write? Generate Executive Narratives, Findings Descriptions, Remediation and References with AI. Focus on testing, not writing.',
    icon: Brain,
    size: 'large',
    preview: (
      <div className="mt-4 p-4 bg-slate-900 rounded-lg font-mono text-xs text-slate-300 overflow-hidden">
        <div className="flex items-center gap-2 mb-3">
          <motion.div 
            className="w-3 h-3 rounded-full bg-emerald-500"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-emerald-400">AI generating narrative...</span>
        </div>
        <motion.div 
          className="space-y-1 opacity-70"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.7 }}
          viewport={{ once: true }}
        >
          <p><span className="text-slate-500">→ </span>Executive Summary</p>
          <p><span className="text-slate-500">→ </span>Finding Description</p>
          <p><span className="text-slate-500">→ </span>Remediation Steps</p>
          <p><span className="text-slate-500">→ </span>References</p>
        </motion.div>
      </div>
    ),
  },
  {
    title: 'Custom Branding',
    description: 'Add your own branding for a professional look. Make your reports look premium and expensive.',
    icon: Palette,
    size: 'small',
  },
  {
    title: 'Premium PDF Export',
    description: 'Export stunning PDFs with elegant templates. Coming Soon: Template Store to adjust the aesthetic to match each client\'s style.',
    icon: FileText,
    size: 'small',
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
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
}

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-6"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            >
              <Zap className="w-4 h-4 text-slate-500" />
            </motion.div>
            <span className="text-sm font-medium text-slate-600">Powerful Features</span>
          </motion.div>
          <h2 className="section-title mb-4">
            Everything You Need to<br />Ship Reports Faster
          </h2>
          <p className="section-subtitle">
            Built by pentesters, for pentesters. Focus on testing, not paperwork.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { type: 'spring', stiffness: 400 }
              }}
              className={`group relative bg-white rounded-2xl border border-slate-200 p-6 cursor-pointer overflow-hidden hover:border-slate-300 hover:shadow-lg transition-all duration-300 ${
                feature.size === 'large' ? 'lg:col-span-2' : ''
              }`}
            >
              {/* Hover glow */}
              <motion.div 
                className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(to right, rgba(100,116,139,0.05), rgba(100,116,139,0.1))',
                }}
              />
              
              <div className="relative">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-6 h-6 text-slate-600" />
                </motion.div>
                
                <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-slate-900 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {feature.description}
                </p>
                
                {feature.preview && (
                  <div className="relative">
                    {feature.preview}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
