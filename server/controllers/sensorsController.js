const sensorsService = require("../services/sensorsService");
const getAll = async (req, res) => {
  try {
    const sensors = await sensorsService.getAll();
    if (sensors.length > 0) {
      res.json(sensors);
    } else {
      res.status(404).json({ message: "sensrs not found" });
    }
  } catch (error) {
    console.error("Error in getAllSensors:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  getAll: getAll,
};
