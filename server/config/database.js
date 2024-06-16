const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('boardgames', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;