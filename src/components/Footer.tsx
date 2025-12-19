import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const footerLinks = {
  Product: [
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Integrations', href: '#' },
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Contact', href: '#' },
  ],
  Support: [
    { name: 'Help Center', href: '#' },
    { name: 'Status', href: '#' },
  ],
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-200">
      {/* Subtle top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16 grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {/* Brand column */}
          <motion.div variants={itemVariants} className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Logo className="h-10 w-auto brightness-0 invert opacity-90" />
            </div>
            <p className="text-zinc-400 mb-6 max-w-xs leading-relaxed">
              The modern alternative to Dradis and Plextrac. AI-powered penetration testing report automation.
            </p>
            
            {/* Polished X (Twitter) Social Link */}
            <motion.a
              href="https://x.com/atomik_io"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-zinc-900/50 border border-zinc-800 hover:border-indigo-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              {/* X (Twitter) Icon with glow effect */}
              <motion.div
                className="relative"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 fill-indigo-400 group-hover:fill-indigo-300 transition-colors"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <div className="absolute inset-0 bg-indigo-400/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                  @atomik_io
                </span>
                <span className="text-xs text-zinc-400 group-hover:text-zinc-300 transition-colors">
                  Follow for updates
                </span>
              </div>
              <motion.div
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <motion.div 
              key={category}
              variants={itemVariants}
            >
              <h4 className="text-zinc-200 font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-zinc-400 hover:text-zinc-200 transition-colors inline-block text-sm"
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Legal Links Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-zinc-800"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              to="/terms"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-zinc-700">•</span>
            <Link
              to="/refund"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Refund Policy
            </Link>
            <span className="text-zinc-700">•</span>
            <Link
              to="/privacy"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-zinc-800 flex items-center justify-center"
        >
          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} Atomik. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
