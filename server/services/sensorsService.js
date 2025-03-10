const Sensors = require("../models/sensorsModel");
const getAll = async () => {
  return await Sensors.getAll();
};
const findSensorById = async (values) => {
  let rows = await Sensors.findSensorById(values);
  if (rows == undefined) throw new Error("undefinde received!");
  return rows;
};
const addSensor = async (values) => {
  let rows = await Sensors.addSensor(values);
  if (rows == undefined) throw new Error("undefinde received!");
  return rows.affectedRows;
};
const deleteSensor = async (values) => {
  let rows = await Sensors.deleteSensor(values);
  if (rows == undefined) throw new Error("undefinde received!");
  return rows.affectedRows;
};
const updateSensor = async (values) => {
  try {
    let rows = await Sensors.updateSensor(values);
    if (rows === undefined) throw new Error("No rows received from the DB!");
    return rows.affectedRows;
  } catch (err) {
    console.error(`Error in service updateSensor: ${err.message}`);
    throw new Error("Failed to update sensor due to an internal error.");
  }
};

module.exports = {
  getAll: getAll,
  findSensorById: findSensorById,
  addSensor: addSensor,
  deleteSensor: deleteSensor,
  updateSensor:updateSensor
};
