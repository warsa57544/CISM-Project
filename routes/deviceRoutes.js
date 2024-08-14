const express = require('express');
const router = express.Router();
const deviceController = require('../controllers/deviceController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, deviceController.getAllDevices);
router.get('/:id', authenticateToken, deviceController.getDeviceById);

module.exports = router;
