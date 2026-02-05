import type { Metadata } from 'next';
import { Cormorant_Garamond, Lato } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rivierawaterfrontmansion.com'),
  title: 'Long Island Waterfront Wedding Venue | Riviera Waterfront Mansion Massapequa NY',
  description: 'Premier Long Island waterfront wedding venue in Massapequa, NY. Historic mansion with stunning water views, elegant grand ballroom, indoor and outdoor ceremony options, and chef inspired Continental catering. Third generation family owned and operated since 1947. Accommodates 150 to 350 guests.',
  keywords: 'Long Island wedding venue, Massapequa wedding venue, waterfront wedding venue NY, Long Island waterfront weddings, historic wedding venue, outdoor wedding ceremony Long Island, indoor wedding venue, wedding venues near me, Long Island wedding catering, elegant wedding venue NY, waterfront wedding reception, Massapequa NY weddings',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com'
  },
  openGraph: {
    title: 'Long Island Waterfront Wedding Venue | Riviera Waterfront Mansion',
    description: 'Premier Long Island waterfront wedding venue in Massapequa, NY. Historic mansion with stunning water views, elegant ballroom, indoor and outdoor ceremony options, and exceptional Continental catering. Family owned since 1947.',
    url: 'https://www.rivierawaterfrontmansion.com',
    siteName: 'Riviera Waterfront Mansion',
    images: [
      {
        url: 'https://www.rivierawaterfrontmansion.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Riviera Waterfront Mansion Long Island waterfront wedding venue at sunset in Massapequa NY'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Long Island Waterfront Wedding Venue | Riviera Waterfront Mansion',
    description: 'Premier Long Island waterfront wedding venue in Massapequa, NY. Historic mansion with stunning water views, elegant ballroom, and indoor outdoor ceremony options.',
    images: ['https://www.rivierawaterfrontmansion.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification_token',
  },
  category: 'Wedding Venue',
  classification: 'Wedding Venue, Event Space, Banquet Hall',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${cormorant.variable} ${lato.variable}`}>
      <body className="antialiased bg-[#F5F3F0] font-lato">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-white focus:p-4 focus:z-50 focus:ring-2 focus:ring-riviera-gold"
        >
          Skip to main content
        </a>
        
        {/* Magazine-style container */}
        <div className="min-h-screen">
          <div className="max-w-[1440px] mx-auto bg-white min-h-screen shadow-sm">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
