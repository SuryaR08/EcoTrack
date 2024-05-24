const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ecotrack', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
