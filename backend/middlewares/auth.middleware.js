import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// export const isAuthenticated = async (req, res, next) => {
//   try {
//     const token = req.cookies.token;

//     if (!token) {
//       return res
//         .status(401)
//         .json({ message: "No token, authorization denied" });
//     }

//     // Verify the token
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // Find the user based on the token
//     const user = await User.findById(decoded.id);

//     if (!user) {
//       return res.status(401).json({ message: "User not found" });
//     }

//     // Attach the user to the request object for further processing in the route handler
//     req.user = user;
//     next();
//   } catch (error) {
//     console.error(error);
//     res.status(401).json({ message: "Token is not valid" });
//   }
// };


export const isAuthenticated = async (req, res, next) => {
  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is not defined in environment variables.");
    }

    // Retrieve token from the `Authorization` header or cookies
    const token = 
      req.cookies.token || // First check cookies
      req.headers.authorization?.split(" ")[1]; // Then check headers (Bearer token)

    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        return res.status(401).json({ message: "Token has expired" });
      }
      return res.status(401).json({ message: "Token is not valid" });
    }

    const user = await User.findById(decoded.id).select("-password"); // Exclude sensitive data

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Authentication error:", error.message);
    res.status(500).json({ message: "Server error during authentication" });
  }
};

