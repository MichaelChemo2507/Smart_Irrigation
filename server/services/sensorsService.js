const Sensors = require('../models/sensorsModel');
const getAll = async () => {
    return await Sensors.getAll();
}
const findSensorById = async (value) => {
    let rows = await Sensors.findSensorById(value);
    console.log(rows);
    return rows;
}

module.exports = {
    getAll: getAll,
    findSensorById:findSensorById
}