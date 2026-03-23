"use server";

import { dbConnect } from "../../lib/dbConnector"; // Adjust path based on your file structure
import { Document } from "mongodb";

// 1. Define the User Interface to match your Register form
interface UserPayload extends Document {
  name: string;
  email: string;
  password?: string;
  photoURL: string;
  createdAt: string;
}

const postUser = async (payload: UserPayload) => {
  try {
    // 2. Connect to the "users" collection with the specific type
    const usersCollection = dbConnect<UserPayload>("users");

    // 3. Check if the user already exists to prevent duplicates
    const existingUser = await usersCollection.findOne({
      email: payload.email,
    });

    if (existingUser) {
      return { success: false, message: "User already exists" };
    }

    // 4. Insert the new user
    const result = await usersCollection.insertOne({
      ...payload,
      createdAt: new Date().toISOString(),
    });

    console.log("User created with ID:", result.insertedId);

    return {
      success: true,
      message: "User registered successfully",
      id: result.insertedId,
    };
  } catch (error) {
    console.error("Database Error:", error);
    return { success: false, message: "Failed to create user" };
  }
};

export default postUser;
