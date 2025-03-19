const StateFile = require("../models/stateFile.model");
class StateFileService {
    static async getAll() {
        try {
            let rows = await StateFile.getAll();
            if (rows == undefined) throw new Error("No data received!");
            return rows;
        } catch (err) {
            console.error(`Error in service getAll: ${err.message}`);
            throw new Error("Failed to read StateFile due to an internal error.");
        }
    }
    static async getStatusDataByStatusName(values) {
        try {
            let rows = await StateFile.getStatusDataByStatusName(values);
            if (rows == undefined) throw new Error("No data received!");
            return rows;
        } catch (err) {
            console.error(`Error in service getStatusDataByStatusName: ${err.message}`);
            throw new Error("Failed to read StateFile due to an internal error.");
        }
    }
    static async getStateData() {
        try {
            let rows = await StateFile.getStateData();
            if (rows == undefined) throw new Error("No data received!");
            return rows;
        } catch (err) {
            console.error(`Error in service getStateData: ${err.message}`);
            throw new Error("Failed to read StateFile due to an internal error.");
        }
    }
    static async updateStatus(values) {
        try { 
            let rows = await StateFile.getStateData();
            if (rows == undefined) throw new Error("No data received!");
            return rows;
        } catch (err) {
            console.error(`Error in service getStateData: ${err.message}`);
            throw new Error("Failed to read StateFile due to an internal error.");
        } 
    }
}

module.exports = StateFileService;
