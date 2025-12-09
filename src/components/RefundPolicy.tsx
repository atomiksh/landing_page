import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, RefreshCcw } from 'lucide-react'

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

export default function RefundPolicy() {
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
              <RefreshCcw className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Refund Policy</h1>
              <p className="text-slate-500">Last updated: December 9, 2024</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-slate max-w-none">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Refund Policy</h2>
              <p className="text-slate-600 mb-4">
                This Refund Policy describes the circumstances under which refunds may be available for Atomik subscriptions.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">14-Day Refund Period</h2>
              <p className="text-slate-600 mb-4">
                If you are not satisfied with Atomik within the first 14 days of your initial paid subscription, you may request a full refund. This applies to both monthly and annual subscription plans.
              </p>
              <p className="text-slate-600">
                Refund requests must be made within 14 days of your first payment. Refunds are not available after this period.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">How to Request a Refund</h2>
              <p className="text-slate-600 mb-4">
                To request a refund, please contact us at <a href="mailto:legal@atomik.sh" className="text-emerald-600 hover:underline">legal@atomik.sh</a> with the subject line "Refund Request" and include:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Your account email address</li>
                <li>The reason for your refund request</li>
              </ul>
              <p className="text-slate-600 mt-4">
                We will review your request and process refunds as appropriate.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Annual Subscriptions</h2>
              <p className="text-slate-600 mb-4">
                <strong>Within 14 days:</strong> Full refund available.
              </p>
              <p className="text-slate-600">
                <strong>After 14 days:</strong> Refunds are not available for annual subscriptions after the 14-day period. You may cancel your subscription to prevent future renewals.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Monthly Subscriptions</h2>
              <p className="text-slate-600 mb-4">
                <strong>Within 14 days of first payment:</strong> Full refund available.
              </p>
              <p className="text-slate-600">
                <strong>Subsequent months:</strong> Refunds are not available for monthly subscriptions after the initial 14-day period. You may cancel your subscription at any time to prevent future charges.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Refund Processing</h2>
              <p className="text-slate-600">
                Approved refunds will be processed and returned to your original payment method. Processing times may vary depending on your payment provider.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Non-Refundable Items</h2>
              <p className="text-slate-600 mb-4">
                Refunds may not be available in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Requests made after the 14-day refund period</li>
                <li>Accounts terminated due to Terms of Service violations</li>
                <li>Promotional or discounted subscriptions (unless otherwise stated)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Cancellation</h2>
              <p className="text-slate-600">
                You may cancel your subscription at any time. When you cancel, you will retain access to the service until the end of your current billing period. Cancellation does not entitle you to a refund for the current billing period.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about our refund policy, please contact us at:
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
