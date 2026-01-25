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

    console.log(`✅ Found ${rows.length} rows. Sending 'Applications Closed' update...`);

    // Start at i = 1 to skip headers
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const name = row[0] || "Future Engineer"; 
      const email = row[1]; 

      if (!email || !email.includes("@")) {
        continue;
      }

      await sendUpdateEmail(email, name);
      await sleep(1000); // 1 second delay
    }

    console.log("🎉 All emails processed!");

  } catch (error) {
    console.error("❌ Fatal Error:", error);
  }
}

async function sendUpdateEmail(to, name) {
  const subject = "SARE Applications Closed: Next Steps & Upcoming Workshop 🛠️";
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2>Hello ${name},</h2>

      <p>This is a quick update to inform you that <strong>SARE Membership Applications are now officially closed.</strong></p>

      <p>Congratulations! ✅ You have successfully completed the first step of the process.</p>

      <h3>🔍 What Happens Next?</h3>
      <p>Our team is currently reviewing all submissions. Over the coming days, we will be sending out invitations for the next stage of the recruitment process.</p>
      
      <p><strong>Please keep a close eye on your email (and spam folder) so you don't miss important updates.</strong></p>

      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">

      <h3>🎨 Coming Soon: Virtual Fusion 360 Workshop</h3>
      <p>While you wait for the next stage, we want to keep the momentum going.</p>
      
      <p>We are excited to announce that we will be hosting a <strong>Virtual CAD Workshop</strong> tailored for everyone—beginners and pros alike.</p>
      
      <ul>
        <li><strong>Tool:</strong> Autodesk Fusion 360 ⚙️</li>
        <li><strong>Focus:</strong> Practical 3D Design & Modeling</li>
        <li><strong>Eligibility:</strong> Open to ALL</li>
      </ul>

      <p>This session promises to be highly engaging and hands-on. Details on the date and time will be shared in the <strong>WhatsApp Group</strong> soon.</p>

      <p style="text-align: center;">
        <a href="${WHATSAPP_LINK}" style="color: #25D366; font-weight: bold; text-decoration: none;">
          Make sure you are in the WhatsApp Group to get the link &raquo;
        </a>
      </p>
      <p>By the way, you are the first to know. 🫣</p>
      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
      <p>Stay tuned and keep building!</p>
      <br>
      <p>Best regards,</p>
      <p><strong>The SARE Team</strong></p>
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