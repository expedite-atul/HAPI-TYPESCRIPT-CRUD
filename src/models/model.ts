import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "user must provide name"],
    },
    dob: {
        type: Date,
        required: [true, "please provide dob"],
    },
    email: {
        type: String,
        required: [true, "please provide email"],
        unique: true,
    }
});

export const UserData = mongoose.model("users", userSchema);
