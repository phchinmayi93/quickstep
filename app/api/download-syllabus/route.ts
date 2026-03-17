import { NextResponse } from "next/server";
import mongoose from "mongoose";

const MONGO_URI = "mongodb://127.0.0.1:27017/quickstep";

async function connectDB() {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(MONGO_URI);
}

const LeadSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Lead =
  mongoose.models.Lead || mongoose.model("Lead", LeadSchema);

export async function POST(req: Request) {

  try {

    const body = await req.json();

    await connectDB();

    await Lead.create(body);

    return NextResponse.json({ success: true });

  } catch (error) {

    console.log(error);

    return NextResponse.json({ success: false });

  }

}