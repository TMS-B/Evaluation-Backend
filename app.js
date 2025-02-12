require('dotenv').config();

const express = require('express');
const app = express();

const connectDB = require('./config/db');

const PORT = process.env.PORT;

const userRoutes = require("./routes/userRoute");

const cookieParser = require('cookie-parser');

connectDB();

app.use(express.json());
app.use("/api/users", userRoutes);
app.use(cookieParser());

app.listen(PORT, () => {
    console.log(`Serveur opérationnel`);
});