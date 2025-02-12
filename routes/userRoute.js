const express = require('express');
const router = express.Router();
const { registerUser, getAllUser, updateUser, deleteUser, login } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', registerUser);
router.get('/', protect, getAllUser);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);
router.post('/login', login);

module.exports = router;