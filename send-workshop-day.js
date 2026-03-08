require("dotenv").config({ path: ".env.local" });
const { google } = require("googleapis");
const nodemailer = require("nodemailer");

// --- CONFIGURATION ---
const SPREADSHEET_ID = "1F3HKH4LuQYnxomz4TgZJ_aLc-HH9cdi7JFscnHakaeU";
const RANGE = "'The Missing Link'!A:C"; 
const WHATSAPP_LINK = "https://chat.whatsapp.com/J90Z22acjjK6MWWX8KPCaP";
const MEET_LINK = "https://meet.google.com/gyt-jkpn-ytk"; 

// --- COLUMN MAPPING ---
// 0 = Col A, 1 = Col B, 2 = Col C
const NAME_COL_INDEX = 1; 
const EMAIL_COL_INDEX = 2; 

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
    console.log("🔄 Fetching registrants...");

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SPREADSHEET_ID,
      range: RANGE,
    });

    const rows = response.data.values;

    if (!rows || rows.length === 0) {
      console.log("No data found.");
      return;
    }

    console.log(`✅ Found ${rows.length} rows. Sending 'JOIN NOW' blast...`);

    // Start at i = 1 to skip headers
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const name = row[NAME_COL_INDEX] || "Builder"; 
      const email = row[EMAIL_COL_INDEX]; 

      if (!email || !email.includes("@")) {
        continue;
      }

      await sendLiveEmail(email, name);
      await sleep(1000); // 1 second delay
    }

    console.log("🎉 All emails processed!");

  } catch (error) {
    console.error("❌ Fatal Error:", error);
  }
}

async function sendLiveEmail(to, name) {
  const firstName = name.split(" ")[0];

  // 🚨 URGENT SUBJECT LINE
  const subject = "🔴 HAPPENING NOW: The Missing Link is LIVE! 🚀";
  
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
      <h2>Hello ${firstName},</h2>

      <p><strong>WE ARE LIVE! 🔴</strong></p>

      <p>The waiting is over. <strong>"The Missing Link"</strong> workshop is starting right now.</p>

      <p>Arabi Cyprian is ready. Fusion 360 is open. It's time to build.</p>

      <h3>👇 JOIN THE SESSION IMMEDIATELY</h3>
      
      <p style="text-align: center; margin: 30px 0;">
        <a href="${MEET_LINK}" style="background-color: #d93025; color: white; padding: 14px 28px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 18px;">
          CLICK TO JOIN LIVE
        </a>
      </p>

      <p><em>(Link not working? Copy this: <a href="${MEET_LINK}">${MEET_LINK}</a>)</em></p>

      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">

      <h3>⚠️ Issues Joining?</h3>
      <p>If you are having trouble entering the meeting or setting up, check the WhatsApp group for instant support.</p>
      
      <p style="text-align: center;">
        <a href="${WHATSAPP_LINK}" style="color: #25D366; font-weight: bold; text-decoration: none;">
          👉 Check WhatsApp Group
        </a>
      </p>

      <p>See you inside!</p>
      <br>
      <p><strong>The SARE Team</strong></p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"SARE Team" <${process.env.MY_GMAIL_USER}>`,
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