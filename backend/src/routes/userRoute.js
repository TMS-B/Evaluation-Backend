import express from "express";
const router = express.Router();
import {
  registerUser,
  updateUser,
  deleteUser,
  login,
} from "../controllers/userControllers.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminCheck } from "../middleware/isAdmin.js";
import { validateRequest } from "../middleware/validateRequest.js";
import {
  validateRegisterUser,
  validateUpdateUser,
  validateDeleteUser,
} from "../validations/authValidation.js";

// import { validateRecaptcha } from "../middleware/reCaptcha.js";

router.post("/register", validateRegisterUser, validateRequest, registerUser);

router.put("/:id", protect, validateUpdateUser, validateRequest, updateUser);

router.delete(
  "/:id",
  protect,
  validateDeleteUser,
  validateRequest,
  adminCheck,
  deleteUser
);

router.post("/login", validateRequest, login);

export default router;