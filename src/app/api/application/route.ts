import { google } from "googleapis";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.MY_GMAIL_USER, 
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

async function sendConfirmationEmail(to: string, name: string, type: string) {
  let subject = "";
  let htmlContent = "";
  const WHATSAPP_LINK = "https://chat.whatsapp.com/J90Z22acjjK6MWWX8KPCaP";

  if (type === "newsletter") {
    subject = "Welcome to the SARE Community! 🌱";
    htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Hello,</h2>
        <p>Thank you for subscribing to the <strong>SARE Newsletter</strong>!</p>
        <p>You’re now part of our growing community, and you’ll be the first to receive updates on our projects, events, workshops, opportunities, and innovations in agricultural robotics.</p>
        <p>We’re excited to have you with us as we reimagine engineering for an AI-driven world.</p>
        <br>
        <p>Best wishes,</p>
        <p><strong>SARE Team</strong></p>
      </div>
    `;
  } else if (type === "application") {
    // --- UPDATED SECTION START ---
    subject = "Application Received: SARE 🤖";
    htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
        <h2>Dear ${name},</h2>
        <p>Thank you for applying to the <strong>Society of Agricultural Robotics Engineers (SARE)</strong>.</p>
        
        <p>We’re pleased to confirm that we have successfully received your application. Our team is currently reviewing all submissions.</p>

        <h3>👇 Next Step: Join the Community</h3>
        <p>While we review your application, it is mandatory to join our <strong>Applicant WhatsApp Group</strong>. This is where we will post interview schedules, urgent updates, and host our Q&A sessions.</p>

        <p style="text-align: center; margin: 20px 0;">
          <a href="${WHATSAPP_LINK}" style="background-color: #25D366; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; font-weight: bold; font-size: 16px;">
            Click to Join WhatsApp Group
          </a>
        </p>

        <p><em>(If the button doesn't work, use this link: <a href="${WHATSAPP_LINK}">${WHATSAPP_LINK}</a>)</em></p>

        <p>We appreciate your interest in SARE and your enthusiasm for innovation. Please keep an eye on the group and your email!</p>
        <br>
        <p>Warm regards,</p>
        <p><strong>The SARE Team</strong><br>Society of Agricultural Robotics Engineers</p>
      </div>
    `;
    // --- UPDATED SECTION END ---
  }

  await transporter.sendMail({
    from: `"Society of Agricultural Robotics Engineers" <${process.env.MY_GMAIL_USER}>`, 
    to: to, 
    subject: subject,
    html: htmlContent, 
  });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      whatsapp,
      department,
      skills,
      response,
      currentSkills,
      teamworkExperience,
      teamworkContribution,
      question, 
    } = body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: process.env.GOOGLE_TYPE,
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key_id: process.env.GOOGLE_PRIVATE_KEY_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        client_id: process.env.GOOGLE_CLIENT_ID,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SHEET_ID as string;

    // --- CASE 1: Newsletter ---
    if (email && !fullName && !whatsapp && !department && !question) {
      const range = "Newsletter!A:B"; 
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "RAW",
        requestBody: {
          values: [[email, new Date().toISOString()]],
        },
      });
      
      // Send Newsletter Email
      if (email) {
        await sendConfirmationEmail(email, "Subscriber", "newsletter");
      }
      
      return NextResponse.json({
        success: true,
        message: "✅ Newsletter signup successful!",
      });
    }

    // --- CASE 2: FAQ ---
    if (question && !fullName && !whatsapp && !department) {
      const range = "FAQs!A:B"; 
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "RAW",
        requestBody: {
          values: [[question, new Date().toISOString()]],
        },
      });
      return NextResponse.json({
        success: true,
        message: "✅ FAQ submitted successfully!",
      });
    }

    // --- CASE 3: Application ---
    const range = "ApplicationResponse!A:J"; 
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            fullName,
            email,
            whatsapp,
            department,
            skills,
            response,
            currentSkills,
            teamworkExperience,
            teamworkContribution,
            new Date().toISOString(),
          ],
        ],
      },
    });

    // Send Application Email
    if (email) {
       await sendConfirmationEmail(email, fullName || "Applicant", "application");
    }

    return NextResponse.json({
      success: true,
      message: "✅ Application submitted successfully!",
    });

  } catch (error: any) {
    console.error("API Error:", error); // Helpful for debugging
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}