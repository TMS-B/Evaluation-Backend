const express = require('express');
const router = express.Router();
const { registerUser, getAllUser, updateUser, deleteUser, login } = require('../controllers/userControllers');


router.post('/register', registerUser);
router.get('/', getAllUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/login', login);

module.exports = router;