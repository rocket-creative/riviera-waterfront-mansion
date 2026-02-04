'use server';

import { z } from 'zod';

const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\(\d{3}\) \d{3} \d{4}$/, 'Phone must be in format (555) 123 4567').optional().or(z.literal('')),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

export async function submitContactForm(formData: FormData) {
  const result = ContactFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    eventDate: formData.get('eventDate'),
    guestCount: formData.get('guestCount'),
    message: formData.get('message'),
  });

  if (!result.success) {
    return { 
      success: false, 
      error: result.error.flatten().fieldErrors 
    };
  }

  // In production, this would send email or save to database
  // For now, just simulate success
  console.log('Contact form submission:', result.data);

  return { 
    success: true,
    message: 'Thank you for your inquiry. We will contact you within 24 hours.'
  };
}
