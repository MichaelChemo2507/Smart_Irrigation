const express = require('express');
const StateFileController = require('../controllers/stateFile.controller');

const router = express.Router();

router.get('/',StateFileController.getAll);
router.get('/:statusMode',StateFileController.getStatusDataByStatusName);

module.exports = router;