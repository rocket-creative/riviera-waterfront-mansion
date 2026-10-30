import type { Metadata } from 'next';

const description =
  'Wedding pricing for a high-end waterfront venue on Long Island. Ceremony, cocktail hour, plated dinner, and a five-hour top-shelf open bar. A personalized proposal follows a private tour.';

export const metadata: Metadata = {
  title: 'Wedding Rates & Availability | Riviera Waterfront Mansion',
  description,
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/rates',
  },
  openGraph: {
    title: 'Wedding Rates & Availability | Riviera Waterfront Mansion',
    description,
    url: 'https://www.rivierawaterfrontmansion.com/rates',
    siteName: 'Riviera Waterfront Mansion',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.rivierawaterfrontmansion.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Riviera Waterfront Mansion Long Island wedding venue rates and availability',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Rates & Availability | Riviera Waterfront Mansion',
    description,
    images: ['https://www.rivierawaterfrontmansion.com/og-image.jpg'],
  },
};

export default function RatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
