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
                Atomik ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
              <p className="text-slate-600">
                By using Atomik, you agree to the collection and use of information in accordance with this policy.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. Information We Collect</h2>
              <p className="text-slate-600 mb-4">
                <strong>Account Information:</strong> When you create an account, we collect your name, email address, and any other information you provide during registration.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Usage Data:</strong> We collect information about how you use our service, including features accessed, time spent, and interactions with the platform.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Content Data:</strong> We store the data you upload or create within Atomik, including projects, findings, reports, and other content you generate.
              </p>
              <p className="text-slate-600">
                <strong>Technical Data:</strong> We automatically collect certain technical information, including IP address, browser type, device information, and usage patterns.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. How We Use Your Information</h2>
              <p className="text-slate-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Provide, maintain, and improve our service</li>
                <li>Process transactions and manage your account</li>
                <li>Send you service-related communications</li>
                <li>Respond to your inquiries and provide customer support</li>
                <li>Detect, prevent, and address technical issues and security threats</li>
                <li>Comply with legal obligations</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. Data Storage and Security</h2>
              <p className="text-slate-600 mb-4">
                We implement industry-standard security measures to protect your data, including encryption in transit and at rest. However, no method of transmission over the Internet or electronic storage is 100% secure.
              </p>
              <p className="text-slate-600">
                Your data is stored on secure servers, and we take reasonable steps to protect it from unauthorized access, disclosure, alteration, or destruction.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-slate-600 mb-4">
                We do not sell your personal information. We may share your information only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>With service providers who assist in operating our platform (under strict confidentiality agreements)</li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
                <li>In connection with a business transfer (merger, acquisition, etc.)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="text-slate-600 mb-4">
                We use cookies and similar tracking technologies to track activity on our service and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier.
              </p>
              <p className="text-slate-600">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">7. Third-Party Services</h2>
              <p className="text-slate-600 mb-4">
                Our service may contain links to third-party websites or services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies.
              </p>
              <p className="text-slate-600">
                We may use third-party services for analytics, payment processing, and other functions. These services have their own privacy policies governing the use of your information.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">8. Your Rights</h2>
              <p className="text-slate-600 mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Request restriction of processing</li>
                <li>Data portability</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-slate-600 mt-4">
                To exercise these rights, please contact us at <a href="mailto:legal@atomik.sh" className="text-emerald-600 hover:underline">legal@atomik.sh</a>.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">9. Data Retention</h2>
              <p className="text-slate-600 mb-4">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
              </p>
              <p className="text-slate-600">
                When you delete your account, we will delete or anonymize your personal information, except where we are required to retain it for legal or regulatory purposes.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">10. Children's Privacy</h2>
              <p className="text-slate-600">
                Our service is not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you become aware that a child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">11. International Data Transfers</h2>
              <p className="text-slate-600">
                Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ. By using our service, you consent to the transfer of your information to these facilities.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-slate-600">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">13. Contact Us</h2>
              <p className="text-slate-600">
                If you have any questions about this Privacy Policy, please contact us at:
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

