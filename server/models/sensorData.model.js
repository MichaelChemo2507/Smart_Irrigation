const connection = require("../config/db");
const PlantsService = require('../services/plants.service');

class SensorData {
  static async getAll() {

  }
  static async findSensorDataById(values) {

  }
  static async addSensorData(values) {
    try {
      if (!values) throw new Error("invalid values received!");
      if (!Array.isArray(values)) values = [values];
      if (values.length > 3 || values.length < 1)
        throw new RangeError("Error in the number of values received!");
      if (typeof values[0] != typeof "" || typeof values[1] != typeof "")
        throw new TypeError(
          `invalid name type! - receive type ${typeof values[0] } || ${typeof values[1]}`
        );
        if (values[2] instanceof Date && !isNaN(values[2]))
          throw new TypeError(
            `invalid date type! - receive type ${typeof values[2]}`
          );
      const primaryKey = PlantsService.findPlantById(values[0]);
        if (primaryKey.length < 1)
            throw new Error("no Primary key exists. id recieved : " + values[0]);
      const sql = "INSERT INTO `sensor_data`(`plant_id`, `total_irrigation_time`,`date`) VALUES (?, ?, ?)";
      const [rows, fields] = await connection.pool.execute(sql, values);
      return rows;
    } catch (err) {
      console.error("Error in  sensor data Model level! - ", err.message);
      throw err;
    }
  }
  static async addMultipleSensorData(values) {}
  static async updateSensorData(values) {

  }
  static async deleteSensorData(values) {
  }
}
module.exports = SensorData;
