const express = require('express');
const router = express.Router();
const { createSkill, getAllSkill, updateSkill, deleteSkill } = require('../controllers/skillControllers');
const multer = require('multer');
const upload = multer ({ dest : "uploads/"});


router.post('/upload', upload.single('imageFile'), createSkill);

router.get('/media', getAllSkill);

router.put('/media/:id', updateSkill);

router.delete('/media/:id', deleteSkill);

module.exports = router;