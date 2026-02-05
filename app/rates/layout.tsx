import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '2026 Wedding Rates & Availability | Riviera Waterfront Mansion',
  description: 'Transparent pricing for Long Island weddings at Riviera Waterfront Mansion. Starting at $150 per person for 2026. View our interactive calendar, check date availability, and explore all inclusive wedding packages at our Massapequa waterfront venue.',
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/rates',
  },
  openGraph: {
    title: '2026 Wedding Rates & Availability | Riviera Waterfront Mansion',
    description: 'Transparent pricing for Long Island weddings starting at $150 per person. Check 2026 availability at our Massapequa waterfront venue.',
    url: 'https://www.rivierawaterfrontmansion.com/rates',
    siteName: 'Riviera Waterfront Mansion',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '2026 Wedding Rates & Availability | Riviera Waterfront Mansion',
    description: 'Transparent pricing for Long Island weddings starting at $150 per person. Check 2026 availability.',
  },
};

export default function RatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
