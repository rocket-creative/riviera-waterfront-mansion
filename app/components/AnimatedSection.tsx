/**
 * Layout wrapper. Entrance motion used to hide content until GSAP ran;
 * sections now paint at full opacity.
 */

import React, { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInScale' | 'revealFromLeft' | 'revealFromRight' | 'imageReveal';
  delay?: number;
  duration?: number;
  as?: React.ElementType;
}

export function AnimatedSection({
  children,
  className = '',
  as: Component = 'section',
}: AnimatedSectionProps) {
  return <Component className={className}>{children}</Component>;
}
