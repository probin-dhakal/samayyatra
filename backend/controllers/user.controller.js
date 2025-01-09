import User from "../models/user.model.js";
import { sendToken } from "../utils/sendToken.js";
import { sendOtpEmail } from "../utils/sendOtpEmail.js"; // You may need to create this utility as well
import { generateOtp, hashPassword, comparePassword } from "../utils/helper.js";
import bcrypt from "bcryptjs"
import validator from "validator"


export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;


    if (!name || !email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

   
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Please provide a valid email address." });
    }



    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }


    const hashedPassword = await bcrypt.hash(password, 10);

    
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });


    sendToken(newUser, 201, res, "User registered successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};



export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    // Find the user by email
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Compare the password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Send token with custom message
    sendToken(user, 200, res, "User logged in successfully");
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const logout = async (req, res) => {
  try {
    res
    .status(200)
    .cookie("token", "", {
      expires: new Date(Date.now()),
      httpOnly: true,
    })
    .json({
      success: true,
      message: "User logged out successfully",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};



export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const otp = generateOtp();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes expiry

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    // Send OTP to user's email
    await sendOtpEmail(user.email, otp);

    res.status(200).json({ message: "OTP sent to email" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { otp, newPassword } = req.body;

    // Validate request body
    if (!otp || !newPassword) {
      return res.status(400).json({ message: "OTP and new password are required" });
    }

    // Find user by OTP
    const user = await User.findOne({ otp });
    if (!user) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Check OTP expiry
    const otpExpiry = user.otpExpiry;
    if (new Date() > otpExpiry) {
      return res.status(400).json({ message: "OTP has expired" });
    }

    // Hash the new password
    const hashedPassword = await hashPassword(newPassword);

    // Update user fields
    user.password = hashedPassword;
    user.otp = undefined;
    user.otpExpiry = undefined;

    // Save the user
    await user.save();

    res.status(200).json({ message: "Password reset successfully" });
  } catch (error) {
    console.error("Error in resetPassword:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getMyProfile = (req,res,next)=>{
  const user = req.user;
  res.status(200).json({
    success: true,
    user,
  });
}

export const getOwnerName = async (req,res)=>{
  try {
    const { id } = req.params;
    console.log("ownerId:", id); // Log the ownerId being passed

    const owner = await User.findById(id);
    console.log(owner)
    res.status(200).json({
      success:true,
      owner
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed fetching user name"
    })
  }
}