'use client';

import Link from 'next/link';
import Image from 'next/image';
import SlideshowImage from './SlideshowImage';
import { HoverScale } from './HoverScale';
import { AnimatedSection } from './AnimatedSection';

interface InlineCTAProps {
  eyebrow: string;
  headline: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  /** Single path string OR array for auto-slideshow */
  imageSrc: string | string[];
  imageAlt: string;
  imagePosition?: 'left' | 'right';
  background?: 'white' | 'neutral' | 'light';
}

export default function InlineCTA({
  eyebrow,
  headline,
  description,
  buttonText,
  buttonHref,
  imageSrc,
  imageAlt,
  imagePosition = 'left',
  background = 'neutral',
}: InlineCTAProps) {
  const bgClass = background === 'white' ? 'bg-white' : background === 'light' ? 'bg-riviera-neutral-light' : 'bg-riviera-neutral';
  const images = Array.isArray(imageSrc) ? imageSrc : [imageSrc];

  return (
    <section className={`relative min-h-[70vh] overflow-hidden ${bgClass}`}>
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[70vh]">
        {/* Text Column */}
        <div className={`lg:col-span-5 flex items-center ${imagePosition === 'right' ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}`}>
          <AnimatedSection animation="fadeInUp" delay={0.2} className="px-6 sm:px-10 lg:px-12 xl:px-16 py-16 lg:py-20 w-full" as="div">
            <p className="text-riviera-gold text-sm tracking-widest mb-4">{eyebrow}</p>
            <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide text-riviera-text mb-6 leading-tight">
              {headline}
            </h2>
            <p className="text-base md:text-lg font-light text-riviera-text/80 mb-8 leading-relaxed">
              {description}
            </p>
            <HoverScale effect="lift">
              <Link
                href={buttonHref}
                className="bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2 text-center block max-w-md w-full"
              >
                {buttonText}
              </Link>
            </HoverScale>
          </AnimatedSection>
        </div>

        {/* Image Column */}
        <div className={`relative lg:col-span-7 h-[50svh] lg:h-auto ${imagePosition === 'right' ? 'order-2 lg:order-1' : 'order-1 lg:order-2'} overflow-hidden`}>
          {images.length > 1 ? (
            <SlideshowImage
              images={images}
              alt={imageAlt}
              interval={6000}
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={85}
              showPlaceholder
            />
          ) : (
            <Image
              src={images[0] ?? ''}
              alt={imageAlt}
              fill
              className="object-cover object-center transition-transform duration-700 hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 58vw"
              quality={85}
            />
          )}
        </div>
      </div>
    </section>
  );
}
