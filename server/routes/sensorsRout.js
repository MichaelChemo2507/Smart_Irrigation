const express = require('express');
const sensoresController = require('../controllers/sensorsController');

const router = express.Router();

router.get('/',sensoresController.getAll);
router.get('/:id',sensoresController.findSensorById);

module.exports = router;