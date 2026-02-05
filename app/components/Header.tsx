'use client';

import Link from 'next/link';
import { useState } from 'react';

const tourSections = [
  { title: 'All Spaces', slug: '' },
  { title: 'Entrance Lobby', slug: 'entrance-lobby' },
  { title: 'Bridal Suite', slug: 'bridal-suite' },
  { title: 'Indoor Ceremony', slug: 'indoor-ceremony' },
  { title: 'Outdoor Ceremony', slug: 'outdoor-ceremony' },
  { title: 'Indoor Cocktail', slug: 'indoor-cocktail' },
  { title: 'Outdoor Cocktail', slug: 'outdoor-cocktail' },
  { title: 'Grand Ballroom', slug: 'main-ballroom' },
  { title: 'Bride & Groom Table', slug: 'sweetheart-table' },
  { title: 'Guest Seating', slug: 'guest-seating' },
  { title: 'Dancefloor', slug: 'dancefloor' },
  { title: 'Entertainment', slug: 'entertainment' },
  { title: 'Top Shelf Bar', slug: 'main-bar' },
  { title: 'Balconies', slug: 'balconies' },
  { title: 'Photo Locations', slug: 'photo-locations' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tourDropdownOpen, setTourDropdownOpen] = useState(false);
  const [mobileTourOpen, setMobileTourOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
      <nav className="mx-auto px-6 sm:px-8 lg:px-12" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="font-cormorant text-xl font-light tracking-widest text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:text-riviera-gold"
            >
              RIVIERA WATERFRONT MANSION
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            <Link 
              href="/"
              className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
            >
              HOME
            </Link>
            
            {/* Virtual Tour Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setTourDropdownOpen(true)}
              onMouseLeave={() => setTourDropdownOpen(false)}
            >
              <button
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2 flex items-center gap-1 pb-2"
                aria-expanded={tourDropdownOpen}
                aria-haspopup="true"
              >
                VIRTUAL TOUR
                <svg 
                  className={`w-4 h-4 transition-transform duration-200 ${tourDropdownOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {tourDropdownOpen && (
                <div className="absolute top-full left-0 w-56 bg-white shadow-xl border border-riviera-neutral z-50">
                  {tourSections.map((section) => (
                    <Link
                      key={section.slug}
                      href={section.slug ? `/tour/${section.slug}` : '/tour'}
                      className="block px-6 py-3 text-sm font-light tracking-wider text-riviera-text hover:bg-riviera-gold hover:text-white transition-colors focus:outline-none focus:bg-riviera-gold focus:text-white"
                    >
                      {section.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link 
              href="/menu"
              className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
            >
              MENU
            </Link>
            <Link 
              href="/rates"
              className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
            >
              RATES
            </Link>
            <Link 
              href="/vendors"
              className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
            >
              VENDORS
            </Link>
            <Link 
              href="/contact"
              className="bg-riviera-gold text-white px-6 py-2 text-sm font-light tracking-wider hover:bg-riviera-text transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
            >
              BOOK YOUR TOUR →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-riviera-text hover:text-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-riviera-neutral">
            <div className="flex flex-col gap-4">
              <Link 
                href="/"
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              
              {/* Mobile Virtual Tour Dropdown */}
              <div>
                <button
                  onClick={() => setMobileTourOpen(!mobileTourOpen)}
                  className="w-full text-left text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-riviera-gold flex items-center justify-between"
                  aria-expanded={mobileTourOpen}
                >
                  VIRTUAL TOUR
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${mobileTourOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileTourOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-2 border-l-2 border-riviera-gold pl-4">
                    {tourSections.map((section) => (
                      <Link
                        key={section.slug}
                        href={section.slug ? `/tour/${section.slug}` : '/tour'}
                        className="text-sm font-light tracking-wider text-riviera-text/80 hover:text-riviera-gold transition-colors py-1 focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setMobileTourOpen(false);
                        }}
                      >
                        {section.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                href="/menu"
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                MENU
              </Link>
              <Link 
                href="/rates"
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                RATES
              </Link>
              <Link 
                href="/vendors"
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                VENDORS
              </Link>
              <Link 
                href="/contact"
                className="bg-riviera-gold text-white px-6 py-3 text-sm font-light tracking-wider hover:bg-riviera-text transition-colors text-center focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                BOOK YOUR TOUR →
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
