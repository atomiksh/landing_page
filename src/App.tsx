import { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom'
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
import { sanitizeHash } from './utils/sanitization'
import { getSecurityConfig } from './config/security'
import { logInvalidRoute } from './utils/monitoring'

// Valid route paths
const VALID_ROUTES = ['/', '/pricing', '/terms', '/refund', '/privacy']
const VALID_HASH_ANCHORS = ['pricing', 'features', 'faq'] // Valid section IDs for hash navigation

function HomePage({ onContactSalesClick }: { onContactSalesClick: () => void }) {
  const location = useLocation()
  const navigate = useNavigate()
  const config = getSecurityConfig()

  useEffect(() => {
    // Validate and sanitize route
    if (config.enableRouteValidation) {
      const currentPath = location.pathname
      if (!VALID_ROUTES.includes(currentPath)) {
        // Invalid route - redirect to home
        logInvalidRoute(currentPath)
        navigate('/', { replace: true })
        return
      }
    }

    // Handle hash-based scrolling with sanitization
    if (location.hash) {
      const hash = location.hash.substring(1) // Remove #
      
      if (config.enableHashSanitization) {
        const sanitizedHash = sanitizeHash(hash)
        
        // Validate hash against allowed anchors
        if (VALID_HASH_ANCHORS.includes(sanitizedHash)) {
          // Use sanitized hash for querySelector to prevent XSS
          const element = document.querySelector(`#${sanitizedHash}`)
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 100)
          }
        } else if (hash !== sanitizedHash) {
          // Hash was modified by sanitization - remove invalid hash
          navigate(location.pathname, { replace: true })
        }
      } else {
        // Sanitization disabled - still validate against allowed anchors for safety
        if (VALID_HASH_ANCHORS.includes(hash)) {
          const element = document.querySelector(`#${hash}`)
          if (element) {
            setTimeout(() => {
              element.scrollIntoView({ behavior: 'smooth', block: 'start' })
            }, 100)
          }
        }
      }
    }
  }, [location, navigate, config])

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
