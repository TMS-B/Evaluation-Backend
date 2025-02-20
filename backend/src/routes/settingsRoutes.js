const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settingsControllers');

router.get('/:userId', settingsController.getSettings);

router.put('/:userId', settingsController.updateSettings);

module.exports = router;