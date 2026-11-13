'use client';

import { useEffect, useState } from 'react';

type Parts = { days: number; hours: number; minutes: number; seconds: number };

function remaining(target: number): Parts | null {
  const diff = target - Date.now();
  if (diff <= 0) return null;
  const totalSeconds = Math.floor(diff / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

/**
 * Live countdown to an ISO date. Renders placeholder dashes on the server and
 * fills in after mount, so the static page never disagrees with the browser clock.
 */
export default function EventCountdown({
  to,
  label,
  size = 'lg',
  tone = 'light',
  className = '',
}: {
  to: string;
  label: string;
  size?: 'sm' | 'lg';
  /** 'light' sits on white or beige; 'dark' sits on the purple homepage promotion. */
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const target = new Date(to).getTime();
  const [parts, setParts] = useState<Parts | null | undefined>(undefined);

  useEffect(() => {
    const tick = () => setParts(remaining(target));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [target]);

  // Event has started: nothing to count down to.
  if (parts === null) return null;

  const cells: { value: number | undefined; unit: string }[] = [
    { value: parts?.days, unit: 'DAYS' },
    { value: parts?.hours, unit: 'HOURS' },
    { value: parts?.minutes, unit: 'MIN' },
    { value: parts?.seconds, unit: 'SEC' },
  ];

  const number =
    size === 'lg'
      ? 'text-4xl sm:text-5xl'
      : 'text-2xl sm:text-3xl';
  const cell = size === 'lg' ? 'min-w-[4.25rem] sm:min-w-[5rem] px-2 py-3 sm:py-4' : 'min-w-[3.25rem] px-1.5 py-2';

  const frame =
    tone === 'dark' ? 'border-white/20 bg-white/5' : 'border-riviera-neutral bg-riviera-neutral-light';
  const unitColor = tone === 'dark' ? 'text-white/60' : 'text-riviera-text/55';

  return (
    <div
      role="timer"
      aria-label={
        parts
          ? `${label}: ${parts.days} days, ${parts.hours} hours, ${parts.minutes} minutes`
          : label
      }
      className={`flex gap-2 sm:gap-3 ${className}`}
    >
      {cells.map(({ value, unit }) => (
        <div
          key={unit}
          aria-hidden="true"
          className={`${cell} text-center border ${frame}`}
        >
          <div className={`font-cormorant font-light leading-none ${tone === 'dark' ? 'text-[#e9c98a]' : 'text-riviera-gold'} tabular-nums ${number}`}>
            {value === undefined ? '--' : String(value).padStart(2, '0')}
          </div>
          <div className={`mt-1.5 text-[9px] sm:text-[10px] tracking-[0.2em] font-light ${unitColor}`}>
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}
