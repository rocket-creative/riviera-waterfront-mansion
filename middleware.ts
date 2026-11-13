import { NextResponse, type NextRequest } from 'next/server';
import { ANNOUNCEMENT_CONFIG } from './app/lib/announcement';
import { isEventLive } from './app/lib/eventWindow';
import { NYE_EVENT } from './app/lib/nyeEvent';

/**
 * Sends visitors to the homepage once a dated event is over.
 * This runs on every request to the event pages, so the cut-off is exact
 * and does not wait for a rebuild or a cache refresh.
 */
const EVENT_PAGES = [
  {
    prefix: '/fall-bridal-showcase',
    enabled: ANNOUNCEMENT_CONFIG.enabled,
    endsAt: ANNOUNCEMENT_CONFIG.endsAt,
  },
  {
    prefix: NYE_EVENT.path,
    enabled: NYE_EVENT.enabled,
    endsAt: NYE_EVENT.endDate,
  },
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const page = EVENT_PAGES.find(
    ({ prefix }) => pathname === prefix || pathname.startsWith(`${prefix}/`)
  );

  if (page && !isEventLive(page.enabled, page.endsAt)) {
    return NextResponse.redirect(new URL('/', request.url), 307);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/fall-bridal-showcase/:path*', '/new-years-eve/:path*'],
};
