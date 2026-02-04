'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { google } from 'googleapis';

const InquiryFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone is required'),
  weddingDate: z.string().min(1, 'Wedding date is required'),
  guestCount: z.string().min(1, 'Guest count is required'),
  desiredSeason: z.enum(['Spring', 'Summer', 'Fall', 'Winter'], {
    errorMap: () => ({ message: 'Please select a season' })
  }),
  dayOfWeek: z.enum(['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], {
    errorMap: () => ({ message: 'Please select a preferred day' })
  }),
  secondChoiceDay: z.enum(['', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']).optional(),
  ceremonyLocation: z.enum(['On Site', 'Off Site'], {
    errorMap: () => ({ message: 'Please select ceremony location' })
  }),
  message: z.string().max(1000).optional(),
});

const resend = new Resend(process.env.RESEND_API_KEY);

async function logToGoogleSheets(data: any) {
  try {
    // Google Sheets API setup
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    const timestamp = new Date().toISOString();
    
    const values = [[
      timestamp,
      data.name,
      data.email,
      data.phone,
      data.weddingDate,
      data.guestCount,
      data.desiredSeason,
      data.dayOfWeek,
      data.secondChoiceDay || '',
      data.ceremonyLocation,
      data.message || ''
    ]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Inquiries!A:K',
      valueInputOption: 'RAW',
      requestBody: { values },
    });

    return { success: true };
  } catch (error) {
    console.error('Google Sheets logging error:', error);
    return { success: false, error };
  }
}

async function sendEmail(data: any) {
  try {
    await resend.emails.send({
      from: 'Riviera Inquiries <onboarding@resend.dev>', // Update this with your verified domain
      to: 'info@rivierawaterfrontmansion.com',
      subject: `New Wedding Inquiry from ${data.name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: #8B7355; color: white; padding: 20px; text-align: center; }
              .content { background: #f9f9f9; padding: 30px; }
              .field { margin-bottom: 15px; }
              .label { font-weight: bold; color: #8B7355; }
              .value { margin-top: 5px; }
              .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>New Wedding Inquiry</h1>
              </div>
              <div class="content">
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${data.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Phone:</div>
                  <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
                </div>
                <div class="field">
                  <div class="label">Wedding Date:</div>
                  <div class="value">${data.weddingDate}</div>
                </div>
                <div class="field">
                  <div class="label">Guest Count:</div>
                  <div class="value">${data.guestCount} guests</div>
                </div>
                <div class="field">
                  <div class="label">Desired Season:</div>
                  <div class="value">${data.desiredSeason}</div>
                </div>
                <div class="field">
                  <div class="label">Preferred Day:</div>
                  <div class="value">${data.dayOfWeek}</div>
                </div>
                ${data.secondChoiceDay ? `
                <div class="field">
                  <div class="label">Second Choice Day:</div>
                  <div class="value">${data.secondChoiceDay}</div>
                </div>
                ` : ''}
                <div class="field">
                  <div class="label">Ceremony Location:</div>
                  <div class="value">${data.ceremonyLocation}</div>
                </div>
                ${data.message ? `
                <div class="field">
                  <div class="label">Additional Message:</div>
                  <div class="value">${data.message}</div>
                </div>
                ` : ''}
              </div>
              <div class="footer">
                <p>This inquiry was submitted via the Riviera Waterfront Mansion website.</p>
                <p>Received: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST</p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error };
  }
}

export async function submitInquiryForm(formData: FormData) {
  const result = InquiryFormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    weddingDate: formData.get('weddingDate'),
    guestCount: formData.get('guestCount'),
    desiredSeason: formData.get('desiredSeason'),
    dayOfWeek: formData.get('dayOfWeek'),
    secondChoiceDay: formData.get('secondChoiceDay'),
    ceremonyLocation: formData.get('ceremonyLocation'),
    message: formData.get('message'),
  });

  if (!result.success) {
    return { 
      success: false, 
      error: result.error.flatten().fieldErrors 
    };
  }

  try {
    // Send email via Resend
    const emailResult = await sendEmail(result.data);
    
    if (!emailResult.success) {
      console.error('Failed to send email:', emailResult.error);
      return {
        success: false,
        error: 'Failed to send inquiry email. Please try again or call us directly.'
      };
    }

    // Log to Google Sheets (non-blocking, failures won't affect user experience)
    logToGoogleSheets(result.data).catch(error => {
      console.error('Google Sheets logging failed (non-critical):', error);
    });

    return { 
      success: true,
      message: 'Thank you for your inquiry! We will contact you within 24 hours to discuss your special day.'
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please try again or call us at (516) 541 5020.'
    };
  }
}
