'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type ConsentPreferences = {
  necessary: boolean
  preferences: boolean
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true, // Always required
    preferences: false,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('cookie-consent')
    
    // Honor Global Privacy Control (GPC)
    const gpc = (navigator as any).globalPrivacyControl
    
    if (!consent) {
      if (gpc === true) {
        // GPC enabled: reject all optional cookies automatically
        saveConsent({
          necessary: true,
          preferences: false,
          analytics: false,
          marketing: false,
        })
      } else {
        // Show banner
        setIsVisible(true)
      }
    }
  }, [])

  const saveConsent = (prefs: ConsentPreferences) => {
    localStorage.setItem('cookie-consent', JSON.stringify(prefs))
    localStorage.setItem('cookie-consent-date', new Date().toISOString())
    
    // Dispatch event for other components to react
    window.dispatchEvent(
      new CustomEvent('cookie-consent-updated', { detail: prefs })
    )
    
    setIsVisible(false)
  }

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true,
    })
  }

  const handleRejectAll = () => {
    saveConsent({
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false,
    })
  }

  const handleSavePreferences = () => {
    saveConsent(preferences)
  }

  if (!isVisible) return null

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-white border-t border-stone-200 shadow-lg">
      <div className="max-w-7xl mx-auto p-6 sm:p-8">
        {!showDetails ? (
          // Simple view
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-medium text-stone-900 mb-2">
                We Value Your Privacy
              </h3>
              <p className="text-sm text-stone-600">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                You can choose which types of cookies to allow.{' '}
                <Link 
                  href="/privacy" 
                  className="underline hover:text-stone-900"
                >
                  Learn more
                </Link>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3 sm:flex-nowrap">
              <button
                onClick={() => setShowDetails(true)}
                className="px-4 py-2 text-sm border border-stone-300 hover:bg-stone-50 transition-colors uppercase tracking-wider"
              >
                Customize
              </button>
              <button
                onClick={handleRejectAll}
                className="px-4 py-2 text-sm border border-stone-300 hover:bg-stone-50 transition-colors uppercase tracking-wider"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 text-sm bg-stone-900 text-white hover:bg-stone-800 transition-colors uppercase tracking-wider"
              >
                Accept All
              </button>
            </div>
          </div>
        ) : (
          // Detailed view
          <div>
            <div className="flex items-start justify-between mb-6">
              <h3 className="text-lg font-medium text-stone-900">
                Cookie Preferences
              </h3>
              <button
                onClick={() => setShowDetails(false)}
                className="text-stone-500 hover:text-stone-900"
                aria-label="Close details"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="space-y-4 mb-6">
              {/* Necessary */}
              <div className="flex items-start justify-between p-4 bg-stone-50 rounded">
                <div className="flex-1 pr-4">
                  <h4 className="font-medium text-stone-900 mb-1">Necessary</h4>
                  <p className="text-sm text-stone-600">
                    Essential for the website to function. Cannot be disabled.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={true}
                    disabled
                    className="w-5 h-5 text-stone-900 border-stone-300 rounded focus:ring-stone-500"
                  />
                </div>
              </div>

              {/* Preferences */}
              <div className="flex items-start justify-between p-4 bg-stone-50 rounded">
                <div className="flex-1 pr-4">
                  <h4 className="font-medium text-stone-900 mb-1">Preferences</h4>
                  <p className="text-sm text-stone-600">
                    Remember your settings and choices for a better experience.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.preferences}
                    onChange={(e) =>
                      setPreferences({ ...preferences, preferences: e.target.checked })
                    }
                    className="w-5 h-5 text-stone-900 border-stone-300 rounded focus:ring-stone-500"
                  />
                </div>
              </div>

              {/* Analytics */}
              <div className="flex items-start justify-between p-4 bg-stone-50 rounded">
                <div className="flex-1 pr-4">
                  <h4 className="font-medium text-stone-900 mb-1">Analytics</h4>
                  <p className="text-sm text-stone-600">
                    Help us understand how visitors interact with our website.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="w-5 h-5 text-stone-900 border-stone-300 rounded focus:ring-stone-500"
                  />
                </div>
              </div>

              {/* Marketing */}
              <div className="flex items-start justify-between p-4 bg-stone-50 rounded">
                <div className="flex-1 pr-4">
                  <h4 className="font-medium text-stone-900 mb-1">Marketing</h4>
                  <p className="text-sm text-stone-600">
                    Used to deliver personalized advertisements relevant to you.
                  </p>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="w-5 h-5 text-stone-900 border-stone-300 rounded focus:ring-stone-500"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={handleRejectAll}
                className="px-6 py-2 text-sm border border-stone-300 hover:bg-stone-50 transition-colors uppercase tracking-wider"
              >
                Reject All
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2 text-sm bg-stone-900 text-white hover:bg-stone-800 transition-colors uppercase tracking-wider"
              >
                Save Preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
