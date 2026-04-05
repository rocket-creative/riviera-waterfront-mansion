'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface SlideshowImageProps {
  images: string[];
  alt: string;
  interval?: number;
  sizes?: string;
  objectClass?: string;
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
  objectClass = 'object-cover object-center',
  quality = 85,
  priority = false,
  showPlaceholder = false,
}: SlideshowImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set());

  const valid = images.filter(src => src && !failedSrcs.has(src));

  const advance = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % valid.length);
  }, [valid.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

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

  return (
    <div className="relative w-full h-full">
      {valid.map((src, idx) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt={`${alt}${valid.length > 1 ? ` — ${idx + 1}` : ''}`}
            fill
            className={objectClass}
            sizes={sizes}
            quality={quality}
            priority={priority && idx === 0}
            onError={() => setFailedSrcs(prev => new Set([...prev, src]))}
          />
        </div>
      ))}
    </div>
  );
}
