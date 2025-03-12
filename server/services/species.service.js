const Species = require("../models/species.model");
class SpeciesService {
  static async getAll() {
    try {
      let rows = await Species.getAll();
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows;
    } catch (err) {
      console.error(`Error in service getAll: ${err.message}`);
      throw new Error("Failed to update species due to an internal error.");
    }
  }
  static async findSpeciesById(values) {
    try {
      let rows = await Species.findSpeciesById(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows;
    } catch (err) {
      console.error(`Error in service findSpeciesById: ${err.message}`);
      throw new Error("Failed to update species due to an internal error.");
    }
  }
  static async addSpecies(values) {
    try {
      let rows = await Species.addSpecies(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service addSpecies: ${err.message}`);
      throw new Error("Failed to update species due to an internal error.");
    }
  }
  static async deleteSpecies(values) {
    try {
      let rows = await Species.deleteSpecies(values);
      if (rows == undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service deleteSpecies: ${err.message}`);
      throw new Error("Failed to update species due to an internal error.");
    }
  }
  static async updateSpecies(values) {
    try {
      let rows = await Species.updateSpecies(values);
      if (rows === undefined) throw new Error("No rows received from the DB!");
      return rows.affectedRows;
    } catch (err) {
      console.error(`Error in service updateSpecies: ${err.message}`);
      throw new Error("Failed to update species due to an internal error.");
    }
  }
}

module.exports = SpeciesService;
