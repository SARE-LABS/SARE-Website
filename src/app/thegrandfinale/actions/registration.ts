"use server";

import crypto from "crypto";
import { google } from "googleapis";
import nodemailer from "nodemailer";

async function getGoogleAuth() {
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!privateKey) {
    throw new Error(
      "GOOGLE_PRIVATE_KEY is not defined in environment variables."
    );
  }

  const formattedKey = privateKey
    .replace(/\\n/g, "\n")
    .replace(/^"(.*)"$/, "$1")
    .replace(/"/g, "")
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
  location?: string;
}) {
  const {
    MY_GMAIL_USER,
    GMAIL_APP_PASSWORD,
    GOOGLE_SHEET_ID,
    GOOGLE_CLIENT_EMAIL,
    GOOGLE_PRIVATE_KEY,
  } = process.env;

  // environment validation
  if (!GOOGLE_SHEET_ID)
    return {
      success: false,
      message: "Missing GOOGLE_SHEET_ID in environment.",
    };
  if (!GOOGLE_CLIENT_EMAIL)
    return {
      success: false,
      message: "Missing GOOGLE_CLIENT_EMAIL in environment.",
    };
  if (!GOOGLE_PRIVATE_KEY)
    return {
      success: false,
      message: "Missing GOOGLE_PRIVATE_KEY in environment.",
    };

  const SPREADSHEET_ID = GOOGLE_SHEET_ID;

  try {
    const { fullName, email, phone, location } = formData;

    if (!fullName || !email || !phone) {
      return { success: false, message: "All fields are required." };
    }

    const auth = await getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth: auth as any });

    const sheetName = "thegrandfinale";
    const range = `'${sheetName}'!A:F`;

    // check for duplicates
    const getResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
    });

    const rows = getResponse.data.values || [];
    const emailIndex = 2;

    const isDuplicate = rows.some((row) => row[emailIndex] === email);
    if (isDuplicate) {
      return {
        success: false,
        message: "This email address is already registered.",
      };
    }

    let id = "";
    do {
      const code = crypto.randomBytes(3).toString("hex").toUpperCase();
      id = `TGF-${code}`;
    } while (rows.some((row) => row[0] === id));
    const timestamp = new Date().toLocaleString();

    // append to gogle sheets
    const appendResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[id, fullName, email, phone, location || "N/A", timestamp]],
      },
    });

    console.log(
      `Log to Sheet: ${sheetName} (ID: ${SPREADSHEET_ID}), Status: ${appendResponse.status}`
    );

    // calendar invite (.ics)
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//SARE Events//Lost & Found//EN
METHOD:REQUEST
BEGIN:VEVENT
UID:the-grand-finale-2026-${id}@sarengineers.com
DTSTAMP:20260714T000000Z
DTSTART:20260725T190000Z
DTEND:20260725T203000Z
SUMMARY:Lost & Found: The Science Behind Autonomous Navigation
DESCRIPTION:Lost and Found: The Science Behind Autonomous Navigation is an exclusive webinar designed to demystify the technology guiding the future of robotics. Autonomous navigation is quietly becoming part of our daily lives, and this session explores the intricate science that makes it possible.\n\nJoin the WhatsApp Group for Updates: https://chat.whatsapp.com/J90Z22acjjK6MWWX8KPCaP
LOCATION:meet.google.com/cwi-szpo-wea
ORGANIZER;CN="SARE Events":mailto:${MY_GMAIL_USER}
ATTENDEE;ROLE=REQ-PARTICIPANT;PARTSTAT=NEEDS-ACTION;RSVP=TRUE:mailto:${email}
STATUS:CONFIRMED
BEGIN:VALARM
TRIGGER:-PT30M
ACTION:DISPLAY
DESCRIPTION:Reminder
END:VALARM
END:VEVENT
END:VCALENDAR`.replace(/\n/g, "\r\n");

    // send styled email via nodemailer (optional / non-blocking)
    let emailSent = false;
    if (MY_GMAIL_USER && GMAIL_APP_PASSWORD) {
      try {
        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: MY_GMAIL_USER,
            pass: GMAIL_APP_PASSWORD,
          },
        });

        await transporter.sendMail({
          from: `"SARE Events" <${MY_GMAIL_USER}>`,
          to: email,
          subject: "Registration Confirmed: The Grand Finale • SARE 2026 📍",
          attachments: [
            {
              filename: "invite.ics",
              content: icsContent,
              contentType: "text/calendar",
            },
          ],
          icalEvent: {
            filename: "invite.ics",
            method: "REQUEST",
            content: icsContent,
          },
          html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f9; padding: 20px; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            <div style="background-color: #67B5DC; padding: 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 1px;">The Grand Finale</h1>
              <p style="color: rgba(255,255,255,0.9); margin-top: 10px; font-weight: 300;">SARE Flagship Showcase • 2026</p>
            </div>
            <div style="padding: 20px;">
              <h2 style="color: #3081AA; margin-top: 0;">Registration Confirmed!</h2>
              <p style="font-size: 16px; line-height: 1.6;">Hi <strong>${fullName}</strong>,</p>
              <p style="font-size: 16px; line-height: 1.6;">Welcome to <strong>"The Grand Finale • SARE 2026"</strong>. We are thrilled to have you join us for this session.</p>
              
              <div style="background-color: #f9f9f9; border-left: 4px solid #67B5DC; padding: 20px; margin: 30px 0;">
                <p style="margin: 0; font-size: 14px; text-transform: uppercase; color: #888;">Your Registration ID</p>
                <p style="margin: 5px 0 0 0; font-size: 24px; font-weight: bold; color: #333;">${id}</p>
              </div>

              <p style="font-size: 16px; line-height: 1.6;">Please keep this ID handy as you will need it for check-in on the day of the event.</p>

              <div style="background-color: #f0f7fb; border: 1px solid #67B5DC; border-radius: 8px; padding: 15px; margin: 20px 0;">
                <h3 style="color: #3081AA; margin-top: 0; font-size: 16px;">Next Steps</h3>
                <p style="margin: 10px 0 5px 0;">📅 <a href="https://calendar.app.google/4dRGyvSUPPgvhMpAA" style="color: #3081AA; text-decoration: none; font-weight: bold;">Add to Google Calendar</a></p>
                <p style="margin: 5px 0 0 0;">💬 <a href="https://chat.whatsapp.com/J90Z22acjjK6MWWX8KPCaP" style="color: #3081AA; text-decoration: none; font-weight: bold;">Join the WhatsApp Group for Updates</a></p>
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
        emailSent = true;
      } catch (mailError) {
        console.warn("Nodemailer dispatch skipped or failed:", mailError);
        emailSent = false;
      }
    } else {
      console.warn(
        "Gmail credentials not configured; skipping email dispatch."
      );
    }

    return {
      success: true,
      emailSent,
      message: "Registration successful!",
      id,
    };
  } catch (err: any) {
    console.error("DEBUG: Full Registration Error:", err);
    return {
      success: false,
      message: err.message || "An unexpected error occurred.",
    };
  }
}
