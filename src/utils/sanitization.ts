/**
 * Input sanitization utilities for XSS prevention
 * Removes potentially dangerous content from user input
 */

/**
 * Sanitizes text input by removing HTML tags and dangerous characters
 * This prevents XSS attacks while preserving basic text content
 */
export function sanitizeText(input: string): string {
  if (!input) return ''

  return input
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers (onclick, onerror, etc.)
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#x2F;/g, '/')
    .trim()
}

/**
 * Sanitizes email input (more restrictive)
 */
export function sanitizeEmail(email: string): string {
  if (!email) return ''
  // Remove all non-email characters except @, ., -, _, +
  return email
    .replace(/[^a-zA-Z0-9@._+-]/g, '')
    .trim()
    .toLowerCase()
}

/**
 * Sanitizes name input
 */
export function sanitizeName(name: string): string {
  if (!name) return ''
  // Allow letters, spaces, hyphens, apostrophes, and common international characters
  return name
    .replace(/[^a-zA-Z\s\-'àáâãäåæçèéêëìíîïðñòóôõöøùúûüýþÿÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞŸ]/g, '')
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim()
}

/**
 * Sanitizes company name
 */
export function sanitizeCompany(company: string): string {
  if (!company) return ''
  // Allow alphanumeric, spaces, and common business characters
  return company
    .replace(/[<>\"']/g, '') // Remove dangerous characters
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim()
}

/**
 * Sanitizes message content (preserves more formatting but removes scripts)
 */
export function sanitizeMessage(message: string): string {
  if (!message) return ''
  return sanitizeText(message)
    .replace(/\r\n/g, '\n') // Normalize line breaks
    .replace(/\r/g, '\n')
}

/**
 * Sanitizes hash route parameter to prevent XSS in URL
 */
export function sanitizeHash(hash: string): string {
  if (!hash) return ''
  // Only allow alphanumeric, hyphens, underscores, and forward slashes
  return hash.replace(/[^a-zA-Z0-9\-_/]/g, '')
}

