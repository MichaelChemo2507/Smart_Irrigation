const connection = require("../config/db");

class Sensors {
  static async getAll() {
    try {
      const sql = "SELECT * FROM `sensors`";
      const [rows, fields] = await connection.pool.query({
        sql,
      });
      return rows;
    } catch (err) {
      console.log(err);
    }
  }
  static async findSensorById(values) {
    try {
      const sql = "SELECT * FROM `sensors` WHERE `id` = ?";
      const [rows, fields] = await connection.pool.execute(sql, [values]);
      return rows;
    } catch (err) {
      console.log(err.message);
    }
  }
  static async addSensor(values) {
    try {
      if (!values) throw new Error("invalid values received!");
      if (values.length > 2 || values.length < 1)
        throw new RangeError("Error in the number of values received!");
      if (typeof values[0] != typeof "")
        throw new TypeError(
          `invalid name type! - receive type ${typeof values[0]}`
        );
      if (typeof values[1] != typeof 1)
        throw new TypeError(
          `invalid isRunning type! - receive type ${typeof values[1]}`
        );
      const sql = "INSERT INTO `sensors`(`name`, `isRunning`) VALUES (?, ?)";
      const [rows, fields] = await connection.pool.execute(sql, values);
      return rows;
    } catch (err) {
      console.log(err.message);
    }
  }
  static async addMultipleSensors(values) {}
  static async updateSensor(values) {}
  static async deleteSensor(values) {
    try {
      const sql = "DELETE FROM `sensors` WHERE `id` = ?";
      const [rows, fields] = await connection.pool.execute(sql, [values]);
      return rows;
    } catch (err) {
      console.log(err.message);
    }
  }
}
module.exports = Sensors;
