'use client';

import { useEffect, useState, type ReactNode } from 'react';

// Browsers fire a timer immediately if the delay is over about 24.8 days,
// so long waits are taken in steps.
const MAX_TIMER_MS = 2_000_000_000;

/** True once `endsAt` has passed. Flips at that moment even on a page left open. */
export function useExpired(endsAt: string): boolean {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const end = new Date(endsAt).getTime();
    if (Number.isNaN(end)) return;

    let timer: number | undefined;
    const check = () => {
      const remaining = end - Date.now();
      if (remaining <= 0) {
        setExpired(true);
        return;
      }
      timer = window.setTimeout(check, Math.min(remaining, MAX_TIMER_MS));
    };
    check();
    return () => window.clearTimeout(timer);
  }, [endsAt]);

  return expired;
}

/** Shows its children until `endsAt`, then removes them. */
export default function ExpiresAt({ endsAt, children }: { endsAt: string; children: ReactNode }) {
  const expired = useExpired(endsAt);
  if (expired) return null;
  return <>{children}</>;
}
