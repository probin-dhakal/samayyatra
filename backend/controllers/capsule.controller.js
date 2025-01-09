import Capsule from "../models/capsule.model.js";
import User from "../models/user.model.js"
import dotenv from "dotenv";
import schedule from 'node-schedule';
import mongoose from 'mongoose';

import cloudinary from "cloudinary";
import {
  sendCapsuleCreatedEmail,
  sendCapsuleReminderEmail,
} from "../utils/sendOtpEmail.js";
dotenv.config();

// Cloudinary configuration for Images
const configureCloudinaryImages = () => {
  const config = {
    cloud_name: process.env.CLOUDINARY_IMAGES_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_IMAGES_API_KEY,
    api_secret: process.env.CLOUDINARY_IMAGES_API_SECRET,
  };

  const cloudinaryInstance = cloudinary.v2; // Use ES module syntax
  cloudinaryInstance.config(config);

  console.log("Cloudinary configured for Images:", config.cloud_name);
  return cloudinaryInstance;
};

// Cloudinary configuration for Videos
const configureCloudinaryVideos = () => {
  const config = {
    cloud_name: process.env.CLOUDINARY_VIDEOS_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_VIDEOS_API_KEY,
    api_secret: process.env.CLOUDINARY_VIDEOS_API_SECRET,
  };

  const cloudinaryInstance = cloudinary.v2; // Use ES module syntax
  cloudinaryInstance.config(config);

  console.log("Cloudinary configured for Videos:", config.cloud_name);
  return cloudinaryInstance;
};

// Configure separate Cloudinary instances for Images and Videos
const cloudinaryImages = configureCloudinaryImages(); // Separate account for images
const cloudinaryVideos = configureCloudinaryVideos(); // Separate account for videos

// Helper function to upload files directly to Cloudinary
const uploadFilesToCloudinary = async (
  files,
  cloudinaryInstance,
  folderName
) => {
  const urls = [];

  if (!Array.isArray(files)) {
    files = [files]; // Normalize single file to an array
  }

  console.log(`Uploading files to Cloudinary (${folderName}):`, files);

  for (const file of files) {
    try {
      if (!file.tempFilePath) {
        console.error("Temp file path is missing:", file);
        throw new Error("Temp file path is missing");
      }

      console.log(`Uploading file: ${file.tempFilePath} to ${folderName}`);

      const uploadResponse = await cloudinaryInstance.uploader.upload(
        file.tempFilePath,
        {
          resource_type: "auto",
          folder: folderName, // Specify folder name (e.g., "Home" or other)
        }
      );

      console.log("Upload Response:", uploadResponse);
      urls.push(uploadResponse.secure_url);
    } catch (err) {
      console.error(`Failed to upload ${file.tempFilePath}: ${err.message}`);
      throw new Error(`File upload failed: ${err.message}`);
    }
  }

  return urls;
};

// API Handler to Create Capsule

export const createCapsule = async (req, res) => {
  const { title, message, unlockTime, isPrivate } = req.body;
  const imageFiles = req.files?.image || [];
  const videoFiles = req.files?.video || [];

  if (!title || !message || !unlockTime) {
    return res
      .status(400)
      .json({ message: "Title, message, and unlock time are required" });
  }

  try {
    // Upload images and videos
    const imageUrls = await uploadFilesToCloudinary(
      imageFiles,
      cloudinaryImages,
      "capsule"
    );
    const videoUrls = await uploadFilesToCloudinary(
      videoFiles,
      cloudinaryVideos,
      "capsule"
    );

    // Save the capsule to the database
    const newCapsule = new Capsule({
      title,
      message,
      unlockTime,
      isPrivate,
      ownerId: req.user._id,
      image: imageUrls,
      video: videoUrls,
    });

    const capsule = await newCapsule.save();

    // Send Capsule Created Email
    await sendCapsuleCreatedEmail(req.user.email, title);

    // Schedule a reminder email 5 days before the unlock time
    const reminderDate = new Date(
      new Date(unlockTime).getTime() - 2 * 24 * 60 * 60 * 1000
    ); // 3 days before
    schedule.scheduleJob(reminderDate, async () => {
      await sendCapsuleReminderEmail(req.user.email, title, unlockTime);
    });

    res.status(201).json({ message: "Capsule created successfully", capsule });
  } catch (error) {
    console.error("Error creating capsule:", error);
    res.status(500).json({ message: "Failed to create capsule" });
  }
};
// Update Capsule
export const updateCapsule = async (req, res) => {
  const { capsuleId } = req.params;
  const { title, message, unlockTime, isPrivate } = req.body;
  const imageFiles = req.files?.image || [];
  const videoFiles = req.files?.video || [];

  try {
    const capsule = await Capsule.findOne({
      _id: capsuleId,
      ownerId: req.user._id,
    });

    if (!capsule) {
      return res
        .status(404)
        .json({ message: "Capsule not found or unauthorized access" });
    }

    const imageUrls = await uploadFilesToCloudinary(
      imageFiles,
      cloudinaryImages,
      "capsule"
    );
    const videoUrls = await uploadFilesToCloudinary(
      videoFiles,
      cloudinaryVideos,
      "capsule"
    );

    capsule.title = title || capsule.title;
    capsule.message = message || capsule.message;
    capsule.unlockTime = unlockTime || capsule.unlockTime;
    capsule.isPrivate = isPrivate || capsule.isPrivate;

    capsule.image.push(...imageUrls);
    capsule.video.push(...videoUrls);

    await capsule.save();
    res.status(200).json({ message: "Capsule updated successfully", capsule });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update capsule" });
  }
};

// Delete Capsule

export const deleteCapsule = async (req, res) => {
  const { capsuleId } = req.params;

  // console.log("capsule id: ", capsuleId);
  // console.log("user_id", req.user._id);
  // Validate capsuleId format
  if (!mongoose.Types.ObjectId.isValid(capsuleId)) {
    return res.status(400).json({ message: "Invalid capsule ID" });
  }

  try {
    const capsule = await Capsule.findOne({
      _id: capsuleId,
      ownerId: req.user._id,
    });

    if (!capsule) {
      return res
        .status(404)
        .json({ message: "Capsule not found or unauthorized access" });
    }

    await capsule.deleteOne();
    res.status(200).json({ message: "Capsule deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete capsule" });
  }
};

// Get All Capsules
export const getAllCapsules = async (req, res) => {
  const allCapsule = await Capsule.find({ isPrivate: false });
  console.log(allCapsule);
  res.status(200).json({
    success: true,
    allCapsule,
  });
};

export const getMyCapsules = async (req, res) => {
  try {
    const userId = req.user.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const myCapsules = await Capsule.find({ ownerId: userId });
    if (!myCapsules || myCapsules.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No capsules found for this user.",
      });
    }

    res.status(200).json({
      success: true,
      myCapsules,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve capsules",
    });
  }
};

export const getCapsuleWithId = async (req, res) => {
  try {
    const { id } = req.params;

    const capsule = await Capsule.findById(id);

    if (!capsule) {
      return res.status(404).json({
        success: false,
        message: "Capsule not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: capsule,
    });
  } catch (error) {
    console.error("Error retrieving capsule:", error);

    // Handle errors
    res.status(500).json({
      success: false,
      message: "Server error while retrieving capsule.",
    });
  }
};


