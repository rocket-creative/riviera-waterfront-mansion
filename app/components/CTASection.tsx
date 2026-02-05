'use client';

import Link from 'next/link';
import { HoverScale } from './HoverScale';
import { AnimatedSection } from './AnimatedSection';

type CTAVariant = 'primary' | 'secondary' | 'minimal';
type CTAIntent = 'schedule' | 'call' | 'download' | 'tour' | 'menu' | 'vendors' | 'inquiry';

interface CTAButton {
  text: string;
  href: string;
  intent: CTAIntent;
  variant?: CTAVariant;
  external?: boolean;
  download?: boolean;
}

interface CTASectionProps {
  eyebrow?: string;
  headline: string;
  description?: string;
  buttons: CTAButton[];
  background?: 'white' | 'neutral' | 'dark' | 'gold';
  className?: string;
}

const intentColors = {
  schedule: 'bg-riviera-gold hover:bg-riviera-text',
  call: 'border-2 border-riviera-gold text-riviera-gold hover:bg-riviera-gold hover:text-white',
  download: 'bg-riviera-text hover:bg-riviera-gold',
  tour: 'border-2 border-riviera-gold text-riviera-gold hover:bg-riviera-gold hover:text-white',
  menu: 'border-2 border-white text-white hover:bg-white hover:text-riviera-text',
  vendors: 'border-2 border-white text-white hover:bg-white hover:text-riviera-text',
  inquiry: 'bg-riviera-gold hover:bg-white hover:text-riviera-text',
};

const intentColorsDark = {
  schedule: 'bg-riviera-gold hover:bg-white hover:text-riviera-text',
  call: 'border-2 border-white text-white hover:bg-white hover:text-riviera-text',
  download: 'bg-white text-riviera-text hover:bg-riviera-gold hover:text-white',
  tour: 'border-2 border-white text-white hover:bg-white hover:text-riviera-text',
  menu: 'border-2 border-white text-white hover:bg-white hover:text-riviera-text',
  vendors: 'border-2 border-white text-white hover:bg-white hover:text-riviera-text',
  inquiry: 'bg-riviera-gold hover:bg-white hover:text-riviera-text',
};

export default function CTASection({
  eyebrow,
  headline,
  description,
  buttons,
  background = 'white',
  className = '',
}: CTASectionProps) {
  const isDark = background === 'dark';
  const bgClass = {
    white: 'bg-white',
    neutral: 'bg-riviera-neutral',
    dark: 'bg-riviera-text',
    gold: 'bg-riviera-gold',
  }[background];

  const textColor = isDark || background === 'gold' ? 'text-white' : 'text-riviera-text';
  const descColor = isDark || background === 'gold' ? 'text-white/90' : 'text-riviera-text/70';

  return (
    <section className={`py-20 md:py-28 px-6 sm:px-8 lg:px-12 ${bgClass} text-center ${className}`}>
      <AnimatedSection animation="fadeInUp" className="max-w-4xl mx-auto" as="div">
        {eyebrow && (
          <p className="text-riviera-gold text-sm tracking-widest mb-4 font-light">
            {eyebrow}
          </p>
        )}
        <h2 className={`font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-6 leading-tight ${textColor}`}>
          {headline}
        </h2>
        {description && (
          <p className={`text-lg font-light mb-10 max-w-2xl mx-auto ${descColor}`}>
            {description}
          </p>
        )}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          {buttons.map((button, index) => {
            const colorScheme = isDark ? intentColorsDark[button.intent] : intentColors[button.intent];
            
            if (button.external) {
              return (
                <HoverScale key={index} effect="lift">
                  <a
                    href={button.href}
                    download={button.download}
                    target={button.download ? undefined : '_blank'}
                    rel={button.download ? undefined : 'noopener noreferrer'}
                    className={`px-10 py-5 text-sm font-light tracking-widest transition-all text-center block ${colorScheme} focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2`}
                  >
                    {button.text}
                  </a>
                </HoverScale>
              );
            }

            return (
              <HoverScale key={index} effect="lift">
                <Link
                  href={button.href}
                  className={`px-10 py-5 text-sm font-light tracking-widest transition-all text-center block ${colorScheme} focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2`}
                >
                  {button.text}
                </Link>
              </HoverScale>
            );
          })}
        </div>
      </AnimatedSection>
    </section>
  );
}
