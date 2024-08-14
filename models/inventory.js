const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    deviceId: String,
    quantity: Number
});

module.exports = mongoose.model('Inventory', inventorySchema);
