import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Enrollment from "@/models/Enrollment";

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    await connectDB();

    const { id } = await context.params;

    const student = await Enrollment.findById(id);

    if (!student) {
      return NextResponse.json({
        success: false,
        message: "Student not found"
      });
    }

    return NextResponse.json({
      success: true,
      data: student
    });

  } catch (error: any) {
    return NextResponse.json({
      success: false,
      message: error.message
    });
  }
}