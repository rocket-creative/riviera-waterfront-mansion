'use client';

import Image from 'next/image';
import { useStaggerChildren, useScrollTriggerCleanup } from '../../lib/useAnimations';

interface TourDetailClientProps {
  images: string[];
  sectionTitle: string;
}

export default function TourDetailClient({ images, sectionTitle }: TourDetailClientProps) {
  useScrollTriggerCleanup();
  const galleryRef = useStaggerChildren('.gallery-image', { stagger: 0.1, duration: 0.8 });

  return (
    <div ref={galleryRef as any} className="max-w-7xl mx-auto">
      {/* Symmetrical grid - all images same aspect ratio for level alignment */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {images.map((imagePath, index) => (
          <div 
            key={imagePath}
            className="gallery-image relative overflow-hidden group cursor-pointer aspect-[4/3]"
          >
            <Image 
              src={imagePath}
              alt={`${sectionTitle} photo ${index + 1} at Riviera Waterfront Mansion wedding venue in Massapequa, Long Island`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              quality={85}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </div>
  );
}
