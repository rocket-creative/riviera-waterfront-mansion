import { isEventbriteUrl, isVenueEmail, isVenuePhone, type SiteAction } from './site-actions';

const VISIT_KEY = 'rwm_visit';
const NINETY_DAYS = 90 * 24 * 60 * 60 * 1000;

type StoredVisit = {
  visitorId: string;
  landingPath: string;
  landingQuery: string;
  referrer: string;
  gclid: string;
  gbraid: string;
  wbraid: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
  gadSource: string;
  gadCampaignId: string;
  capturedAt: number;
};

function readVisit(): StoredVisit | null {
  try {
    const raw = localStorage.getItem(VISIT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as StoredVisit;
    if (!parsed?.visitorId || typeof parsed.capturedAt !== 'number') return null;
    return parsed;
  } catch {
    return null;
  }
}

function param(params: URLSearchParams, key: string): string {
  return (params.get(key) ?? '').trim();
}

export function captureVisit(): void {
  const params = new URLSearchParams(window.location.search);
  const incoming = {
    gclid: param(params, 'gclid'),
    gbraid: param(params, 'gbraid'),
    wbraid: param(params, 'wbraid'),
    utmSource: param(params, 'utm_source'),
    utmMedium: param(params, 'utm_medium'),
    utmCampaign: param(params, 'utm_campaign'),
    utmTerm: param(params, 'utm_term'),
    utmContent: param(params, 'utm_content'),
    gadSource: param(params, 'gad_source'),
    gadCampaignId: param(params, 'gad_campaignid'),
  };

  const existing = readVisit();
  const expired = !existing || Date.now() - existing.capturedAt > NINETY_DAYS;
  const incomingAds = Boolean(
    incoming.gclid || incoming.gbraid || incoming.wbraid || incoming.utmSource || incoming.utmTerm || incoming.utmCampaign
  );
  const existingAds = Boolean(
    existing?.gclid || existing?.gbraid || existing?.wbraid || existing?.utmSource || existing?.utmTerm || existing?.utmCampaign
  );
  const newAdClick =
    (incoming.gclid && incoming.gclid !== existing?.gclid) ||
    (incoming.gbraid && incoming.gbraid !== existing?.gbraid) ||
    (incoming.wbraid && incoming.wbraid !== existing?.wbraid) ||
    (incomingAds && !existingAds);

  if (existing && !expired && !newAdClick) return;

  const referrer = document.referrer;
  const externalReferrer =
    referrer && !referrer.includes(window.location.host) ? referrer : '';

  const visit: StoredVisit = {
    visitorId: existing?.visitorId || crypto.randomUUID(),
    landingPath: window.location.pathname,
    landingQuery: window.location.search,
    referrer: externalReferrer,
    ...incoming,
    capturedAt: Date.now(),
  };

  localStorage.setItem(VISIT_KEY, JSON.stringify(visit));
}

const recent = new Map<string, number>();

export type FormPerson = {
  email: string;
  name: string | null;
  phone: string | null;
};

export function trackAction(action: SiteAction, detail?: string, person?: FormPerson): void {
  const key = `${action}:${detail ?? ''}:${person?.email ?? ''}:${window.location.pathname}`;
  const now = Date.now();
  const last = recent.get(key) ?? 0;
  if (now - last < 4000) return;
  recent.set(key, now);

  captureVisit();
  const visit = readVisit();
  const payload = {
    action,
    detail: detail ?? null,
    pagePath: window.location.pathname,
    landingPath: visit?.landingPath ?? window.location.pathname,
    landingQuery: visit?.landingQuery ?? '',
    referrer: visit?.referrer ?? '',
    gclid: visit?.gclid ?? '',
    gbraid: visit?.gbraid ?? '',
    wbraid: visit?.wbraid ?? '',
    utmSource: visit?.utmSource ?? '',
    utmMedium: visit?.utmMedium ?? '',
    utmCampaign: visit?.utmCampaign ?? '',
    utmTerm: visit?.utmTerm ?? '',
    utmContent: visit?.utmContent ?? '',
    gadSource: visit?.gadSource ?? '',
    gadCampaignId: visit?.gadCampaignId ?? '',
    visitorId: visit?.visitorId ?? '',
    email: person?.email ?? '',
    name: person?.name ?? '',
    phone: person?.phone ?? '',
  };

  const body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    const blob = new Blob([body], { type: 'application/json' });
    if (navigator.sendBeacon('/api/actions', blob)) return;
  }

  void fetch('/api/actions', {
    method: 'POST',
    body,
    keepalive: true,
    headers: { 'Content-Type': 'application/json' },
  }).catch(() => undefined);
}

export function actionFromHref(href: string): { action: SiteAction; detail: string } | null {
  if (/^tel:/i.test(href) && isVenuePhone(href)) return { action: 'call', detail: 'click' };
  if (/^mailto:/i.test(href) && isVenueEmail(href)) return { action: 'email', detail: 'click' };
  if (isEventbriteUrl(href, window.location.origin)) return { action: 'eventbrite', detail: 'click' };
  return null;
}

export function leadFormOrigin(origin: string): boolean {
  try {
    const host = new URL(origin).hostname;
    return host === 'api.leadconnectorhq.com' || host.endsWith('.leadconnectorhq.com');
  } catch {
    return false;
  }
}

export function readSubmittedContact(data: unknown): FormPerson | null {
  if (!Array.isArray(data) || data[0] !== 'set-sticky-contacts' || data[1] !== '_ud') return null;
  let payload: unknown;
  try {
    payload = JSON.parse(String(data[2] ?? ''));
  } catch {
    return null;
  }
  if (!payload || typeof payload !== 'object') return null;
  const record = payload as Record<string, unknown>;
  const email = typeof record.email === 'string' ? record.email.trim().toLowerCase() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return null;
  const named = [record.full_name, record.name, [record.first_name, record.last_name].filter(Boolean).join(' ')]
    .find((value) => typeof value === 'string' && value.trim().length > 0);
  return {
    email,
    name: typeof named === 'string' ? named.trim() : null,
    phone: typeof record.phone === 'string' ? record.phone.trim() : null,
  };
}

export function isSubmitConfirmation(data: unknown): boolean {
  return Array.isArray(data) && data[0] === 'set-sticky-contacts' && String(data[1] ?? '').startsWith('embedded_iframe_');
}
