const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecotrack', 'root', 'Surya@08', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
