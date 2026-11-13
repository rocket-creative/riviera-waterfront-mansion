'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

/**
 * Phone-only ticket bar pinned to the bottom of the NYE page.
 * It steps aside while the checkout itself is on screen.
 */
export default function NyeStickyBar({
  targetId,
  price,
}: {
  targetId: string;
  price: string;
}) {
  const [checkoutVisible, setCheckoutVisible] = useState(false);

  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setCheckoutVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [targetId]);

  // Same contract as MobileStickyCTA: lets the cookie banner sit above the bar.
  useLayoutEffect(() => {
    const root = document.documentElement;
    const query = window.matchMedia('(max-width: 809px)');
    const apply = () => {
      root.style.setProperty(
        '--sticky-offset',
        query.matches && !checkoutVisible ? '56px' : '0px'
      );
    };
    apply();
    query.addEventListener('change', apply);
    return () => {
      query.removeEventListener('change', apply);
      root.style.removeProperty('--sticky-offset');
    };
  }, [checkoutVisible]);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        checkoutVisible ? 'translate-y-full' : 'translate-y-0'
      }`}
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      aria-hidden={checkoutVisible}
    >
      <div className="grid grid-cols-[1fr_auto] items-stretch bg-riviera-text">
        <div className="flex flex-col justify-center px-4 min-h-[56px]">
          <span className="text-[9px] tracking-[0.2em] font-light text-white/60">
            NEW YEAR&apos;S EVE GALA · DEC 31
          </span>
          <span className="font-cormorant text-lg leading-tight text-white">
            ${price} per guest
          </span>
        </div>
        <a
          href={`#${targetId}`}
          tabIndex={checkoutVisible ? -1 : undefined}
          className="flex items-center justify-center px-6 bg-riviera-gold text-white text-xs tracking-widest font-light min-h-[56px] active:bg-riviera-gold/80 transition-colors"
        >
          GET TICKETS →
        </a>
      </div>
    </div>
  );
}
