const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  connectionString: "postgres://default:xVqFA8PYp1ro@ep-lingering-tree-465388-pooler.us-east-1.aws.neon.tech:5432/verceldb?sslmode=require",
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}