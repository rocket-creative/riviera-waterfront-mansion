import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { ANNOUNCEMENT_CONFIG } from '../lib/announcement';
import { isEventLive } from '../lib/eventWindow';

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

// Re-rendered every few minutes so the page comes down on its own once the event ends.
export const revalidate = 300;

export default function FallBridalShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Off when ANNOUNCEMENT_CONFIG.enabled is false, and automatically once the event
  // has ended (ANNOUNCEMENT_CONFIG.endsAt). middleware.ts applies the same cut-off
  // on every request.
  if (!isEventLive(ANNOUNCEMENT_CONFIG.enabled, ANNOUNCEMENT_CONFIG.endsAt)) {
    redirect('/');
  }

  return <>{children}</>;
}
