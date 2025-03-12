const express = require('express');
const plantsController = require('../controllers/plants.controller');

const router = express.Router();

router.get('/',plantsController.getAll);
router.get('/:id',plantsController.findPlantsById);
router.post('/', plantsController.addPlant);
router.delete('/:id', plantsController.deletePlant);
router.put('/:id',plantsController.updatePlant);

module.exports = router;