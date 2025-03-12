const connection = require("../config/db");

class Plants {
  static async getAll() {
    try {
      const sql = "SELECT * FROM `plants`";
      const [rows, fields] = await connection.pool.query({
        sql,
      });
      return rows;
    } catch (err) {
      console.error("Error in plantsModel level! - ", err.message);
      throw err;
    }
  }
  static async findPlantById(values) {
    try {
      const sql = "SELECT * FROM `Plants` WHERE `id` = ?";
      const [rows, fields] = await connection.pool.execute(sql, [values]);
      return rows;
    } catch (err) {
      console.error("Error in plantsModel level! - ", err.message);
      throw err;
    }
  }
  static async addPlant(values) {
    try {
      if (!values) throw new Error("invalid values received!");
      if (!Array.isArray(values)) values = [values];
      if (values.length > 2 || values.length < 1)
        throw new RangeError("Error in the number of values received!");
      if (typeof values[0] != typeof "")
        throw new TypeError(
          `invalid name type! - receive type ${typeof values[0]}`
        );
      const primaryKey = Plants.findPlantById(values[0]);
      if (primaryKey.length < 1)
        throw new Error("no Primary key exists. id recieved : " + values[0]);
      if (values[1] instanceof Date && !isNaN(values[1]))
        throw new TypeError(
          `invalid isRunning type! - receive type ${typeof values[1]}`
        );
      const sql = "INSERT INTO `Plants`(`species_id`, `date`) VALUES (?, ?)";
      const [rows, fields] = await connection.pool.execute(sql, values);
      return rows;
    } catch (err) {
      console.error("Error in plantsModel level! - ", err.message);
      throw err;
    }
  }
  static async addMultiplePlants(values) {}
  static async updatePlant(values) {
    try {
      if (!values) throw new Error("invalid values received!");
      if (!Array.isArray(values)) values = [values];
      if (values.length > 3 || values.length < 1)
        throw new RangeError("Error in the number of values received!");
      if (typeof values[0] != typeof "")
        throw new TypeError(
          `invalid name type! - receive type ${typeof values[0]}`
        );
      const primaryKey = Plants.findPlantById(values[0]);
      if (primaryKey.length < 1)
        throw new Error("no Primary key exists. id recieved : " + values[0]);
      if (values[1] instanceof Date && !isNaN(values[1]))
        throw new TypeError(
          `invalid isRunning type! - receive type ${typeof values[1]}`
        );
      const sql =
        "UPDATE `Plants` SET `species_id` = ?, `date` = ? WHERE `id` = ?";
      const [rows, fields] = await connection.pool.execute(sql, values);
      return rows;
    } catch (err) {
      console.error("Error in plantsModel level! - ", err.message);
      throw err;
    }
  }
  static async deletePlant(values) {
    try {
      if (!values) throw new Error("invalid values received!");
      if (!Array.isArray(values)) values = [values];
      const sql = "DELETE FROM `Plants` WHERE `id` = ?";
      const [rows, fields] = await connection.pool.execute(sql, values);

      return rows;
    } catch (err) {
      console.error("Error in plantsModel level! - ", err.message);
      throw err;
    }
  }
}
module.exports = Plants;
