import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    username: String,
    email: String,
    role: Number, // Default role is Tester
    password: String,
    confirmPassword: String,
    userThumbnail: String
})

const Users = mongoose.models.UsersDetails || mongoose.model("UsersDetails",userSchema);

export default Users