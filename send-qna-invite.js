require("dotenv").config({ path: ".env.local" });
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

// --- CONFIGURATION ---
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const RANGE = "ApplicationResponse!A:B"; 
const WORKSHOP_LINK = "https://www.sarengineers.com/event-registrar";
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
    console.log("🔄 Fetching applicants...");

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      console.log("No data found.");
      return;
    }

    console.log(`✅ Found ${rows.length} rows. Sending 'Review Update' email...`);

    // Start at i = 1 to skip headers
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const name = row[0] || "Future Engineer"; 
      const email = row[1]; 

      if (!email || !email.includes("@")) {
        continue;
      }

      await sendUpdateEmail(email, name);
      await sleep(1000); // 1 second delay to prevent blocking
    }

    console.log("🎉 All emails processed!");

  } catch (error) {
    console.error("❌ Fatal Error:", error);
  }
}

async function sendUpdateEmail(to, name) {
  const subject = "Application Update + Invitation to Build with Fusion 360";
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2>Hello ${name},</h2>

      <p>We know it’s been a little while, so we wanted to reach out and give you a quick update.</p>

      <p><strong>First off: Don't panic.</strong></p>
      
      <p>Your application is safe and sound. We received an overwhelming number of incredible submissions, and our team is taking the time to carefully review every single one. We want to ensure we give every applicant the attention they deserve.</p>

      <p>Your application is <strong>still under review</strong>, and we will be in touch regarding the next stage soon. Hang in tight!</p>

      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">

      <h3>🎨 While you wait... Let's Build.</h3>
      <p>At SARE, we believe in constant growth. So, while the review process continues, we decided to organize something special to keep you engaged.</p>
      
      <p>We are hosting a <strong>Hands-on Fusion 360 Workshop</strong>!</p>
      
      <p>Whether you are a complete beginner or looking to sharpen your CAD skills, this workshop is designed to get you designing 3D models in no time. It is open to everyone—you don't need to be a member to join.</p>

      <ul>
        <li><strong>Topic:</strong> The Missing Link; An introduction to Joints in CAD design </li>
        <li><strong>Cost:</strong> Free</li>
        <li><strong>Requirement:</strong> A laptop & willingness to learn</li>
      </ul>

      <p><strong>Secure your slot now by registering below:</strong></p>

      <p style="text-align: center; margin: 30px 0;">
        <a href="${WORKSHOP_LINK}" style="background-color: #007bff; color: white; padding: 14px 28px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">
          Register for Workshop Here
        </a>
      </p>

      <p><em>(Link not working? Copy this: <a href="${WORKSHOP_LINK}">${WORKSHOP_LINK}</a>)</em></p>

      <p>We can't wait to see what you create!</p>
      <br>
      <p>Best regards,</p>
      <p><strong>The SARE Team</strong></p>
      
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
      <p style="font-size: 12px; color: #888; text-align: center;">
        Missed the WhatsApp link? <a href="${WHATSAPP_LINK}" style="color: #25D366;">Join here for updates</a>.
      </p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"SARE Recruitment Team" <${process.env.MY_GMAIL_USER}>`,
      to: to,
      subject: subject,
      html: htmlContent,
    });
    console.log(`📧 Sent to: ${to}`); 
  } catch (error) {
    console.error(`❌ Failed to send to ${to}:`, error.message); 
  }
}

main();