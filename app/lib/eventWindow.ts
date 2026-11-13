/**
 * Shared expiry check for dated events (the bridal showcase and the New Year's Eve gala).
 *
 * An event is live while its `enabled` switch is on AND its end time has not passed.
 * End times are ISO strings with an explicit Eastern offset, so the check is the same
 * on the server, at the edge, and in the visitor's browser whatever their time zone.
 *
 * Where it is enforced:
 *   1. middleware.ts redirects the event pages to the homepage from the end time on.
 *   2. The homepage, event layouts and sitemap re-render every few minutes and drop
 *      the event once it is over.
 *   3. ExpiresAt hides homepage promotions in the browser at the exact minute, so a
 *      page already open (or a cached copy) does not keep advertising a finished event.
 */
export function isEventLive(enabled: boolean, endsAt: string, now: number = Date.now()): boolean {
  if (!enabled) return false;
  const end = new Date(endsAt).getTime();
  // An unreadable date must not silently take an event offline.
  if (Number.isNaN(end)) return true;
  return now < end;
}


