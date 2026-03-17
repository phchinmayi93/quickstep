import { connectDB } from "@/lib/db";
import Enrollment from "@/models/Enrollment";
import { NextResponse } from "next/server";
import { sendEmail } from "@/lib/sendEmail";

export async function POST(req: Request) {

  try {

    await connectDB();

    const body = await req.json();

    const enrollment = await Enrollment.create(body);

    // SEND EMAIL ONLY IF EMAIL EXISTS
    if (body.email && body.email.trim() !== "") {
      await sendEmail(body.email, body.name, body.courseTitle);
    }

    return NextResponse.json({
      success: true,
      data: enrollment
    });

  } catch (error: any) {

    return NextResponse.json({
      success: false,
      message: error.message
    });

  }

}