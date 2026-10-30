import type { Metadata } from 'next';

const description =
  'Chef-inspired Continental wedding catering at a high-end Long Island waterfront venue. Five-hour top-shelf open bar, cocktail hour, and plated dinner. Family owned since 1946.';

export const metadata: Metadata = {
  title: 'Long Island Wedding Catering Menu | Riviera Waterfront Mansion',
  description,
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/menu'
  },
  openGraph: {
    title: 'Wedding Menu & Catering | Riviera Waterfront Mansion',
    description,
    url: 'https://www.rivierawaterfrontmansion.com/menu',
    siteName: 'Riviera Waterfront Mansion',
    images: [
      {
        url: 'https://www.rivierawaterfrontmansion.com/og-menu.jpg',
        width: 1200,
        height: 630,
        alt: 'Gourmet wedding catering at Riviera Waterfront Mansion Long Island'
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wedding Menu & Catering | Riviera Waterfront Mansion',
    description,
    images: ['https://www.rivierawaterfrontmansion.com/og-menu.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MenuLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
