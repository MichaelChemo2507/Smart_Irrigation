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

module.exports = {
  getAll: getAll,
  findSensorById: findSensorById,
  addSensor: addSensor,
  deleteSensor: deleteSensor,
};
