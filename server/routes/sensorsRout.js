const express = require('express');
const sensoresController = require('../controllers/sensorsController');

const router = express.Router();

router.get('/',sensoresController.getAll);

module.exports = router;