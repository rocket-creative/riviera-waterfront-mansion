import { NextResponse } from 'next/server';
import { renderLlmsFullTxt } from '../lib/pageAnswers';

export function GET() {
  return new NextResponse(renderLlmsFullTxt(), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
