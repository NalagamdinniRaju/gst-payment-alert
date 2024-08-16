const express = require('express');
const settingsController = require('../controllers/settingsController');

const router = express.Router();

router.get('/settings', settingsController.getSettings);
router.put('/settings', settingsController.updateSettings);

module.exports = router;