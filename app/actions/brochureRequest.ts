'use server';

import { z } from 'zod';
import { Resend } from 'resend';
import { google } from 'googleapis';

const BrochureRequestSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(1, 'Phone is required').max(30),
});

const resend = new Resend(process.env.RESEND_API_KEY);

async function logToGoogleSheets(data: z.infer<typeof BrochureRequestSchema>) {
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
      range: 'BrochureRequests!A:D',
      valueInputOption: 'RAW',
      requestBody: {
        values: [[
          new Date().toISOString(),
          data.name,
          data.email,
          data.phone,
        ]],
      },
    });

    return { success: true };
  } catch (error) {
    console.error('Google Sheets logging error (brochure):', error);
    return { success: false, error };
  }
}

async function sendVenueNotification(data: z.infer<typeof BrochureRequestSchema>) {
  return resend.emails.send({
    from: 'Riviera Inquiries <onboarding@resend.dev>', // Update to noreply@rivierawaterfrontmansion.com once domain verified in Resend
    to: 'info@rivierawaterfrontmansion.com',
    subject: `Brochure Request from ${data.name}`,
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
              <h1>Wedding Brochure Request</h1>
            </div>
            <div class="content">
              <div class="badge">BROCHURE REQUEST</div>
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
            </div>
            <div class="footer">
              <p>Submitted via the Riviera Waterfront Mansion wedding brochure page.</p>
              <p>Received: ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })} EST</p>
            </div>
          </div>
        </body>
      </html>
    `,
  });
}

async function sendLeadConfirmation(data: z.infer<typeof BrochureRequestSchema>) {
  return resend.emails.send({
    from: 'Riviera Waterfront Mansion <onboarding@resend.dev>', // Update to noreply@rivierawaterfrontmansion.com once domain verified in Resend
    to: data.email,
    subject: 'Your Riviera Waterfront Mansion Wedding Brochure',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #8B7355; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .cta { display: inline-block; background: #8B7355; color: white; padding: 14px 28px; text-decoration: none; margin-top: 20px; font-size: 13px; letter-spacing: 2px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Riviera Waterfront Mansion</h1>
              <p style="margin:0;font-size:13px;opacity:0.85;">Long Island's Premier Waterfront Wedding Venue</p>
            </div>
            <div class="content">
              <p>Hi ${data.name},</p>
              <p>Thank you for your interest in Riviera Waterfront Mansion. Our team will be in touch within 24 hours with your personalized wedding brochure and availability details.</p>
              <p>In the meantime, feel free to explore our venue through our virtual tour or reach out to us directly.</p>
              <p style="margin-top:24px;">
                <strong>Phone:</strong> (516) 541 5020<br>
                <strong>Address:</strong> 200 E Shore Dr, Massapequa, NY 11758<br>
                <strong>Office Hours:</strong> Tuesday – Sunday, 11:00 AM – 7:00 PM
              </p>
              <a href="https://www.rivierawaterfrontmansion.com/virtual-tour" class="cta">TAKE THE VIRTUAL TOUR</a>
            </div>
            <div class="footer">
              <p>© 2026 Riviera Waterfront Mansion. Third generation family owned since 1946.</p>
              <p>200 E Shore Dr, Massapequa, NY 11758</p>
            </div>
          </div>
        </body>
      </html>
    `,
  });
}

export async function submitBrochureRequest(formData: FormData) {
  const result = BrochureRequestSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
  });

  if (!result.success) {
    return {
      success: false,
      error: result.error.flatten().fieldErrors,
    };
  }

  // Run Sheet backup and both emails in parallel.
  // Sheet is the safety net — we return success as long as the lead is captured.
  const [sheetsResult, venueEmailResult, confirmationEmailResult] = await Promise.allSettled([
    logToGoogleSheets(result.data),
    sendVenueNotification(result.data),
    sendLeadConfirmation(result.data),
  ]);

  const sheetOk = sheetsResult.status === 'fulfilled' && sheetsResult.value.success;
  const venueEmailOk = venueEmailResult.status === 'fulfilled';

  if (!sheetOk) {
    console.error('Brochure request Sheet log failed:', sheetsResult);
  }
  if (!venueEmailOk) {
    console.error('Brochure venue notification email failed:', venueEmailResult);
  }
  if (confirmationEmailResult.status === 'rejected') {
    console.error('Brochure confirmation email failed:', confirmationEmailResult.reason);
  }

  // Succeed if at least one capture method worked
  if (!sheetOk && !venueEmailOk) {
    return {
      success: false,
      error: 'Unable to process your request right now. Please call us at (516) 541 5020.',
    };
  }

  return {
    success: true,
    message: `Thank you, ${result.data.name}! Our team will send your brochure within 24 hours. We look forward to learning more about your special day.`,
  };
}
