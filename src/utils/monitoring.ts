/**
 * Security Monitoring and Logging Utilities
 * 
 * Logs security events for monitoring and debugging
 * without exposing sensitive information
 */

import { getSecurityConfig } from '../config/security'

type LogLevel = 'error' | 'warn' | 'info' | 'debug'

interface SecurityEvent {
  type: 'rate_limit' | 'validation_failed' | 'sanitization' | 'csrf' | 'honeypot' | 'route_invalid' | 'xss_attempt'
  level: LogLevel
  message: string
  metadata?: Record<string, unknown>
  timestamp: string
}

/**
 * Log security events based on configuration
 */
export function logSecurityEvent(
  type: SecurityEvent['type'],
  level: LogLevel,
  message: string,
  metadata?: Record<string, unknown>
): void {
  const config = getSecurityConfig()
  
  if (!config.enableSecurityLogging) {
    return
  }

  // Check log level
  if (config.logLevel === 'none') {
    return
  }

  const logLevels: LogLevel[] = ['error', 'warn', 'info', 'debug']
  let configLevel: LogLevel = 'error'
  
  if (config.logLevel === 'all') {
    configLevel = 'debug'
  } else if (config.logLevel === 'warnings') {
    configLevel = 'warn'
  } else if (config.logLevel === 'errors') {
    configLevel = 'error'
  }

  const shouldLog = logLevels.indexOf(level) <= logLevels.indexOf(configLevel)
  if (!shouldLog) {
    return
  }

  const event: SecurityEvent = {
    type,
    level,
    message,
    metadata: sanitizeMetadata(metadata),
    timestamp: new Date().toISOString(),
  }

  // Log to console (in production, this could go to a logging service)
  switch (level) {
    case 'error':
      console.error(`[Security] ${message}`, event)
      break
    case 'warn':
      console.warn(`[Security] ${message}`, event)
      break
    case 'info':
      console.info(`[Security] ${message}`, event)
      break
    case 'debug':
      console.debug(`[Security] ${message}`, event)
      break
  }

  // In production, you could send to a logging service:
  // sendToLoggingService(event)
}

/**
 * Sanitize metadata to prevent logging sensitive information
 */
function sanitizeMetadata(metadata?: Record<string, unknown>): Record<string, unknown> | undefined {
  if (!metadata) return undefined

  const sanitized: Record<string, unknown> = {}
  const sensitiveKeys = ['password', 'token', 'apiKey', 'secret', 'email', 'creditCard', 'ssn']

  for (const [key, value] of Object.entries(metadata)) {
    const lowerKey = key.toLowerCase()
    if (sensitiveKeys.some(sk => lowerKey.includes(sk))) {
      sanitized[key] = '[REDACTED]'
    } else if (typeof value === 'string' && value.length > 100) {
      sanitized[key] = value.substring(0, 100) + '...'
    } else {
      sanitized[key] = value
    }
  }

  return sanitized
}

/**
 * Log rate limit events
 */
export function logRateLimit(ip?: string, retryAfter?: number): void {
  logSecurityEvent(
    'rate_limit',
    'warn',
    'Rate limit exceeded',
    { ip, retryAfter }
  )
}

/**
 * Log validation failures
 */
export function logValidationFailure(field: string, reason: string): void {
  logSecurityEvent(
    'validation_failed',
    'info',
    `Validation failed for field: ${field}`,
    { field, reason }
  )
}

/**
 * Log sanitization events (when content is modified)
 */
export function logSanitization(originalLength: number, sanitizedLength: number, field: string): void {
  if (originalLength !== sanitizedLength) {
    logSecurityEvent(
      'sanitization',
      'info',
      `Input sanitized: ${field}`,
      { field, originalLength, sanitizedLength }
    )
  }
}

/**
 * Log XSS attempt detection
 */
export function logXSSAttempt(input: string, field: string): void {
  logSecurityEvent(
    'xss_attempt',
    'warn',
    `Potential XSS attempt detected in field: ${field}`,
    { field, inputLength: input.length }
  )
}

/**
 * Log honeypot triggers
 */
export function logHoneypotTrigger(): void {
  logSecurityEvent(
    'honeypot',
    'warn',
    'Bot detected: honeypot field was filled',
    {}
  )
}

/**
 * Log invalid route access
 */
export function logInvalidRoute(route: string): void {
  logSecurityEvent(
    'route_invalid',
    'info',
    `Invalid route accessed: ${route}`,
    { route }
  )
}

/**
 * Log CSRF token validation
 */
export function logCSRFValidation(success: boolean): void {
  if (!success) {
    logSecurityEvent(
      'csrf',
      'warn',
      'CSRF token validation failed',
      {}
    )
  }
}

/**
 * Track form submission metrics (for monitoring)
 */
export function trackFormSubmission(success: boolean, duration: number): void {
  const config = getSecurityConfig()
  if (!config.enableSecurityLogging) return

  logSecurityEvent(
    'validation_failed', // Reusing type for metrics
    success ? 'info' : 'error',
    `Form submission ${success ? 'succeeded' : 'failed'}`,
    { success, duration }
  )
}

