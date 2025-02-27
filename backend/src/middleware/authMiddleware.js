import JWT from "jsonwebtoken";
import User from "../models/User.js";
const JWT_SECRET = process.env.JWT_SECRET;

const protect = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: `Token manquant` });
  }

  try {
    const decoded = JWT.verify(token, JWT_SECRET);

    const user = await User.findById(decoded._id).select("-password");

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};

export default protect;
