"use server";

import { google } from "googleapis";
import { Resend } from "resend";


async function getGoogleAuth() {
  let privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!privateKey) {
    throw new Error("GOOGLE_PRIVATE_KEY is not defined in environment variables.");
  }

  // Handle common formatting issues
  const formattedKey = privateKey
    .replace(/\\n/g, "\n")              // Convert literal \n to real newlines
    .replace(/^"(.*)"$/, "$1")         // Remove surrounding quotes if any
    .replace(/"/g, "")                 // Final quote cleanup
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
}) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
  const RANGE = "Sheet1!A:E"; 

  try {
    const { fullName, email, phone } = formData;

    if (!fullName || !email || !phone) {
      return { success: false, message: "All fields are required." };
    }

    const auth = await getGoogleAuth();
    const sheets = google.sheets({ version: "v4", auth: auth as any });

    // 1. Get Spreadsheet Metadata to find the first sheet name
    const spreadsheet = await sheets.spreadsheets.get({
      spreadsheetId: SPREADSHEET_ID,
    });

    const sheetName = spreadsheet.data.sheets?.[0]?.properties?.title || "Sheet1";
    const range = `${sheetName}!A:E`;

    // 2. Check for duplicates
    const getResponse = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
    });

    const rows = getResponse.data.values || [];
    const emailIndex = 2; // Assuming Column C is Email (A=0, B=1, C=2)
    
    const isDuplicate = rows.some((row) => row[emailIndex] === email);
    if (isDuplicate) {
      return { success: false, message: "This email address is already registered." };
    }

    // 3. Generate Unique ID (IBS2.0-001)
    const nextIdNumber = rows.length; 
    const id = `IBS2.0-${String(nextIdNumber).padStart(3, "0")}`;
    const timestamp = new Date().toLocaleString();

    // 4. Append to Google Sheets
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: range,
      valueInputOption: "RAW",
      requestBody: {
        values: [[id, fullName, email, phone, timestamp]],
      },
    });

    // 4. Send Styled Email via Resend
    const { data, error } = await resend.emails.send({
      from: `CTRL LABS Ice Breaker Session <${process.env.RESEND_SENDER_EMAIL}>`,
      to: [email],
      subject: "Registration Confirmed: Take CTRL of Innovation 🚀",
      html: `
        <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f4f7f9; padding: 20px; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            <div style="background-color: #0FC99F; padding: 20px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 28px; letter-spacing: 1px;">CTRL LABS</h1>
              <p style="color: rgba(255,255,255,0.9); margin-top: 10px; font-weight: 300;">Ice Breaker Session 2.0</p>
            </div>
            <div style="padding: 20px;">
              <h2 style="color: #0FC99F; margin-top: 0;">Registration Confirmed!</h2>
              <p style="font-size: 16px; line-height: 1.6;">Hi <strong>${fullName}</strong>,</p>
              <p style="font-size: 16px; line-height: 1.6;">Welcome to <strong>"Take CTRL of Innovation"</strong>. We are thrilled to have you join us for this session.</p>
              
              <div style="background-color: #f9f9f9; border-left: 4px solid #0FC99F; padding: 20px; margin: 30px 0;">
                <p style="margin: 0; font-size: 14px; text-transform: uppercase; color: #888;">Your Registration ID</p>
                <p style="margin: 5px 0 0 0; font-size: 24px; font-weight: bold; color: #333;">${id}</p>
              </div>

              <p style="font-size: 16px; line-height: 1.6;">Please keep this ID handy as you may need it for check-in on the day of the event.</p>
              
              <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center;">
                <p style="font-size: 14px; color: #888;">Stay Innovative,<br/>The CTRL LABS Team</p>
              </div>
            </div>
            <div style="background-color: #333; padding: 20px; text-align: center;">
              <p style="color: #fff; font-size: 12px; margin: 0;">&copy; 2026 CTRL LABS. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend Error:", error);
      // We still return success: true because it's recorded in Sheets, but mention email failure if needed
      // Actually, better to inform user if email failed but registration succeeded
      return { 
        success: true, 
        message: "Registration successful! (Email delivery failed but your spot is reserved)", 
        id 
      };
    }

    return { success: true, message: "Registration successful!", id };
  } catch (err: any) {
    console.error("Registration Error:", err);
    return { success: false, message: err.message || "An unexpected error occurred." };
  }
}
