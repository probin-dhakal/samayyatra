// import express from "express";
// import dotenv from "dotenv";
// import cookieParser from "cookie-parser";
// import cors from "cors";
// import { dbConnection } from "./database/db.js";
// import userRouter from "./routes/user.route.js";
// import capsuleRouter from "./routes/capsule.route.js";
// import fileUpload from "express-fileupload";

// dotenv.config();

// const app = express();

// const PORT = process.env.PORT || 8002;

// const allowedOrigins = ['https://samayyatra-1.onrender.com'];

// // Use CORS middleware
// app.use(
//   cors({
//     origin: allowedOrigins,  // Only allow requests from your frontend domain
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Specify allowed HTTP methods
//     credentials: true,  // Optional, if you need to send cookies with the request
//   })
// );
// app.use(express.json());
// app.use(cookieParser());
// app.use(express.urlencoded({ extended: true }));
// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// app.use("/api/v1/user", userRouter);
// app.use("/api/v1/capsule", capsuleRouter);

// dbConnection();

// app.listen(PORT, () => {
//   console.log(`Running on port ${PORT}`);
// });


import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { dbConnection } from "./database/db.js";
import userRouter from "./routes/user.route.js";
import capsuleRouter from "./routes/capsule.route.js";
import fileUpload from "express-fileupload";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8002;
const allowedOrigins = ["https://samayyatra-1.onrender.com"];

// CORS Configuration
app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true, // Allow cookies
  })
);

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/capsule", capsuleRouter);

// Database Connection
dbConnection();

// Preflight requests
app.options("*", cors());

// Start Server
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
