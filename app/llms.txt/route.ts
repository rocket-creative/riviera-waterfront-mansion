import { NextResponse } from 'next/server';
import { renderLlmsTxt } from '../lib/pageAnswers';

export function GET() {
  return new NextResponse(renderLlmsTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
