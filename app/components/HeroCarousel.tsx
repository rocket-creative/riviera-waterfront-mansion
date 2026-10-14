'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import ResponsiveFillImage from './ResponsiveFillImage';
import { altForImage, elenaKayPreloadSrc, isElenaKayPhoto } from '../lib/elenaKay2026';

const SWIPE_THRESHOLD_PX = 50;
const MANUAL_NAV_COOLDOWN_MS = 4000;

function buildSlides(images: string[], dual: boolean): string[][] {
  if (!dual || images.length < 2) {
    return images.map((src) => [src]);
  }
  const slides: string[][] = [];
  for (let i = 0; i < images.length; i += 2) {
    slides.push(images.slice(i, i + 2));
  }
  return slides;
}

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
  /** When `dual`, pairs images two per slide (odd last image uses one centered panel). */
  presentation?: 'single' | 'dual';
  /** Double-click a slide or panel to open fullscreen preview with zoom (+ and − buttons). */
  enlargeOnDoubleClick?: boolean;
  /** Preload and prioritize only the first slide. Use on the page's LCP carousel. */
  priority?: boolean;
  /** Skip image work until the carousel is near the viewport. */
  deferUntilVisible?: boolean;
}

export default function HeroCarousel({
  images,
  interval = 5000,
  alt = 'Wedding couple at Riviera Waterfront Mansion',
  fadeMs = 1000,
  variant = 'default',
  sizes = '(max-width: 1024px) 100vw, 65vw',
  presentation = 'single',
  enlargeOnDoubleClick = false,
  priority = false,
  deferUntilVisible = false,
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [heldIndex, setHeldIndex] = useState<number | null>(null);
  const [inView, setInView] = useState(!deferUntilVisible);
  const [expandedSrc, setExpandedSrc] = useState<string | null>(null);
  const [expandedZoom, setExpandedZoom] = useState(1.25);
  const [reducedMotion, setReducedMotion] = useState(false);
  const interactionLockUntil = useRef(0);
  const pointerStartX = useRef<number | null>(null);
  const pointerStartY = useRef<number | null>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const previousIndexRef = useRef(0);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const listener = () => setReducedMotion(mq.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  const dualPresentation = presentation === 'dual' && images.length >= 2;
  const slides = useMemo(
    () => buildSlides(images, dualPresentation),
    [images, dualPresentation]
  );
  const dualPanelSizes = '(max-width: 768px) 47vw, (max-width: 1280px) 42vw, 35vw';
  const imageSizesResolved = dualPresentation ? dualPanelSizes : sizes;

  const markManualNavigation = useCallback(() => {
    interactionLockUntil.current = Date.now() + MANUAL_NAV_COOLDOWN_MS;
  }, []);

  const slideCount = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images, dualPresentation]);

  useEffect(() => {
    if (!deferUntilVisible) return;
    const el = frameRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '400px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [deferUntilVisible]);

  useEffect(() => {
    if (previousIndexRef.current === currentIndex) return;
    const leaving = previousIndexRef.current;
    previousIndexRef.current = currentIndex;
    setHeldIndex(leaving);
    const timer = window.setTimeout(() => setHeldIndex(null), fadeMs);
    return () => window.clearTimeout(timer);
  }, [currentIndex, fadeMs]);

  // Auto-advance (skipped when reduced motion, offscreen, or single slide)
  useEffect(() => {
    if (!inView || slideCount <= 1 || reducedMotion) return;

    const id = window.setInterval(() => {
      if (Date.now() < interactionLockUntil.current) return;
      nextSlide();
    }, interval);
    return () => window.clearInterval(id);
  }, [inView, slideCount, interval, nextSlide, reducedMotion]);

  // Preload the next slide after the page is idle, at a phone-sized width.
  useEffect(() => {
    if (!inView || slideCount <= 1) return;

    let cancelled = false;
    const preload = () => {
      if (cancelled) return;
      const nextIdx = (currentIndex + 1) % slideCount;
      for (const src of slides[nextIdx]) {
        const img = new window.Image();
        img.src = isElenaKayPhoto(src) ? elenaKayPreloadSrc(src) : src;
      }
    };

    const id = window.requestIdleCallback(preload, { timeout: 2500 });
    return () => {
      cancelled = true;
      window.cancelIdleCallback(id);
    };
  }, [inView, currentIndex, slides, slideCount]);

  const goToIndex = useCallback(
    (index: number) => {
      markManualNavigation();
      setCurrentIndex(index);
    },
    [markManualNavigation]
  );

  const closeExpanded = useCallback(() => {
    setExpandedSrc(null);
  }, []);

  const bumpExpandedZoom = useCallback((delta: number) => {
    setExpandedZoom((z) => {
      const n = Math.round((z + delta) * 100) / 100;
      return Math.min(3, Math.max(1, n));
    });
  }, []);

  useEffect(() => {
    if (!expandedSrc) return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeExpanded();
      if (e.key === '+' || e.key === '=') bumpExpandedZoom(0.2);
      if (e.key === '-' || e.key === '_') bumpExpandedZoom(-0.2);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [expandedSrc, closeExpanded, bumpExpandedZoom]);

  const openExpandedFromSlide = useCallback((src: string) => {
    setExpandedZoom(1.35);
    setExpandedSrc(src);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    pointerStartX.current = e.clientX;
    pointerStartY.current = e.clientY;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (slideCount <= 1) return;
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
  const mountedSlides = new Set<number>([currentIndex]);
  if (slideCount > 1) mountedSlides.add((currentIndex + 1) % slideCount);
  if (heldIndex !== null) mountedSlides.add(heldIndex);

  const frameClass =
    variant === 'venue'
      ? 'relative w-full h-full overflow-hidden bg-stone-100 touch-pan-y'
      : 'relative w-full h-full overflow-hidden bg-riviera-text touch-pan-y';

  const fadeStyle =
    reducedMotion
      ? { transition: 'none' }
      : { transitionDuration: `${fadeMs}ms` };

  return (
    <>
    <div
      ref={frameRef}
      className={frameClass}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      role={slideCount > 1 ? 'region' : undefined}
      aria-roledescription={slideCount > 1 ? 'carousel' : undefined}
      aria-label={slideCount > 1 ? `${alt}, image carousel` : undefined}
    >
      {inView && slides.map((slideSrcs, slideIndex) => {
        if (!mountedSlides.has(slideIndex)) return null;
        return (
        <div
          key={`slide-${slideIndex}-${slideSrcs.join('|')}`}
          className={`absolute inset-0 ease-in-out ${
            slideIndex === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          } ${reducedMotion ? '' : 'transition-opacity'}`}
          style={fadeStyle}
          aria-hidden={slideIndex === currentIndex ? undefined : true}
        >
          {dualPresentation && slideSrcs.length === 2 ? (
            <div className="grid h-full min-h-0 w-full grid-cols-2 gap-2 px-3 sm:gap-4 sm:px-6 md:gap-6 md:px-10 lg:px-14">
              {slideSrcs.map((src, i) => (
                <div
                  key={src}
                  className={`relative min-h-0 h-full bg-stone-100 ${enlargeOnDoubleClick ? 'cursor-zoom-in' : ''}`}
                  onDoubleClick={
                    enlargeOnDoubleClick
                      ? (ev) => {
                          ev.stopPropagation();
                          openExpandedFromSlide(src);
                        }
                      : undefined
                  }
                  title={enlargeOnDoubleClick ? 'Double-click to enlarge photo' : undefined}
                >
                  <ResponsiveFillImage
                    src={src}
                    alt={`${alt}, photo ${slideIndex * 2 + i + 1}`}
                    priority={priority && slideIndex === 0 && i === 0}
                    className={imageClass}
                    sizes={imageSizesResolved}
                    quality={75}
                  />
                </div>
              ))}
            </div>
          ) : dualPresentation && slideSrcs.length === 1 ? (
            <div className="absolute inset-0 flex items-center justify-center bg-stone-100 px-6 sm:px-10">
              <div
                className={`relative aspect-square w-[min(100%,520px)] max-h-[min(100%,85vw)] ${enlargeOnDoubleClick ? 'cursor-zoom-in' : ''}`}
                onDoubleClick={
                  enlargeOnDoubleClick
                    ? (ev) => {
                        ev.stopPropagation();
                        openExpandedFromSlide(slideSrcs[0]);
                      }
                    : undefined
                }
                title={enlargeOnDoubleClick ? 'Double-click to enlarge photo' : undefined}
              >
                <ResponsiveFillImage
                  src={slideSrcs[0]}
                  alt={`${alt}, photo ${slideIndex * 2 + 1}`}
                  priority={priority && slideIndex === 0}
                  className={imageClass}
                  sizes="(max-width: 768px) 85vw, 520px"
                  quality={75}
                />
              </div>
            </div>
          ) : (
            <div
              className={`absolute inset-0 ${enlargeOnDoubleClick ? 'cursor-zoom-in' : ''}`}
              onDoubleClick={
                enlargeOnDoubleClick
                  ? (ev) => {
                      ev.stopPropagation();
                      openExpandedFromSlide(slideSrcs[0]);
                    }
                  : undefined
              }
              title={enlargeOnDoubleClick ? 'Double-click to enlarge photo' : undefined}
            >
              <ResponsiveFillImage
                src={slideSrcs[0]}
                alt={`${alt} - Image ${slideIndex + 1}`}
                priority={priority && slideIndex === 0}
                className={imageClass}
                sizes={sizes}
                quality={75}
              />
            </div>
          )}
        </div>
        );
      })}

      {slideCount > 12 ? (
        <p
          className={`absolute bottom-4 right-4 z-20 px-2.5 py-1 text-xs tracking-wider tabular-nums ${
            variant === 'venue'
              ? 'bg-white/90 text-riviera-text'
              : 'bg-black/45 text-white'
          }`}
          aria-live="polite"
          aria-atomic="true"
        >
          {currentIndex + 1} / {slideCount}
        </p>
      ) : slideCount > 1 ? (
        <div
          className={`absolute bottom-6 right-6 z-20 flex max-w-[calc(100%-3rem)] flex-wrap justify-end gap-2 ${
            variant === 'venue' ? '[&_button]:shadow-sm' : ''
          }`}
        >
          {Array.from({ length: slideCount }, (_, index) => (
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
              aria-label={
                dualPresentation
                  ? `Go to slide ${index + 1} of ${slideCount}`
                  : `Go to image ${index + 1} of ${slideCount}`
              }
            />
          ))}
        </div>
      ) : null}
    </div>

    {expandedSrc && (
      <div
        className="fixed inset-0 z-[100] flex flex-col bg-black/94"
        role="dialog"
        aria-modal="true"
        aria-label="Enlarged menu photo preview"
      >
        <div
          className="flex flex-wrap shrink-0 items-center justify-between gap-2 border-b border-white/15 px-3 py-2 text-white sm:px-4"
          onClick={(ev) => ev.stopPropagation()}
        >
          <p className="text-[11px] tracking-wider opacity-85 sm:text-xs">Use plus and minus to zoom. Escape to close.</p>
          <div className="flex items-center gap-2">
            <span className="text-xs opacity-85 min-w-[3.25rem] text-right">{Math.round(expandedZoom * 100)}%</span>
            <button
              type="button"
              onClick={() => bumpExpandedZoom(-0.25)}
              className="rounded border border-white/30 px-2.5 py-1 text-sm leading-none hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Zoom out photo"
            >
              −
            </button>
            <button
              type="button"
              onClick={() => bumpExpandedZoom(0.25)}
              className="rounded border border-white/30 px-2.5 py-1 text-sm leading-none hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Zoom in photo"
            >
              +
            </button>
            <button
              type="button"
              onClick={closeExpanded}
              className="rounded border border-white/30 px-2.5 py-1 text-xs tracking-wider hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              aria-label="Close enlarged photo"
            >
              CLOSE
            </button>
          </div>
        </div>
        <div
          className="relative flex flex-1 min-h-0 items-center justify-center overflow-auto px-4 py-4 bg-black"
          onClick={closeExpanded}
        >
          <div
            onClick={(ev) => ev.stopPropagation()}
            className={`relative flex max-h-[min(88vh,900px)] max-w-[min(1200px,96vw)] items-center justify-center ${reducedMotion ? '' : 'transition-transform duration-150 ease-out'}`}
            style={{
              transformOrigin: 'center center',
              transform: `scale(${expandedZoom})`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={expandedSrc}
              alt={altForImage(expandedSrc, `${alt} enlarged view`)}
              className="max-h-[78vh] w-auto max-w-[min(1200px,96vw)] object-contain select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>
    )}
    </>
  );
}
