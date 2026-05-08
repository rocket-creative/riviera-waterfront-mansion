'use client';

import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useStaggerChildren, useScrollTriggerCleanup } from '../../lib/useAnimations';

interface TourDetailClientProps {
  images: string[];
  sectionTitle: string;
}

export default function TourDetailClient({ images, sectionTitle }: TourDetailClientProps) {
  useScrollTriggerCleanup();
  const galleryRef = useStaggerChildren('.gallery-image', { stagger: 0.1, duration: 0.8 });
  const closeRef = useRef<HTMLButtonElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [lightboxIndex]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight' && images.length > 1) {
        e.preventDefault();
        setLightboxIndex((i) => ((i ?? 0) + 1) % images.length);
      } else if (e.key === 'ArrowLeft' && images.length > 1) {
        e.preventDefault();
        setLightboxIndex((i) => (((i ?? 0) - 1) + images.length) % images.length);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIndex, images.length, closeLightbox]);

  useEffect(() => {
    if (lightboxIndex === null) return;
    queueMicrotask(() => closeRef.current?.focus());
  }, [lightboxIndex]);

  return (
    <div ref={galleryRef as any} className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {images.map((imagePath, index) => (
          <button
            key={imagePath}
            type="button"
            onClick={() => setLightboxIndex(index)}
            aria-label={`View larger ${sectionTitle} photo ${index + 1}`}
            className="gallery-image relative overflow-hidden group cursor-pointer aspect-video bg-stone-100 border-0 p-0 w-full block text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            <Image
              src={imagePath}
              alt=""
              aria-hidden
              fill
              className="object-contain object-center transition-transform duration-700 group-hover:scale-105 pointer-events-none"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              quality={85}
            />
            <span className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 pointer-events-none" aria-hidden />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-3 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={`${sectionTitle} enlarged photo`}
          onClick={closeLightbox}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={closeLightbox}
            aria-label="Close enlarged photo"
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-[70] rounded-sm p-2 text-white hover:text-riviera-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex(((lightboxIndex - 1) + images.length) % images.length);
                }}
                aria-label="Previous photo"
                className="absolute left-1 sm:left-3 top-1/2 z-[70] -translate-y-1/2 rounded-sm p-2 sm:p-3 text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((lightboxIndex + 1) % images.length);
                }}
                aria-label="Next photo"
                className="absolute right-1 sm:right-3 top-1/2 z-[70] -translate-y-1/2 rounded-sm p-2 sm:p-3 text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <svg className="w-8 h-8 sm:w-10 sm:h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <div className="absolute bottom-4 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-black/50 px-3 py-1 text-xs tracking-widest text-white/90">
                {lightboxIndex + 1} / {images.length}
              </div>
            </>
          )}

          <div
            className="relative z-[66] mx-auto h-[min(85svh,calc(100vw-24px))] w-full max-w-[min(1400px,100%)] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative block h-full w-full min-h-[240px]">
              <Image
                src={images[lightboxIndex]}
                alt={`${sectionTitle} photo ${lightboxIndex + 1} at Riviera Waterfront Mansion wedding venue in Massapequa, Long Island`}
                fill
                className="object-contain object-center"
                sizes="100vw"
                quality={90}
                priority
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
