const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
  logging: true, // opcional, para ver as consultas SQL geradas no console
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // opcional, dependendo das configurações do seu banco de dados
    }
  }
});

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize
};