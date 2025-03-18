const StateFileService = require("../services/stateFile.service");

class StateFileController {
  static async getAll(req, res) {
    try {
        const stateFileData = await StateFileService.getAll();
        console.log(stateFileData);
        
      if (typeof stateFileData == typeof {}) res.json({success: true,rows: stateFileData});
      else res.status(404).json({success: false, message: "data not found" });
    } catch (error) {
      console.error("Error in stateFile controller level (getAll):", error);
      res.status(500).json({success: false, message: "Internal server error" });
    }
  }
}
module.exports = StateFileController;
