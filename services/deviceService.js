const Device = require('../models/device');

exports.getAllDevices = async () => {
    return await Device.find();
};

exports.getDeviceById = async (id) => {
    return await Device.findById(id);
};
