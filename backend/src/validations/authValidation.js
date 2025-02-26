import { body, param } from "express-validator";

export const validateRegisterUser = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Le nom est obligatoire")
    .isLength({ min: 3, max: 10 })
    .withMessage("Le nom doit avoir entre 3 et 10 caractères"),

  body("email")
    .trim()
    .notEmpty()
    .withMessage("L'email est obligatoire")
    .isEmail(),

  body("password")
    .trim()
    .notEmpty()
    .withMessage("Mot de passe manquant")
    .isLength({ min: 8, max: 200 })
    .withMessage("Le mot de passe doit contenir entre 8 et 200 caractères"),
];

export const validateUpdateUser = [
  param("id").isMongoId().withMessage("ID utilisateur manquant ou invalide"),

  body("email")
    .trim()
    .optional()
    .isEmail()
    .withMessage("Veuillez entrer une adresse email valide"),

  body("password")
    .trim()
    .optional()
    .isLength({ min: 8, max: 200 })
    .withMessage("Le mot de passe doit contenir entre 8 et 200 caractères"),
];

export const validateDeleteUser = [
  param("id").isMongoId().withMessage("ID utilisateur manquant ou invalide"),
];
