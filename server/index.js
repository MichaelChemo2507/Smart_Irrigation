// npm install express mysql2 dotenv morgan cors fs

const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");

//------------------------------------------------

const app = express();
const port = 3214;

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
dotenv.config();
//------------------------------------------------
const sensorsRout = require("./routes/sensors.rout");
app.use("/sensors", sensorsRout);
const speciesRout = require("./routes/species.rout");
app.use("/species", speciesRout);
const plantsRout = require("./routes/plants.rout");
app.use("/plants", plantsRout);
const stateFileRout = require("./routes/stateFile.rout");
app.use("/stateFile", stateFileRout);
//------------------------------------------------

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
  console.log(`http://localhost:${port}`);
  console.log(__dirname);
});
