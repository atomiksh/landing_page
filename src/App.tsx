import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
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
import PrivacyPolicy from './components/PrivacyPolicy'

function HomePage({ onContactSalesClick }: { onContactSalesClick: () => void }) {
  const location = useLocation()

  useEffect(() => {
    // Handle hash-based scrolling
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 100)
      }
    }
  }, [location])

  return (
    <>
      <Navigation onContactSalesClick={onContactSalesClick} />
      <main>
        <Hero />
        <ProblemSolution />
        <Features />
        <ProductShowcase />
        <Pricing />
        <FAQ onContactClick={onContactSalesClick} />
        <CTA />
      </main>
    </>
  )
}

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage onContactSalesClick={() => setIsContactModalOpen(true)} />
            } 
          />
          <Route 
            path="/pricing" 
            element={
              <HomePage onContactSalesClick={() => setIsContactModalOpen(true)} />
            } 
          />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="/refund" element={<RefundPolicy />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </Router>
  )
}

export default App
