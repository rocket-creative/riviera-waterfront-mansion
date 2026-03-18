'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const tourSections = [
  { title: 'All Spaces', slug: '' },
  { title: 'Entrance Lobby', slug: 'entrance-lobby' },
  { title: 'Bridal Suite', slug: 'bridal-suite' },
  { title: 'Indoor Ceremony', slug: 'indoor-ceremony' },
  { title: 'Outdoor Ceremony', slug: 'outdoor-ceremony' },
  { title: 'Indoor Cocktail', slug: 'indoor-cocktail' },
  { title: 'Outdoor Cocktail', slug: 'outdoor-cocktail' },
  { title: 'Grand Ballroom', slug: 'main-ballroom' },
  { title: 'Sweetheart Table', slug: 'sweetheart-table' },
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)]">
      <nav className="mx-auto px-6 sm:px-8 lg:px-12" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center gap-3 hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2"
              aria-label="Riviera Waterfront Mansion — home"
            >
              <Image
                src="/rw-mansion-logo-circular.svg"
                alt=""
                width={48}
                height={48}
                className="flex-shrink-0"
                aria-hidden="true"
              />
              <span className="font-cormorant text-xl font-light tracking-widest text-riviera-text">
                RIVIERA WATERFRONT MANSION
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link 
              href="/"
              className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2"
            >
              HOME
            </Link>
            
            <Link 
              href="/rates"
              className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2"
            >
              RATES
            </Link>
            
            {/* Virtual Tour Dropdown */}
            <div 
              className="relative py-2 -my-2"
              onMouseEnter={() => setTourDropdownOpen(true)}
              onMouseLeave={() => setTourDropdownOpen(false)}
            >
              <button
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 flex items-center gap-1"
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
              className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2"
            >
              MENU
            </Link>
            <Link 
              href="/vendors"
              className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2"
            >
              VENDORS
            </Link>
            <Link 
              href="/wedding-brochure"
              className="border border-riviera-gold text-riviera-gold px-5 py-2 text-sm font-light tracking-wider hover:bg-riviera-gold hover:text-white transition-all whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2"
            >
              WEDDING BROCHURE
            </Link>
            <Link 
              href="/contact"
              className="bg-riviera-gold text-white px-6 py-2 text-sm font-light tracking-wider hover:bg-riviera-text transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2"
            >
              BOOK YOUR TOUR →
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] -mr-2 text-riviera-text hover:text-riviera-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold select-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
          <div
            className="lg:hidden py-4 border-t border-riviera-neutral"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="flex flex-col select-none">
              <Link 
                href="/"
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors min-h-[44px] flex items-center border-b border-riviera-neutral/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                HOME
              </Link>
              
              <Link 
                href="/rates"
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors min-h-[44px] flex items-center border-b border-riviera-neutral/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                RATES
              </Link>
              
              {/* Mobile Virtual Tour Dropdown */}
              <div className="border-b border-riviera-neutral/50">
                <button
                  onClick={() => setMobileTourOpen(!mobileTourOpen)}
                  className="w-full text-left text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors min-h-[44px] flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold"
                  aria-expanded={mobileTourOpen}
                >
                  VIRTUAL TOUR
                  <svg 
                    className={`w-4 h-4 transition-transform duration-200 ${mobileTourOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileTourOpen && (
                  <div className="mb-2 ml-4 flex flex-col gap-1 border-l-2 border-riviera-gold pl-4">
                    {tourSections.map((section) => (
                      <Link
                        key={section.slug}
                        href={section.slug ? `/tour/${section.slug}` : '/tour'}
                        className="text-sm font-light tracking-wider text-riviera-text/80 hover:text-riviera-gold transition-colors min-h-[44px] flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold"
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
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors min-h-[44px] flex items-center border-b border-riviera-neutral/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                MENU
              </Link>
              <Link 
                href="/vendors"
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors min-h-[44px] flex items-center border-b border-riviera-neutral/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                VENDORS
              </Link>
              <div className="flex flex-col gap-3 pt-4">
                <Link 
                  href="/wedding-brochure"
                  className="border border-riviera-gold text-riviera-gold px-6 min-h-[44px] flex items-center justify-center text-sm font-light tracking-wider hover:bg-riviera-gold hover:text-white transition-all text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  WEDDING BROCHURE
                </Link>
                <Link 
                  href="/contact"
                  className="bg-riviera-gold text-white px-6 min-h-[44px] flex items-center justify-center text-sm font-light tracking-wider hover:bg-riviera-text transition-colors text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  BOOK YOUR TOUR →
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
