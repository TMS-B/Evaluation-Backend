const User = require('../models/User');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const generateToken = (_id) => {
    const token = JWT.sign({ _id }, JWT_SECRET, { 
        expiresIn: "10h" 
    });
    return token;
};

exports.registerUser = async (req, res) => {
    const { name, email, passsword } = req.body;

    if(!name || !email || !password){
        return res.status(400).json({ message: `Tous les champs sont obligatoires` });
    }
    try {
        const user = await User.create({ name, email, password });
        res.status(201).json({ message: `L'utilisateur a été crée avec succès !`, user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: `Erreur lors de la création de l'utilisateur` });
    }
};

exports.getAllUser = async (req, res) => {
    try {
        const allUser = await User.find().select('-password');
        res.status(200).json({ message: `Récupération de tous les utilisateurs`, allUser });
    } catch (error) {
        res.status(500).json({ message: `Erreur lors de la récupération des utilisateurs` });
    }
};

exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const newName = req.body.name;
    const newPassword = req.body.newPassword;
    try {
        const updateUser = await User.findByIdAndUpdate(id, { name: newName, password: newPassword }, { new: true });
        if(!updateUser){
            return res.status(400).json({ message: `Utilisateur introuvable` });
        }
        res.status(200).json({ message: `Utilisateur mis à jour avec succès !` });
    } catch (error) {
        res.status(500).json({ messsage: `Erreur lors de la mis à jour de l'utilisateur` });
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        await User.findByIdAndDelete(req.params);
        res.status(200).json({ message: `L'utilisateur a été supprimé avec succès !` });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res) => {
    
}