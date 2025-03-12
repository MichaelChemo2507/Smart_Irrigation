const express = require('express');
const sensoresController = require('../controllers/sensors.controller');

const router = express.Router();

router.get('/',sensoresController.getAll);
router.get('/:id',sensoresController.findSensorById);
router.post('/', sensoresController.addSensor);
router.delete('/:id', sensoresController.deleteSensor);
router.put('/:id',sensoresController.updateSensor);

module.exports = router;