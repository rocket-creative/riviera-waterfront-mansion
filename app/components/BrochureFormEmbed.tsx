'use client';

import { useState, useRef } from 'react';
import { submitBrochureRequest } from '../actions/brochureRequest';

type FieldErrors = Partial<Record<'name' | 'email' | 'phone', string[]>>;

export default function BrochureFormEmbed() {
  const [pending, setPending] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    setFieldErrors({});
    setServerError('');

    const formData = new FormData(e.currentTarget);
    const result = await submitBrochureRequest(formData);

    setPending(false);

    if (!result.success) {
      if (typeof result.error === 'string') {
        setServerError(result.error);
      } else {
        setFieldErrors(result.error as FieldErrors);
      }
      return;
    }

    setSuccessMessage(result.message ?? '');
    formRef.current?.reset();
  }

  if (successMessage) {
    return (
      <div className="border border-riviera-gold/30 bg-riviera-neutral/40 p-8 md:p-10">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-riviera-gold/20 flex items-center justify-center shrink-0 mt-0.5">
            <svg className="w-5 h-5 text-riviera-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div>
            <h3 className="font-cormorant text-xl font-light tracking-wide text-riviera-text mb-2">
              Request received
            </h3>
            <p className="text-sm font-light text-riviera-text/70 leading-relaxed">
              {successMessage}
            </p>
            <p className="text-xs font-light text-riviera-text/40 mt-4">
              Questions? Call us at{' '}
              <a
                href="tel:+15165415020"
                className="text-riviera-gold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold"
              >
                (516) 541 5020
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="brochure-name" className="block text-xs tracking-widest text-riviera-text/60 mb-1.5 uppercase">
          Full Name <span aria-hidden="true" className="text-riviera-gold">*</span>
        </label>
        <input
          id="brochure-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-describedby={fieldErrors.name ? 'brochure-name-error' : undefined}
          className="w-full border border-riviera-neutral bg-white px-4 py-3 text-sm font-light text-riviera-text placeholder:text-riviera-text/30 focus:outline-none focus:border-riviera-gold transition-colors"
          placeholder="Jane Smith"
        />
        {fieldErrors.name && (
          <p id="brochure-name-error" className="mt-1 text-xs text-red-600" role="alert">
            {fieldErrors.name[0]}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="brochure-email" className="block text-xs tracking-widest text-riviera-text/60 mb-1.5 uppercase">
          Email Address <span aria-hidden="true" className="text-riviera-gold">*</span>
        </label>
        <input
          id="brochure-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-describedby={fieldErrors.email ? 'brochure-email-error' : undefined}
          className="w-full border border-riviera-neutral bg-white px-4 py-3 text-sm font-light text-riviera-text placeholder:text-riviera-text/30 focus:outline-none focus:border-riviera-gold transition-colors"
          placeholder="jane@example.com"
        />
        {fieldErrors.email && (
          <p id="brochure-email-error" className="mt-1 text-xs text-red-600" role="alert">
            {fieldErrors.email[0]}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="brochure-phone" className="block text-xs tracking-widest text-riviera-text/60 mb-1.5 uppercase">
          Phone Number <span aria-hidden="true" className="text-riviera-gold">*</span>
        </label>
        <input
          id="brochure-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          aria-describedby={fieldErrors.phone ? 'brochure-phone-error' : undefined}
          className="w-full border border-riviera-neutral bg-white px-4 py-3 text-sm font-light text-riviera-text placeholder:text-riviera-text/30 focus:outline-none focus:border-riviera-gold transition-colors"
          placeholder="(516) 555 0100"
        />
        {fieldErrors.phone && (
          <p id="brochure-phone-error" className="mt-1 text-xs text-red-600" role="alert">
            {fieldErrors.phone[0]}
          </p>
        )}
      </div>

      {serverError && (
        <p className="text-xs text-red-600" role="alert">
          {serverError}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="group flex items-center gap-3 bg-riviera-text text-white px-7 py-3.5 text-xs tracking-widest uppercase font-light hover:bg-riviera-gold transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-riviera-gold focus-visible:ring-offset-2"
      >
        {pending ? 'Sending...' : 'Request Brochure'}
        {!pending && (
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        )}
      </button>
    </form>
  );
}
