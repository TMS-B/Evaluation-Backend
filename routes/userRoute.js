const express = require('express');
const router = express.Router();
const { registerUser, getAllUser } = require('../controllers/userControllers');

router.post('/register', registerUser);
route.get('/', getAllUser);