import Skill from "../models/skillsModel.js";
import User from "../models/User.js";
import { v2 as cloudinary } from "cloudinary";
import { unlinkSync } from "fs";

export async function createSkill(req, res, next) {
  const { titre, categorie, niveau, image } = req.body;
  const userId = req.user_id;
  try {
    if (!req.file) {
      return next({
        status: 400,
        message: `Image is required`,
      });
    }
    const uploadResult = await cloudinary.uploader.upload(req.file.path, {
      folder: "skills",
    });
    unlinkSync(req.file.path);
    const skill = new Skill({
      titre,
      categorie,
      niveau,
      image: {  
        public_id: uploadResult.public_id,
        url: uploadResult.secure_url,
      }
    });
    await skill.save();

    res.status(201).json({ message: `Skill created successfully`, User });
  } catch (error) {
    next(error);
  }
}

export async function getAllSkill(req, res, next) {
  try {
    const skills = await Skill.find().sort({ createdAt: -1 });
    res.json({ skills });
  } catch (error) {
    next(error);
  }
}

export const updateSkill = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { titre, niveau, categorie, image } = req.body;

    const userId = req.user;

    console.log(userId);
    const skill = await Skill.findByIdAndUpdate(
      id,
      { titre, niveau, categorie, image },
      { new: true }
    );

    if (!skill) {
      return res
        .status(500)
        .json({ message: `Error updating file` });
    }
    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { skills: skill._id } },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({
      message: `File updated successfully`,
      user: user,
    });
  } catch (error) {
    next(error);
  }
};

export async function deleteSkill(req, res, next) {
  try {
    const { id } = req.params;

    const userId = req.user;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: `User not found` });
    }
    const skill = await Skill.findByIdAndDelete(id);

    console.log(skill);

    if (!skill) {
      return res.status(404).json({ error: `Skill not found ` });
    }
    await cloudinary.uploader.destroy(skill.image.public_id);
    res.json({ message: `File deleted successfully` });
  } catch (error) {
    next(error);
  }
}
