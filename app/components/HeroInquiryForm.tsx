'use client';

import { useState, useTransition } from 'react';
import { submitQuickInquiry } from '../actions/quickInquiry';

export default function HeroInquiryForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: any } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const response = await submitQuickInquiry(formData);
      setResult(response);
      
      if (response.success) {
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setResult(null), 5000);
      }
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      {result?.success && (
        <div className="mb-4 p-4 bg-green-50 border border-green-200 text-green-800 text-sm" role="alert">
          {result.message}
        </div>
      )}

      {result?.error && typeof result.error === 'string' && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 text-red-800 text-sm" role="alert">
          {result.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white/95 backdrop-blur-sm p-6 md:p-8 shadow-2xl">
        <div className="mb-4">
          <p className="text-riviera-gold text-xs tracking-widest mb-2 text-center">CHECK AVAILABILITY</p>
          <h3 className="font-cormorant text-2xl md:text-3xl font-light text-riviera-text text-center mb-6">
            Reserve your wedding date
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-4">
          <div>
            <label htmlFor="hero-name" className="block text-xs tracking-wider text-riviera-text mb-2">
              NAME *
            </label>
            <input
              type="text"
              id="hero-name"
              name="name"
              required
              className="w-full px-3 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors text-sm"
              aria-required="true"
            />
            {result?.error?.name && (
              <p className="mt-1 text-xs text-red-600">{result.error.name[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="hero-email" className="block text-xs tracking-wider text-riviera-text mb-2">
              EMAIL *
            </label>
            <input
              type="email"
              id="hero-email"
              name="email"
              required
              className="w-full px-3 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors text-sm"
              aria-required="true"
            />
            {result?.error?.email && (
              <p className="mt-1 text-xs text-red-600">{result.error.email[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="hero-weddingDate" className="block text-xs tracking-wider text-riviera-text mb-2">
              WEDDING DATE *
            </label>
            <input
              type="date"
              id="hero-weddingDate"
              name="weddingDate"
              required
              className="w-full px-3 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors text-sm"
              aria-required="true"
            />
            {result?.error?.weddingDate && (
              <p className="mt-1 text-xs text-red-600">{result.error.weddingDate[0]}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-riviera-gold text-white px-6 py-4 text-sm font-light tracking-widest hover:bg-riviera-dark-brown transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
        >
          {isPending ? 'CHECKING AVAILABILITY...' : 'CHECK AVAILABILITY →'}
        </button>
        
        <p className="text-xs text-center text-white/70 mt-3">
          Limited dates available for 2026 and 2027
        </p>
      </form>
    </div>
  );
}
