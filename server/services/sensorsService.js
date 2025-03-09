const Sensors = require('../models/sensors');
const getAll = async () => {
    return await Sensors.getAll();
}

module.exports = {
    getAll: getAll
}