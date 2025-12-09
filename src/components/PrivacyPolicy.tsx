import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function PrivacyPolicy() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-slate-50"
    >
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 mb-8 transition-colors inline-flex"
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
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <Shield className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
              <p className="text-slate-500">Last updated: December 9, 2024</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-slate max-w-none">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Introduction</h2>
              <p className="text-slate-600 mb-4">
                This Privacy Policy describes how Atomik ("we," "our," or "us") collects, uses, and shares information when you use our service.
              </p>
              <p className="text-slate-600">
                By using Atomik, you agree to the practices described in this policy.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                We collect information that you provide to us, such as account registration details, and information about how you use our service.
              </p>
              <p className="text-slate-600">
                We may also automatically collect technical information, such as your IP address and browser type, when you access our service.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Provide and maintain our service</li>
                <li>Process your transactions</li>
                <li>Communicate with you about our service</li>
                <li>Respond to your requests</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. Data Security</h2>
              <p className="text-slate-600">
                We take reasonable measures to protect your information. However, no method of transmission over the Internet or electronic storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. Data Sharing</h2>
              <p className="text-slate-600 mb-4">
                We do not sell your personal information. We may share your information with service providers who help us operate our service, or when required by law.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. Cookies</h2>
              <p className="text-slate-600">
                We may use cookies and similar technologies to improve your experience. You can control cookies through your browser settings.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">7. Third-Party Services</h2>
              <p className="text-slate-600">
                Our service may include links to third-party websites or services. We are not responsible for the privacy practices of third parties.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">8. Your Rights</h2>
              <p className="text-slate-600 mb-4">
                You may have certain rights regarding your personal information, such as the right to access, correct, or delete your data. To exercise these rights, please contact us.
              </p>
              <p className="text-slate-600">
                Contact us at <a href="mailto:legal@atomik.sh" className="text-emerald-600 hover:underline">legal@atomik.sh</a> to make a request.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">9. Data Retention</h2>
              <p className="text-slate-600">
                We retain your information for as long as necessary to provide our service and as required by law.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">10. Changes to This Policy</h2>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">11. Contact Us</h2>
              <p className="text-slate-600">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <a href="mailto:legal@atomik.sh" className="text-emerald-600 font-medium mt-2 inline-block hover:underline">
                legal@atomik.sh
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}
