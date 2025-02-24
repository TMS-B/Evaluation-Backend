require("dotenv").config();

const express = require("express");
const app = express();

const connectDB = require("./config/db");

const PORT = process.env.PORT;

const userRoutes = require("./routes/userRoute");
const assetRoutes = require("./routes/skillsRoutes");
const settingsRoutes = require('./routes/settingsRoutes');

const cookieParser = require('cookie-parser');
const errorHandler = require('./middleware/errorHandler');
const cloudinaryConfig = require("./config/cloudinary");
const bodyParser = require('body-parser');

connectDB();
cloudinaryConfig();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use("/api/users", userRoutes);
app.use("/api/assets", assetRoutes);
app.use("/api/settings", settingsRoutes);

app.listen(PORT, () => {
  console.log(`Serveur opérationnel`);
});
