const express = require('express');
const speciesController = require('../controllers/species.controller');

const router = express.Router();

router.get('/',speciesController.getAll);
router.get('/:id',speciesController.findSpeciesById);
router.post('/', speciesController.addSpecies);
router.delete('/:id', speciesController.deleteSpecies);
router.put('/:id',speciesController.updateSpecies);

module.exports = router;