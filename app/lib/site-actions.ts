export const SITE_ACTIONS = ['call', 'form', 'eventbrite', 'email'] as const;

export type SiteAction = (typeof SITE_ACTIONS)[number];

export type TrafficSource = 'google_ads' | 'google_organic' | 'direct' | 'other';

export type SiteActionInput = {
  action: SiteAction;
  detail: string | null;
  pagePath: string | null;
  landingPath: string | null;
  landingQuery: string | null;
  referrer: string | null;
  gclid: string | null;
  gbraid: string | null;
  wbraid: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  utmCampaign: string | null;
  utmTerm: string | null;
  utmContent: string | null;
  gadSource: string | null;
  gadCampaignId: string | null;
  visitorId: string | null;
  email: string | null;
  name: string | null;
  phone: string | null;
};

const VENUE_PHONE_DIGITS = '5165415020';
const VENUE_EMAIL = 'appointments@rivierawaterfrontmansion.com';

export function isVenuePhone(href: string): boolean {
  const digits = href.replace(/^tel:/i, '').split('?')[0].replace(/\D/g, '');
  return digits.endsWith(VENUE_PHONE_DIGITS);
}

export function isVenueEmail(href: string): boolean {
  const address = decodeURIComponent(href.replace(/^mailto:/i, '').split('?')[0])
    .trim()
    .toLowerCase();
  return address === VENUE_EMAIL;
}

export function isEventbriteUrl(href: string, base?: string): boolean {
  try {
    const url = new URL(href, base);
    return url.hostname === 'eventbrite.com' || url.hostname.endsWith('.eventbrite.com');
  } catch {
    return false;
  }
}

export function trafficSource(input: {
  gclid: string | null;
  gbraid: string | null;
  wbraid: string | null;
  utmSource: string | null;
  utmMedium: string | null;
  referrer: string | null;
}): TrafficSource {
  if (input.gclid || input.gbraid || input.wbraid) return 'google_ads';
  if (
    input.utmSource?.toLowerCase() === 'google' &&
    input.utmMedium?.toLowerCase() === 'cpc'
  ) {
    return 'google_ads';
  }

  if (!input.referrer) return 'direct';

  try {
    const host = new URL(input.referrer).hostname.toLowerCase();
    if (/(^|\.)google\.(com|co\.[a-z]{2}|com\.[a-z]{2}|[a-z]{2})$/.test(host)) {
      return 'google_organic';
    }
  } catch {
    return 'other';
  }

  return 'other';
}

function clip(value: unknown, max: number): string | null {
  if (typeof value !== 'string') return null;
  const trimmed = value.trim().slice(0, max);
  return trimmed.length > 0 ? trimmed : null;
}

export function parseSiteAction(body: unknown): SiteActionInput | null {
  if (!body || typeof body !== 'object') return null;
  const record = body as Record<string, unknown>;
  const action = record.action;
  if (typeof action !== 'string' || !SITE_ACTIONS.includes(action as SiteAction)) return null;

  return {
    action: action as SiteAction,
    detail: clip(record.detail, 80),
    pagePath: clip(record.pagePath, 300),
    landingPath: clip(record.landingPath, 300),
    landingQuery: clip(record.landingQuery, 1500),
    referrer: clip(record.referrer, 1500),
    gclid: clip(record.gclid, 200),
    gbraid: clip(record.gbraid, 200),
    wbraid: clip(record.wbraid, 200),
    utmSource: clip(record.utmSource, 200),
    utmMedium: clip(record.utmMedium, 200),
    utmCampaign: clip(record.utmCampaign, 200),
    utmTerm: clip(record.utmTerm, 300),
    utmContent: clip(record.utmContent, 300),
    gadSource: clip(record.gadSource, 50),
    gadCampaignId: clip(record.gadCampaignId, 50),
    visitorId: clip(record.visitorId, 80),
    email: clipEmail(record.email),
    name: clip(record.name, 200),
    phone: clip(record.phone, 40),
  };
}

function clipEmail(value: unknown): string | null {
  const email = clip(value, 200)?.toLowerCase() ?? null;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  return email;
}
