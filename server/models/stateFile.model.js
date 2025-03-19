const fs = require("fs");
const state = require("../stateFile.json");

// fs.writeFile(
//     "stateFile.json",
//     JSON.stringify(),
//     err => {
//         if (err) throw err;
//         console.log("Done writing");
//     });
class StateFile {
  static async getAll() {
    try {
      return state;
    } catch (err) {
      console.error("Error in StateFile Model level! - ", err.message);
      throw err;
    }
  }
  static async getStatusDataByStatusName(values) {
    try {
      return state[values];
    } catch (err) {
      console.error("Error in StateFile Model level! - ", err.message);
      throw err;
    }
  }
  static async getStateData() {
    let currentDate = new Date();
    currentDate.toLocaleTimeString("he-IL", {
      hour: "2-digit",
      minute: "2-digit",
    });
    try {
      return { state: state.state, time: currentDate };
    } catch (err) {
      console.error("Error in StateFile Model level! - ", err.message);
      throw err;
    }
  }
  static async updateStatus(values) {
    try {
      fs.writeFile(
        "stateFile.json",
        JSON.stringify(
          values
        ),
        err => {
          if (err) throw err;
          console.log("Done writing");
        });
      return ({ seccess: true });
    } catch (err) {
      console.error("Error in StateFile Model level! - ", err.message);
      throw err;
    }
  }
}
module.exports = StateFile;
