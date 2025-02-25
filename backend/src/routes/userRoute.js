const express = require("express");
const router = express.Router();
const {
  registerUser,
  updateUser,
  deleteUser,
  login,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");
const { adminCheck } = require("../middleware/isAdmin");
const { validateRequest } = require("../middleware/validateRequest");
const {
  validateRegisterUser,
  validateUpdateUser,
  validateDeleteUser,
} = require("../validations/authValidation");

const { validateRecaptcha } = require("../middleware/reCaptcha");

router.post("/register", validateRegisterUser, validateRequest, registerUser);

router.put("/:id", protect, validateUpdateUser, validateRequest, updateUser);

router.delete("/:id", protect, validateDeleteUser, validateRequest, adminCheck, deleteUser);

router.post("/login", validateRecaptcha, validateRequest, login);

module.exports = router;