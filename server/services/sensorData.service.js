const SensorDataModel = require("../models/sensorData.model");
class SensorData {
  static async getAll() {
   
  }
  static async findSensorDataById(values) {
    
  }
  static async addSensorData(values) {
    try {
      let rows = await SensorDataModel.addSensorData(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service addSensorData: ${err.message}`);
      throw new Error("Failed to add SensorData due to an internal error.");
    }
  }
  static async deleteSensorData(values) {
    
  }
  static async updateSensorData(values) {
    
  }
}

module.exports = SensorData;
