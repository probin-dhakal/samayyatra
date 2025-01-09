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

app.use(
  cors({
    origin: "https://samayyatra-1.onrender.com",
    methods: ["GET", "PUT", "DELETE", "POST"],
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/capsule", capsuleRouter);

dbConnection();

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
