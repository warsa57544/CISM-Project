const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({
    deviceId: String,
    type: String,
    status: { type: String, default: 'available' },
    location: String,
    maintenanceSchedule: Date
});

module.exports = mongoose.model('Device', deviceSchema);
