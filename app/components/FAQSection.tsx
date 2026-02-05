'use client';

import { useState } from 'react';
import { AnimatedSection } from './AnimatedSection';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  eyebrow?: string;
  background?: 'white' | 'neutral' | 'dark';
}

export default function FAQSection({ 
  faqs, 
  title = 'Frequently asked questions',
  eyebrow = 'YOUR QUESTIONS ANSWERED',
  background = 'white'
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const bgClass = background === 'white' ? 'bg-white' : background === 'neutral' ? 'bg-riviera-neutral' : 'bg-riviera-text';
  const textClass = background === 'dark' ? 'text-white' : 'text-riviera-text';
  const eyebrowClass = background === 'dark' ? 'text-riviera-gold' : 'text-riviera-gold';
  const borderClass = background === 'dark' ? 'border-white/20' : 'border-riviera-neutral';
  const answerClass = background === 'dark' ? 'text-white/80' : 'text-riviera-text/70';

  return (
    <section className={`py-16 md:py-24 px-6 sm:px-8 lg:px-12 ${bgClass}`}>
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeInUp" className="text-center mb-12" as="div">
          <p className={`${eyebrowClass} text-sm tracking-widest mb-3`}>{eyebrow}</p>
          <h2 className={`font-cormorant text-3xl md:text-4xl font-light tracking-wide ${textClass} mb-4`}>
            {title}
          </h2>
        </AnimatedSection>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.05} as="div">
              <div className={`border-b ${borderClass} last:border-b-0`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full py-6 flex justify-between items-start gap-4 text-left hover:opacity-70 transition-opacity focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2`}
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`font-light text-lg ${textClass} flex-1`}>
                    {faq.question}
                  </span>
                  <span className={`text-2xl ${textClass} transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}>
                    +
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <p className={`text-base font-light ${answerClass} leading-relaxed`}>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
