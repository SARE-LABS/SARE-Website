require("dotenv").config({ path: ".env.local" });
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

// --- CONFIGURATION ---
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const RANGE = "ApplicationResponse!A:B"; 
const WHATSAPP_LINK = "https://chat.whatsapp.com/J90Z22acjjK6MWWX8KPCaP";

// --- NODEMAILER SETUP ---
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MY_GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// --- GOOGLE SHEETS SETUP ---
const auth = new google.auth.GoogleAuth({
  credentials: {
    type: process.env.GOOGLE_TYPE,
    project_id: process.env.GOOGLE_PROJECT_ID,
    private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    client_id: process.env.GOOGLE_CLIENT_ID,
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });

// --- HELPER: DELAY ---
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  try {
    console.log("🔄 Fetching applicants from Google Sheets...");

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      console.log("No data found.");
      return;
    }

    console.log(`✅ Found ${rows.length} rows. Starting email blast...`);

    // LOOP: Start at i = 1 (to skip headers).
    // If you want to skip the 1 person who already got it, change to: let i = 2;
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const name = row[0] || "Future Engineer"; // Column A
      const email = row[1]; // Column B

      if (!email || !email.includes("@")) {
        console.log(`⚠️ Skipping row ${i + 1}: Invalid email.`);
        continue;
      }

      // Send the email
      await sendInviteEmail(email, name);

      // Wait 1 second between emails
      await sleep(1000); 
    }

    console.log("🎉 All emails processed!");

  } catch (error) {
    console.error("❌ Fatal Error:", error);
  }
}

async function sendInviteEmail(to, name) {
  const subject = "Urgent: Join the SARE Q&A Session this Saturday! 🚀";
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2>Hello ${name},</h2>

      <p>Thank you for your application to the <strong>Society of Agricultural Robotics Engineers (SARE)</strong>.</p>

      <p>We know you might have questions about the recruitment process, what we are looking for, or what exactly we do at SARE. We want to answer them.</p>

      <h3>📢 Live Q&A Session</h3>
      <p>We are holding an exclusive <strong>Q&A Session this Saturday</strong> to address:</p>
      <ul>
        <li>The next stages of the application process.</li>
        <li>What to expect during the interview phase.</li>
        <li>Clarifications on projects, teams, and time commitment.</li>
      </ul>

      <p><strong>This is your chance to get ahead and ensure you are fully prepared.</strong></p>

      <h3>👇 Action Required: Join the Group</h3>
      <p>To participate in the session and get the meeting link, please join our dedicated Applicant WhatsApp Group immediately:</p>

      <p style="text-align: center;">
        <a href="${WHATSAPP_LINK}" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">
          Click to Join WhatsApp Group
        </a>
      </p>

      <p><em>(If the button doesn't work, use this link: <a href="${WHATSAPP_LINK}">${WHATSAPP_LINK}</a>)</em></p>

      <p>See you on Saturday!</p>
      <br>
      <p>Best regards,</p>
      <p><strong>The SARE Recruitment Team</strong></p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"SARE Recruitment Team" <${process.env.MY_GMAIL_USER}>`,
      to: to,
      subject: subject,
      html: htmlContent,
    });
    // FIXED: Changed 'email' to 'to'
    console.log(`📧 Sent to: ${to} (${name})`); 
  } catch (error) {
    // FIXED: Changed 'email' to 'to'
    console.error(`❌ Failed to send to ${to}:`, error.message); 
  }
}

main();