const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.POSTGRES_DATABASE, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
    logging: false, // Opcional: desativa o log de consultas SQL
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // Adicione isso se você estiver tendo problemas com a verificação do certificado SSL
        }
    }
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}