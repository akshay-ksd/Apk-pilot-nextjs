import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: String,
    email: String,
    role: Number, // Default role is Tester
    password: String,
    confirmPassword: String,
    userThumbnail: String
})

const User = mongoose.models.UserData || mongoose.model("UserData",userSchema);

export default User