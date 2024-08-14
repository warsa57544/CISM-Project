const mongoose = require('mongoose');

const maintenanceSchema = new mongoose.Schema({
    deviceId: String,
    date: { type: Date, default: Date.now },
    description: String,
    cost: Number
});

module.exports = mongoose.model('Maintenance', maintenanceSchema);
