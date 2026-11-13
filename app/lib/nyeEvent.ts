/**
 * Midnight at the Riviera, the New Year's Eve gala.
 * One source for the event page, the homepage promotion, and the sitemap.
 *
 * `enabled` is the master switch. Setting it to `false`:
 *   1. Removes the homepage strip and feature band.
 *   2. Redirects /new-years-eve to the homepage (gated in its layout).
 *   3. Drops the page from the sitemap.
 *
 * `endDate` does the same thing automatically: at 12:30 AM Eastern on
 * January 1, 2027 the promotion, the page and the sitemap entry all
 * disappear with no edit or deploy needed (see app/lib/eventWindow.ts).
 */

export const NYE_EVENT = {
  enabled: true,

  path: '/new-years-eve',
  name: 'Midnight at the Riviera',
  tagline: "A New Year's Eve Gala",
  welcomeYear: '2027',

  eventbriteId: '2004729311336',
  eventbriteUrl:
    'https://www.eventbrite.com/e/midnight-at-the-riviera-2027-tickets-2004729311336?aff=oddtdtcreator',

  /** Eastern Standard Time. Doors at 8:00 PM, ends 12:30 AM on New Year's Day. */
  startDate: '2026-12-31T20:00:00-05:00',
  endDate: '2027-01-01T00:30:00-05:00',

  dateLabel: 'Thursday, December 31, 2026',
  timeLabel: '8:00 PM – 12:30 AM',
  locationLabel: 'Riviera Waterfront Mansion | Massapequa, NY',

  price: '165',
  groupPrice: '155',
  groupMinimum: 10,

  coverSrc: '/images/nye/midnight-at-the-riviera-cover.jpg',
  coverWidth: 1774,
  coverHeight: 887,
  coverAlt:
    "Midnight at the Riviera, A New Year's Eve Gala. The Riviera Waterfront Mansion ballroom lit in purple with fireworks overhead.",
  flyerSrc: '/images/nye/midnight-at-the-riviera-flyer.jpg',
  flyerWidth: 1103,
  flyerHeight: 1426,
  flyerAlt:
    "Midnight at the Riviera New Year's Eve Gala flyer. Thursday, December 31, 2026, 8:00 PM to 12:30 AM. Music by After Hours Entertainment featuring MC Switch and DJ Billy. $165 per ticket plus Eventbrite fee. 21 and over only.",

  description:
    "Midnight at the Riviera, a New Year's Eve gala at Riviera Waterfront Mansion in Massapequa, NY. Thursday, December 31, 2026, 8:00 PM to 12:30 AM. Live DJ, saxophonist and drummer, dinner buffet, Viennese dessert hour. Tickets $165. 21+.",
} as const;
