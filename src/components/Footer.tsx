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
    <footer className="bg-gradient-to-b from-emerald-950 to-emerald-950/95 text-emerald-100/70">
      {/* Subtle top border gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      
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
            <p className="text-emerald-100/60 mb-6 max-w-xs leading-relaxed">
              AI-powered penetration testing report automation. Ship reports faster, focus on what matters.
            </p>
            
            {/* Polished X (Twitter) Social Link */}
            <motion.a
              href="https://x.com/atomiksh"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-900/50 to-emerald-800/30 border border-emerald-700/30 hover:border-emerald-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              {/* X (Twitter) Icon with glow effect */}
              <motion.div
                className="relative"
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.4 }}
              >
                <svg 
                  viewBox="0 0 24 24" 
                  className="w-5 h-5 fill-emerald-400 group-hover:fill-emerald-300 transition-colors"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <div className="absolute inset-0 bg-emerald-400/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-emerald-200 group-hover:text-emerald-100 transition-colors">
                  @atomiksh
                </span>
                <span className="text-xs text-emerald-400/60 group-hover:text-emerald-400/80 transition-colors">
                  Follow for updates
                </span>
              </div>
              <motion.div
                className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg className="w-4 h-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              <h4 className="text-emerald-100 font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5 }}
                      className="text-emerald-100/50 hover:text-emerald-300 transition-colors inline-block text-sm"
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
          className="py-6 border-t border-emerald-800/30"
        >
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <Link
              to="/terms"
              className="text-emerald-100/50 hover:text-emerald-300 transition-colors"
            >
              Terms & Conditions
            </Link>
            <span className="text-emerald-800/50">•</span>
            <Link
              to="/refund"
              className="text-emerald-100/50 hover:text-emerald-300 transition-colors"
            >
              Refund Policy
            </Link>
            <span className="text-emerald-800/50">•</span>
            <a
              href="#"
              className="text-emerald-100/50 hover:text-emerald-300 transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-6 border-t border-emerald-800/30 flex items-center justify-center"
        >
          <p className="text-sm text-emerald-100/40">
            © {new Date().getFullYear()} Atomik. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
