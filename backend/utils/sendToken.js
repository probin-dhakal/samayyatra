import jwt from "jsonwebtoken";

export const sendToken = (user, statusCode, res, message = "Success") => {
  // Generate JWT token
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
  // console.log("Generated token:", token);

  // Set the token as an HTTP-only cookie
res.cookie("token", token, {
    httpOnly: true, // Prevent client-side JS from accessing the cookie
    secure: true, // Use true only in production (HTTPS)
    maxAge: 7200000, // 1 hour
    sameSite: "None", // Adjust based on cross-origin use cases
});

  
  // Send response
  res.status(statusCode).json({
    message, // Success message
    token, // Optional for debugging, remove in production
  });
};
