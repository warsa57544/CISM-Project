const express = require('express');
const router = express.Router();
const maintenanceController = require('../controllers/maintenanceController');
const authenticateToken = require('../middleware/authMiddleware');

router.post('/', authenticateToken, maintenanceController.recordMaintenance);
router.get('/', authenticateToken, maintenanceController.getMaintenanceRecords);

module.exports = router;
