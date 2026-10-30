import type { Metadata } from 'next';

const description =
  'Request the wedding brochure for Riviera Waterfront Mansion, a high-end waterfront wedding venue on Long Island. Packages, amenities, menu, and 2026 and 2027 dates.';

export const metadata: Metadata = {
  title: 'Wedding Brochure | Riviera Waterfront Mansion Long Island NY',
  description,
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/wedding-pricing'
  },
  openGraph: {
    title: 'Wedding Brochure | Riviera Waterfront Mansion',
    description,
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
    description,
    images: ['https://www.rivierawaterfrontmansion.com/og-image.jpg'],
  },
};

export default function WeddingPricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
