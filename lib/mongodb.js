import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (mongoose.connection.readyState === 0) {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("db connected")
    }
  } catch (err) {}
};

export default connectDb
