/**
 * Cookie consent utilities
 * 
 * Use these functions to check if user has consented to specific cookie categories
 * before loading analytics, marketing scripts, etc.
 */

export type ConsentPreferences = {
  necessary: boolean
  preferences: boolean
  analytics: boolean
  marketing: boolean
}

/**
 * Get current consent preferences from localStorage
 */
export function getConsent(): ConsentPreferences | null {
  if (typeof window === 'undefined') return null
  
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) return null
  
  try {
    return JSON.parse(consent) as ConsentPreferences
  } catch {
    return null
  }
}

/**
 * Check if user has consented to a specific category
 */
export function hasConsent(category: keyof ConsentPreferences): boolean {
  const consent = getConsent()
  if (!consent) return false
  
  return consent[category] === true
}

/**
 * Check if user has consented to analytics
 * Use this before loading Google Analytics, etc.
 */
export function hasAnalyticsConsent(): boolean {
  return hasConsent('analytics')
}

/**
 * Check if user has consented to marketing
 * Use this before loading Facebook Pixel, ad trackers, etc.
 */
export function hasMarketingConsent(): boolean {
  return hasConsent('marketing')
}

/**
 * Check if user has consented to preferences
 */
export function hasPreferencesConsent(): boolean {
  return hasConsent('preferences')
}

/**
 * Listen for consent changes
 * Useful for loading scripts after user updates preferences
 */
export function onConsentChange(callback: (consent: ConsentPreferences) => void): () => void {
  if (typeof window === 'undefined') return () => {}
  
  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<ConsentPreferences>
    callback(customEvent.detail)
  }
  
  window.addEventListener('cookie-consent-updated', handler)
  
  // Return cleanup function
  return () => {
    window.removeEventListener('cookie-consent-updated', handler)
  }
}

/**
 * Example: Load Google Analytics only if user consented
 * 
 * ```tsx
 * 'use client'
 * 
 * import { useEffect } from 'react'
 * import { hasAnalyticsConsent, onConsentChange } from '@/app/lib/consent'
 * 
 * export default function Analytics() {
 *   useEffect(() => {
 *     // Check initial consent
 *     if (hasAnalyticsConsent()) {
 *       loadGoogleAnalytics()
 *     }
 *     
 *     // Listen for consent changes
 *     const cleanup = onConsentChange((consent) => {
 *       if (consent.analytics) {
 *         loadGoogleAnalytics()
 *       }
 *     })
 *     
 *     return cleanup
 *   }, [])
 *   
 *   return null
 * }
 * 
 * function loadGoogleAnalytics() {
 *   // Load GA script...
 * }
 * ```
 */
