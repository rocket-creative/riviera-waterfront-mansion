import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Preferred Wedding Vendors | Long Island Wedding Professionals | Riviera Waterfront Mansion',
  description: 'Trusted Long Island wedding vendors recommended by Riviera Waterfront Mansion in Massapequa, NY. Hand selected photographers, DJs, florists, bakers, lighting, transportation, officiants, and more. Over 30 vetted wedding professionals who excel at our waterfront venue.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/vendors'
  },
  openGraph: {
    title: 'Preferred Wedding Vendors | Riviera Waterfront Mansion',
    description: 'Hand selected Long Island wedding vendors including photographers, DJs, florists, and more. Trusted professionals recommended by our Massapequa venue.',
    url: 'https://www.rivierawaterfrontmansion.com/vendors',
    siteName: 'Riviera Waterfront Mansion',
    images: [
      {
        url: 'https://www.rivierawaterfrontmansion.com/og-vendors.jpg',
        width: 1200,
        height: 630,
        alt: 'Preferred wedding vendors at Riviera Waterfront Mansion Long Island'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Preferred Wedding Vendors | Riviera Waterfront Mansion',
    description: 'Hand selected Long Island wedding professionals including photographers, DJs, florists, and more.',
    images: ['https://www.rivierawaterfrontmansion.com/og-vendors.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function VendorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
