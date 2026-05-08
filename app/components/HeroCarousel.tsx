'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';

const SWIPE_THRESHOLD_PX = 50;
const MANUAL_NAV_COOLDOWN_MS = 4000;

interface HeroCarouselProps {
  images: string[];
  interval?: number;
  alt?: string;
  /** Crossfade duration in ms (default 1000). */
  fadeMs?: number;
  /**
   * `venue` shows the full image (letterboxed) with true centering; use for wide ballroom shots.
   * `default` uses cover and existing mobile focal bias for other heroes.
   */
  variant?: 'default' | 'venue';
  /** Passed to next/image `sizes`. Default matches full-bleed menu sections. */
  sizes?: string;
}

export default function HeroCarousel({
  images,
  interval = 5000,
  alt = 'Wedding couple at Riviera Waterfront Mansion',
  fadeMs = 1000,
  variant = 'default',
  sizes = '(max-width: 1024px) 100vw, 65vw',
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const interactionLockUntil = useRef(0);
  const pointerStartX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const listener = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  const markManualNavigation = useCallback(() => {
    interactionLockUntil.current = Date.now() + MANUAL_NAV_COOLDOWN_MS;
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  // Auto-advance (skipped when reduced motion or single slide)
  useEffect(() => {
    if (images.length <= 1 || reducedMotion) return;

    const id = window.setInterval(() => {
      if (Date.now() < interactionLockUntil.current) return;
      nextSlide();
    }, interval);
    return () => window.clearInterval(id);
  }, [images.length, interval, nextSlide, reducedMotion]);

  // Preload next image
  useEffect(() => {
    if (images.length <= 1) return;

    const nextIndex = (currentIndex + 1) % images.length;
    const img = new window.Image();
    img.src = images[nextIndex];
  }, [currentIndex, images]);

  const goToIndex = useCallback(
    (index: number) => {
      markManualNavigation();
      setCurrentIndex(index);
    },
    [markManualNavigation]
  );

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
    pointerStartY.current = e.clientY;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (images.length <= 1) return;
    const startX = pointerStartX.current;
    const startY = pointerStartY.current;
    pointerStartX.current = null;
    pointerStartY.current = null;
    if (startX == null || startY == null) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (Math.abs(dx) < SWIPE_THRESHOLD_PX) return;
    if (Math.abs(dy) > Math.abs(dx) * 1.2) return;

    markManualNavigation();
    if (dx < 0) nextSlide();
    else prevSlide();
  };

  if (images.length === 0) return null;

  const imageClass =
    variant === 'venue' ? 'hero-carousel-image--venue' : 'hero-carousel-image';
  const frameClass =
    variant === 'venue'
      ? 'relative w-full h-full overflow-hidden bg-stone-100 touch-pan-y'
      : 'relative w-full h-full overflow-hidden bg-riviera-text touch-pan-y';

  const fadeStyle =
    reducedMotion
      ? { transition: 'none' }
      : { transitionDuration: `${fadeMs}ms` };

  return (
    <div
      className={frameClass}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      role={images.length > 1 ? 'region' : undefined}
      aria-roledescription={images.length > 1 ? 'carousel' : undefined}
      aria-label={images.length > 1 ? `${alt}, image carousel` : undefined}
    >
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          } ${reducedMotion ? '' : 'transition-opacity'}`}
          style={fadeStyle}
        >
          <Image
            src={src}
            alt={`${alt} - Image ${index + 1}`}
            fill
            priority={index === 0}
            className={imageClass}
            sizes={sizes}
            quality={90}
          />
        </div>
      ))}

      {images.length > 1 && (
        <div
          className={`absolute bottom-6 right-6 z-20 flex gap-2 ${
            variant === 'venue' ? '[&_button]:shadow-sm' : ''
          }`}
        >
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? variant === 'venue'
                    ? 'bg-riviera-text w-6'
                    : 'bg-white w-6'
                  : variant === 'venue'
                    ? 'bg-riviera-text/35 hover:bg-riviera-text/50'
                    : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${index + 1} of ${images.length}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
