require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

const connectDB = require("./config/db");

const PORT = process.env.PORT;

const userRoutes = require("./routes/userRoute");
const assetRoutes = require("./routes/skillsRoutes");
const settingsRoutes = require("./routes/settingsRoutes");

const cookieParser = require("cookie-parser");
const errorHandler = require("./middleware/errorHandler");
const cloudinaryConfig = require("./config/cloudinary");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

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

app.use("/api/users", userRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/settings", settingsRoutes);

app.listen(PORT, () => {
  console.log(`Serveur opérationnel sur PORT: ${PORT}`);
});
