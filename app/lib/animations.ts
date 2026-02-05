/**
 * GSAP Animation Utilities
 * Classy, sophisticated animations for Riviera Waterfront Mansion
 * 
 * IMPORTANT: Per GSAP + CSS VISIBILITY rules:
 * - GSAP controls all visibility/opacity
 * - No CSS opacity-0, invisible, or hidden classes on animated elements
 * - Use GSAP set() for initial states
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================================================
// ENTRANCE ANIMATIONS
// ============================================================================

/**
 * Fade in with upward slide - Classic, elegant entrance
 * @param element - Target element(s)
 * @param options - Animation options
 */
export const fadeInUp = (
  element: gsap.TweenTarget,
  options: {
    delay?: number;
    duration?: number;
    distance?: number;
    ease?: string;
    scrollTrigger?: boolean;
  } = {}
) => {
  const {
    delay = 0,
    duration = 1.2,
    distance = 60,
    ease = 'power3.out',
    scrollTrigger = true,
  } = options;

  // Set initial state (GSAP controls visibility, not CSS)
  gsap.set(element, { 
    opacity: 0, 
    y: distance,
    willChange: 'transform, opacity'
  });

  if (scrollTrigger) {
    return gsap.to(element, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set(element, { willChange: 'auto' });
      }
    });
  }

  return gsap.to(element, {
    opacity: 1,
    y: 0,
    duration,
    delay,
    ease,
    onComplete: () => {
      gsap.set(element, { willChange: 'auto' });
    }
  });
};

/**
 * Fade in with scale - Elegant zoom entrance
 */
export const fadeInScale = (
  element: gsap.TweenTarget,
  options: {
    delay?: number;
    duration?: number;
    scale?: number;
    ease?: string;
    scrollTrigger?: boolean;
  } = {}
) => {
  const {
    delay = 0,
    duration = 1,
    scale = 0.9,
    ease = 'power2.out',
    scrollTrigger = true,
  } = options;

  gsap.set(element, { 
    opacity: 0, 
    scale,
    willChange: 'transform, opacity'
  });

  if (scrollTrigger) {
    return gsap.to(element, {
      opacity: 1,
      scale: 1,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set(element, { willChange: 'auto' });
      }
    });
  }

  return gsap.to(element, {
    opacity: 1,
    scale: 1,
    duration,
    delay,
    ease,
    onComplete: () => {
      gsap.set(element, { willChange: 'auto' });
    }
  });
};

/**
 * Reveal from left - Slide in entrance
 */
export const revealFromLeft = (
  element: gsap.TweenTarget,
  options: {
    delay?: number;
    duration?: number;
    distance?: number;
    ease?: string;
    scrollTrigger?: boolean;
  } = {}
) => {
  const {
    delay = 0,
    duration = 1.2,
    distance = 100,
    ease = 'power3.out',
    scrollTrigger = true,
  } = options;

  gsap.set(element, { 
    opacity: 0, 
    x: -distance,
    willChange: 'transform, opacity'
  });

  if (scrollTrigger) {
    return gsap.to(element, {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set(element, { willChange: 'auto' });
      }
    });
  }

  return gsap.to(element, {
    opacity: 1,
    x: 0,
    duration,
    delay,
    ease,
    onComplete: () => {
      gsap.set(element, { willChange: 'auto' });
    }
  });
};

/**
 * Reveal from right - Slide in entrance
 */
export const revealFromRight = (
  element: gsap.TweenTarget,
  options: {
    delay?: number;
    duration?: number;
    distance?: number;
    ease?: string;
    scrollTrigger?: boolean;
  } = {}
) => {
  const {
    delay = 0,
    duration = 1.2,
    distance = 100,
    ease = 'power3.out',
    scrollTrigger = true,
  } = options;

  gsap.set(element, { 
    opacity: 0, 
    x: distance,
    willChange: 'transform, opacity'
  });

  if (scrollTrigger) {
    return gsap.to(element, {
      opacity: 1,
      x: 0,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set(element, { willChange: 'auto' });
      }
    });
  }

  return gsap.to(element, {
    opacity: 1,
    x: 0,
    duration,
    delay,
    ease,
    onComplete: () => {
      gsap.set(element, { willChange: 'auto' });
    }
  });
};

/**
 * Stagger children - Sequential reveal of multiple elements
 */
export const staggerChildren = (
  container: gsap.TweenTarget,
  children: string,
  options: {
    delay?: number;
    duration?: number;
    stagger?: number;
    distance?: number;
    ease?: string;
    scrollTrigger?: boolean;
  } = {}
) => {
  const {
    delay = 0,
    duration = 0.8,
    stagger = 0.15,
    distance = 40,
    ease = 'power2.out',
    scrollTrigger = true,
  } = options;

  const elements = gsap.utils.toArray(`${container as string} ${children}`);

  gsap.set(elements, { 
    opacity: 0, 
    y: distance,
    willChange: 'transform, opacity'
  });

  if (scrollTrigger) {
    return gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      stagger,
      ease,
      scrollTrigger: {
        trigger: container as gsap.DOMTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set(elements, { willChange: 'auto' });
      }
    });
  }

  return gsap.to(elements, {
    opacity: 1,
    y: 0,
    duration,
    delay,
    stagger,
    ease,
    onComplete: () => {
      gsap.set(elements, { willChange: 'auto' });
    }
  });
};

/**
 * Image reveal with mask - Sophisticated image entrance
 */
export const imageReveal = (
  element: gsap.TweenTarget,
  options: {
    delay?: number;
    duration?: number;
    ease?: string;
    scrollTrigger?: boolean;
    direction?: 'up' | 'down' | 'left' | 'right';
  } = {}
) => {
  const {
    delay = 0,
    duration = 1.4,
    ease = 'power3.inOut',
    scrollTrigger = true,
    direction = 'up',
  } = options;

  const clipPaths = {
    up: {
      from: 'inset(100% 0 0 0)',
      to: 'inset(0% 0 0 0)',
    },
    down: {
      from: 'inset(0 0 100% 0)',
      to: 'inset(0% 0 0 0)',
    },
    left: {
      from: 'inset(0 100% 0 0)',
      to: 'inset(0% 0 0 0)',
    },
    right: {
      from: 'inset(0 0 0 100%)',
      to: 'inset(0% 0 0 0)',
    },
  };

  gsap.set(element, { 
    clipPath: clipPaths[direction].from,
    willChange: 'clip-path'
  });

  if (scrollTrigger) {
    return gsap.to(element, {
      clipPath: clipPaths[direction].to,
      duration,
      delay,
      ease,
      scrollTrigger: {
        trigger: element as gsap.DOMTarget,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
      onComplete: () => {
        gsap.set(element, { willChange: 'auto' });
      }
    });
  }

  return gsap.to(element, {
    clipPath: clipPaths[direction].to,
    duration,
    delay,
    ease,
    onComplete: () => {
      gsap.set(element, { willChange: 'auto' });
    }
  });
};

/**
 * Parallax scroll effect - Smooth depth on scroll
 */
export const parallaxScroll = (
  element: gsap.TweenTarget,
  options: {
    speed?: number;
    smooth?: boolean;
  } = {}
) => {
  const { speed = 0.5, smooth = true } = options;

  return ScrollTrigger.create({
    trigger: element as gsap.DOMTarget,
    start: 'top bottom',
    end: 'bottom top',
    scrub: smooth ? 1 : true,
    onUpdate: (self) => {
      gsap.to(element, {
        y: self.progress * 100 * speed,
        ease: 'none',
        overwrite: 'auto',
      });
    },
  });
};

// ============================================================================
// HOVER ANIMATIONS
// ============================================================================

/**
 * Magnetic hover effect - Element follows cursor subtly
 */
export const magneticHover = (element: HTMLElement, strength: number = 0.3) => {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    gsap.to(element, {
      x: deltaX,
      y: deltaY,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.8,
      ease: 'elastic.out(1, 0.5)',
    });
  };

  element.addEventListener('mousemove', handleMouseMove);
  element.addEventListener('mouseleave', handleMouseLeave);

  // Return cleanup function
  return () => {
    element.removeEventListener('mousemove', handleMouseMove);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * Lift effect - Elevation with shadow on hover
 */
export const liftHover = (
  element: HTMLElement,
  options: {
    scale?: number;
    y?: number;
    duration?: number;
  } = {}
) => {
  const { scale = 1.05, y = -8, duration = 0.4 } = options;

  const handleMouseEnter = () => {
    gsap.to(element, {
      scale,
      y,
      duration,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      scale: 1,
      y: 0,
      duration,
      ease: 'power2.out',
    });
  };

  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * Smooth scale hover - Simple elegant scale
 */
export const scaleHover = (
  element: HTMLElement,
  options: {
    scale?: number;
    duration?: number;
  } = {}
) => {
  const { scale = 1.08, duration = 0.6 } = options;

  const handleMouseEnter = () => {
    gsap.to(element, {
      scale,
      duration,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      scale: 1,
      duration,
      ease: 'power2.out',
    });
  };

  element.addEventListener('mouseenter', handleMouseEnter);
  element.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    element.removeEventListener('mouseenter', handleMouseEnter);
    element.removeEventListener('mouseleave', handleMouseLeave);
  };
};

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

/**
 * Kill all ScrollTriggers - Cleanup on unmount
 */
export const killScrollTriggers = () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
};

/**
 * Refresh all ScrollTriggers - Call after layout changes
 */
export const refreshScrollTriggers = () => {
  ScrollTrigger.refresh();
};

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Disable animations if user prefers reduced motion
 */
export const respectReducedMotion = () => {
  if (prefersReducedMotion()) {
    gsap.globalTimeline.clear();
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    return true;
  }
  return false;
};
