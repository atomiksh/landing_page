import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import ProblemSolution from './components/ProblemSolution'
import Features from './components/Features'
import ProductShowcase from './components/ProductShowcase'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import CTA from './components/CTA'
import Footer from './components/Footer'
import ContactModal from './components/ContactModal'
import TermsConditions from './components/TermsConditions'
import RefundPolicy from './components/RefundPolicy'

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [showTerms, setShowTerms] = useState(false)
  const [showRefund, setShowRefund] = useState(false)

  return (
    <div className="min-h-screen">
      <AnimatePresence>
        {showTerms && (
          <TermsConditions onClose={() => setShowTerms(false)} />
        )}
        {showRefund && (
          <RefundPolicy onClose={() => setShowRefund(false)} />
        )}
      </AnimatePresence>

      {!showTerms && !showRefund && (
        <>
          <Navigation onContactSalesClick={() => setIsContactModalOpen(true)} />
          <main>
            <Hero />
            <ProblemSolution />
            <Features />
            <ProductShowcase />
            <Pricing />
            <FAQ />
            <CTA />
          </main>
          <Footer 
            onTermsClick={() => setShowTerms(true)}
            onRefundClick={() => setShowRefund(true)}
          />
          <ContactModal
            isOpen={isContactModalOpen}
            onClose={() => setIsContactModalOpen(false)}
          />
        </>
      )}
    </div>
  )
}

export default App
