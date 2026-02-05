/**
 * Reusable animated section wrapper
 * Applies entrance animations to any content
 */

'use client';

import React, { ReactNode, forwardRef } from 'react';
import { useFadeInUp, useRevealFromLeft, useRevealFromRight, useFadeInScale, useImageReveal } from '@/app/lib/useAnimations';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInScale' | 'revealFromLeft' | 'revealFromRight' | 'imageReveal';
  delay?: number;
  duration?: number;
  as?: React.ElementType;
}

export const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ children, className = '', animation = 'fadeInUp', delay = 0, duration = 1.2, as = 'section' }, externalRef) => {
    const fadeInUpRef = useFadeInUp({ delay, duration });
    const fadeInScaleRef = useFadeInScale({ delay, duration });
    const revealFromLeftRef = useRevealFromLeft({ delay, duration });
    const revealFromRightRef = useRevealFromRight({ delay, duration });
    const imageRevealRef = useImageReveal({ delay, duration });

    const getRef = () => {
      switch (animation) {
        case 'fadeInScale':
          return fadeInScaleRef;
        case 'revealFromLeft':
          return revealFromLeftRef;
        case 'revealFromRight':
          return revealFromRightRef;
        case 'imageReveal':
          return imageRevealRef;
        default:
          return fadeInUpRef;
      }
    };

    const Component = as;
    const ref = externalRef || getRef();

    return (
      <Component ref={ref as any} className={className}>
        {children}
      </Component>
    );
  }
);

AnimatedSection.displayName = 'AnimatedSection';
