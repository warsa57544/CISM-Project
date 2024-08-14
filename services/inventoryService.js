const Inventory = require('../models/inventory');

exports.getInventory = async () => {
    return await Inventory.find();
};

exports.updateInventory = async (data) => {
    const { deviceId, quantity } = data;
    return await Inventory.findOneAndUpdate({ deviceId }, { quantity }, { new: true });
};
