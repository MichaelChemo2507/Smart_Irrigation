// npm install express pg dotenv morgan cors

const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');

//------------------------------------------------

const app = express();
const port = 3214;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
dotenv.config();

//------------------------------------------------
const sensorsRout = require('./routes/sensorsRout')
app.use('/sensors', sensorsRout);
//------------------------------------------------

app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
    console.log(`http://localhost:${port}`);
    console.log(__dirname);
});
