import jwt from "jsonwebtoken";

export const sendToken = (user, statusCode, res, message = "Success") => {
  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  console.log("Generated token:", token);

  // Set the token as an HTTP-only cookie
  res.cookie("token", token, {
   
    secure: false, // Set false for local testing
    maxAge: 3600000, // 1 hour
    sameSite: "Lax", // Adjust for your use case
  });
  
  // Send response
  res.status(statusCode).json({
    message, // Success message
    token, // Optional for debugging, remove in production
  });
};
