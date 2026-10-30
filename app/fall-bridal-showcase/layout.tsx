import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { ANNOUNCEMENT_CONFIG } from '../lib/announcement';

const description =
  'Free Fall Bridal Showcase at Riviera Waterfront Mansion on Thursday, November 19, 2026, 6:30–8:30 PM. In person at 200 E Shore Dr, Massapequa, NY.';

export const metadata: Metadata = {
  title: 'Fall Bridal Showcase | Riviera Waterfront Mansion',
  description,
  alternates: {
    canonical: 'https://www.rivierawaterfrontmansion.com/fall-bridal-showcase',
  },
  openGraph: {
    title: 'Fall Bridal Showcase | Riviera Waterfront Mansion',
    description,
    url: 'https://www.rivierawaterfrontmansion.com/fall-bridal-showcase',
    images: [
      {
        url: '/images/showcase/fall-bridal-rainbow-ceremony.jpg',
        alt: 'Outdoor wedding ceremony at sunset under a rainbow at Riviera Waterfront Mansion',
      },
    ],
  },
  robots: { index: true, follow: true },
};

export default function FallBridalShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Master kill-switch. When the announcement is disabled, redirect
  // any direct visits to the homepage. Set ANNOUNCEMENT_CONFIG.enabled
  // to false after November 19, 2026 to take the page offline.
  if (!ANNOUNCEMENT_CONFIG.enabled) {
    redirect('/');
  }

  return <>{children}</>;
}
