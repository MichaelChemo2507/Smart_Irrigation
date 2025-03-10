const speciesService = require("../services/speciesService");

class SpeciesController {
  static async getAll(req, res) {
    try {
      const species = await speciesService.getAll();
      if (species.length > 0) res.json({success: true,rows: species});
      else res.status(404).json({success: false, message: "species not found" });
    } catch (error) {
      console.error("Error in species controller level (getAll):", error);
      res.status(500).json({success: false, message: "Internal server error" });
    }
  }
  static async findSpeciesById(req, res) {
    try {
      let { id } = req.params;
      const species = await speciesService.findSpeciesById(id);
      if (species.length > 0) res.json({success: true,rows: species});
      else res.status(404).json({success: false, message: "species not found" });
    } catch (error) {
      console.error(
        "Error in species controller level (findSpeciesById):",
        error
      );
      res.status(500).json({success: false, message: "Internal server error" });
    }
  }
  static async addSpecies(req, res) {
    try {
      let { name } = req.body;
      if (name == undefined)
        throw new Error(
          "Invalid values received! || Missing values! Values : " + name
        );
      const insertId = await speciesService.addSpecies([String(name)]);
        res.status(201).json({ success: true, insertId: insertId });
    } catch (error) {
      console.error("Error in species controller level (addSpecies):", error);
      res.status(500).json({success: false, message: "Internal server error" });
    }
  }
  static async deleteSpecies(req, res) {
    try {
      let { id } = req.params;
      const affectedRows = await speciesService.deleteSpecies(id);
      if (affectedRows < 1)
        res.status(404).json({success: false, message: `id ${id} is not exist` });
      else res.status(204).json({success: true, message: `row ${id} is deleted` });
    } catch (error) {
      console.error(
        "Error in species controller level (deleteSpecies):",
        error
      );
      res.status(500).json({success: false, message: "Internal server error" });
    }
  }
  static async updateSpecies(req, res) {
    try {
      let { id } = req.params;
      let { name } = req.body;
      if (name == undefined)
        throw new Error(
          "Invalid values received! || Missing values! Values : " + name
        );
      const affectedRows = await speciesService.updateSpecies([
        String(name),
        id,
      ]);
      if (affectedRows < 1)
        res
          .status(404)
          .json({ success: false, message: `id ${id} is not exist` });
      else
        res
          .status(204)
          .json({ success: true, message: `row ${id} is updated` });
    } catch (error) {
      console.error("Error in Updating Sensor By Id:", error.message);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
}
module.exports = SpeciesController;
