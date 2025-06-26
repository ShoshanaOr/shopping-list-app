import mongoose from "mongoose";
import { seedCategories } from "../services/category.service";

const MONGO_URI = process.env.MONGO_URI

if (!MONGO_URI) {
  throw new Error(' MONGO_URI is not defined in .env file');
}


export const connectDB = async ():Promise<void> =>{
  try {
    await mongoose.connect(MONGO_URI);
     console.log(' Connected to MongoDB');
     await seedCategories()
  }catch (error){
    console.error(' Failed to connect to MongoDB:', error);
    process.exit(1);
  }
}