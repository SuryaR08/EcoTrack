const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('railway', 'root', '', {
  host: 'monorail.proxy.rlwy.net',
  port: 33525,
  dialect: 'mysql'
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
