const Assets = require('../models/assetsModel');
const { v2: cloudinary } = require('cloudinary');
const fs = require('fs');


exports.uploadAsset = async (req, res) => {
    const { title, description } = req.body;
    try {
        if (!req.file) {
            return res.status(400).json({ error: `Aucun fichier n'a été télécharger` });
        }
        const uploadResult = await cloudinary.uploader.upload(req.file.path, {
            folder: 'images',
        });
        fs.unlinkSync(req.file.path);
        const image = new Assets({
            title,
            description,
            public_id: uploadResult.public_id,
            url: uploadResult.secure_url
        });
        await image.save();
        res.status(201).json({ image });
    } catch (error) {
        console.error(`Echec téléchargement du media`, error);
        res.status(500).json({ error: `Quelque chose ne vas pas` });
    }
};

exports.getAllAsset = async (req, res) => {
    try {
        const image = await Assets.find();
        res.json({ image });
    } catch (error) {
        console.error(`Impossible de récupérer le média`);
        res.status(500).json({ error: `Something went wrong` });
    }
};

exports.updateAsset = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    try {
        const image = await Assets.findByIdAndUpdate(
            id,
            { title, description },
            { new: true }
        );
        if (!image) {
            return res.status(500).json({ message: `Erreur lors de la modification de l'image` });
        }
        res.json( image )
    } catch (error) {
        console.error(`Erreur de l'envoi coté serveur`, error);
    }
};

exports.deleteAsset = async (req, res) => {
    const { id } = req.params;
    try {
        const image = await Assets.findByIdAndDelete(id);
        if (!image) {
            return res.status(404).json({ error: `Fichier introuvable` })
        }
        await cloudinary.uploader.destroy(image.public_id);
        res.json({ message: `Le fichier a bien été supprimé` });
    } catch (error) {
        console.error(`Erreur lors de la suppression`, error);
        res.status(500).json({ error: `Impossible de supprimer le fichier coté serveur` });
    }
};

// exports.idk = async (req, res) => {
//     res.render('form');
// };