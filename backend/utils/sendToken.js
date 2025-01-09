import jwt from "jsonwebtoken";

export const sendToken = (user, statusCode, res, message = "Success") => {
 
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  // console.log("Generated token:", token);

  
res.cookie("token", token, {
  httpOnly: true,
  secure: true,    // Ensures the cookie is sent over HTTPS
  maxAge: 7200000, // 2 hours
  sameSite: "None", // For cross-origin requests
});


  
  // Send response
  res.status(statusCode).json({
    message, // Success message
    token, // Optional for debugging, remove in production
  });
};
