const Sequelize = require('sequelize')
const sequelize = new Sequelize('q4ds0zcv2qywzdu0', 'fp8llaifvcdi63in', 'tfvo7zaj7ksza9e1', {
    host: 'otwsl2e23jrxcqvx.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}