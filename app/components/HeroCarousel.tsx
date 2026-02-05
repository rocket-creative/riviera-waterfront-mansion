'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface HeroCarouselProps {
  images: string[];
  interval?: number; // Time between slides in ms
  alt?: string;
}

export default function HeroCarousel({ 
  images, 
  interval = 5000, 
  alt = "Wedding couple at Riviera Waterfront Mansion"
}: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextSlide = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setIsTransitioning(false);
    }, 500); // Half of the CSS transition duration
  }, [images.length]);

  // Auto-advance slides
  useEffect(() => {
    if (images.length <= 1) return;
    
    const timer = setInterval(nextSlide, interval);
    return () => clearInterval(timer);
  }, [images.length, interval, nextSlide]);

  // Preload next image
  useEffect(() => {
    if (images.length <= 1) return;
    
    const nextIndex = (currentIndex + 1) % images.length;
    const img = new window.Image();
    img.src = images[nextIndex];
  }, [currentIndex, images]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full overflow-hidden bg-riviera-text">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex 
              ? 'opacity-100 z-10' 
              : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={src}
            alt={`${alt} - Image ${index + 1}`}
            fill
            priority={index === 0}
            className="hero-carousel-image"
            sizes="(max-width: 1024px) 100vw, 65vw"
            quality={90}
          />
        </div>
      ))}

      {/* Subtle progress indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white w-6' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
