'use client';

import { useState, useTransition } from 'react';
import { HoverScale } from './HoverScale';
import { submitInquiryForm } from '../actions/inquiry';

interface FormData {
  season?: string;
  guestCount?: string;
  dayOfWeek?: string;
  name?: string;
  email?: string;
  phone?: string;
  weddingDate?: string;
}

export default function InteractiveWeddingForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({});
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ success: boolean; message?: string } | null>(null);

  const totalSteps = 5;

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    const submissionData = new FormData();
    submissionData.append('name', formData.name || '');
    submissionData.append('email', formData.email || '');
    submissionData.append('phone', formData.phone || '');
    submissionData.append('weddingDate', formData.weddingDate || '');
    submissionData.append('guestCount', formData.guestCount || '');
    submissionData.append('desiredSeason', formData.season || '');
    submissionData.append('dayOfWeek', formData.dayOfWeek || '');
    submissionData.append('ceremonyLocation', 'On Site');
    submissionData.append('message', 'Interactive form submission');

    startTransition(async () => {
      const response = await submitInquiryForm(submissionData);
      setResult(response);
      if (response.success) {
        setTimeout(() => {
          setStep(1);
          setFormData({});
          setResult(null);
        }, 5000);
      }
    });
  };

  if (result?.success) {
    return (
      <div className="bg-white p-12 text-center max-w-2xl mx-auto">
        <div className="mb-6">
          <svg className="w-20 h-20 text-green-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3 className="font-cormorant text-3xl md:text-4xl font-light text-riviera-text mb-4">
          Thank you!
        </h3>
        <p className="text-base font-light text-riviera-text/70 mb-8">
          We will be in touch soon to help plan your perfect day at Riviera Waterfront Mansion.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-riviera-gold text-xs tracking-widest mb-3 font-light">LET&apos;S PLAN TOGETHER</p>
        <h2 className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-riviera-text mb-4">
          Find Your Perfect Wedding
        </h2>
        <p className="text-base font-light text-riviera-text/70">
          Answer a few quick questions and we&apos;ll help you envision your dream day at Riviera.
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between mb-2">
          <span className="text-xs tracking-wider text-riviera-text">STEP {step} OF {totalSteps}</span>
          <span className="text-xs tracking-wider text-riviera-text">{Math.round((step / totalSteps) * 100)}%</span>
        </div>
        <div className="h-1 bg-riviera-neutral/30 overflow-hidden">
          <div 
            className="h-full bg-riviera-gold transition-all duration-500 ease-out"
            style={{ width: `${(step / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Step 1: Season */}
      {step === 1 && (
        <div className="animate-fadeIn">
          <h3 className="font-cormorant text-2xl md:text-3xl font-light text-riviera-text mb-8 text-center">
            When are you dreaming of getting married?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: 'Spring', emoji: '🌸', label: 'Spring', dates: 'Mar - May' },
              { value: 'Summer', emoji: '☀️', label: 'Summer', dates: 'Jun - Aug' },
              { value: 'Fall', emoji: '🍂', label: 'Fall', dates: 'Sep - Nov' },
              { value: 'Winter', emoji: '❄️', label: 'Winter', dates: 'Dec - Feb' },
            ].map((season) => (
              <button
                key={season.value}
                onClick={() => {
                  updateFormData('season', season.value);
                  nextStep();
                }}
                className={`p-6 border-2 transition-all hover:border-riviera-gold hover:shadow-md group ${
                  formData.season === season.value ? 'border-riviera-gold bg-riviera-gold/5' : 'border-riviera-neutral/30'
                }`}
              >
                <div className="text-4xl mb-3">{season.emoji}</div>
                <div className="font-light text-lg text-riviera-text mb-1">{season.label}</div>
                <div className="text-xs text-riviera-text/50">{season.dates}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 2: Guest Count */}
      {step === 2 && (
        <div className="animate-fadeIn">
          <h3 className="font-cormorant text-2xl md:text-3xl font-light text-riviera-text mb-8 text-center">
            How many guests are you expecting?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                value: '50-100', 
                emoji: '👫', 
                label: 'Intimate (50-100)', 
                subtitle: 'A cozy celebration with your closest loved ones' 
              },
              { 
                value: '100-200', 
                emoji: '👨‍👩‍👧‍👦', 
                label: 'Medium (100-200)', 
                subtitle: 'Room for family, friends, and colleagues' 
              },
              { 
                value: '200-300', 
                emoji: '🎉', 
                label: 'Large (200-300)', 
                subtitle: 'A grand celebration with everyone you love' 
              },
              { 
                value: '300-350', 
                emoji: '👑', 
                label: 'Grand (300-350)', 
                subtitle: 'Our full venue for your spectacular day' 
              },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  updateFormData('guestCount', option.value);
                  nextStep();
                }}
                className={`p-6 border-2 transition-all hover:border-riviera-gold hover:shadow-md text-left ${
                  formData.guestCount === option.value ? 'border-riviera-gold bg-riviera-gold/5' : 'border-riviera-neutral/30'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl flex-shrink-0">{option.emoji}</div>
                  <div>
                    <div className="font-light text-lg text-riviera-text mb-2">{option.label}</div>
                    <div className="text-sm text-riviera-text/60 leading-relaxed">{option.subtitle}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 3: Day of Week */}
      {step === 3 && (
        <div className="animate-fadeIn">
          <h3 className="font-cormorant text-2xl md:text-3xl font-light text-riviera-text mb-8 text-center">
            What day of the week works best?
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { value: 'Friday', label: 'Friday' },
              { value: 'Saturday', label: 'Saturday' },
              { value: 'Sunday', label: 'Sunday' },
              { value: 'Thursday', label: 'Thursday' },
              { value: 'Wednesday', label: 'Wednesday' },
              { value: 'Flexible', label: 'Flexible' },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  updateFormData('dayOfWeek', option.value);
                  nextStep();
                }}
                className={`p-6 border-2 transition-all hover:border-riviera-gold hover:shadow-md ${
                  formData.dayOfWeek === option.value ? 'border-riviera-gold bg-riviera-gold/5' : 'border-riviera-neutral/30'
                }`}
              >
                <div className="font-light text-lg text-riviera-text">{option.label}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Step 4: Contact Info */}
      {step === 4 && (
        <div className="animate-fadeIn">
          <h3 className="font-cormorant text-2xl md:text-3xl font-light text-riviera-text mb-8 text-center">
            Tell us how to reach you
          </h3>
          <div className="space-y-6 max-w-xl mx-auto">
            <div>
              <label className="block text-sm tracking-wider text-riviera-text mb-2">YOUR NAME *</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => updateFormData('name', e.target.value)}
                className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-riviera-text mb-2">EMAIL *</label>
              <input
                type="email"
                value={formData.email || ''}
                onChange={(e) => updateFormData('email', e.target.value)}
                className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-riviera-text mb-2">PHONE *</label>
              <input
                type="tel"
                value={formData.phone || ''}
                onChange={(e) => updateFormData('phone', e.target.value)}
                className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20"
                placeholder="(555) 123 4567"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-riviera-text mb-2">PREFERRED DATE (OPTIONAL)</label>
              <input
                type="date"
                value={formData.weddingDate || ''}
                onChange={(e) => updateFormData('weddingDate', e.target.value)}
                className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 5: Review & Submit */}
      {step === 5 && (
        <div className="animate-fadeIn">
          <h3 className="font-cormorant text-2xl md:text-3xl font-light text-riviera-text mb-8 text-center">
            Ready to start planning?
          </h3>
          <div className="max-w-xl mx-auto bg-riviera-neutral/20 p-8 mb-8">
            <h4 className="text-sm tracking-widest text-riviera-gold mb-4">YOUR WEDDING DETAILS</h4>
            <div className="space-y-3 text-sm font-light text-riviera-text">
              <div className="flex justify-between">
                <span className="text-riviera-text/60">Season:</span>
                <span className="font-normal">{formData.season}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-riviera-text/60">Guest Count:</span>
                <span className="font-normal">{formData.guestCount}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-riviera-text/60">Day of Week:</span>
                <span className="font-normal">{formData.dayOfWeek}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-riviera-text/60">Name:</span>
                <span className="font-normal">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-riviera-text/60">Email:</span>
                <span className="font-normal">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-riviera-text/60">Phone:</span>
                <span className="font-normal">{formData.phone}</span>
              </div>
            </div>
          </div>
          <p className="text-center text-sm font-light text-riviera-text/70 mb-8">
            Our team will contact you within 24 hours to discuss your dream wedding at Riviera Waterfront Mansion.
          </p>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex gap-4 mt-12">
        {step > 1 && (
          <HoverScale effect="lift" className="flex-1">
            <button
              onClick={prevStep}
              disabled={isPending}
              className="w-full border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all disabled:opacity-50"
            >
              ← BACK
            </button>
          </HoverScale>
        )}
        
        {step < 4 && (
          <div className="flex-1" />
        )}

        {step === 4 && (
          <HoverScale effect="lift" className="flex-1">
            <button
              onClick={nextStep}
              disabled={!formData.name || !formData.email || !formData.phone}
              className="w-full bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              CONTINUE →
            </button>
          </HoverScale>
        )}

        {step === 5 && (
          <HoverScale effect="lift" className="flex-1">
            <button
              onClick={handleSubmit}
              disabled={isPending}
              className="w-full bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? 'SENDING...' : 'SUBMIT REQUEST →'}
            </button>
          </HoverScale>
        )}
      </div>
    </div>
  );
}
