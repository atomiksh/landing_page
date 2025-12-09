import { motion } from 'framer-motion'
import { Shield, FileText, AlertTriangle, CheckCircle, Clock, Users } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function DashboardMockup() {
  return (
    <motion.div 
      className="relative mx-auto max-w-5xl"
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Glow effect behind the browser */}
      <motion.div 
        className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-emerald-500/20 rounded-3xl blur-2xl"
        animate={{
          opacity: [0.3, 0.5, 0.3],
          scale: [0.98, 1.02, 0.98],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />
      
      {/* Browser chrome */}
      <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden">
        {/* Browser header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-100 border-b border-slate-200">
          <div className="flex gap-1.5">
            <motion.div 
              className="w-3 h-3 rounded-full bg-red-400"
              whileHover={{ scale: 1.3 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-yellow-400"
              whileHover={{ scale: 1.3 }}
            />
            <motion.div 
              className="w-3 h-3 rounded-full bg-green-400"
              whileHover={{ scale: 1.3 }}
            />
          </div>
          <div className="flex-1 flex justify-center">
            <motion.div 
              className="px-4 py-1 bg-white rounded-md text-sm text-slate-500 border border-slate-200"
              whileHover={{ backgroundColor: '#F1F5F9' }}
            >
              app.atomik.sh
            </motion.div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="flex">
          {/* Sidebar */}
          <div className="w-64 bg-slate-50 border-r border-slate-200 p-4 hidden md:block">
            <div className="flex items-center gap-2 mb-8">
              <motion.div 
                className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              >
                <Shield className="w-5 h-5 text-white" />
              </motion.div>
              <span className="font-semibold text-slate-800">Atomik</span>
            </div>

            <nav className="space-y-1">
              {[
                { icon: FileText, label: 'Projects', active: true },
                { icon: AlertTriangle, label: 'Findings', active: false },
                { icon: Users, label: 'Team', active: false },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium cursor-pointer ${
                    item.active
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </motion.div>
              ))}
            </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 p-6 bg-white">
            <motion.div 
              className="flex items-center justify-between mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-lg font-semibold text-slate-800">Active Projects</h2>
                <p className="text-sm text-slate-500">3 projects in progress</p>
              </motion.div>
              <motion.button 
                variants={itemVariants}
                whileHover={{ scale: 1.05, boxShadow: '0 4px 15px rgba(16,185,129,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-lg hover:bg-emerald-600 transition-colors"
              >
                + New Project
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { label: 'Total Findings', value: '247', change: '+12%', icon: AlertTriangle, color: 'text-orange-500' },
                { label: 'Critical', value: '8', change: '-2', icon: Shield, color: 'text-red-500' },
                { label: 'Completed', value: '15', change: '+3', icon: CheckCircle, color: 'text-emerald-500' },
                { label: 'Avg. Time', value: '2.4h', change: '-45%', icon: Clock, color: 'text-blue-500' },
              ].map((stat, index) => (
                <motion.div 
                  key={stat.label} 
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
                  className="p-4 bg-slate-50 rounded-xl cursor-pointer transition-all"
                >
                  <div className="flex items-center justify-between mb-2">
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      <stat.icon className={`w-5 h-5 ${stat.color}`} />
                    </motion.div>
                    <span className="text-xs font-medium text-emerald-600">{stat.change}</span>
                  </div>
                  <motion.p 
                    className="text-2xl font-bold text-slate-800"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Project list */}
            <motion.div 
              className="space-y-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { name: 'Acme Corp Web App', status: 'In Progress', findings: 42, critical: 3, progress: 65 },
                { name: 'FinTech API Assessment', status: 'Review', findings: 28, critical: 1, progress: 90 },
                { name: 'Healthcare Portal Audit', status: 'Draft', findings: 15, critical: 0, progress: 30 },
              ].map((project, index) => (
                <motion.div
                  key={project.name}
                  variants={itemVariants}
                  whileHover={{ x: 5, boxShadow: '0 4px 15px rgba(0,0,0,0.08)' }}
                  className="flex items-center justify-between p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center"
                      whileHover={{ rotate: [0, -5, 5, 0] }}
                    >
                      <FileText className="w-5 h-5 text-slate-600" />
                    </motion.div>
                    <div>
                      <p className="font-medium text-slate-800">{project.name}</p>
                      <p className="text-sm text-slate-500">
                        {project.findings} findings • {project.critical} critical
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'In Progress'
                          ? 'bg-blue-100 text-blue-700'
                          : project.status === 'Review'
                          ? 'bg-yellow-100 text-yellow-700'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {project.status}
                    </span>
                    <div className="w-24 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${project.progress}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
