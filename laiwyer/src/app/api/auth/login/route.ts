import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import Users from "../../../../lib/models/Users";// assuming you have a User model

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // 🔹 Find the user in your database (replace mock with actual lookup)
    const user = await Users.findOne({ email });
    console.log("Email",email)
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // 🔹 Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
    }

    // 🔹 Send back the user info (without password)
    const { password: _, ...userData } = user.toObject(); // remove password from response
    return NextResponse.json({ message: "Login successful", user: userData }, { status: 200 });
  } catch (error) {
    console.error("Login failed:", error); // Log the error for debugging
    return NextResponse.json({ message: "Login failed", error: error.message }, { status: 500 });
  }
}
