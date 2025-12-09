import { motion } from 'framer-motion'
import { ArrowLeft, FileText } from 'lucide-react'

interface TermsConditionsProps {
  onClose: () => void
}

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

export default function TermsConditions({ onClose }: TermsConditionsProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-slate-50 overflow-y-auto"
    >
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <motion.button
          onClick={onClose}
          whileHover={{ x: -5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-slate-600 hover:text-emerald-600 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Home
        </motion.button>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
              <FileText className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Terms and Conditions</h1>
              <p className="text-slate-500">Last updated: December 9, 2024</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-slate max-w-none">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">1. Agreement to Terms</h2>
              <p className="text-slate-600 mb-4">
                By accessing or using Atomik's services ("Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you disagree with any part of these terms, you may not access the Service.
              </p>
              <p className="text-slate-600">
                These Terms apply to all visitors, users, and others who access or use the Service, including free trial users and paid subscribers.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">2. Description of Service</h2>
              <p className="text-slate-600 mb-4">
                Atomik provides a cloud-based Software-as-a-Service (SaaS) platform for penetration testing report automation, vulnerability management, and security documentation. The Service includes:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>AI-powered report generation</li>
                <li>Vulnerability management tools</li>
                <li>Integration with third-party security scanners</li>
                <li>Collaborative features for security teams</li>
                <li>Export capabilities for various document formats</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">3. User Accounts</h2>
              <p className="text-slate-600 mb-4">
                When you create an account with us, you must provide accurate, complete, and current information. Failure to do so constitutes a breach of the Terms.
              </p>
              <p className="text-slate-600 mb-4">
                You are responsible for safeguarding the password and for all activities that occur under your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized use.
              </p>
              <p className="text-slate-600">
                You may not use as a username the name of another person or entity that is not lawfully available for use, or a name or trademark that is subject to rights of another person or entity without authorization.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">4. Subscription and Payment</h2>
              <p className="text-slate-600 mb-4">
                <strong>Billing:</strong> Subscription fees are billed in advance on a monthly or annual basis, depending on the subscription plan selected at the time of purchase.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Free Trial:</strong> We may offer a free trial period. At the end of the free trial, your account will automatically convert to a paid subscription unless you cancel before the trial ends.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Price Changes:</strong> We reserve the right to modify pricing at any time. Existing subscribers will be notified at least 30 days before any price increase takes effect.
              </p>
              <p className="text-slate-600">
                <strong>Taxes:</strong> All fees are exclusive of taxes, which will be added where applicable.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">5. Acceptable Use</h2>
              <p className="text-slate-600 mb-4">You agree not to use the Service to:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe upon intellectual property rights of others</li>
                <li>Transmit malicious code, viruses, or harmful data</li>
                <li>Attempt to gain unauthorized access to any systems</li>
                <li>Use the Service for unauthorized penetration testing</li>
                <li>Share login credentials with unauthorized parties</li>
                <li>Resell or redistribute the Service without authorization</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">6. Intellectual Property</h2>
              <p className="text-slate-600 mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of Atomik and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              <p className="text-slate-600">
                Your content remains yours. By using our Service, you grant us a limited license to process and store your data solely for the purpose of providing the Service.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">7. Data Security and Privacy</h2>
              <p className="text-slate-600 mb-4">
                We implement industry-standard security measures to protect your data. However, no method of transmission over the Internet is 100% secure. For details on how we handle your data, please refer to our Privacy Policy.
              </p>
              <p className="text-slate-600">
                You are responsible for maintaining the security of your account and for all content uploaded to the Service.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">8. Termination</h2>
              <p className="text-slate-600 mb-4">
                We may terminate or suspend your account immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason at our sole discretion.
              </p>
              <p className="text-slate-600">
                Upon termination, your right to use the Service will cease immediately. You may export your data within 30 days of termination notice.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">9. Limitation of Liability</h2>
              <p className="text-slate-600 mb-4">
                To the maximum extent permitted by law, Atomik shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
              </p>
              <p className="text-slate-600">
                Our total liability for any claims under these Terms shall not exceed the amount you paid us in the twelve (12) months prior to the claim.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">10. Disclaimer of Warranties</h2>
              <p className="text-slate-600">
                The Service is provided "AS IS" and "AS AVAILABLE" without warranties of any kind, either express or implied. We do not warrant that the Service will be uninterrupted, secure, or error-free.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">11. Changes to Terms</h2>
              <p className="text-slate-600">
                We reserve the right to modify these Terms at any time. We will provide notice of material changes by posting the new Terms on this page and updating the "Last updated" date. Your continued use of the Service after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">12. Contact Us</h2>
              <p className="text-slate-600">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="text-emerald-600 font-medium mt-2">legal@atomik.security</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

