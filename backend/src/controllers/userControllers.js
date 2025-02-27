import User from "../models/User.js";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET;
// import { post } from "axios";

const generateToken = (_id) => {
  const token = jwt.sign({ _id }, JWT_SECRET, {
    expiresIn: "10h",
  });
  return token;
};

export async function registerUser(req, res) {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return next({
      statusCode: 400,
      message: `Tous les champs sont obligatoires`,
    });
  }
  try {
    const user = await create({ name, email, password, role });
    res
      .status(201)
      .json({ message: `L'utilisateur a été crée avec succès !`, user });
  } catch (error) {
    next(error);
  }
}

export async function updateUser(req, res) {
  const { id } = req.params;
  const newName = req.body.name;
  const newPassword = req.body.newPassword;
  try {
    const updateUser = await findByIdAndUpdate(
      id,
      { name: newName, password: newPassword },
      { new: true }
    );
    if (!updateUser) {
      return res.status(400).json({ message: `Utilisateur introuvable` });
    }
    res.status(200).json({ message: `Utilisateur mis à jour avec succès !` });
  } catch (error) {
    next(error);
  }
}

export async function deleteUser(req, res, next) {
  try {
    await findByIdAndDelete(req.params);
    res
      .status(200)
      .json({ message: `L'utilisateur a été supprimé avec succès !` });
  } catch (error) {
    next(error);
  }
}

export async function login(req, res, next) {
  // const recaptchaSecretKey = process.env.RECAPTCHA_SITE_SECRET;

  try {
    const { email, password } = req.body;

    const userLogin = await User.findOne({ email }).select("+password");

    if (!userLogin) {
      return res.status(401).json({ message: `L'utilisateur n'existe pas` });
    }

    const isMatch = await compare(password, userLogin.password);
    if (!isMatch) {
      return res
        .status(401)
        .json({ message: `Email ou mot de passe incorrect !` });
    }

    const token = generateToken(userLogin._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      // secure: process.env.NODE_ENV === "development" ? false : true,
      // sameSite: process.env.NODE_ENV === "development" ? "lax" : "none",
      secure: false,
    });

    res.status(200).json({ success: true, token });
  } catch (error) {
    next(error);
  }
}
