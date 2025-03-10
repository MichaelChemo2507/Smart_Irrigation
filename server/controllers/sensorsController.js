const sensorsService = require("../services/sensorsService");
class SensorsController {
  static async getAll(req, res) {
    try {
      const sensors = await sensorsService.getAll();
      if (sensors.length > 0) res.json({ success: true, rows: sensors });
      else
        res.status(404).json({ success: false, message: "sensors not found" });
    } catch (error) {
      console.error("Error in sensors controller level (getAll):", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
  static async findSensorById(req, res) {
    try {
      let { id } = req.params;
      const sensor = await sensorsService.findSensorById(id);
      if (sensor.length > 0) res.json({ success: true, rows: sensor });
      else
        res.status(404).json({ success: false, message: "sensor not found" });
    } catch (error) {
      console.error(
        "Error in sensors controller level (findSpeciesById):",
        error
      );
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
  static async addSensor(req, res) {
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
      res.status(201).json({ success: true, insertId: insertId });
    } catch (error) {
      console.error("Error in sensors controller level (addSpecies):", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
  static async deleteSensor(req, res) {
    try {
      let { id } = req.params;
      const affectedRows = await sensorsService.deleteSensor(id);
      if (affectedRows < 1)
        res
          .status(404)
          .json({ success: false, message: `id ${id} is not exist` });
      else
        res
          .status(204)
          .json({ success: true, message: `row ${id} is deleted` });
    } catch (error) {
      console.error("Error in sensors controller level (deleteSensor):", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
  static async updateSensor(req, res) {
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
        res
          .status(404)
          .json({ success: false, message: `id ${id} is not exist` });
      else
        res
          .status(204)
          .json({ success: true, message: `row ${id} is updated` });
    } catch (error) {
      console.error("Error in Updating Sensor By Id:", error.message);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
}
module.exports = SensorsController;
