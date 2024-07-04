const express = require("express");
const cors = require("cors");
const db = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const issueRoutes = require("./routes/issueRoutes");
const scheduleRoutes = require("./routes/scheduleRoutes");
const scheduleAllocationRoutes = require("./routes/scheduleAllocationRoutes");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/issues", issueRoutes);
app.use("/schedules", scheduleRoutes);
app.use("/schedule-allocations", scheduleAllocationRoutes);

const PORT = process.env.PORT || 3001;

db.sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Failed to sync database:", err);
  });

module.exports = app;
