// import jwt from "jsonwebtoken";
// import User from "../models/user.model.js";

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

import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const isAuthenticated = async (req, res, next) => {
  try {
    // Check token in cookies
    let token = req.cookies.token;

    // If no token in cookies, check Authorization header (localStorage token)
    if (!token && req.headers.authorization) {
      const authHeader = req.headers.authorization;
      if (authHeader.startsWith("Bearer ")) {
        token = authHeader.split(" ")[1]; // Extract the token after 'Bearer'
      }
    }

    // If no token found, deny access
    if (!token) {
      return res.status(401).json({ message: "No token, authorization denied" });
    }

    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Find the user based on the token
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Attach user to request
    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Token is not valid" });
  }
};

