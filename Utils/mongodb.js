import dotenv from 'dotenv';
import mongoose from "mongoose";
dotenv.config();

export const ConnectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected");
  } catch (err) {
    console.log("DB Connection Error: ", err);
  }
};