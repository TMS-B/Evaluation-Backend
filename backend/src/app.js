import "dotenv/config";

import express, { json, urlencoded } from "express";
import cors from "cors";
import helmet from 'helmet';

const app = express();

import connectDB from "./config/db.js";

const PORT = process.env.PORT;

import userRoutes from "./routes/userRoute.js";
import skillsRoutes from "./routes/skillsRoutes.js";
import settingsRoutes from "./routes/settingsRoutes.js";

import cookieParser from "cookie-parser";
import errorHandler from "./middleware/errorHandler.js";
import cloudinaryConfig from "./config/cloudinary.js";

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
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(cookieParser());
app.use("/api/users", userRoutes);
app.use("/api/skills", skillsRoutes);
app.use("/api/settings", settingsRoutes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Serveur opérationnel sur PORT: ${PORT}`);
});
