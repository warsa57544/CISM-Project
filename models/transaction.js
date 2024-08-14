const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    deviceId: String,
    userId: String,
    timestamp: { type: Date, default: Date.now },
    purpose: String
});

module.exports = mongoose.model('Transaction', transactionSchema);
