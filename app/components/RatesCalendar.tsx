'use client';

import { useState } from 'react';
import { HoverScale } from './HoverScale';
import Link from 'next/link';

interface CalendarDay {
  date: number;
  month: number;
  year: number;
  dayOfWeek: number; // 0 = Sunday, 6 = Saturday
  isBooked: boolean;
  isBusySeason: boolean;
}

export default function RatesCalendar() {
  const [currentMonth, setCurrentMonth] = useState(0); // 0 = January 2026
  const [selectedDate, setSelectedDate] = useState<CalendarDay | null>(null);
  const [guestCount, setGuestCount] = useState(150);

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const busyMonths = [4, 5, 6, 7, 8, 9, 10]; // May through November (0-indexed)

  // Simulated booked dates - heavy on Thursdays and Sundays (typical budget days)
  const bookedDates = [
    // January
    { month: 0, date: 3 },  // Sunday
    { month: 0, date: 17 }, // Sunday
    { month: 0, date: 22 }, // Thursday
    { month: 0, date: 29 }, // Thursday
    // February
    { month: 1, date: 7 },  // Sunday
    { month: 1, date: 11 }, // Thursday
    { month: 1, date: 14 }, // Sunday (Valentine's)
    { month: 1, date: 21 }, // Sunday
    // March
    { month: 2, date: 7 },  // Sunday
    { month: 2, date: 14 }, // Sunday
    { month: 2, date: 18 }, // Thursday
    { month: 2, date: 25 }, // Thursday
    { month: 2, date: 28 }, // Sunday
    // April
    { month: 3, date: 4 },  // Sunday
    { month: 3, date: 10 }, // Saturday
    { month: 3, date: 15 }, // Thursday
    { month: 3, date: 18 }, // Sunday
    { month: 3, date: 24 }, // Saturday
    { month: 3, date: 29 }, // Thursday
    // May (Busy Season)
    { month: 4, date: 1 },  // Saturday
    { month: 4, date: 2 },  // Sunday
    { month: 4, date: 8 },  // Saturday
    { month: 4, date: 9 },  // Sunday
    { month: 4, date: 13 }, // Thursday
    { month: 4, date: 15 }, // Saturday
    { month: 4, date: 16 }, // Sunday
    { month: 4, date: 20 }, // Thursday
    { month: 4, date: 22 }, // Saturday
    { month: 4, date: 23 }, // Sunday
    { month: 4, date: 27 }, // Thursday
    { month: 4, date: 29 }, // Saturday
    { month: 4, date: 30 }, // Sunday
    // June (Busy Season)
    { month: 5, date: 3 },  // Thursday
    { month: 5, date: 5 },  // Saturday
    { month: 5, date: 6 },  // Sunday
    { month: 5, date: 10 }, // Thursday
    { month: 5, date: 12 }, // Saturday
    { month: 5, date: 13 }, // Sunday
    { month: 5, date: 17 }, // Thursday
    { month: 5, date: 19 }, // Saturday
    { month: 5, date: 20 }, // Sunday
    { month: 5, date: 24 }, // Thursday
    { month: 5, date: 26 }, // Saturday
    { month: 5, date: 27 }, // Sunday
    // July (Busy Season)
    { month: 6, date: 1 },  // Thursday
    { month: 6, date: 3 },  // Saturday
    { month: 6, date: 4 },  // Sunday (July 4th)
    { month: 6, date: 8 },  // Thursday
    { month: 6, date: 10 }, // Saturday
    { month: 6, date: 11 }, // Sunday
    { month: 6, date: 15 }, // Thursday
    { month: 6, date: 17 }, // Saturday
    { month: 6, date: 18 }, // Sunday
    { month: 6, date: 24 }, // Saturday
    { month: 6, date: 25 }, // Sunday
    { month: 6, date: 29 }, // Thursday
    { month: 6, date: 31 }, // Saturday
    // August (Busy Season)
    { month: 7, date: 1 },  // Sunday
    { month: 7, date: 5 },  // Thursday
    { month: 7, date: 7 },  // Saturday
    { month: 7, date: 8 },  // Sunday
    { month: 7, date: 12 }, // Thursday
    { month: 7, date: 14 }, // Saturday
    { month: 7, date: 15 }, // Sunday
    { month: 7, date: 19 }, // Thursday
    { month: 7, date: 21 }, // Saturday
    { month: 7, date: 22 }, // Sunday
    { month: 7, date: 26 }, // Thursday
    { month: 7, date: 28 }, // Saturday
    { month: 7, date: 29 }, // Sunday
    // September (Busy Season)
    { month: 8, date: 2 },  // Thursday
    { month: 8, date: 4 },  // Saturday
    { month: 8, date: 5 },  // Sunday (Labor Day)
    { month: 8, date: 9 },  // Thursday
    { month: 8, date: 11 }, // Saturday
    { month: 8, date: 12 }, // Sunday
    { month: 8, date: 16 }, // Thursday
    { month: 8, date: 18 }, // Saturday
    { month: 8, date: 19 }, // Sunday
    { month: 8, date: 23 }, // Thursday
    { month: 8, date: 25 }, // Saturday
    { month: 8, date: 26 }, // Sunday
    { month: 8, date: 30 }, // Thursday
    // October (Busy Season)
    { month: 9, date: 2 },  // Saturday
    { month: 9, date: 3 },  // Sunday
    { month: 9, date: 7 },  // Thursday
    { month: 9, date: 9 },  // Saturday
    { month: 9, date: 10 }, // Sunday
    { month: 9, date: 14 }, // Thursday
    { month: 9, date: 16 }, // Saturday
    { month: 9, date: 17 }, // Sunday
    { month: 9, date: 21 }, // Thursday
    { month: 9, date: 23 }, // Saturday
    { month: 9, date: 24 }, // Sunday
    { month: 9, date: 28 }, // Thursday
    { month: 9, date: 30 }, // Saturday
    { month: 9, date: 31 }, // Sunday
    // November (Busy Season)
    { month: 10, date: 4 },  // Thursday
    { month: 10, date: 6 },  // Saturday
    { month: 10, date: 7 },  // Sunday
    { month: 10, date: 11 }, // Thursday
    { month: 10, date: 13 }, // Saturday
    { month: 10, date: 14 }, // Sunday
    { month: 10, date: 20 }, // Saturday
    { month: 10, date: 25 }, // Thursday (Thanksgiving)
    { month: 10, date: 27 }, // Saturday
    { month: 10, date: 28 }, // Sunday
    // December
    { month: 11, date: 4 },  // Saturday
    { month: 11, date: 11 }, // Saturday
    { month: 11, date: 18 }, // Saturday
    { month: 11, date: 31 }, // Friday (New Year's Eve)
  ];

  const isDateBooked = (month: number, date: number) => {
    return bookedDates.some(d => d.month === month && d.date === date);
  };

  const getDaysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (month: number, year: number) => {
    return new Date(year, month, 1).getDay();
  };

  const generateCalendarDays = () => {
    const year = 2027;
    const daysInMonth = getDaysInMonth(currentMonth, year);
    const firstDay = getFirstDayOfMonth(currentMonth, year);
    const days: (CalendarDay | null)[] = [];

    // Add empty cells for days before the first of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add actual days
    for (let date = 1; date <= daysInMonth; date++) {
      const dayOfWeek = new Date(year, currentMonth, date).getDay();
      days.push({
        date,
        month: currentMonth,
        year,
        dayOfWeek,
        isBooked: isDateBooked(currentMonth, date),
        isBusySeason: busyMonths.includes(currentMonth)
      });
    }

    return days;
  };

  const getPricing = (day: CalendarDay | null) => {
    if (!day) return null;

    // Monday and Tuesday are not available for booking
    if (day.dayOfWeek === 1 || day.dayOfWeek === 2) {
      return null;
    }

    const baseRates: { [key: number]: { rate: number; minimum: number } } = {
      0: { rate: 150, minimum: 150 }, // Sunday
      3: { rate: 150, minimum: 150 }, // Wednesday
      4: { rate: 150, minimum: 150 }, // Thursday
      5: { rate: 180, minimum: 150 }, // Friday
      6: { rate: 216, minimum: 150 }, // Saturday
    };

    const pricing = baseRates[day.dayOfWeek];
    if (!pricing) return null;

    const rate = day.isBusySeason ? Math.round(pricing.rate * 1.2) : pricing.rate;

    return {
      rate,
      minimum: pricing.minimum,
      dayName: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day.dayOfWeek]
    };
  };

  const calendarDays = generateCalendarDays();

  const nextMonth = () => {
    if (currentMonth < 11) setCurrentMonth(currentMonth + 1);
  };

  const prevMonth = () => {
    if (currentMonth > 0) setCurrentMonth(currentMonth - 1);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Calendar Header */}
      <div className="bg-white border-2 border-riviera-gold/40 p-6 mb-8 shadow-sm">
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={prevMonth}
            disabled={currentMonth === 0}
            className="text-riviera-gold hover:text-riviera-text transition-colors disabled:opacity-30 disabled:cursor-not-allowed p-2 focus:outline-none focus:ring-2 focus:ring-riviera-gold"
            aria-label="Previous month"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <h3 className="font-cormorant text-3xl font-light text-riviera-text">
            {months[currentMonth]} 2027
          </h3>

          <button
            onClick={nextMonth}
            disabled={currentMonth === 11}
            className="text-riviera-gold hover:text-riviera-text transition-colors disabled:opacity-30 disabled:cursor-not-allowed p-2 focus:outline-none focus:ring-2 focus:ring-riviera-gold"
            aria-label="Next month"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {busyMonths.includes(currentMonth) && (
          <div className="bg-riviera-gold/10 border border-riviera-gold/30 p-3 mb-6 text-center">
            <p className="text-xs tracking-wider text-riviera-text">
              <strong className="font-normal">BUSY SEASON MONTH</strong> - All rates include +20% seasonal adjustment
            </p>
          </div>
        )}

        {/* Day Headers */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div key={day} className="text-center text-xs tracking-wider text-riviera-text/60 font-light py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, index) => {
            if (!day) {
              return <div key={`empty-${index}`} className="aspect-square" />;
            }

            const pricing = getPricing(day);
            const isSelected = selectedDate?.date === day.date && selectedDate?.month === day.month;

            // Monday and Tuesday - Not Available
            if (day.dayOfWeek === 1 || day.dayOfWeek === 2) {
              return (
                <div
                  key={`${day.month}-${day.date}`}
                  className="aspect-square border-2 border-riviera-neutral/50 bg-riviera-neutral/30 flex items-center justify-center relative"
                >
                  <span className="text-sm font-light text-riviera-text/40 line-through">{day.date}</span>
                  <span className="absolute bottom-1 text-[8px] tracking-wider text-riviera-text/40 font-medium">N/A</span>
                </div>
              );
            }

            if (day.isBooked) {
              return (
                <div
                  key={`${day.month}-${day.date}`}
                  className="aspect-square border-2 border-riviera-neutral/50 bg-riviera-neutral/30 flex items-center justify-center relative"
                >
                  <span className="text-sm font-light text-riviera-text/40 line-through">{day.date}</span>
                  <span className="absolute bottom-1 text-[8px] tracking-wider text-riviera-text/40 font-medium">BOOKED</span>
                </div>
              );
            }

            return (
              <button
                key={`${day.month}-${day.date}`}
                onClick={() => setSelectedDate(day)}
                className={`aspect-square border-2 transition-all hover:border-riviera-gold hover:shadow-lg relative group ${
                  isSelected ? 'border-riviera-gold bg-riviera-gold/15 shadow-md' : 'border-riviera-gold/30 bg-white hover:bg-riviera-gold/5'
                }`}
              >
                <div className="flex flex-col items-center justify-center h-full p-1">
                  <span className={`text-sm md:text-base font-normal ${isSelected ? 'text-riviera-gold font-medium' : 'text-riviera-text'}`}>
                    {day.date}
                  </span>
                  {pricing && (
                    <span className={`text-[9px] md:text-[10px] tracking-wider mt-1 font-medium ${isSelected ? 'text-riviera-gold' : 'text-riviera-text/70 group-hover:text-riviera-gold'}`}>
                      ${pricing.rate} pp<sup>++</sup>
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-6 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-riviera-gold/30 bg-white"></div>
            <span className="font-medium text-riviera-text/70">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-riviera-gold bg-riviera-gold/15"></div>
            <span className="font-medium text-riviera-text/70">Selected</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 border-2 border-riviera-neutral/50 bg-riviera-neutral/30"></div>
            <span className="font-medium text-riviera-text/70">Booked / N/A</span>
          </div>
        </div>
        <p className="text-xs text-center mt-4 font-medium text-riviera-text/70">
          Monday and Tuesday are not available for booking
        </p>
      </div>

      {/* Selected Date Info */}
      {selectedDate && (
        <div className="bg-white border-2 border-riviera-gold/40 p-8 animate-fadeIn shadow-md">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Date Details */}
            <div>
              <p className="text-riviera-gold text-xs tracking-widest mb-3">SELECTED DATE</p>
              <h3 className="font-cormorant text-3xl font-light text-riviera-text mb-4">
                {months[selectedDate.month]} {selectedDate.date}, 2027
              </h3>
              
              {(() => {
                const pricing = getPricing(selectedDate);
                return pricing ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-riviera-neutral/30">
                      <span className="text-sm font-light text-riviera-text/70">Day of Week</span>
                      <span className="text-sm font-light text-riviera-text">{pricing.dayName}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-riviera-neutral/30">
                      <span className="text-sm font-light text-riviera-text/70">Rate Per Person</span>
                      <span className="text-lg font-light text-riviera-gold">${pricing.rate} pp<sup>++</sup></span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-riviera-neutral/30">
                      <span className="text-sm font-light text-riviera-text/70">Guest Minimum</span>
                      <span className="text-sm font-light text-riviera-text">{pricing.minimum} guests</span>
                    </div>
                    {selectedDate.isBusySeason && (
                      <div className="bg-riviera-gold/10 p-3 text-center">
                        <p className="text-xs font-light text-riviera-text/70">
                          Busy season rate (+20% applied)
                        </p>
                      </div>
                    )}
                  </div>
                ) : null;
              })()}
            </div>

            {/* Estimate Calculator */}
            <div>
              <p className="text-riviera-gold text-xs tracking-widest mb-3">ESTIMATE YOUR TOTAL</p>
              <div className="mb-4">
                <label className="block text-sm font-light text-riviera-text mb-2">
                  Number of Guests
                </label>
                <input
                  type="number"
                  min={getPricing(selectedDate)?.minimum || 100}
                  max={350}
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full px-4 py-3 border border-riviera-neutral focus:border-riviera-gold focus:outline-none focus:ring-2 focus:ring-riviera-gold/20"
                />
              </div>

              {(() => {
                const pricing = getPricing(selectedDate);
                if (!pricing) return null;
                
                const estimatedTotal = pricing.rate * guestCount;
                const meetsMinimum = guestCount >= pricing.minimum;

                return (
                  <div className="bg-riviera-neutral/20 p-6">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-light text-riviera-text/70">Estimated Starting Total</span>
                      <span className="font-cormorant text-3xl font-light text-riviera-gold">
                        ${estimatedTotal.toLocaleString()}<sup>++</sup>
                      </span>
                    </div>
                    {!meetsMinimum && (
                      <p className="text-xs text-red-600 mb-4">
                        Minimum {pricing.minimum} guests required for {pricing.dayName}
                      </p>
                    )}
                    <p className="text-xs font-light text-riviera-text/60 leading-relaxed">
                      This is a starting estimate before tax and service. Your final proposal may differ based on menu, bar selections, and enhancements.
                    </p>
                  </div>
                );
              })()}

              <div className="flex flex-col gap-3 mt-6">
                <HoverScale effect="lift">
                  <Link
                    href="/contact"
                    className="bg-riviera-gold text-white px-6 py-3 text-sm font-light tracking-widest hover:bg-riviera-text transition-all text-center block focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                  >
                    REQUEST PROPOSAL →
                  </Link>
                </HoverScale>
                <HoverScale effect="lift">
                  <Link
                    href="/contact"
                    className="border-2 border-riviera-gold text-riviera-gold px-6 py-3 text-sm font-light tracking-widest hover:bg-riviera-gold hover:text-white transition-all text-center block focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2"
                  >
                    SCHEDULE TOUR
                  </Link>
                </HoverScale>
              </div>
            </div>
          </div>
        </div>
      )}

      {!selectedDate && (
        <div className="bg-riviera-neutral/30 border-2 border-riviera-neutral/50 p-8 text-center">
          <p className="text-sm font-medium text-riviera-text/70">
            Select a date from the calendar to see specific pricing and availability for that date
          </p>
        </div>
      )}
    </div>
  );
}
