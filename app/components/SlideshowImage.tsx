'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import ResponsiveFillImage from './ResponsiveFillImage';

interface SlideshowImageProps {
  images: string[];
  alt: string;
  interval?: number;
  sizes?: string;
  /**
   * Extra classes (transitions, hover). Do not set object-fit here; use `fit`.
   */
  objectClass?: string;
  /**
   * `contain` shows the full image (letterboxed). `cover` crops to fill the frame.
   * Use `cover` only for top-of-page editorial hero columns. Default is `contain`.
   */
  fit?: 'cover' | 'contain';
  quality?: number;
  priority?: boolean;
  /** Show placeholder when images array is empty. Default false (renders nothing). */
  showPlaceholder?: boolean;
}

export default function SlideshowImage({
  images,
  alt,
  interval = 5000,
  sizes = '(max-width: 1024px) 100vw, 58vw',
  objectClass = '',
  fit = 'contain',
  quality = 75,
  priority = false,
  showPlaceholder = false,
}: SlideshowImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heldIndex, setHeldIndex] = useState<number | null>(null);
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set());
  const previousIndexRef = useRef(0);

  const valid = images.filter(src => src && !failedSrcs.has(src));

  const advance = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % valid.length);
  }, [valid.length]);

  useEffect(() => {
    setCurrentIndex(0);
    previousIndexRef.current = 0;
  }, [images]);

  useEffect(() => {
    if (previousIndexRef.current === currentIndex) return;
    const leaving = previousIndexRef.current;
    previousIndexRef.current = currentIndex;
    setHeldIndex(leaving);
    const timer = window.setTimeout(() => setHeldIndex(null), 1000);
    return () => window.clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    if (valid.length <= 1) return;
    const timer = setInterval(advance, interval);
    return () => clearInterval(timer);
  }, [valid.length, advance, interval]);

  if (valid.length === 0) {
    if (!showPlaceholder) return null;
    return (
      <div className="w-full h-full bg-stone-200 flex flex-col items-center justify-center gap-2 select-none">
        <svg className="w-8 h-8 text-stone-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18" />
        </svg>
        <span className="text-xs tracking-widest text-stone-400 uppercase">Photo coming soon</span>
      </div>
    );
  }

  const fitClass = fit === 'contain' ? 'object-contain' : 'object-cover';
  const frameClass =
    fit === 'contain' ? 'relative w-full h-full bg-stone-100' : 'relative w-full h-full';

  const nextIndex = valid.length > 1 ? (currentIndex + 1) % valid.length : currentIndex;
  const mounted = new Set<number>([currentIndex, nextIndex]);
  if (heldIndex !== null && heldIndex < valid.length) mounted.add(heldIndex);

  return (
    <div className={frameClass}>
      {valid.map((src, idx) => {
        if (!mounted.has(idx)) return null;
        return (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden={idx === currentIndex ? undefined : true}
        >
          <ResponsiveFillImage
            src={src}
            alt={`${alt}${valid.length > 1 ? ` — ${idx + 1}` : ''}`}
            className={`${fitClass} object-center ${objectClass}`.trim()}
            sizes={sizes}
            quality={quality}
            priority={priority && idx === 0}
            onError={() => setFailedSrcs(prev => new Set([...prev, src]))}
          />
        </div>
        );
      })}
    </div>
  );
}
