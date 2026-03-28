// require("dotenv").config({ path: ".env.local" });
// const { google } = require("googleapis");
// const nodemailer = require("nodemailer");

// // --- CONFIGURATION ---
// const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
// // 🚨 IMPORTANT: Make sure you create a sheet named "Rejected Applicants" 
// // and put the list of people you are emailing there.
// const RANGE = "'Rejected Applicants'!A:B"; 
// const WHATSAPP_LINK = "https://chat.whatsapp.com/J90Z22acjjK6MWWX8KPCaP"; // Optional: If you have a general community group

// // --- NODEMAILER SETUP ---
// const transporter = nodemailer.createTransport({
//   service: "Gmail",
//   auth: {
//     user: process.env.MY_GMAIL_USER,
//     pass: process.env.GMAIL_APP_PASSWORD,
//   },
// });

// // --- GOOGLE SHEETS SETUP ---
// const auth = new google.auth.GoogleAuth({
//   credentials: {
//     client_email: process.env.GOOGLE_CLIENT_EMAIL,
//     private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
//     project_id: process.env.GOOGLE_PROJECT_ID,
//   },
//   scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
// });

// const sheets = google.sheets({ version: "v4", auth });
// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// async function main() {
//   try {
//     console.log("🔄 Fetching applicants...");
//     const response = await sheets.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: RANGE });
    
//     const rows = response.data.values;
    
//     if (!rows || rows.length === 0) {
//       console.log("No data found.");
//       return;
//     }

//     console.log(`✅ Found ${rows.length} rows. Sending Rejection/Encouragement Emails...`);

//     // Start at i = 1 to skip headers (Assuming Row 1 is "Name", "Email")
//     for (let i = 1; i < rows.length; i++) {
//       const row = rows[i];
//       const name = row[0] || "Future Engineer";
//       const email = row[1];

//       if (email && email.includes("@")) {
//         await sendRejectionEmail(email, name);
//         await sleep(1500); // 1.5s delay
//       }
//     }

//     console.log("🎉 All emails processed!");

//   } catch (error) {
//     console.error("❌ Fatal Error:", error);
//   }
// }

// async function sendRejectionEmail(to, fullName) {
//   const firstName = fullName.split(" ")[0];
//   const subject = "Update on your SARE Application";

//   const htmlContent = `
//     <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; border: 1px solid #eee; padding: 20px;">
      
//       <h2 style="color: #333;">Hello ${firstName},</h2>
      
//       <p>Thank you for giving us the opportunity to review your application for the <strong>Society of Agricultural Robotics Engineers (SARE)</strong>.</p>
      
//       <p>We received an overwhelming number of applications this year from many talented individuals, making our selection process incredibly difficult. After careful consideration, we are writing to inform you that we will <strong>not be moving forward with your membership application</strong> at this time.</p>

//       <p>Please know that this decision is largely a reflection of the limited spots available and not a reflection of your potential.</p>

//       <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">

//       <h3>Keep Building with CTRL LABS</h3>
//       <p>At SARE, our mission is to foster innovation across the entire student community, not just within our membership.</p>
      
//       <p>We strongly encourage you to attend our <strong>CTRL LABS</strong> sessions.</p>
      
//       <p><strong>CTRL LABS</strong> is our open technical training arm designed to help you:</p>
//       <ul>
//         <li>Build hands-on skills in Robotics and AI.</li>
//         <li>Work on practical engineering projects.</li>
//         <li>Connect with other builders in the ecosystem.</li>
//       </ul>

//       <p>This is a fantastic avenue for you to grow your skills, and many of our best members started by simply showing up to labs consistently.</p>

//       <p>We hope to see you at the next session and look forward to seeing what you build in the future.</p>

//       <br>
//       <p>Warm regards,<br>
//       <strong>The SARE Recruitment Team</strong></p>
//     </div>
//   `;

//   try {
//     await transporter.sendMail({
//       from: `"SARE Recruitment Team" <${process.env.MY_GMAIL_USER}>`,
//       to: to,
//       subject: subject,
//       html: htmlContent,
//     });
//     console.log(`📧 Sent to: ${fullName} (${to})`);
//   } catch (error) {
//     console.error(`❌ Failed: ${to} | ${error.message}`);
//   }
// }

// main();



require("dotenv").config({ path: ".env.local" });
const nodemailer = require("nodemailer");

// --- MANUAL LIST OF FAILED EMAILS ---
// I added a "Name" based on their email address to keep it personal.
const FAILED_LIST = [
  { email: "muhammadaw228@gmail.com", name: "Muhammad" },
  { email: "felixgod1001@gmail.com", name: "Felix" },
  { email: "christianhelen918@gmail.com", name: "Christian" },
  { email: "adedokunmutmaina@gmail.com", name: "Adedokun" },
  { email: "kingusang09@gmail.com", name: "King" },
  { email: "akanbiadeniyi865@gmail.com", name: "Akanbi" },
  { email: "adekolaolaonipekun@gmail.com", name: "Adekola" },
  { email: "amooabdulsamad8@gmail.com", name: "Amoo" }
];

// --- NODEMAILER SETUP ---
const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MY_GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  console.log(`🔄 Retrying for ${FAILED_LIST.length} applicants...`);

  for (const person of FAILED_LIST) {
    await sendRejectionEmail(person.email, person.name);
    // Increased delay to 3 seconds to prevent timeouts
    await sleep(3000); 
  }

  console.log("🎉 All retry emails processed!");
}

async function sendRejectionEmail(to, firstName) {
  const subject = "Update on your SARE Application";

  const htmlContent = `
    <div style="font-family: 'Segoe UI', Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; border: 1px solid #eee; padding: 20px;">
      
      <h2 style="color: #333;">Hello ${firstName},</h2>
      
      <p>Thank you for giving us the opportunity to review your application for the <strong>Society of Agricultural Robotics Engineers (SARE)</strong>.</p>
      
      <p>We received an overwhelming number of applications this year from many talented individuals, making our selection process incredibly difficult. After careful consideration, we are writing to inform you that we will <strong>not be moving forward with your membership application</strong> at this time.</p>

      <p>Please know that this decision is largely a reflection of the limited spots available and not a reflection of your potential.</p>

      <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">

      <h3>Keep Building with CTRL LABS</h3>
      <p>At SARE, our mission is to foster innovation across the entire student community, not just within our membership.</p>
      
      <p>We strongly encourage you to attend our <strong>CTRL LABS</strong> sessions.</p>
      
      <p><strong>CTRL LABS</strong> is our open technical training arm designed to help you:</p>
      <ul>
        <li>Build hands-on skills in Robotics and AI.</li>
        <li>Work on practical engineering projects.</li>
        <li>Connect with other builders in the ecosystem.</li>
      </ul>

      <p>This is a fantastic avenue for you to grow your skills, and many of our best members started by simply showing up to labs consistently.</p>

      <p>We hope to see you at the next session and look forward to seeing what you build in the future.</p>

      <br>
      <p>Warm regards,<br>
      <strong>The SARE Recruitment Team</strong></p>
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
    console.error(`❌ Failed Again: ${to} | ${error.message}`);
  }
}

main();