import { NextRequest, NextResponse } from "next/server";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";

// MongoDB User model (replace with your actual model)
const User = mongoose.model('User', new mongoose.Schema({
  email: String,
  password: String,
}));

// MongoDB connection utility
const connectToDatabase = async () => {
  if (mongoose.connections[0].readyState) return; // Already connected
  await mongoose.connect(process.env.MONGODB_URI as string); // MongoDB URI from .env
};

// NextAuth configuration
const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Ensure database connection
        await connectToDatabase();

        // Check if email and password are provided
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required.");
        }

        // Look up user by email in the database
        const user = await User.findOne({ email: credentials.email });
        if (!user) {
          throw new Error("User not found");
        }

        // Compare passwords using bcrypt
        const isMatch = await bcrypt.compare(credentials.password, user.password);
        if (!isMatch) {
          throw new Error("Invalid credentials");
        }

        // If user is found and passwords match, return the user
        return { email: user.email };
      },
    }),
  ],
  pages: {
    signIn: "/login", // Redirect to your login page if authentication fails
    error: "/auth/error", // Optional: error page for failed login attempts
  },
  secret: process.env.NEXTAUTH_SECRET, // Optional: set a secret for JWT signing
};

// Named exports for POST and GET methods
export async function POST(req: NextRequest) {
  const response = await NextAuth(req, authOptions);
  return response;
}

export async function GET(req: NextRequest) {
  const response = await NextAuth(req, authOptions);
  return response;
}
