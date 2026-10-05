"use server";

import { google } from "googleapis";
import { Resend } from "resend";

async function getGoogleAuth() {
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!privateKey) {
    throw new Error(
      "GOOGLE_PRIVATE_KEY is not defined in environment variables."
    );
  }

  // Handle common formatting issues
  const formattedKey = privateKey
    .replace(/\\n/g, "\n") // Convert literal \n to real newlines
    .replace(/^"(.*)"$/, "$1") // Remove surrounding quotes if any
    .replace(/"/g, "") // Final quote cleanup
    .trim();

  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.GOOGLE_CLIENT_EMAIL,
      private_key: formattedKey,
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return auth.getClient();
}

export async function registerParticipant(formData: {
  fullName: string;
  email: string;
  phone: string;
  location: string;
}) {
  const {
    RESEND_API_KEY,
    RESEND_SENDER_EMAIL,
    GOOGLE_SHEET_ID,
    GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY,
  } = process.env;

  // 1. Strict Environment Validation
  if (!RESEND_API_KEY)
    return { success: false, message: "Missing RESEND_API_KEY in production." };
  if (!RESEND_SENDER_EMAIL)
    return {
      success: false,
      message: "Missing RESEND_SENDER_EMAIL in production.",
    };
  if (!GOOGLE_SHEET_ID)
    return {
      success: false,
      message: "Missing GOOGLE_SHEET_ID in production.",
    };
  if (!GOOGLE_CLIENT_EMAIL)
    return {
      success: false,
      message: "Missing GOOGLE_CLIENT_EMAIL in production.",
    };
  if (!GOOGLE_PRIVATE_KEY)
    return {
      success: false,
      message: "Missing GOOGLE_PRIVATE_KEY in production.",
    };

  const resend = new Resend(RESEND_API_KEY);
  const SPREADSHEET_ID = GOOGLE_SHEET_ID;

  try {
    const { fullName, email, phone, location } = formData;

    if (!fullName || !email || !phone || !location) {
      return { success: false, message: "All fields are required." };
    }

    const auth = await getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth: auth as any });

    // 1. Get Spreadsheet Metadata to find the first sheet name
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const sheetName =
      spreadsheet.data.sheets?.[0]?.properties?.title || "Sheet1";
    const range = `${sheetName}!A:F`;

    // 2. Check for duplicates
    const getResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
    });

    const rows = getResponse.data.values || [];
    const emailIndex = 2; // Assuming Column C is Email (A=0, B=1, C=2)

    const isDuplicate = rows.some((row) => row[emailIndex] === email);
    if (isDuplicate) {
      return {
        success: false,
        message: "This email address is already registered.",
      };
    }

    // 3. Generate Unique ID (LNF-001) for Lost & Found
    const nextIdNumber = rows.length;
    const id = `LnF-${String(nextIdNumber).padStart(3, "0")}`;
    const timestamp = new Date().toLocaleString();

    // 4. Append to Google Sheets
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[id, fullName, email, phone, location, timestamp]],
      },
    });

    console.log(
      `Log to Sheet: ${sheetName} (ID: ${SPREADSHEET_ID}), Status: ${appendResponse.status}`
    );

    // 5. Create Calendar Invite (.ics)
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SARE Events//Lost & Found//EN
METHOD:REQUEST
BEGIN:VEVENT
UID:lost-and-found-20260725-${id}@sarengineers.com
DTSTAMP:20260714T000000Z
DTSTART:20260725T190000Z
DTEND:20260725T203000Z
SUMMARY:Lost & Found: The Science Behind Autonomous Navigation
DESCRIPTION:Lost and Found: The Science Behind Autonomous Navigation is an exclusive webinar designed to demystify the technology guiding the future of robotics. Autonomous navigation is quietly becoming part of our daily lives, and this session explores the intricate science that makes it possible.\n\nJoin the WhatsApp Group for Updates: https://chat.whatsapp.com/J90Z22acjjK6MWWX8KPCaP
LOCATION:meet.google.com/cwi-szpo-wea
ORGANIZER;CN="SARE Events":mailto:${RESEND_SENDER_EMAIL}
ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:${email}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT30M
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM
END:VEVENT
END:VCALENDAR`.replace(/\n/g, '\r\n');

    // 6. Send Styled Email via Resend
    const { data, error } = await resend.emails.send({
      from: `SARE Events <${RESEND_SENDER_EMAIL}>`,
      to: [email],
      subject: "Registration Confirmed: Lost & Found - The Science Behind Autonomous Navigation 📍",
      attachments: [
        {
          filename: 'invite.ics',
          content: Buffer.from(icsContent).toString('base64'),
        }
      ],
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f9; padding: 20px; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            <div style="background-color: #4BA3D9; padding: 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 1px;">Lost & Found</h1>
              <p style="color: rgba(255,255,255,0.9); margin-top: 10px; font-weight: 300;">The Science Behind Autonomous Navigation</p>
            </div>
            <div style="padding: 20px;">
              <h2 style="color: #4BA3D9; margin-top: 0;">Registration Confirmed!</h2>
              <p style="font-size: 16px; line-height: 1.6;">Hi <strong>${fullName}</strong>,</p>
              <p style="font-size: 16px; line-height: 1.6;">Welcome to <strong>"Lost & Found: The Science Behind Autonomous Navigation"</strong>. We are thrilled to have you join us for this session.</p>
              
              <div style="background-color: #f9f9f9; border-left: 4px solid #4BA3D9; padding: 20px; margin: 30px 0;">
                <p style="margin: 0; font-size: 14px; text-transform: uppercase; color: #888;">Your Registration ID</p>
                <p style="margin: 5px 0 0 0; font-size: 24px; font-weight: bold; color: #333;">${id}</p>
              </div>

              <p style="font-size: 16px; line-height: 1.6;">Please keep this ID handy as you may need it for check-in on the day of the event.</p>

              <div style="background-color: #f0f7fb; border: 1px solid #4BA3D9; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <h3 style="color: #4BA3D9; margin-top: 0; font-size: 16px;">Next Steps</h3>
                <p style="margin: 10px 0 5px 0;">📅 <a href="https://calendar.app.google/UZohVGYDU5aocBu48" style="color: #4BA3D9; text-decoration: none; font-weight: bold;">Add to Google Calendar</a></p>
                <p style="margin: 5px 0 0 0;">💬 <a href="https://chat.whatsapp.com/J90Z22acjjK6MWWX8KPCaP" style="color: #4BA3D9; text-decoration: none; font-weight: bold;">Join the WhatsApp Group for Updates</a></p>
              </div>
              
              <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                <p style="font-size: 14px; color: #888;">Stay Innovative,<br/>The SARE Team</p>
              </div>
            </div>
            <div style="background-color: #333; padding: 20px; text-align: center;">
              <p style="color: #fff; font-size: 12px; margin: 0;">&copy; 2026 Society of Agricultural Robotics Engineers (SARE). All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      return {
        success: true,
        message:
          "Registration successful! (Email delivery failed but your spot is reserved)",
        id,
      };
    }

    return { success: true, message: "Registration successful!", id };
  } catch (err: any) {
    console.error("DEBUG: Full Registration Error:", err);
    return {
      success: false,
      message: err.message || "An unexpected error occurred.",
    };
  }
}