/**
 * CSS lift on hover. No JS, so buttons stay in the server HTML.
 */

import React, { ReactNode } from 'react';

interface HoverScaleProps {
  children: ReactNode;
  className?: string;
  effect?: 'scale' | 'lift' | 'magnetic';
  scale?: number;
  duration?: number;
  strength?: number;
  as?: React.ElementType;
}

const effectClass = {
  scale: 'transition-transform duration-300 ease-out hover:scale-105 active:scale-100',
  lift: 'transition-transform duration-300 ease-out hover:-translate-y-1 active:translate-y-0',
  magnetic: 'transition-transform duration-300 ease-out hover:scale-[1.03] active:scale-100',
};

export function HoverScale({
  children,
  className = '',
  effect = 'scale',
  as: Component = 'div',
}: HoverScaleProps) {
  return <Component className={`${effectClass[effect]} ${className}`.trim()}>{children}</Component>;
}
