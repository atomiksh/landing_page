/**
 * Security utilities for CSRF protection and rate limiting
 */

import { getSecurityConfig } from '../config/security'
import { logRateLimit } from './monitoring'

/**
 * Generates a simple CSRF token (client-side only, for basic protection)
 * Note: For production, this should be generated server-side
 */
export function generateCSRFToken(): string {
  const config = getSecurityConfig()
  if (!config.enableCSRF) {
    return '' // Return empty if CSRF is disabled
  }

  // Generate a random token using crypto API if available
  if (typeof crypto !== 'undefined' && crypto.getRandomValues) {
    const array = new Uint8Array(32)
    crypto.getRandomValues(array)
    return Array.from(array, (byte) => byte.toString(16).padStart(2, '0')).join('')
  }
  // Fallback for older browsers
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

/**
 * Rate limiting implementation (client-side)
 * Stores submission timestamps in sessionStorage
 */
const RATE_LIMIT_KEY = 'atomik_form_submissions'

export interface RateLimitResult {
  allowed: boolean
  retryAfter?: number // seconds until next submission allowed
}

export function checkRateLimit(): RateLimitResult {
  const config = getSecurityConfig()
  
  // If rate limiting is disabled, always allow
  if (!config.enableRateLimiting) {
    return { allowed: true }
  }

  try {
    const stored = sessionStorage.getItem(RATE_LIMIT_KEY)
    const now = Date.now()

    if (!stored) {
      // First submission
      const submissions = [now]
      sessionStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(submissions))
      return { allowed: true }
    }

    const submissions: number[] = JSON.parse(stored)
    // Remove submissions outside the time window
    const recentSubmissions = submissions.filter(
      (timestamp) => now - timestamp < config.rateLimitWindow
    )

    if (recentSubmissions.length >= config.maxSubmissionsPerWindow) {
      // Rate limit exceeded
      const oldestSubmission = Math.min(...recentSubmissions)
      const retryAfter = Math.ceil((config.rateLimitWindow - (now - oldestSubmission)) / 1000)
      logRateLimit(undefined, retryAfter)
      return { allowed: false, retryAfter }
    }

    // Add current submission
    recentSubmissions.push(now)
    sessionStorage.setItem(RATE_LIMIT_KEY, JSON.stringify(recentSubmissions))
    return { allowed: true }
  } catch (error) {
    // If sessionStorage fails, allow submission (graceful degradation)
    console.warn('Rate limit check failed:', error)
    return { allowed: true }
  }
}

/**
 * Clears rate limit data (useful for testing or after successful submission)
 */
export function clearRateLimit(): void {
  try {
    sessionStorage.removeItem(RATE_LIMIT_KEY)
  } catch (error) {
    console.warn('Failed to clear rate limit:', error)
  }
}

