const express = require('express');
const router = express.Router();
const { uploadAsset, getAllAsset, updateAsset, deleteAsset } = require('../controllers/assetsControllers');
const multer = require('multer');
const upload = multer ({ dest : "uploads/"});


router.post('/upload', upload.single('imageFile'), uploadAsset);

router.get('/media', getAllAsset);

router.put('/media/:id', updateAsset);

router.delete('/media/:id', deleteAsset);

module.exports = router;