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
        message: `Une image est nécéssaire à la création du compte`,
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
      public_id: uploadResult.public_id,
      url: uploadResult.secure_url,
    });
    await skill.save();

    res.status(201).json({ message: `Compétences créer avec succès`, User });
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

export async function updateSkill(req, res, next) {
  const { id } = req.params;
  const { titre, niveau, categorie, image } = req.body;
  const skillId = req.skill_id;
  try {
    const skill = await Skill.findByIdAndUpdate(
      id,
      { titre, niveau, categorie, image },
      { new: true }
    );
    if (!skill) {
      return res
        .status(500)
        .json({ message: `Erreur lors de la modification de l'image` });
    }
    const user = await User.findByIdAndUpdate(
      skillId,
      { $addToSet: { skills: skill._id } },
      { new: true }
    ).select("-password");

    if (!user) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    res.json({ 
      message: `Le fichier a bien été modifié`,
      user: user
    });
  } catch (error) {
    next(error);
  }
}

export async function deleteSkill(req, res) {
  const { id } = req.params;
  try {
    const skill = await Skill.findByIdAndDelete(id);
    if (!skill) {
      return res.status(404).json({ error: `Compétences introuvable` });
    }
    await cloudinary.uploader.destroy(skill.public_id);
    res.json({ message: `Le fichier a bien été supprimé` });
  } catch (error) {
    console.error(`Erreur lors de la suppression`, error);
    res
      .status(500)
      .json({ error: `Impossible de supprimer le fichier coté serveur` });
  }
}
