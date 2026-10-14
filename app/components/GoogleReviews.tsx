import type { GoogleReview } from '../lib/googleReviews';

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <div className="flex-none w-80 sm:w-96 bg-white/10 p-6 border border-white/5">
      <div className="flex items-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < review.rating ? 'text-riviera-gold' : 'text-white/20'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-sm md:text-base font-light leading-relaxed mb-4 text-white line-clamp-5">
        {review.text}
      </p>
      <p className="text-xs tracking-wider text-riviera-gold font-medium">
        — {review.author.toUpperCase()}
      </p>
    </div>
  );
}

export default function GoogleReviews({ reviews }: { reviews: GoogleReview[] }) {
  if (reviews.length === 0) return null;

  const mobileReviews = reviews.slice(0, 3);
  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  return (
    <div className="relative overflow-hidden py-4">
      <div className="md:hidden flex gap-4 overflow-x-auto px-4 snap-x snap-mandatory social-feed-scroll">
        {mobileReviews.map((review) => (
          <div key={review.time} className="snap-start">
            <ReviewCard review={review} />
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-riviera-text to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-riviera-text to-transparent z-10 pointer-events-none" />
        <div className="flex animate-scroll-smooth gap-6">
          {marqueeReviews.map((review, index) => (
            <ReviewCard key={`${review.time}-${index}`} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
