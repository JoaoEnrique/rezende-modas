const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize('postgres://default:xVqFA8PYp1ro@ep-lingering-tree-465388-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false 
    }
  }
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}