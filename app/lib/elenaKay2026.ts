import { elenaKayAlts, elenaKayWidths } from './elenaKay2026.data';

const CREDIT = 'by Elena Kay Photography';

export function isElenaKayPhoto(src: string): boolean {
  return src.includes('/images/2026/');
}

function fileName(src: string): string {
  const path = src.split('?')[0] ?? src;
  return path.split('/').pop() ?? '';
}

/**
 * Tall cover crops only show the middle of a wide photo. These anchors pull
 * the window onto the faces instead of the empty side of the frame.
 */
const coverFocus: Record<string, string> = {
  'morrone-veil-wind.webp': '16% center',
  'spano-lawn-gaze.webp': '8% center',
  'morrone-flower-embrace.webp': '8% center',
};

export function coverPosition(src: string): string | undefined {
  return coverFocus[fileName(src)];
}

/** Screen-reader text: the photo description, credited to Elena Kay Photography. */
export function altForImage(src: string, fallback: string): string {
  const described = elenaKayAlts[fileName(src)];
  if (!described) return fallback;
  return described.endsWith(CREDIT) ? described : `${described} ${CREDIT}`;
}

/** Widths actually written for this file. Never larger than the original. */
export function elenaKaySrcSet(src: string): string | undefined {
  const file = fileName(src);
  const widths = elenaKayWidths[file];
  if (!widths?.length) return undefined;
  return widths.map((width) => `/images/2026/w${width}/${file} ${width}w`).join(', ');
}

/** ~810px file for idle preloads so phones do not fetch the 1440 or 2400 master. */
export function elenaKayPreloadSrc(src: string): string {
  const file = fileName(src);
  const widths = elenaKayWidths[file];
  if (!file || !widths?.length) return src;
  const preferred = widths.find((width) => width >= 810) ?? widths[widths.length - 1];
  return `/images/2026/w${preferred}/${file}`;
}

/** Default src for browsers that ignore srcset. Prefers the 1440 breakpoint. */
export function elenaKayFallbackSrc(src: string): string {
  const file = fileName(src);
  const widths = elenaKayWidths[file];
  if (!file || !widths?.length) return src;
  const preferred = widths.find((width) => width >= 1440) ?? widths[widths.length - 1];
  return `/images/2026/w${preferred}/${file}`;
}
