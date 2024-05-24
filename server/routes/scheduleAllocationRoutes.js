const express = require('express');
const router = express.Router();
const scheduleAllocationController = require('../controllers/scheduleAllocationController');


router.post('/', scheduleAllocationController.createSchedule);
router.delete('/:id', scheduleAllocationController.deleteSchedule);

module.exports = router;
