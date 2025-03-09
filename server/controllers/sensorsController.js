const sensorsService = require("../services/sensorsService");
const getAll = async (req, res) => {
  try {
    const sensors = await sensorsService.getAll();

    if (sensors.length > 0) res.json(sensors);
    else res.status(404).json({ message: "sensrs not found" });
  } catch (error) {
    console.error("Error in getAllSensors:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const findSensorById = async (req, res) => {
  try {
    let { id } = req.params;
    const sensor = await sensorsService.findSensorById(id);
    if (sensor.length > 0) res.json(sensor);
    else res.status(404).json({ message: "sensr not found" });
  } catch (error) {
    console.error("Error in Finding Sensor By Id:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
const addSensor = async (req, res) => {
  try {
    let { name, isRunning } = req.body;
    const insertId = await sensorsService.addSensor([String(name), Number(isRunning)]);
    res.json(insertId);
  } catch (error) {
    console.error("Error in adding new sensor:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  getAll: getAll,
  findSensorById: findSensorById,
  addSensor: addSensor,
};
