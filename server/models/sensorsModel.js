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
      const [rows, fields] = await connection.pool.execute(sql,[values]);
      return rows;
    } catch (err) {
      console.log(err.message);
    }
  }
}
module.exports = Sensors;
