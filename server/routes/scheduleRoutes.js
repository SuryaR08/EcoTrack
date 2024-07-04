const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// GET all schedules
router.get('/', scheduleController.getAllSchedules);


module.exports = router;
