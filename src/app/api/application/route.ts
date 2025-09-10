import { google } from "googleapis";
import { NextResponse } from "next/server";

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

    // 🟢 Newsletter submission (only email provided)
    if (email && !fullName && !whatsapp && !department && !question) {
      const range = "Newsletter!A:B"; // Newsletter tab
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "RAW",
        requestBody: {
          values: [[email, new Date().toISOString()]],
        },
      });
      return NextResponse.json({
        success: true,
        message: "✅ Newsletter signup successful!",
      });
    }

    // 🟢 FAQ submission (only question provided)
    if (question && !fullName && !whatsapp && !department) {
      const range = "FAQs!A:B"; // FAQs tab
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

    // 🟢 Application submission (full form)
    const range = "ApplicationResponse!A:J"; // Application tab
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

    return NextResponse.json({
      success: true,
      message: "✅ Application submitted successfully!",
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Something went wrong" },
      { status: 500 }
    );
  }
}
