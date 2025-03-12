const Plants = require("../models/plants.model");
class PlantsService {
  static async getAll() {
    try {
      let rows = await Plants.getAll();
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows;
    } catch (err) {
      console.error(`Error in service getAll: ${err.message}`);
      throw new Error("Failed to get Plants due to an internal error.");
    }
  }
  static async findPlantById(values) {
    try {
      let rows = await Plants.findSpeciesById(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows;
    } catch (err) {
      console.error(`Error in service findPlantById: ${err.message}`);
      throw new Error("Failed to find Plant due to an internal error.");
    }
  }
  static async addPlant(values) {
    try {
      let rows = await Plants.addPlant(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service addPlant: ${err.message}`);
      throw new Error("Failed to add Plant due to an internal error.");
    }
  }
  static async deletePlant(values) {
    try {
      let rows = await Plants.deletePlant(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service deletePlants: ${err.message}`);
      throw new Error("Failed to delete Plant due to an internal error.");
    }
  }
  static async updatePlant(values) {
    try {
      let rows = await Plants.updatePlant(values);
      if (rows === undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service updatePlant: ${err.message}`);
      throw new Error("Failed to update Plant due to an internal error.");
    }
  }
}

module.exports = PlantsService;
