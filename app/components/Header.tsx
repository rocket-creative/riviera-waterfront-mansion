'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-riviera-neutral">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="text-xl font-light tracking-widest text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
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
            <Link 
              href="/tour"
              className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
            >
              VIRTUAL TOUR
            </Link>
            <Link 
              href="/menu"
              className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
            >
              MENU
            </Link>
            <Link 
              href="/vendors"
              className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
            >
              VENDORS
            </Link>
            <Link 
              href="/contact"
              className="bg-riviera-gold text-white px-6 py-2 text-sm font-light tracking-wider hover:bg-riviera-dark-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
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
              <Link 
                href="/tour"
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                VIRTUAL TOUR
              </Link>
              <Link 
                href="/menu"
                className="text-sm font-light tracking-wider text-riviera-text hover:text-riviera-gold transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                onClick={() => setMobileMenuOpen(false)}
              >
                MENU
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
                className="bg-riviera-gold text-white px-6 py-3 text-sm font-light tracking-wider hover:bg-riviera-dark-brown transition-colors text-center focus:outline-none focus:ring-2 focus:ring-riviera-gold"
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
