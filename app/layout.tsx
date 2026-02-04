import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rivierawaterfrontmansion.com'),
  title: 'Stunning Waterfront Wedding Venue | Riviera Waterfront Mansion',
  description: 'Premier waterfront wedding venue in Massapequa, NY. Historic mansion with stunning water views, elegant ballroom, and indoor/outdoor ceremony options. Third generation family owned since 1947.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com'
  },
  openGraph: {
    title: 'Stunning Waterfront Wedding Venue | Riviera Waterfront Mansion',
    description: 'Premier waterfront wedding venue in Massapequa, NY. Historic mansion with stunning water views, elegant ballroom, and indoor/outdoor ceremony options.',
    url: 'https://www.rivierawaterfrontmansion.com',
    siteName: 'Riviera Waterfront Mansion',
    images: [
      {
        url: 'https://www.rivierawaterfrontmansion.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Riviera Waterfront Mansion at sunset'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stunning Waterfront Wedding Venue | Riviera Waterfront Mansion',
    description: 'Premier waterfront wedding venue in Massapequa, NY. Historic mansion with stunning water views and elegant ballroom.',
    images: ['https://www.rivierawaterfrontmansion.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-riviera-neutral">
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
