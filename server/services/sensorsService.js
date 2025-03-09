const Sensors = require('../models/sensorsModel');
const getAll = async () => {
    return await Sensors.getAll();
}
const findSensorById = async (values) => {
    let rows = await Sensors.findSensorById(values);
    return rows;
}
const addSensor = async (values) => {
    let rows = await Sensors.addSensor(values);
    if (rows == undefined) throw new Error("undefinde received!");
    return rows.insertId;
}

module.exports = {
    getAll: getAll,
    findSensorById: findSensorById,
    addSensor:addSensor
}