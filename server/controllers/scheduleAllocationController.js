const Schedule = require('../models/Schedule');



// Function to create a new schedule
exports.createSchedule = async (req, res) => {
  try {
    const { date, time, location } = req.body;
    // Create a new schedule in the database
    const newSchedule = await Schedule.create({ date, time, location });
    res.status(201).json(newSchedule);
  } catch (error) {
    console.error('Error creating schedule:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Function to delete a schedule
exports.deleteSchedule = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSchedule = await Schedule.destroy({ where: { id } });
    if (deletedSchedule) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Schedule not found' });
    }
  } catch (error) {
    console.error('Error deleting schedule:', error);
    res.status(500).json({ error: 'Failed to delete schedule' });
  }
};
