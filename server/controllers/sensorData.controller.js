const SensorData = require("../services/sensorData.service");
const utilMethods = require("../utils/methodsj.utils");

class SensorData {
  static async getAll(req, res) {
    try {
      const plants = await PlantsService.getAll();
      if (plants.length > 0) res.json({ success: true, rows: plants });
      else
        res.status(404).json({ success: false, message: "plants not found" });
    } catch (error) {
      console.error("Error in plants controller level (getAll):", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
  static async findPlantsById(req, res) {
    try {
      let { id } = req.params;
      const plant = await PlantsService.findPlantById(id);
      if (plant.length > 0) res.json({ success: true, rows: plant });
      else res.status(404).json({ success: false, message: "plant not found" });
    } catch (error) {
      console.error(
        "Error in plants controller level (findPlantsById):",
        error
      );
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
  static async addPlant(req, res) {
    try {
      let { speceis_id } = req.body;
      if (speceis_id == undefined)
        throw new Error(
          "Invalid values received! || Missing values! Values : " + speceis_id
        );
      const insertId = await PlantsService.addPlant([
        String(speceis_id),
        utilMethods.getCurrentDate(),
      ]);
      res.status(201).json({ success: true, insertId: insertId });
    } catch (error) {
      console.error("Error in plants controller level (addPlant):", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
  static async deletePlant(req, res) {
    try {
      let { id } = req.params;
      const affectedRows = await PlantsService.deletePlant(id);
      if (affectedRows < 1)
        res
          .status(404)
          .json({ success: false, message: `id ${id} is not exist` });
      else
        res
          .status(204)
          .json({ success: true, message: `row ${id} is deleted` });
    } catch (error) {
      console.error("Error in plants controller level (deletePlant):", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
  static async updatePlant(req, res) {
    try {
      let { id } = req.params;
      let { speceis_id } = req.body;
      if (speceis_id == undefined)
        throw new Error(
          "Invalid values received! || Missing values! Values : " + speceis_id
        );
      const affectedRows = await PlantsService.updatePlant([
        String(speceis_id),
        utilMethods.getCurrentDate(),
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
      console.error("Error in Updating plant By Id:", error.message);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
}
module.exports = SensorData;
