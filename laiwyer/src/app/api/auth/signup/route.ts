import { connectDB } from "../../../../lib/mongodb";
import Users from "../../../../lib/models/Users";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

// Named export for POST method
export async function POST(req: Request) {
  try {
    await connectDB(); // Connect to MongoDB
    const { name, email, password } = await req.json();

    // Check if user exists
    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      console.log("user exists")
      return NextResponse.json({ message: "Users already exists" }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save new user
    const newUser = await Users.create({ name, email, password: hashedPassword });
    console.log("success")
    return NextResponse.json({ message: "Users created successfully", user: newUser }, { status: 201 });
  } catch (error) {
    console.log(error)
    return NextResponse.json({ message: "Signup failed", error }, { status: 500 });
  }
}
