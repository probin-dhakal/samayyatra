import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    select: false,
  },
  name: {
    type: String, 
    required: true,
  },
  otp: {
    type: String, 
    select: false, 
  },
  otpExpiry: {
    type: Date, 
  },
  isVerified: {
    type: Boolean, 
    default: false,
  },
 
},{timestamps: true});

const User = mongoose.model("User", UserSchema);
export default User;
