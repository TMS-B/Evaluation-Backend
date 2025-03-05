import express from "express";
const router = express.Router();
import {
  createSkill,
  getAllSkill,
  updateSkill,
  deleteSkill,
} from "../controllers/skillControllers.js";
import protect from "../middleware/authMiddleware.js";
import multer from "multer";
const upload = multer({ dest: "uploads/" });

// router.post('/upload', upload.single('image'), createSkill);
router.post("/createSkill", upload.single("image"), createSkill);

router.get("/allSkills", getAllSkill);

router.put("/updateSkills/:id", protect, updateSkill);

router.delete("/deleteSkills/:id", protect, deleteSkill);

export default router;
