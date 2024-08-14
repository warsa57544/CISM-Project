const deviceService = require('../services/deviceService');

exports.getAllDevices = async (req, res, next) => {
    try {
        const devices = await deviceService.getAllDevices();
        res.json(devices);
    } catch (err) {
        next(err);
    }
};

exports.getDeviceById = async (req, res, next) => {
    try {
        const device = await deviceService.getDeviceById(req.params.id);
        res.json(device);
    } catch (err) {
        next(err);
    }
};
