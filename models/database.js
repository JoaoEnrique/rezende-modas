const Sequelize = require('sequelize')
const sequelize = new Sequelize('rezendes_moda', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}