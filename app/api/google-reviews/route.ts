import { NextResponse } from 'next/server';
import { getGoogleReviews } from '../../lib/googleReviews';

export const revalidate = 300;

export async function GET() {
  const payload = await getGoogleReviews();
  return NextResponse.json(payload);
}
