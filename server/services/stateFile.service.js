const StateFile = require("../models/stateFile.model");
class StateFileService {
    static async getAll() {
        try {
            let rows = await StateFile.getAll();
            if (rows == undefined) throw new Error("No rows received from the DB!");
            return rows;
        } catch (err) {
            console.error(`Error in service getAll: ${err.message}`);
            throw new Error("Failed to read StateFile due to an internal error.");
        }
    }
}

module.exports = StateFileService;
