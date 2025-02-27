import "dotenv/config";

import express from "express";
import cors from "cors";
import helmet from "helmet";

import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler.js";
import cloudinaryConfig from "./config/cloudinary.js";

const app = express();

app.use(cookieParser());

import connectDB from "./config/db.js";

const PORT = process.env.PORT;

import userRoutes from "./routes/userRoute.js";
import skillsRoutes from "./routes/skillsRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";

connectDB();
cloudinaryConfig();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://www.google.com", // For reCAPTCHA
      "https://www.gstatic.com", // For reCAPTCHA
      "https://res.cloudinary.com", // For Cloudinary
    ],
    credentials: true,
  })
);
app.use(helmet());
//morgan
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/createCookie", (req, res) => {
//   res.cookie("testCookie", "testValue", { httpOnly: true, secure: false });
//   console.log(req.cookies.testCookie);
//   res.send("Cookie created");
// });

app.use("/api/users", userRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/settings", settingsRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Serveur opérationnel sur PORT: ${PORT}`);
});
