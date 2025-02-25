const express = require("express");
const router = express.Router();
const {
  registerUser,
  getAllUser,
  updateUser,
  deleteUser,
  login,
} = require("../controllers/userControllers");
const { protect, adminCheck } = require("../middleware/authMiddleware");
const { validateRequest } = require("../middleware/validateRequest");
const {
  validateRegisterUser,
  validateUpdateUser,
  validateDeleteUser,
} = require("../validations/authValidation");

const { validateRecaptcha } = require("../middleware/reCaptcha");

router.post("/register", validateRegisterUser, validateRequest, registerUser);

router.get("/", protect, adminCheck, getAllUser);

router.put("/:id", protect, validateUpdateUser, validateRequest, updateUser);

router.delete("/:id", protect, validateDeleteUser, validateRequest, deleteUser);

router.post("/login", validateRecaptcha, validateRequest, login);

module.exports = router;