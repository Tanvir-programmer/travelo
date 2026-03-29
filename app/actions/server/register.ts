"use server";

import { dbConnect } from "@/app/lib/dbConnector";
import bcrypt from "bcrypt";

export async function postUser(userData: {
  name: string;
  email: string;
  password: string;
  photoURL: string;
  role: string;
  createdAt: string;
}) {
  try {
    const usersCollection = dbConnect("users");

    // Check if user already exists
    const existingUser = await usersCollection.findOne({
      email: userData.email,
    });

    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // Create new user
    const result = await usersCollection.insertOne({
      ...userData,
      password: hashedPassword,
    });

    return {
      success: true,
      message: "User registered successfully",
      userId: result.insertedId,
    };
  } catch (error) {
    console.error("Registration error:", error);
    return {
      success: false,
      message: "Failed to register user",
    };
  }
}
