'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { google } from 'googleapis';

const QuickInquirySchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  weddingDate: z.string().min(1, 'Wedding date is required'),
});

const resend = new Resend(process.env.RESEND_API_KEY);

async function logToGoogleSheets(data: any) {
  try {
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
      '', // phone
      data.weddingDate,
      '', // guestCount
      '', // desiredSeason
      '', // dayOfWeek
      '', // secondChoiceDay
      '', // ceremonyLocation
      'Quick Hero Form Submission' // message
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
      from: 'Riviera Inquiries <onboarding@resend.dev>',
      to: 'info@rivierawaterfrontmansion.com',
      subject: `Quick Inquiry from ${data.name} - ${data.weddingDate}`,
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
              .badge { background: #D4AF37; color: white; padding: 5px 10px; border-radius: 3px; font-size: 11px; display: inline-block; margin-bottom: 15px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>Quick Wedding Inquiry</h1>
              </div>
              <div class="content">
                <div class="badge">HERO FORM SUBMISSION</div>
                <div class="field">
                  <div class="label">Name:</div>
                  <div class="value">${data.name}</div>
                </div>
                <div class="field">
                  <div class="label">Email:</div>
                  <div class="value"><a href="mailto:${data.email}">${data.email}</a></div>
                </div>
                <div class="field">
                  <div class="label">Wedding Date:</div>
                  <div class="value">${data.weddingDate}</div>
                </div>
                <div style="background: #fff3cd; border: 1px solid #ffc107; padding: 15px; margin-top: 20px; border-radius: 4px;">
                  <p style="margin: 0; font-size: 13px;"><strong>Note:</strong> This is a quick inquiry from the homepage hero form. Follow up to collect additional details (phone, guest count, ceremony location, etc.)</p>
                </div>
              </div>
              <div class="footer">
                <p>This inquiry was submitted via the Riviera Waterfront Mansion homepage hero form.</p>
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

export async function submitQuickInquiry(formData: FormData) {
  const result = QuickInquirySchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    weddingDate: formData.get('weddingDate'),
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
        error: 'Failed to send inquiry. Please try again or call us directly.'
      };
    }

    // Log to Google Sheets (non-blocking)
    logToGoogleSheets(result.data).catch(error => {
      console.error('Google Sheets logging failed (non-critical):', error);
    });

    return { 
      success: true,
      message: 'Thank you! We will contact you within 24 hours about your wedding date.'
    };
  } catch (error) {
    console.error('Quick inquiry error:', error);
    return {
      success: false,
      error: 'An unexpected error occurred. Please call us at (516) 541 5020.'
    };
  }
}
