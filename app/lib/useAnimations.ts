/**
 * React hooks for GSAP animations
 * Use in Client Components to apply entrance and hover animations
 */

'use client';

import { useEffect, useRef } from 'react';
import {
  fadeInUp,
  fadeInScale,
  revealFromLeft,
  revealFromRight,
  staggerChildren,
  imageReveal,
  parallaxScroll,
  magneticHover,
  liftHover,
  scaleHover,
  killScrollTriggers,
  respectReducedMotion,
} from './animations';

/**
 * Fade in with upward slide entrance
 */
export const useFadeInUp = (
  options?: Parameters<typeof fadeInUp>[1]
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || respectReducedMotion()) return;

    const animation = fadeInUp(ref.current, options);

    return () => {
      animation?.kill();
    };
  }, [options]);

  return ref;
};

/**
 * Fade in with scale entrance
 */
export const useFadeInScale = (
  options?: Parameters<typeof fadeInScale>[1]
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || respectReducedMotion()) return;

    const animation = fadeInScale(ref.current, options);

    return () => {
      animation?.kill();
    };
  }, [options]);

  return ref;
};

/**
 * Reveal from left entrance
 */
export const useRevealFromLeft = (
  options?: Parameters<typeof revealFromLeft>[1]
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || respectReducedMotion()) return;

    const animation = revealFromLeft(ref.current, options);

    return () => {
      animation?.kill();
    };
  }, [options]);

  return ref;
};

/**
 * Reveal from right entrance
 */
export const useRevealFromRight = (
  options?: Parameters<typeof revealFromRight>[1]
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || respectReducedMotion()) return;

    const animation = revealFromRight(ref.current, options);

    return () => {
      animation?.kill();
    };
  }, [options]);

  return ref;
};

/**
 * Stagger children entrance
 */
export const useStaggerChildren = (
  childrenSelector: string,
  options?: Omit<Parameters<typeof staggerChildren>[2], 'container'>
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || respectReducedMotion()) return;

    const animation = staggerChildren(ref.current, childrenSelector, options);

    return () => {
      animation?.kill();
    };
  }, [childrenSelector, options]);

  return ref;
};

/**
 * Image reveal with mask entrance
 */
export const useImageReveal = (
  options?: Parameters<typeof imageReveal>[1]
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || respectReducedMotion()) return;

    const animation = imageReveal(ref.current, options);

    return () => {
      animation?.kill();
    };
  }, [options]);

  return ref;
};

/**
 * Parallax scroll effect
 */
export const useParallaxScroll = (
  options?: Parameters<typeof parallaxScroll>[1]
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || respectReducedMotion()) return;

    const scrollTrigger = parallaxScroll(ref.current, options);

    return () => {
      scrollTrigger?.kill();
    };
  }, [options]);

  return ref;
};

/**
 * Magnetic hover effect
 */
export const useMagneticHover = (strength: number = 0.3) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || respectReducedMotion()) return;

    const cleanup = magneticHover(ref.current, strength);

    return cleanup;
  }, [strength]);

  return ref;
};

/**
 * Lift hover effect
 */
export const useLiftHover = (
  options?: Parameters<typeof liftHover>[1]
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || respectReducedMotion()) return;

    const cleanup = liftHover(ref.current, options);

    return cleanup;
  }, [options]);

  return ref;
};

/**
 * Scale hover effect
 */
export const useScaleHover = (
  options?: Parameters<typeof scaleHover>[1]
) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || respectReducedMotion()) return;

    const cleanup = scaleHover(ref.current, options);

    return cleanup;
  }, [options]);

  return ref;
};

/**
 * Cleanup all ScrollTriggers on unmount
 */
export const useScrollTriggerCleanup = () => {
  useEffect(() => {
    return () => {
      killScrollTriggers();
    };
  }, []);
};
