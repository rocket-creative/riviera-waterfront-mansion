import { NextResponse } from 'next/server';
import { parseSiteAction, trafficSource } from '../../lib/site-actions';

export const dynamic = 'force-dynamic';

function isSameSite(request: Request): boolean {
  const forwarded = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  if (!forwarded) return false;
  const hostName = forwarded.split(',')[0].trim().split(':')[0];
  const origin = request.headers.get('origin') ?? request.headers.get('referer');
  if (!origin) return false;
  try {
    return new URL(origin).hostname === hostName;
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!isSameSite(request)) {
    return NextResponse.json({ error: 'forbidden' }, { status: 403 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid' }, { status: 400 });
  }

  const action = parseSiteAction(body);
  if (!action) {
    return NextResponse.json({ error: 'invalid' }, { status: 400 });
  }

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ACTION_KEY;
  if (!url || !key) {
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  const source = trafficSource(action);
  const response = await fetch(`${url}/rest/v1/site_actions`, {
    method: 'POST',
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      Prefer: 'return=minimal',
    },
    body: JSON.stringify({
      action: action.action,
      detail: action.detail,
      traffic_source: source,
      page_path: action.pagePath,
      landing_path: action.landingPath,
      landing_query: action.landingQuery,
      referrer: action.referrer,
      gclid: action.gclid,
      gbraid: action.gbraid,
      wbraid: action.wbraid,
      utm_source: action.utmSource,
      utm_medium: action.utmMedium,
      utm_campaign: action.utmCampaign,
      utm_term: action.utmTerm,
      utm_content: action.utmContent,
      gad_source: action.gadSource,
      gad_campaignid: action.gadCampaignId,
      visitor_id: action.visitorId,
      email: action.email,
      name: action.name,
      phone: action.phone,
    }),
  });

  if (!response.ok) {
    return NextResponse.json({ error: 'store_failed' }, { status: 502 });
  }

  return new NextResponse(null, { status: 204 });
}
