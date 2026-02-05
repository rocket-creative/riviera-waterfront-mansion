/**
 * Hover scale wrapper component
 * Applies smooth scale animation on hover
 */

'use client';

import React, { ReactNode, forwardRef } from 'react';
import { useScaleHover, useLiftHover, useMagneticHover } from '@/app/lib/useAnimations';

interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  effect?: 'scale' | 'lift' | 'magnetic';
  scale?: number;
  duration?: number;
  strength?: number;
  as?: React.ElementType;
}

export const HoverScale = forwardRef<HTMLElement, HoverScaleProps>(
  ({ 
    children, 
    className = '', 
    effect = 'scale',
    scale = 1.05,
    duration = 0.6,
    strength = 0.3,
    as = 'div' 
  }, externalRef) => {
    const scaleRef = useScaleHover({ scale, duration });
    const liftRef = useLiftHover({ scale, duration });
    const magneticRef = useMagneticHover(strength);

    const getRef = () => {
      switch (effect) {
        case 'lift':
          return liftRef;
        case 'magnetic':
          return magneticRef;
        default:
          return scaleRef;
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

HoverScale.displayName = 'HoverScale';
