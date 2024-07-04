const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Issue = sequelize.define("Issue", {
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: "Pending",
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Issue;
