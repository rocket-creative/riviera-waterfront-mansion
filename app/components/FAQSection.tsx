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
  const answerClass = background === 'dark' ? 'text-white/90' : 'text-riviera-text/80';

  return (
    <section className={`py-20 md:py-28 px-6 sm:px-8 lg:px-12 ${bgClass}`}>
      <div className="max-w-4xl mx-auto">
        <AnimatedSection animation="fadeInUp" className="text-center mb-16" as="div">
          <p className="text-riviera-gold text-xs sm:text-sm tracking-widest mb-4 font-light">{eyebrow}</p>
          <h2 className={`font-cormorant text-3xl md:text-4xl lg:text-5xl font-light tracking-wide ${textClass}`}>
            {title}
          </h2>
        </AnimatedSection>

        <div className="space-y-0 border-t border-riviera-gold/20">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.05} as="div">
              <div className={`border-b ${background === 'dark' ? 'border-white/10' : 'border-riviera-neutral/30'} transition-colors ${openIndex === index ? 'bg-riviera-gold/5' : ''}`}>
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-6 px-0 flex justify-between items-start gap-8 text-left group focus:outline-none"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={`font-light text-base md:text-lg ${textClass} flex-1 leading-relaxed group-hover:text-riviera-gold transition-colors`}>
                    {faq.question}
                  </span>
                  <span 
                    className={`w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      openIndex === index 
                        ? 'rotate-45 text-riviera-gold' 
                        : `${textClass} group-hover:text-riviera-gold`
                    }`}
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={1.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-[500px] opacity-100 pb-8' : 'max-h-0 opacity-0'
                  }`}
                  aria-hidden={openIndex !== index}
                >
                  <div className="pr-12">
                    <p className={`text-sm md:text-base font-light ${answerClass} leading-relaxed`}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
