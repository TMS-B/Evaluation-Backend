import express from "express";
import {
  getSettings,
  updateSettings,
} from "../controllers/settingsControllers.js";
const router = express.Router();

router.get("/:userId", getSettings);

router.put("/:userId", updateSettings);

export default router;
