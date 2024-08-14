const maintenanceService = require('../services/maintenanceService');

exports.recordMaintenance = async (req, res, next) => {
    try {
        const maintenance = await maintenanceService.recordMaintenance(req.body);
        res.status(201).json(maintenance);
    } catch (err) {
        next(err);
    }
};

exports.getMaintenanceRecords = async (req, res, next) => {
    try {
        const records = await maintenanceService.getMaintenanceRecords();
        res.json(records);
    } catch (err) {
        next(err);
    }
};
