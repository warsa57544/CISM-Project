const Maintenance = require('../models/maintenance');

exports.recordMaintenance = async (data) => {
    const maintenance = new Maintenance(data);
    await maintenance.save();
    return maintenance;
};

exports.getMaintenanceRecords = async () => {
    return await Maintenance.find();
};
