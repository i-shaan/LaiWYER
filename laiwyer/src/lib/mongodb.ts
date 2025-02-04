import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const dbUri = process.env.MONGODB_URI; 
    console.log(dbUri) // Make sure you have this variable set in .env
    if (!dbUri) throw new Error("MongoDB URI not defined in environment variables");

    await mongoose.connect(dbUri);  // No need to add deprecated options
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
};
