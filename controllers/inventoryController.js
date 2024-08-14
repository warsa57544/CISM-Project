const inventoryService = require('../services/inventoryService');

exports.getInventory = async (req, res, next) => {
    try {
        const inventory = await inventoryService.getInventory();
        res.json(inventory);
    } catch (err) {
        next(err);
    }
};

exports.updateInventory = async (req, res, next) => {
    try {
        const updatedInventory = await inventoryService.updateInventory(req.body);
        res.json(updatedInventory);
    } catch (err) {
        next(err);
    }
};
