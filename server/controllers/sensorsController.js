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
    if (name == undefined || isRunning == undefined)
      throw new Error(
        "Invalid values received! || Missing values! Values : " +
          [name, isRunning]
      );
    const insertId = await sensorsService.addSensor([
      String(name),
      Number(isRunning),
    ]);
    res.status(201).json(insertId);
  } catch (error) {
    console.error("Error in adding new sensor:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
const deleteSensor = async (req, res) => {
  try {
    let { id } = req.params;
    const affectedRows = await sensorsService.deleteSensor(id);
    console.log(affectedRows);

    if (affectedRows < 1)
      res.status(404).json({ message: `id ${id} is not exist` });
    else res.status(204).json({ message: `row ${id} is deleted` });
  } catch (error) {
    console.error("Error in Finding Sensor By Id:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
const updateSensor = async (req, res) => {
  try {
    let { id } = req.params;
    let { name, isRunning } = req.body;
    if (name == undefined || isRunning == undefined)
      throw new Error(
        "Invalid values received! || Missing values! Values : " +
          [name, isRunning]
      );
    const affectedRows = await sensorsService.updateSensor([
      String(name),
      Number(isRunning),
      id,
    ]);
    if (affectedRows < 1)
      res.status(404).json({success:false, message: `id ${id} is not exist` });
    else res.status(204).json({ success:true, message: `row ${id} is updated` });
  } catch (error) {
    console.error("Error in Updating Sensor By Id:", error.message);
    res.status(500).json({success:false, message: "Internal server error" });
  }
};
module.exports = {
  getAll: getAll,
  findSensorById: findSensorById,
  addSensor: addSensor,
  deleteSensor: deleteSensor,
  updateSensor: updateSensor,
};
