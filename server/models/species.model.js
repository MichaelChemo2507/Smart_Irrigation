const connection = require("../config/db");

class Species {
  static async getAll() {
    try {
      const sql = "SELECT * FROM `species`";
      const [rows, fields] = await connection.pool.query({
        sql,
      });
      return rows;
    } catch (err) {
      console.error("Error in speciesModel level! - ", err.message);
      throw err;
    }
  }
  static async findSpeciesById(values) {
    try {
      const sql = "SELECT * FROM `species` WHERE `id` = ?";
      const [rows, fields] = await connection.pool.execute(sql, [values]);
      return rows;
    } catch (err) {
      console.error("Error in speciesModel level! - ", err.message);
      throw err;
    }
  }
  static async addSpecies(values) {
    try {
      if (!values) throw new Error("invalid values received!");
      if (!Array.isArray(values)) values = [values];
      if (values.length > 1 || values.length < 1)
        throw new RangeError("Error in the number of values received!");
      if (typeof values[0] != typeof "")
        throw new TypeError(
          `invalid name type! - receive type ${typeof values[0]}`
        );
      const sql = "INSERT INTO `species`(`name`) VALUES (?)";
      const [rows, fields] = await connection.pool.execute(sql, values);
      return rows;
    } catch (err) {
      console.error("Error in speciesModel level! - ", err.message);
      throw err;
    }
  }
  static async addMultipleSpecies(values) {}
  static async updateSpecies(values) {
    try {
      if (!values) throw new Error("invalid values received!");
      if (!Array.isArray(values)) values = [values];
      if (values.length > 2 || values.length < 1)
        throw new RangeError("Error in the number of values received!");
      if (typeof values[0] != typeof "")
        throw new TypeError(
          `invalid name type! - receive type ${typeof values[0]}`
        );
      const sql = "UPDATE `species` SET `name` = ? WHERE `id` = ?";
      const [rows, fields] = await connection.pool.execute(sql, values);
      return rows;
    } catch (err) {
      console.error("Error in speciesModel level! - ", err.message);
      throw err;
    }
  }
  static async deleteSpecies(values) {
    try {
      if (!values) throw new Error("invalid values received!");
      if (!Array.isArray(values)) values = [values];
      const sql = "DELETE FROM `species` WHERE ?;";
      const [rows, fields] = await connection.pool.execute(sql, values);

      return rows;
    } catch (err) {
      console.error(
        "Error in speciesModel level! - ",
        err.message + " " + values
      );
      throw err;
    }
  }
}
module.exports = Species;
