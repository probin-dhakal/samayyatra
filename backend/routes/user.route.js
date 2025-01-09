import express from "express"
import { forgotPassword, getMyProfile, getOwnerName, login, logout, resetPassword, signup } from "../controllers/user.controller.js";
import { isAuthenticated } from "../middlewares/auth.middleware.js";



const router=express.Router();



router.post("/signup", signup);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);
router.post("/logout",isAuthenticated,logout);
router.get("/profile",isAuthenticated,getMyProfile);
router.get("/ownername/:id", getOwnerName);



export default router;