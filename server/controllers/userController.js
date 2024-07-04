const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.getProfile = async (req, res) => {
  const userId = req.user.id; // Use req.userId from the middleware
  try {
    const user = await User.findByPk(userId, {
      attributes: ['username', 'email', 'role'] // Fetch only necessary attributes
    });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};