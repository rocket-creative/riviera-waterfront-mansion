import type { Metadata } from 'next';

const description =
  'Preferred vendors for a high-end waterfront wedding at Riviera Waterfront Mansion on Long Island. Photographers, DJs, florists, and other professionals chosen for the quality of their work.';

export const metadata: Metadata = {
  title: 'Long Island Wedding Vendors | Riviera Waterfront Mansion',
  description,
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/vendors'
  },
  openGraph: {
    title: 'Preferred Wedding Vendors | Riviera Waterfront Mansion',
    description,
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
    description,
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
