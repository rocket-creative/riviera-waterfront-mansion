'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { google } from 'googleapis';

const ContactFormSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\(\d{3}\) \d{3} \d{4}$/, 'Phone must be in format (555) 123 4567').optional().or(z.literal('')),
  eventDate: z.string().optional(),
  guestCount: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(1000),
});

const resend = new Resend(process.env.RESEND_API_KEY);

async function logToGoogleSheets(data: z.infer<typeof ContactFormSchema>) {
  try {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'ContactForm!A:G',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          new Date().toISOString(),
          data.name,
          data.email,
          data.phone ?? '',
          data.eventDate ?? '',
          data.guestCount ?? '',
          data.message,
        ]],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Google Sheets logging error (contact):', error);
    return { success: false, error };
  }
}

async function sendEmail(data: z.infer<typeof ContactFormSchema>) {
  return resend.emails.send({
    from: 'Riviera Inquiries <onboarding@resend.dev>', // Update to noreply@rivierawaterfrontmansion.com once domain verified in Resend
    to: 'info@rivierawaterfrontmansion.com',
    subject: `Contact Form Message from ${data.name}`,
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
            .badge { background: #D4AF37; color: white; padding: 5px 10px; font-size: 11px; display: inline-block; margin-bottom: 15px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Contact Form Message</h1>
            </div>
            <div class="content">
              <div class="badge">CONTACT PAGE</div>
              <div class="field">
                <div class="label">Name:</div>
                <div class="value">${data.name}</div>
              </div>
              <div class="field">
                <div class="label">Email:</div>
                <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
              </div>
              ${data.phone ? `
              <div class="field">
                <div class="label">Phone:</div>
                <div class="value"><a href="tel:${data.phone}">${data.phone}</a></div>
              </div>` : ''}
              ${data.eventDate ? `
              <div class="field">
                <div class="label">Event Date:</div>
                <div class="value">${data.eventDate}</div>
              </div>` : ''}
              ${data.guestCount ? `
              <div class="field">
                <div class="label">Guest Count:</div>
                <div class="value">${data.guestCount}</div>
              </div>` : ''}
              <div class="field">
                <div class="label">Message:</div>
                <div class="value" style="white-space:pre-wrap;">${data.message}</div>
              </div>
            </div>
            <div class="footer">
              <p>Submitted via the Riviera Waterfront Mansion contact page.</p>
              <p>Received: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST</p>
            </div>
          </div>
        </body>
      </html>
    `,
  });
}

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
      error: result.error.flatten().fieldErrors,
    };
  }

  // Run Sheet backup and email in parallel — Sheet is the safety net so we
  // always capture the lead even when Resend is unavailable.
  const [sheetsResult, emailResult] = await Promise.allSettled([
    logToGoogleSheets(result.data),
    sendEmail(result.data),
  ]);

  const sheetOk =
    sheetsResult.status === 'fulfilled' && sheetsResult.value.success;
  const emailOk = emailResult.status === 'fulfilled';

  if (!sheetOk) {
    console.error('Contact form Sheet log failed:', sheetsResult);
  }
  if (!emailOk) {
    console.error('Contact form email failed:', emailResult);
  }

  if (!sheetOk && !emailOk) {
    return {
      success: false,
      error: 'Unable to send your message right now. Please call us at (516) 541 5020.',
    };
  }

  return {
    success: true,
    message: 'Thank you for your inquiry. We will contact you within 24 hours.',
  };
}
