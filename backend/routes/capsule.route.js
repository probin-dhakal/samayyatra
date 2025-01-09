import express from "express";
import {
  createCapsule,
  deleteCapsule,
  getAllCapsules,
  getCapsuleWithId,
  getMyCapsules,
  
} from "../controllers/capsule.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/create", isAuthenticated, createCapsule);

router.delete("/delete/:capsuleId", isAuthenticated, deleteCapsule);
router.get("/getallcapsules", getAllCapsules);
router.get("/mycapsules", isAuthenticated, getMyCapsules);
router.get("/mycapsule/:id", getCapsuleWithId);


export default router;
