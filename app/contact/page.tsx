'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { submitContactForm } from './actions';
import { useState, useTransition } from 'react';

export default function ContactPage() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: any } | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    startTransition(async () => {
      const response = await submitContactForm(formData);
      setResult(response);
      
      if (response.success) {
        (e.target as HTMLFormElement).reset();
      }
    });
  };

  return (
    <>
      <Header />
      
      <main id="main">
        {/* Hero Section */}
        <section className="bg-riviera-neutral py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-wide text-riviera-text mb-6">
              Let's start planning
            </h1>
            <p className="text-lg md:text-xl font-light text-riviera-text/70 max-w-2xl mx-auto">
              Contact us to schedule a tour, check availability, or request information
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-8">
                  Send us a message
                </h2>
                
                {result?.success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 text-sm" role="alert">
                    {result.message}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
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

                  <div>
                    <label htmlFor="phone" className="block text-sm tracking-wider text-riviera-text mb-2">
                      PHONE
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="(555) 123 4567"
                      className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
                    />
                    {result?.error?.phone && (
                      <p className="mt-2 text-sm text-red-600">{result.error.phone[0]}</p>
                    )}
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="eventDate" className="block text-sm tracking-wider text-riviera-text mb-2">
                        EVENT DATE
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="guestCount" className="block text-sm tracking-wider text-riviera-text mb-2">
                        GUEST COUNT
                      </label>
                      <input
                        type="number"
                        id="guestCount"
                        name="guestCount"
                        placeholder="Est. number of guests"
                        min="1"
                        max="350"
                        className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm tracking-wider text-riviera-text mb-2">
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20 transition-colors resize-none"
                      aria-required="true"
                    />
                    {result?.error?.message && (
                      <p className="mt-2 text-sm text-red-600">{result.error.message[0]}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-brown transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                  >
                    {isPending ? 'SENDING...' : 'SEND MESSAGE →'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-8">
                  Visit us
                </h2>
                
                <div className="space-y-8 mb-12">
                  <div>
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">LOCATION</h3>
                    <address className="not-italic text-base font-light text-riviera-text/80 leading-relaxed">
                      200 E Shore Dr<br />
                      Massapequa, NY 11758
                    </address>
                  </div>

                  <div>
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">PHONE</h3>
                    <a 
                      href="tel:+15165415020" 
                      className="text-base font-light text-riviera-text/80 hover:text-riviera-gold transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold"
                    >
                      (516) 541 5020
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm tracking-widest text-riviera-gold mb-3">OFFICE HOURS</h3>
                    <div className="text-base font-light text-riviera-text/80 leading-relaxed">
                      <p>Monday: Closed</p>
                      <p>Tuesday to Sunday: 11:00 am to 7:00 pm</p>
                    </div>
                  </div>
                </div>

                <div className="bg-riviera-neutral p-8">
                  <h3 className="text-lg font-light tracking-wide text-riviera-text mb-4">
                    Download our brochure
                  </h3>
                  <p className="text-sm font-light text-riviera-text/70 mb-6">
                    Get detailed information about our venue, packages, and pricing
                  </p>
                  <a
                    href="/brochure.pdf"
                    download
                    className="inline-block bg-riviera-gold text-white px-6 py-3 text-sm font-light tracking-wider hover:bg-riviera-brown transition-colors focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                  >
                    DOWNLOAD PDF →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-riviera-neutral py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-light tracking-wide text-riviera-text mb-8 text-center">
              Easy to reach from anywhere on Long Island
            </h2>
            <div className="aspect-video bg-white border border-riviera-neutral/50">
              {/* Map placeholder - In production, embed Google Maps */}
              <div className="w-full h-full flex items-center justify-center text-riviera-text/40">
                <p className="text-sm">Map: 200 E Shore Dr, Massapequa, NY 11758</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
