import { connectDB } from "@/lib/db";
import Enrollment from "@/models/Enrollment";
import { NextResponse } from "next/server";

export async function GET() {

  try {

    await connectDB();

    const students = await Enrollment.find().sort({ createdAt: -1 });

    return NextResponse.json({
      success: true,
      data: students
    });

  } catch (error:any) {

    return NextResponse.json({
      success:false,
      message:error.message
    });

  }

}