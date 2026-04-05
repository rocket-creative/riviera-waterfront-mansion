'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface MenuImageProps {
  images: string[];
  alt: string;
}

function Placeholder() {
  return (
    <div className="w-full h-full bg-stone-100 flex flex-col items-center justify-center gap-1.5 select-none">
      <svg className="w-5 h-5 text-stone-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3 3h18M3 21h18" />
      </svg>
      <span className="text-[8px] tracking-widest text-stone-300 uppercase text-center leading-tight px-2">
        Photo coming soon
      </span>
    </div>
  );
}

export default function MenuImage({ images, alt }: MenuImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [failedSrcs, setFailedSrcs] = useState<Set<string>>(new Set());

  const valid = images.filter(src => src && !failedSrcs.has(src));

  const advance = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % valid.length);
  }, [valid.length]);

  useEffect(() => {
    // Reset index when images change
    setCurrentIndex(0);
  }, [images]);

  useEffect(() => {
    if (valid.length <= 1) return;
    const timer = setInterval(advance, 4000);
    return () => clearInterval(timer);
  }, [valid.length, advance]);

  if (valid.length === 0) return <Placeholder />;

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
            className="object-cover object-center"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
            onError={() => setFailedSrcs(prev => new Set([...prev, src]))}
          />
        </div>
      ))}
    </div>
  );
}
