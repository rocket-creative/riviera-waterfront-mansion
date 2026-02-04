'use client';

import { useState, useTransition } from 'react';
import { submitInquiryForm } from '../actions/inquiry';

interface InquiryFormProps {
  variant?: 'default' | 'inline';
  className?: string;
}

export default function InquiryForm({ variant = 'default', className = '' }: InquiryFormProps) {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: any } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const response = await submitInquiryForm(formData);
      setResult(response);
      
      if (response.success) {
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setResult(null), 5000);
      }
    });
  };

  return (
    <div className={className}>
      {result?.success && (
        <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 text-sm" role="alert">
          {result.message}
        </div>
      )}

      {result?.error && typeof result.error === 'string' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 text-sm" role="alert">
          {result.error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm tracking-wider text-riviera-text mb-2">
              NAME *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
              aria-required="true"
            />
            {result?.error?.name && (
              <p className="mt-2 text-sm text-red-600">{result.error.name[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm tracking-wider text-riviera-text mb-2">
              EMAIL *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
              aria-required="true"
            />
            {result?.error?.email && (
              <p className="mt-2 text-sm text-red-600">{result.error.email[0]}</p>
            )}
          </div>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm tracking-wider text-riviera-text mb-2">
            PHONE *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            placeholder="(555) 123 4567"
            className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
            aria-required="true"
          />
          {result?.error?.phone && (
            <p className="mt-2 text-sm text-red-600">{result.error.phone[0]}</p>
          )}
        </div>

        {/* Wedding Date and Guest Count Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="weddingDate" className="block text-sm tracking-wider text-riviera-text mb-2">
              WEDDING DATE *
            </label>
            <input
              type="date"
              id="weddingDate"
              name="weddingDate"
              required
              className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
              aria-required="true"
            />
            {result?.error?.weddingDate && (
              <p className="mt-2 text-sm text-red-600">{result.error.weddingDate[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="guestCount" className="block text-sm tracking-wider text-riviera-text mb-2">
              GUEST COUNT *
            </label>
            <input
              type="number"
              id="guestCount"
              name="guestCount"
              required
              placeholder="Est. number of guests"
              min="1"
              max="350"
              className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
              aria-required="true"
            />
            {result?.error?.guestCount && (
              <p className="mt-2 text-sm text-red-600">{result.error.guestCount[0]}</p>
            )}
          </div>
        </div>

        {/* Desired Season and Day of Week Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="desiredSeason" className="block text-sm tracking-wider text-riviera-text mb-2">
              DESIRED SEASON *
            </label>
            <select
              id="desiredSeason"
              name="desiredSeason"
              required
              className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
              aria-required="true"
            >
              <option value="">Select season</option>
              <option value="Spring">Spring</option>
              <option value="Summer">Summer</option>
              <option value="Fall">Fall</option>
              <option value="Winter">Winter</option>
            </select>
            {result?.error?.desiredSeason && (
              <p className="mt-2 text-sm text-red-600">{result.error.desiredSeason[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="dayOfWeek" className="block text-sm tracking-wider text-riviera-text mb-2">
              PREFERRED DAY *
            </label>
            <select
              id="dayOfWeek"
              name="dayOfWeek"
              required
              className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
              aria-required="true"
            >
              <option value="">Select day</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            {result?.error?.dayOfWeek && (
              <p className="mt-2 text-sm text-red-600">{result.error.dayOfWeek[0]}</p>
            )}
          </div>
        </div>

        {/* Second Choice Day and Ceremony Location Row */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="secondChoiceDay" className="block text-sm tracking-wider text-riviera-text mb-2">
              SECOND CHOICE DAY
            </label>
            <select
              id="secondChoiceDay"
              name="secondChoiceDay"
              className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
            >
              <option value="">Select day</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
            {result?.error?.secondChoiceDay && (
              <p className="mt-2 text-sm text-red-600">{result.error.secondChoiceDay[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="ceremonyLocation" className="block text-sm tracking-wider text-riviera-text mb-2">
              CEREMONY LOCATION *
            </label>
            <select
              id="ceremonyLocation"
              name="ceremonyLocation"
              required
              className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
              aria-required="true"
            >
              <option value="">Select location</option>
              <option value="On Site">On Site</option>
              <option value="Off Site">Off Site</option>
            </select>
            {result?.error?.ceremonyLocation && (
              <p className="mt-2 text-sm text-red-600">{result.error.ceremonyLocation[0]}</p>
            )}
          </div>
        </div>

        {/* Additional Message */}
        <div>
          <label htmlFor="message" className="block text-sm tracking-wider text-riviera-text mb-2">
            ADDITIONAL MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us more about your vision for your special day"
            className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors resize-none"
          />
          {result?.error?.message && (
            <p className="mt-2 text-sm text-red-600">{result.error.message[0]}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-dark-brown transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
        >
          {isPending ? 'SENDING...' : 'SUBMIT INQUIRY →'}
        </button>
      </form>
    </div>
  );
}
