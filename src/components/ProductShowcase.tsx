import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FolderKanban, AlertCircle, FileText, MessageSquare } from 'lucide-react'

const tabs = [
  {
    id: 'projects',
    label: 'Manage Projects',
    icon: FolderKanban,
    description: 'Organize all your penetration testing engagements in one place with powerful project management.',
  },
  {
    id: 'findings',
    label: 'Add Findings',
    icon: AlertCircle,
    description: 'Document vulnerabilities with CVSS scoring, evidence attachments, and AI-assisted descriptions.',
  },
  {
    id: 'reports',
    label: 'Generate Reports',
    icon: FileText,
    description: 'Export professional, branded reports in PDF, DOCX, or HTML with one click.',
  },
  {
    id: 'collaborate',
    label: 'Collaborate',
    icon: MessageSquare,
    description: 'Work together with your team and clients through comments, status updates, and secure sharing.',
  },
]

const mockups: Record<string, React.ReactNode> = {
  projects: <ProjectsMockup />,
  findings: <FindingsMockup />,
  reports: <ReportsMockup />,
  collaborate: <CollaborateMockup />,
}

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState('projects')

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title mb-4">See Atomik in Action</h2>
          <p className="section-subtitle">
            Explore how Atomik streamlines every step of your security reporting workflow
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Tab description */}
        <AnimatePresence mode="wait">
          <motion.p
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="text-center text-slate-500 mb-8 max-w-2xl mx-auto"
          >
            {tabs.find((t) => t.id === activeTab)?.description}
          </motion.p>
        </AnimatePresence>

        {/* Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent z-10 pointer-events-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
            >
              {mockups[activeTab]}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

function ProjectsMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">All Projects</h3>
          <button className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-lg">
            + New Project
          </button>
        </div>
      </div>
      <div className="p-6 space-y-4">
        {[
          { name: 'Acme Corp - Web Application', status: 'Active', progress: 75, findings: 42 },
          { name: 'FinServ API Assessment', status: 'Review', progress: 95, findings: 28 },
          { name: 'Healthcare Portal - Q4', status: 'Draft', progress: 25, findings: 8 },
        ].map((project) => (
          <div key={project.name} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
            <div>
              <p className="font-medium text-slate-800">{project.name}</p>
              <p className="text-sm text-slate-500">{project.findings} findings</p>
            </div>
            <div className="flex items-center gap-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                project.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                project.status === 'Review' ? 'bg-yellow-100 text-yellow-700' :
                'bg-slate-100 text-slate-600'
              }`}>
                {project.status}
              </span>
              <div className="w-32 h-2 bg-slate-200 rounded-full">
                <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${project.progress}%` }} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function FindingsMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">Add New Finding</h3>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-slate-600 text-sm font-medium rounded-lg border border-slate-200">
              Cancel
            </button>
            <button className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-lg">
              Save Finding
            </button>
          </div>
        </div>
      </div>
      <div className="p-6 grid md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input type="text" className="w-full px-4 py-2 border border-slate-200 rounded-lg" value="SQL Injection in Login Form" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Severity</label>
            <div className="flex gap-2">
              {['Critical', 'High', 'Medium', 'Low'].map((sev) => (
                <button key={sev} className={`px-3 py-1.5 rounded-lg text-sm font-medium ${
                  sev === 'Critical' ? 'bg-red-100 text-red-700 ring-2 ring-red-500' : 'bg-slate-100 text-slate-600'
                }`}>
                  {sev}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">CVSS Score</label>
            <div className="flex items-center gap-3">
              <input type="text" className="w-20 px-4 py-2 border border-slate-200 rounded-lg text-center font-bold" value="9.8" readOnly />
              <div className="flex-1 h-2 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full" />
            </div>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
          <textarea className="w-full h-40 px-4 py-2 border border-slate-200 rounded-lg text-sm" readOnly value="A SQL injection vulnerability was identified in the login form at /api/auth/login. An attacker can bypass authentication by injecting malicious SQL..." />
        </div>
      </div>
    </div>
  )
}

function ReportsMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">Export Report</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {[
            { format: 'PDF', icon: '📄', desc: 'Best for clients' },
            { format: 'DOCX', icon: '📝', desc: 'Editable format' },
            { format: 'HTML', icon: '🌐', desc: 'Web viewing' },
          ].map((option) => (
            <button key={option.format} className={`p-4 rounded-xl border-2 text-left transition-all ${
              option.format === 'PDF' ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-slate-300'
            }`}>
              <span className="text-2xl mb-2 block">{option.icon}</span>
              <p className="font-semibold text-slate-800">{option.format}</p>
              <p className="text-sm text-slate-500">{option.desc}</p>
            </button>
          ))}
        </div>
        <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl">
          <div>
            <p className="font-medium text-slate-800">Include Executive Summary</p>
            <p className="text-sm text-slate-500">AI-generated overview for stakeholders</p>
          </div>
          <div className="w-12 h-6 bg-emerald-500 rounded-full relative">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full" />
          </div>
        </div>
      </div>
    </div>
  )
}

function CollaborateMockup() {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
      <div className="p-6 border-b border-slate-100">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-slate-800">Team Activity</h3>
          <button className="px-4 py-2 bg-emerald-500 text-white text-sm font-medium rounded-lg">
            + Invite Member
          </button>
        </div>
      </div>
      <div className="p-6 space-y-4">
        {[
          { user: 'Sarah Chen', action: 'added a finding', target: 'XSS in Comments', time: '2 min ago', avatar: '👩‍💼' },
          { user: 'Mike Ross', action: 'updated status to', target: 'In Review', time: '15 min ago', avatar: '👨‍💻' },
          { user: 'Client: John', action: 'left a comment on', target: 'SQL Injection', time: '1 hour ago', avatar: '👤' },
        ].map((activity, i) => (
          <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
            <span className="text-2xl">{activity.avatar}</span>
            <div className="flex-1">
              <p className="text-slate-800">
                <span className="font-medium">{activity.user}</span> {activity.action}{' '}
                <span className="font-medium text-emerald-600">{activity.target}</span>
              </p>
              <p className="text-sm text-slate-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


