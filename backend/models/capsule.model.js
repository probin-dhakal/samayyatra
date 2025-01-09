import mongoose from "mongoose";

const CapsuleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  memories: {
    type: String,
    
  },
  message: {
    type: String,
    required: true,
  },
  image: [String],
  video: [String],
  emails: [String],
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model
    required: true,
  },
  isPrivate: {
    type: Boolean,
    default: true,
  },
  unlockTime: {
    type: Date,
    required: true,
  },
 
},{timestamps: true});

const Capsule = mongoose.model("Capsule", CapsuleSchema);
export default Capsule;
