import { motion } from 'framer-motion'
import { ArrowLeft, RefreshCcw, CreditCard, Clock, CheckCircle } from 'lucide-react'

interface RefundPolicyProps {
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

export default function RefundPolicy({ onClose }: RefundPolicyProps) {
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
              <RefreshCcw className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-900">Refund Policy</h1>
              <p className="text-slate-500">Last updated: December 9, 2024</p>
            </div>
          </motion.div>

          {/* Key Highlights */}
          <motion.div 
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-4 mb-8"
          >
            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-200">
              <Clock className="w-8 h-8 text-emerald-600 mb-3" />
              <h3 className="font-semibold text-slate-800 mb-1">14-Day Guarantee</h3>
              <p className="text-sm text-slate-600">Full refund within 14 days of purchase</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <CreditCard className="w-8 h-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-slate-800 mb-1">Easy Process</h3>
              <p className="text-sm text-slate-600">Simple refund request via email</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <CheckCircle className="w-8 h-8 text-purple-600 mb-3" />
              <h3 className="font-semibold text-slate-800 mb-1">No Questions Asked</h3>
              <p className="text-sm text-slate-600">Your satisfaction is our priority</p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="prose prose-slate max-w-none">
            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Our Commitment to You</h2>
              <p className="text-slate-600 mb-4">
                At Atomik, we stand behind our product. We want you to be completely satisfied with your purchase. If you're not happy with our service for any reason, we offer a straightforward refund policy designed with your best interests in mind.
              </p>
              <p className="text-slate-600">
                We believe in building trust with our customers, which is why we've made our refund process as simple and transparent as possible.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">14-Day Money-Back Guarantee</h2>
              <p className="text-slate-600 mb-4">
                <strong>For new subscribers:</strong> If you're not satisfied with Atomik within the first 14 days of your initial paid subscription, you may request a full refund. This applies to both monthly and annual subscription plans.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>What qualifies:</strong>
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>First-time subscribers on their initial billing cycle</li>
                <li>Request made within 14 days of first payment</li>
                <li>Account in good standing (no Terms of Service violations)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">How to Request a Refund</h2>
              <p className="text-slate-600 mb-4">
                To request a refund, simply follow these steps:
              </p>
              <ol className="list-decimal list-inside text-slate-600 space-y-3 ml-4">
                <li>
                  <strong>Email us</strong> at <span className="text-emerald-600">billing@atomik.security</span> with the subject line "Refund Request"
                </li>
                <li>
                  <strong>Include</strong> your account email address and the reason for your refund request (optional but helpful for us to improve)
                </li>
                <li>
                  <strong>Wait for confirmation</strong> — we'll process your request within 2-3 business days
                </li>
                <li>
                  <strong>Receive your refund</strong> — funds will be returned to your original payment method within 5-10 business days
                </li>
              </ol>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Annual Subscription Refunds</h2>
              <p className="text-slate-600 mb-4">
                <strong>Within 14 days:</strong> Full refund of the annual subscription fee.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>After 14 days:</strong> We do not offer prorated refunds for annual subscriptions after the 14-day window. However, you may:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Continue using the service until your subscription period ends</li>
                <li>Cancel auto-renewal to prevent future charges</li>
                <li>Contact us to discuss your specific situation — we review requests on a case-by-case basis</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Monthly Subscription Refunds</h2>
              <p className="text-slate-600 mb-4">
                <strong>Within 14 days of first payment:</strong> Full refund available.
              </p>
              <p className="text-slate-600 mb-4">
                <strong>Subsequent months:</strong> We do not offer refunds for monthly subscriptions after the initial 14-day period. You may cancel your subscription at any time to prevent future charges.
              </p>
              <p className="text-slate-600">
                <strong>Cancellation:</strong> When you cancel, you'll retain access to the service until the end of your current billing period.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">What's Not Covered</h2>
              <p className="text-slate-600 mb-4">
                Refunds may not be available in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>Accounts terminated due to Terms of Service violations</li>
                <li>Requests made after the 14-day refund window</li>
                <li>Users who have previously received a refund from Atomik</li>
                <li>Promotional or discounted subscriptions (unless otherwise stated)</li>
                <li>Add-on services or one-time purchases (evaluated case-by-case)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Free Trial</h2>
              <p className="text-slate-600 mb-4">
                We offer a 14-day free trial for new users. During this trial period:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                <li>No payment information is required to start</li>
                <li>You have full access to Professional plan features</li>
                <li>You can cancel anytime before the trial ends</li>
                <li>If you don't cancel, your subscription will begin and you'll be charged</li>
              </ul>
              <p className="text-slate-600 mt-4">
                We recommend trying our free trial before committing to a paid subscription to ensure Atomik meets your needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Chargebacks</h2>
              <p className="text-slate-600">
                We encourage you to contact us directly for any billing issues before initiating a chargeback with your bank or credit card company. Chargebacks result in additional fees and may lead to account termination. We're committed to resolving any issues quickly and fairly.
              </p>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200 p-8">
              <h2 className="text-xl font-semibold text-slate-800 mb-4">Contact Us</h2>
              <p className="text-slate-600 mb-4">
                If you have any questions about our refund policy or need assistance, please don't hesitate to reach out:
              </p>
              <div className="space-y-2">
                <p className="text-slate-600">
                  <strong>Email:</strong> <span className="text-emerald-600">billing@atomik.security</span>
                </p>
                <p className="text-slate-600">
                  <strong>Response Time:</strong> Within 24 hours on business days
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  )
}

