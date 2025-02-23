import jwt from "jsonwebtoken";

export const sendToken = (user, statusCode, res, message = "Success") => {
 
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  // console.log("Generated token:", token);

  
// res.cookie("token", token, {
//   httpOnly: true,  // Prevent access by JavaScript
//   secure: true,  // Ensure it's secure in production
//   maxAge: 7 * 24 * 60 * 60 * 1000, // 7 day
//   sameSite: "None",  // Required for cross-origin cookies
//   path: "/",  // Path to make the cookie available globally
// });

res.cookie("token", token, {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "None",
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
});


  
  // Send response
  res.status(statusCode).json({
    message, // Success message
    token,
  });
};
