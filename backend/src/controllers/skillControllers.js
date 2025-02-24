const Skill = require("../models/skillsModel");
const User = require("../models/User");
const { v2: cloudinary } = require("cloudinary");
const fs = require("fs");

exports.createSkill = async (req, res, next) => {
  const { titre, catégorie, niveau } = req.body;
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
    fs.unlinkSync(req.file.path);
    const skill = new Skill({
      titre,
      catégorie,
      niveau,
      public_id: uploadResult.public_id,
      url: uploadResult.secure_url,
    });
    await skill.save();

    const user = await User.findByIdAndUpdate(
      userId,
      { $addToSet: { skill: newSkill } },
      { new: true }
    ).select("-password");
    await user.save();

    res.status(201).json({ message: `Compétences créer avec succès`, user });
  } catch (error) {
    next(error);
  }
};

exports.getAllSkill = async (req, res) => {
  try {
    const image = await Skill.find();
    res.json({ image });
  } catch (error) {
    console.error(`Impossible de récupérer le média`);
    res.status(500).json({ error: `Something went wrong` });
  }
};

exports.updateSkill = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;
  try {
    const image = await Skill.findByIdAndUpdate(
      id,
      { title, description },
      { new: true }
    );
    if (!image) {
      return res
        .status(500)
        .json({ message: `Erreur lors de la modification de l'image` });
    }
    res.json(image);
  } catch (error) {
    console.error(`Erreur de l'envoi coté serveur`, error);
  }
};

exports.deleteSkill = async (req, res) => {
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
};
