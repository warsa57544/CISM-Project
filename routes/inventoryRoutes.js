const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventoryController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/', authenticateToken, inventoryController.getInventory);
router.put('/', authenticateToken, inventoryController.updateInventory);

module.exports = router;
