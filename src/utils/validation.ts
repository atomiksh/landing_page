/**
 * Input validation utilities for security hardening
 * Prevents injection attacks and validates user input
 */

import { getSecurityConfig } from '../config/security'

// Email validation regex (RFC 5322 compliant, simplified)
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Maximum length constraints (can be overridden by config)
export const MAX_LENGTHS = {
  name: 100,
  email: 254, // RFC 5321 limit
  company: 200,
  message: 5000,
} as const

/**
 * Get max length for a field from config or default
 */
function getMaxLength(field: keyof typeof MAX_LENGTHS): number {
  const config = getSecurityConfig()
  return config.maxLengths[field] || MAX_LENGTHS[field]
}

/**
 * Validates email format
 */
export function validateEmail(email: string): boolean {
  if (!email || email.trim().length === 0) {
    return false
  }
  const maxLength = getMaxLength('email')
  if (email.length > maxLength) {
    return false
  }
  return EMAIL_REGEX.test(email.trim())
}

/**
 * Validates text input length
 */
export function validateLength(
  text: string,
  maxLength: number,
  minLength: number = 0
): boolean {
  if (!text) {
    return minLength === 0
  }
  const trimmed = text.trim()
  return trimmed.length >= minLength && trimmed.length <= maxLength
}

/**
 * Validates name field
 */
export function validateName(name: string): boolean {
  return validateLength(name, getMaxLength('name'), 1)
}

/**
 * Validates company field (optional)
 */
export function validateCompany(company: string): boolean {
  if (!company || company.trim().length === 0) {
    return true // Optional field
  }
  return validateLength(company, getMaxLength('company'))
}

/**
 * Validates message field
 */
export function validateMessage(message: string): boolean {
  return validateLength(message, getMaxLength('message'), 1)
}

/**
 * Validates all form fields
 */
export interface FormValidationResult {
  isValid: boolean
  errors: {
    name?: string
    email?: string
    company?: string
    message?: string
  }
}

export function validateFormData(data: {
  name: string
  email: string
  company: string
  message: string
}): FormValidationResult {
  const errors: FormValidationResult['errors'] = {}
  const config = getSecurityConfig()

  // Check if validation is enabled
  if (!config.enableValidation) {
    return { isValid: true, errors: {} }
  }

  if (!validateName(data.name)) {
    errors.name = `Name must be between 1 and ${getMaxLength('name')} characters`
  }

  if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!validateCompany(data.company)) {
    errors.company = `Company name must be less than ${getMaxLength('company')} characters`
  }

  if (!validateMessage(data.message)) {
    errors.message = `Message must be between 1 and ${getMaxLength('message')} characters`
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  }
}

