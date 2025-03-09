const Sensors = require('../models/sensorsModel');
const getAll = async () => {
    return await Sensors.getAll();
}
const findSensorById = async (values) => {
    let rows = await Sensors.findSensorById(values);
    return rows;
}

module.exports = {
    getAll: getAll,
    findSensorById:findSensorById
}