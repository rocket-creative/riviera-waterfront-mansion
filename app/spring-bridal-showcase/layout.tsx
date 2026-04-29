import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { ANNOUNCEMENT_CONFIG } from '../components/AnnouncementOverlay';

export const metadata: Metadata = {
  title: 'Spring Bridal Showcase | Riviera Waterfront Mansion',
  description: 'Join us for our Spring Bridal Showcase. Free admission. Explore wedding trends, meet top vendors, and tour Long Island\'s premier waterfront wedding venue.',
  robots: { index: false, follow: false },
};

export default function SpringBridalShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Master kill-switch. When the announcement is disabled, redirect
  // any direct visits to the homepage. Flip ANNOUNCEMENT_CONFIG.enabled
  // back to true (with new event details) to bring the page online.
  if (!ANNOUNCEMENT_CONFIG.enabled) {
    redirect('/');
  }

  return <>{children}</>;
}
