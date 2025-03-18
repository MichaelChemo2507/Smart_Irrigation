const express = require('express');
const StateFileController = require('../controllers/stateFile.controller');

const router = express.Router();

router.get('/',StateFileController.getAll);

module.exports = router;