"use server";

import { dbConnect } from "../../lib/dbConnector";
import { Document } from "mongodb";
import bcrypt from "bcrypt";

// 1. Define the User Interface
interface UserPayload extends Document {
  name: string;
  email: string;
  password?: string;
  photoURL: string;
  createdAt: string;
}

const postUser = async (payload: UserPayload) => {
  try {
    const usersCollection = dbConnect<UserPayload>("users");

    // 2. Check existing user
    const existingUser = await usersCollection.findOne({
      email: payload.email,
    });

    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    // 3. Hash password before saving
    let hashedPassword = undefined;
    if (payload.password) {
      const saltRounds = 10;
      hashedPassword = await bcrypt.hash(payload.password, saltRounds);
    }

    // 4. Insert user with hashed password
    const result = await usersCollection.insertOne({
      ...payload,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    });

    return {
      success: true,
      message: "User registered successfully",
      id: result.insertedId.toString(),
    };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, message: "Failed to create user" };
  }
};

export default postUser;
