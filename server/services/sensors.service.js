const Sensors = require("../models/sensors.model");
class SensorsService {
  static async getAll() {
    try {
      let rows = await Sensors.getAll();
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows;
    } catch (err) {
      console.error(`Error in service getAll: ${err.message}`);
      throw new Error("Failed to update sensor due to an internal error.");
    }
  }
  static async findSensorById(values) {
    try {
      let rows = await Sensors.findSensorById(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows;
    } catch (err) {
      console.error(`Error in service findSensorById: ${err.message}`);
      throw new Error("Failed to update sensor due to an internal error.");
    }
  }
  static async addSensor(values) {
    try {
      let rows = await Sensors.addSensor(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service addSensor: ${err.message}`);
      throw new Error("Failed to update sensor due to an internal error.");
    }
  }
  static async deleteSensor(values) {
    try {
      let rows = await Sensors.deleteSensor(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service deleteSensor: ${err.message}`);
      throw new Error("Failed to update sensor due to an internal error.");
    }
  }
  static async updateSensor(values) {
    try {
      let rows = await Sensors.updateSensor(values);
      if (rows === undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service updateSensor: ${err.message}`);
      throw new Error("Failed to update sensor due to an internal error.");
    }
  }
}

module.exports = SensorsService;
