const express = require('express');
const SensorDataController = require('../controllers/sensorData.controller');

const router = express.Router();

router.get('/',SensorDataController.getAll);
router.get('/:id',SensorDataController.findSensorDataById);
router.post('/:id', SensorDataController.addSensorData);
router.delete('/:id', SensorDataController.deleteSensorData);
router.put('/:id',SensorDataController.updateSensorData);

module.exports = router;