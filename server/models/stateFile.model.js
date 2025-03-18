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
}
module.exports = StateFile;
