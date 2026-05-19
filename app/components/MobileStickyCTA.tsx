'use client';

import Link from 'next/link';

export default function MobileStickyCTA() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="grid grid-cols-2 bg-riviera-text">
        <a
          href="tel:+15165415020"
          className="flex items-center justify-center gap-2 py-4 text-white text-xs font-light tracking-widest border-r border-white/20 hover:bg-white/10 active:bg-white/20 transition-colors min-h-[56px]"
          aria-label="Call Riviera Waterfront Mansion"
        >
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          CALL US
        </a>
        <Link
          href="/wedding-pricing"
          className="flex items-center justify-center gap-2 py-4 text-white text-xs font-light tracking-widest bg-riviera-gold hover:bg-riviera-gold/90 active:bg-riviera-gold/80 transition-colors min-h-[56px]"
          aria-label="Download the Riviera Waterfront Mansion welcome brochure"
        >
          <svg
            className="w-4 h-4 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          GET BROCHURE
        </Link>
      </div>
    </div>
  );
}
