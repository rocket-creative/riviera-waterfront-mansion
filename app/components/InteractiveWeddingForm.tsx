'use client';

import { useState, useTransition } from 'react';
import { HoverScale } from './HoverScale';
import { submitInquiryForm } from '../actions/inquiry';

interface FormData {
  season?: string;
  guestCount?: string;
  ceremonyVision?: string;
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

  const totalSteps = 4;

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const submissionData = new FormData();
    submissionData.append('name', formData.name || '');
    submissionData.append('email', formData.email || '');
    submissionData.append('phone', formData.phone || '');
    submissionData.append('weddingDate', formData.weddingDate || '');
    submissionData.append('guestCount', formData.guestCount || '');
    submissionData.append('desiredSeason', formData.season || '');
    submissionData.append('dayOfWeek', 'Flexible');
    submissionData.append('ceremonyLocation', formData.ceremonyVision || 'On Site');
    submissionData.append('message', `Interactive form: Season ${formData.season}, Guests ${formData.guestCount}, Ceremony ${formData.ceremonyVision}`);

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
          <p className="text-sm text-riviera-text/60 text-center mb-8 font-light">
            Minimum 150 guests required
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { 
                value: '100-150', 
                emoji: '👫', 
                label: 'Intimate (100-150)', 
                subtitle: 'A cozy celebration with your closest loved ones' 
              },
              { 
                value: '150-225', 
                emoji: '👨‍👩‍👧‍👦', 
                label: 'Medium (150-225)', 
                subtitle: 'Room for family, friends, and colleagues' 
              },
              { 
                value: '225-300', 
                emoji: '🎉', 
                label: 'Large (225-300)', 
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

      {/* Step 3: Ceremony Vision */}
      {step === 3 && (
        <div className="animate-fadeIn">
          <h3 className="font-cormorant text-2xl md:text-3xl font-light text-riviera-text mb-8 text-center">
            What&apos;s your ceremony vision?
          </h3>
          <div className="grid grid-cols-1 gap-4 max-w-2xl mx-auto">
            {[
              { 
                value: 'Outdoor Waterfront', 
                emoji: '🌊', 
                label: 'Outdoor Waterfront', 
                subtitle: 'Exchange vows at our stunning gazebo overlooking the water' 
              },
              { 
                value: 'Indoor Elegance', 
                emoji: '✨', 
                label: 'Indoor Elegance', 
                subtitle: 'Say "I do" in our elegant indoor space with water views' 
              },
              { 
                value: 'Still Deciding', 
                emoji: '🤔', 
                label: 'Still Deciding', 
                subtitle: 'I\'d love to see both options during my tour' 
              },
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  updateFormData('ceremonyVision', option.value);
                  nextStep();
                }}
                className={`p-6 border-2 transition-all hover:border-riviera-gold hover:shadow-md text-left ${
                  formData.ceremonyVision === option.value ? 'border-riviera-gold bg-riviera-gold/5' : 'border-riviera-neutral/30'
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

      {/* Step 4: Contact Info & Submit */}
      {step === 4 && (
        <div className="animate-fadeIn">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">💍</div>
            <h3 className="font-cormorant text-2xl md:text-3xl font-light text-riviera-text mb-4">
              Your Perfect Day Awaits!
            </h3>
            <p className="text-base font-light text-riviera-text/70 mb-8">
              Based on your preferences, here&apos;s a summary of your dream wedding:
            </p>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-3 gap-4 mb-8 max-w-xl mx-auto">
            <div className="bg-riviera-neutral/20 p-4 text-center border border-riviera-gold/20">
              <div className="text-xs tracking-widest text-riviera-gold mb-2">SEASON</div>
              <div className="text-sm font-light text-riviera-text">{formData.season}</div>
            </div>
            <div className="bg-riviera-neutral/20 p-4 text-center border border-riviera-gold/20">
              <div className="text-xs tracking-widest text-riviera-gold mb-2">GUEST COUNT</div>
              <div className="text-sm font-light text-riviera-text">{formData.guestCount}</div>
            </div>
            <div className="bg-riviera-neutral/20 p-4 text-center border border-riviera-gold/20">
              <div className="text-xs tracking-widest text-riviera-gold mb-2">CEREMONY STYLE</div>
              <div className="text-sm font-light text-riviera-text">{formData.ceremonyVision}</div>
            </div>
          </div>

          <p className="text-center text-sm font-light text-riviera-text/70 mb-8 max-w-xl mx-auto">
            Let&apos;s make it happen! Fill in your details and we&apos;ll reach out to schedule your personalized tour.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 max-w-xl mx-auto">
            <div>
              <label className="block text-sm tracking-wider text-riviera-text mb-2">YOUR NAME *</label>
              <input
                type="text"
                value={formData.name || ''}
                onChange={(e) => updateFormData('name', e.target.value)}
                required
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
                required
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
                required
                className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20"
                placeholder="(555) 123 4567"
              />
            </div>
            <div>
              <label className="block text-sm tracking-wider text-riviera-text mb-2">PREFERRED WEDDING DATE (IF KNOWN)</label>
              <input
                type="date"
                value={formData.weddingDate || ''}
                onChange={(e) => updateFormData('weddingDate', e.target.value)}
                className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20"
              />
              <p className="text-xs text-riviera-text/50 mt-2">mm/dd/yyyy</p>
            </div>

            <HoverScale effect="lift">
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-riviera-gold text-white px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-text transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? 'SENDING...' : 'REQUEST CONSULTATION →'}
              </button>
            </HoverScale>
          </form>
        </div>
      )}

      {/* Navigation Buttons - Only show Back button for steps 1-3 */}
      {step < 4 && (
        <div className="flex gap-4 mt-12">
          {step > 1 && (
            <HoverScale effect="lift" className="flex-1">
              <button
                onClick={prevStep}
                className="w-full border-2 border-riviera-gold text-riviera-gold px-8 py-4 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all"
              >
                ← BACK
              </button>
            </HoverScale>
          )}
          
          {step === 1 && <div className="flex-1" />}
        </div>
      )}

      {/* Step 4 has Back to Quiz button inside the form */}
      {step === 4 && (
        <div className="flex justify-center mt-6">
          <button
            onClick={prevStep}
            className="text-sm text-riviera-gold hover:text-riviera-text transition-colors tracking-wider"
          >
            ← Back to Quiz
          </button>
        </div>
      )}
    </div>
  );
}
