'use client';

import Image from 'next/image';
import {
  altForImage,
  coverPosition,
  elenaKayFallbackSrc,
  elenaKaySrcSet,
  isElenaKayPhoto,
} from '../lib/elenaKay2026';

type ResponsiveFillImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
  quality?: number;
  /** When the parent control already exposes the description to screen readers. */
  decorative?: boolean;
  onError?: () => void;
};

/**
 * Fill-frame photo. 2026 Elena Kay files use a pre-built srcset at the site
 * breakpoints (393, 810, 1024, 1440, 1920, and the original 1600 or 2400).
 * Older photos stay on next/image.
 */
export default function ResponsiveFillImage({
  src,
  alt,
  className = '',
  sizes,
  priority = false,
  quality = 85,
  decorative = false,
  onError,
}: ResponsiveFillImageProps) {
  const described = decorative ? '' : altForImage(src, alt);
  const objectPosition = coverPosition(src);

  if (!isElenaKayPhoto(src)) {
    return (
      <Image
        src={src}
        alt={described}
        fill
        className={className}
        sizes={sizes}
        quality={quality}
        priority={priority}
        aria-hidden={decorative || undefined}
        {...(objectPosition ? { style: { objectPosition } } : {})}
        {...(onError ? { onError } : {})}
      />
    );
  }

  return (
    // Pre-sized files already match the breakpoints, so this does not go through the optimizer again.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={elenaKayFallbackSrc(src)}
      srcSet={elenaKaySrcSet(src)}
      sizes={sizes}
      alt={described}
      className={`absolute inset-0 h-full w-full ${className}`}
      {...(objectPosition ? { style: { objectPosition } } : {})}
      decoding="async"
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : 'auto'}
      aria-hidden={decorative || undefined}
      {...(onError ? { onError } : {})}
    />
  );
}
