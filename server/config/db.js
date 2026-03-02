import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/hotel-booking`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000, // 30 seconds timeout
    });
    console.log("✅ Database Connected");
  } catch (error) {
    console.error("❌ Database Connection Failed:", error.message);
    process.exit(1); // Stop server if DB connection fails
  }
};

export default connectDB;