/**
 * Security Configuration and Feature Flags
 * 
 * This file allows you to toggle security features on/off for gradual rollout
 * and easy rollback if issues arise.
 */

export interface SecurityConfig {
  // Input Sanitization
  enableSanitization: boolean
  sanitizationLevel: 'permissive' | 'moderate' | 'strict'
  
  // Input Validation
  enableValidation: boolean
  maxLengths: {
    name: number
    email: number
    company: number
    message: number
  }
  
  // Rate Limiting
  enableRateLimiting: boolean
  rateLimitWindow: number // milliseconds
  maxSubmissionsPerWindow: number
  
  // CSRF Protection
  enableCSRF: boolean
  
  // Honeypot
  enableHoneypot: boolean
  
  // Route Security
  enableRouteValidation: boolean
  enableHashSanitization: boolean
  
  // CSP (Content Security Policy)
  enableStrictCSP: boolean
  
  // Monitoring
  enableSecurityLogging: boolean
  logLevel: 'none' | 'errors' | 'warnings' | 'all'
}

/**
 * Default security configuration
 * Start with permissive settings and gradually tighten
 */
export const securityConfig: SecurityConfig = {
  // Input Sanitization - ENABLED by default
  enableSanitization: true,
  sanitizationLevel: 'moderate', // Start with moderate, can be 'permissive' or 'strict'
  
  // Input Validation - ENABLED by default
  enableValidation: true,
  maxLengths: {
    name: 100,
    email: 254,
    company: 200,
    message: 5000,
  },
  
  // Rate Limiting - ENABLED, start lenient (10 per minute)
  enableRateLimiting: true,
  rateLimitWindow: 60 * 1000, // 1 minute
  maxSubmissionsPerWindow: 10, // Start high, reduce to 3 after monitoring
  
  // CSRF Protection - ENABLED
  enableCSRF: true,
  
  // Honeypot - ENABLED
  enableHoneypot: true,
  
  // Route Security - ENABLED
  enableRouteValidation: true,
  enableHashSanitization: true,
  
  // CSP - Start with current permissive CSP
  enableStrictCSP: false, // Will enable after monitoring CSP violations
  
  // Monitoring - ENABLED
  enableSecurityLogging: true,
  logLevel: 'warnings', // Log warnings and errors only
}

/**
 * Get current security configuration
 */
export function getSecurityConfig(): SecurityConfig {
  // In the future, this could read from environment variables or API
  return securityConfig
}

/**
 * Check if a security feature is enabled
 */
export function isFeatureEnabled(feature: keyof SecurityConfig): boolean {
  const config = getSecurityConfig()
  return config[feature] as boolean
}

