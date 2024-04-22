const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // dependendo das configurações do seu banco de dados
    }
  }
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}