require("dotenv").config({ path: ".env.local" });
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

// --- CONFIGURATION ---
const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
const RANGE = "Selected Applicants!A:D"; // Col A = Name, Col B = Email, Col C = Status, Col D = Notes
const GOOGLE_FORM_LINK = "https://forms.gle/Aadftnd7a1GBSPBV7"; 

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
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    project_id: process.env.GOOGLE_PROJECT_ID,
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
});

const sheets = google.sheets({ version: "v4", auth });
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  try {
    console.log("🔄 Fetching selected applicants...");
    const response = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: RANGE });
    
    const applicants = response.data.values;
    
    if (!applicants || applicants.length === 0) {
      console.log("No data found.");
      return;
    }

    console.log(`✅ Found ${applicants.length} rows. Sending 24-Hour Countdown Emails...`);

    for (let i = 1; i < applicants.length; i++) {
      const row = applicants[i];
      const name = row[0];
      const email = row[1];
      const status = row[3] ? row[3].trim().toLowerCase() : "nill"; 

      if (email && email.includes("@")) {
        if (status === "paid") {
          await sendPaidEmail(email, name);
        } else if (status === "nill" || status === "nil") {
          await sendReminderEmail(email, name);
        } else {
          console.log(`⚠️ Skipped ${name} - Unknown status: ${status}`);
        }
        await sleep(1500); 
      }
    }

    console.log("🎉 All eve-of-Onboarding Session emails sent successfully!");

  } catch (error) {
    console.error("❌ Fatal Error:", error);
  }
}

// ==========================================
// 1. EMAIL FOR THOSE WHO HAVE PAID (HYPED)
// ==========================================
async function sendPaidEmail(to, fullName) {
  const firstName = fullName ? fullName.split(" ")[0] : "Builder";
  const subject = "TOMORROW: Your SARE Onboarding Session!";

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; border: 1px solid #eee; padding: 20px;">
      
      <h2 style="color: #27ae60;">Hello ${firstName},</h2>
      
      <p>The countdown is almost over. We are officially <strong>less than 24 hours away</strong> from the SARE Onboarding Session! 🚀</p>
      
      <p>Since your acceptance is fully confirmed, all you need to do right now is get ready. Tomorrow, you will officially be plugged into the SARE ecosystem.</p>

      <h3>What to Expect Tomorrow:</h3>
      <ul>
        <li>You will be added to the exclusive SARE members-only WhatsApp group.</li>
        <li>We will walk you through our operational workflows and how we collaborate.</li>
        <li>You will be formally assigned to your selected technical teams (e.g., AI/ML, 3D Design, Software Dev).</li>
      </ul>

      <br>
      <p>Warm regards,<br>
      <strong>The SARE Team</strong></p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"SARE Team" <${process.env.MY_GMAIL_USER}>`,
      to: to,
      subject: subject,
      html: htmlContent,
    });
    console.log(`✅ Sent PAID (Tomorrow) email to: ${fullName}`);
  } catch (error) {
    console.error(`❌ Failed PAID email for ${to} | ${error.message}`);
  }
}

// ==========================================
// 2. EMAIL FOR THOSE YET TO PAY (URGENT)
// ==========================================
async function sendReminderEmail(to, fullName) {
  const firstName = fullName ? fullName.split(" ")[0] : "Builder";
  const subject = "⏳ URGENT: SARE Onboarding Session is TOMORROW (Action Required)";

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; border: 1px solid #eee; padding: 20px;">
      
      <h2 style="color: #e67e22;">Hello ${firstName},</h2>
      
      <p>The SARE Onboarding Session is officially happening <strong>tomorrow, March 7th</strong>, and we don't want you to miss out!</p>
      
      <p>We are doing a final check-in because our records show that your acceptance fee is still pending. Tomorrow’s Onboarding Session is where members will be assigned to their specific technical teams and added to the official society workspace.</p>

      <p><strong>This is your final reminder to secure your spot.</strong></p>

      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #ddd; margin: 20px 0;">
        <h4 style="margin-top: 0; color: #333;">Payment Breakdown</h4>
        <ul style="list-style-type: none; padding: 0;">
          <li><strong>Member Fee:</strong> ₦1,000</li>
          <li><strong>Acceptance Fee:</strong> ₦1,500</li>
          <li style="border-top: 1px solid #ddd; margin-top: 10px; padding-top: 10px; font-weight: bold; font-size: 18px;">Total: ₦2,500</li>
        </ul>
      </div>

      <h3>Payment Procedure</h3>
      <p>Please make your payment and upload your receipt to the acceptance form below before the Onboarding Session kicks off tomorrow.</p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${GOOGLE_FORM_LINK}" style="background-color: #e67e22; color: white; padding: 14px 28px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">
          Complete Acceptance Form
        </a>
      </div>

      <p><em>(Link not working? Use this: <a href="${GOOGLE_FORM_LINK}">${GOOGLE_FORM_LINK}</a>)</em></p>

      <p>We truly hope to see you tomorrow so we can start building together!</p>

      <br>
      <p>Warm regards,<br>
      <strong>The SARE Team</strong></p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"SARE Team" <${process.env.MY_GMAIL_USER}>`,
      to: to,
      subject: subject,
      html: htmlContent,
    });
    console.log(`⚠️ Sent URGENT REMINDER to: ${fullName}`);
  } catch (error) {
    console.error(`❌ Failed REMINDER email for ${to} | ${error.message}`);
  }
}

main();