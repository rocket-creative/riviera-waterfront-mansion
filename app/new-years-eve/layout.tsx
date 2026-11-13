import type { Metadata } from 'next';
import { redirect } from 'next/navigation';
import { isEventLive } from '../lib/eventWindow';
import { NYE_EVENT } from '../lib/nyeEvent';
import { absoluteUrl } from '../lib/venueFacts';

const title = "New Year's Eve Gala 2027 | Midnight at the Riviera";

export const metadata: Metadata = {
  title,
  description: NYE_EVENT.description,
  alternates: {
    canonical: absoluteUrl(NYE_EVENT.path),
  },
  openGraph: {
    title,
    description: NYE_EVENT.description,
    url: absoluteUrl(NYE_EVENT.path),
    siteName: 'Riviera Waterfront Mansion',
    images: [
      {
        url: NYE_EVENT.coverSrc,
        width: NYE_EVENT.coverWidth,
        height: NYE_EVENT.coverHeight,
        alt: NYE_EVENT.coverAlt,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description: NYE_EVENT.description,
    images: [NYE_EVENT.coverSrc],
  },
  robots: { index: true, follow: true },
};

// Re-rendered every few minutes so the page comes down on its own once the event ends.
export const revalidate = 300;

export default function NewYearsEveLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Off when NYE_EVENT.enabled is false, and automatically once the event has ended.
  // middleware.ts applies the same cut-off on every request.
  if (!isEventLive(NYE_EVENT.enabled, NYE_EVENT.endDate)) {
    redirect('/');
  }

  return <>{children}</>;
}
