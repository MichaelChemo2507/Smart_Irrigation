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
}
module.exports = Sensors;
