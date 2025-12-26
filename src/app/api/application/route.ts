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
    subject = "Application Received: SARE 🤖";
    htmlContent = `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Dear ${name},</h2>
        <p>Thank you for applying to the <strong>Society of Agricultural Robotics Engineers (SARE)</strong>.</p>
        <p>We’re pleased to let you know that we have successfully received your application. Our team is currently reviewing all submissions, and shortlisted applicants will be contacted with details of the next stage of the application process.</p>
        <p>We appreciate your interest in SARE and your enthusiasm for innovation in agriculture and engineering. Please keep an eye on your email — we’ll be in touch soon.</p>
        <br>
        <p>Warm regards,</p>
        <p><strong>The SARE Team</strong><br>Society of Agricultural Robotics Engineers</p>
      </div>
    `;
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
      // (Optional: You could add an email here for FAQs if you wanted)
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