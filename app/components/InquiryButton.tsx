'use client';

import { useState } from 'react';
import InquiryModal from './InquiryModal';

interface InquiryButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function InquiryButton({ children, className = '', variant = 'primary' }: InquiryButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const baseClasses = 'px-8 py-4 text-sm font-light tracking-widest transition-all focus:outline-none focus:ring-2 focus:ring-riviera-gold focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-riviera-gold text-white hover:bg-riviera-text',
    secondary: 'bg-white text-riviera-text hover:bg-riviera-gold hover:text-white',
    outline: 'border-2 border-riviera-gold text-riviera-gold hover:bg-riviera-gold hover:text-white'
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      >
        {children}
      </button>
      
      <InquiryModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
}
