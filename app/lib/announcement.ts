/**
 * Announcement config — shared by the homepage card and the showcase page.
 * This file stays free of client hooks so server layouts can read `enabled`.
 *
 * ─── HOW TO UPDATE ────────────────────────────────────────────
 *  1. Set `enabled: true` to show the card, `false` to hide it.
 *  2. Fill in eyebrow, title, titleAccent, dateLabel, etc.
 *  3. Set ctaHref to any internal route or external URL.
 *  4. collapsedLabel is the pill text shown after the user closes.
 *
 * `enabled` is the master switch. Setting it to `false`:
 *   1. Hides the homepage hero overlay card and collapsed pill.
 *   2. Causes /fall-bridal-showcase to redirect to the homepage
 *      (gated in app/fall-bridal-showcase/layout.tsx).
 * /spring-bridal-showcase always redirects to the current showcase.
 *
 * `endsAt` takes the event offline automatically. From that moment the
 * homepage card, the showcase page and its sitemap entry all disappear,
 * with no edit or deploy needed (see app/lib/eventWindow.ts). Update it
 * whenever the announcement changes to a new event.
 */

export interface AnnouncementConfig {
  /** Master on/off switch — set false to fully remove the overlay */
  enabled: boolean;
  /** When the event ends, as an ISO date with the Eastern offset (-05:00 winter, -04:00 summer). Everything comes down automatically at this time. */
  endsAt: string;
  /** Gold uppercase eyebrow, e.g. "UPCOMING EVENT" */
  eyebrow: string;
  /** Main title (plain portion) */
  title: string;
  /** Italic gold accent appended to title */
  titleAccent: string;
  /** Primary date line, e.g. "WEDNESDAY, APRIL 22" */
  dateLabel: string;
  /** Secondary time + location line */
  timeLocation: string;
  /** Large Cormorant word in bottom-left, e.g. "FREE" or "NEW" */
  badgeWord: string;
  /** Small label beneath the badge word, e.g. "ADMISSION" */
  badgeSublabel: string;
  /** Button text */
  ctaText: string;
  /** Internal route or external URL for the button */
  ctaHref: string;
  /** Text shown in the collapsed pill after user dismisses */
  collapsedLabel: string;
}

export const ANNOUNCEMENT_CONFIG: AnnouncementConfig = {
  enabled: true,
  // Thursday, November 19, 2026 at 8:30 PM Eastern, when the showcase ends.
  endsAt: '2026-11-19T20:30:00-05:00',

  eyebrow: 'UPCOMING EVENT',
  title: 'Fall Bridal ',
  titleAccent: 'Showcase',
  dateLabel: 'THURSDAY, NOVEMBER 19',
  timeLocation: '6:30 – 8:30 PM EASTERN · 200 E Shore Dr, Massapequa NY',
  badgeWord: 'FREE',
  badgeSublabel: 'ADMISSION',
  ctaText: 'SIGN UP HERE →',
  ctaHref: '/fall-bridal-showcase',
  collapsedLabel: 'FALL SHOWCASE',
};
