const { Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'Computer-Reapir',
  port: 5432,
  logging: false,
});

module.exports = { db };
