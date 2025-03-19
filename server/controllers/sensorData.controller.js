const SensorDataService = require("../services/sensorData.service");
const utilsMethods = require("../utils/methodsj.utils")

class SensorData {
  static async getAll(req, res) {

  }
  static async findSensorDataById(req, res) {

  }
  static async addSensorData(req, res) {
    try {
      let { id } = req.params;
      let { totalIrrigation } = req.body;
      if (id == undefined || totalIrrigation == undefined)
        throw new Error(
          "Invalid values received! || Missing values! Values : " + id + " || " + totalIrrigation
        );
      const insertId = await SensorDataService.addSensorData([
        String(id),
        String(totalIrrigation),
        utilsMethods.getCurrentDate(),
      ]);
      res.status(201).json({ success: true, insertId: insertId });
    } catch (error) {
      console.error("Error in Sensor Data controller level (addSensorData):", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
  static async deleteSensorData(req, res) {

  }
  static async updateSensorData(req, res) {
  }
}
module.exports = SensorData;
