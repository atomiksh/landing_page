import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Hide SEO content after React hydration (cleaner UX)
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const seoContent = document.getElementById('seo-content');
    if (seoContent) {
      seoContent.style.display = 'none';
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)




