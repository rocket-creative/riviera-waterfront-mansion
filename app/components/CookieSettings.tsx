'use client'

/**
 * CookieSettings Button
 * 
 * Allows users to reopen cookie preferences after initial consent
 * Place this in the footer or privacy page
 */

export default function CookieSettings() {
  const handleOpenSettings = () => {
    // Clear consent to trigger banner again
    localStorage.removeItem('cookie-consent')
    localStorage.removeItem('cookie-consent-date')
    
    // Reload page to show banner
    window.location.reload()
  }

  return (
    <button
      onClick={handleOpenSettings}
      className="text-sm font-light opacity-75 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
    >
      Cookie Settings
    </button>
  )
}
