import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Brochure | Riviera Waterfront Mansion Long Island NY',
  description: 'Download the Riviera Waterfront Mansion wedding brochure. Explore Long Island wedding packages, amenities, menu options, and availability for 2026 and 2027.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/wedding-pricing'
  },
  openGraph: {
    title: 'Wedding Brochure | Riviera Waterfront Mansion',
    description: 'Download the Riviera Waterfront Mansion wedding brochure. Long Island wedding packages, amenities, and availability for 2026 and 2027.',
    url: 'https://www.rivierawaterfrontmansion.com/wedding-pricing',
    siteName: 'Riviera Waterfront Mansion',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.rivierawaterfrontmansion.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Riviera Waterfront Mansion wedding brochure Long Island waterfront venue',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Brochure | Riviera Waterfront Mansion',
    description: 'Download the Riviera Waterfront Mansion wedding brochure. Packages, amenities, and availability for your Long Island waterfront wedding.',
    images: ['https://www.rivierawaterfrontmansion.com/og-image.jpg'],
  },
};

export default function WeddingPricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
