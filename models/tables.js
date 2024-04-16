const db = require('./database')

// Funcionarios
const Employees = db.sequelize.define('employees', {
    name: {
        type: db.Sequelize.STRING
    },
    email: {
        type: db.Sequelize.STRING
    },
    password: {
        type: db.Sequelize.STRING
    },
})

// Produtos
const Products = db.sequelize.define('products', {
    reference: {
        type: db.Sequelize.STRING
    },
    type: {
        type: db.Sequelize.STRING
    },
    quantity: {
        type: db.Sequelize.INTEGER
    },
    price: {
        type: db.Sequelize.FLOAT
    }
})

//  Item de Venda
const SaleItems = db.sequelize.define('sale_items', {
    quantity: {
        type: db.Sequelize.INTEGER
    },
})

// Vendas
const Sales = db.sequelize.define('sales', {
    total: {
        type: db.Sequelize.FLOAT
    }
})


// Associacao
Employees.hasMany(Sales); // Um funcionario tem muitas vendas
Sales.belongsTo(Employees); // Uma venda tem um Funcionario

Sales.hasMany(SaleItems); // Uma venda pode ter muitos itens de venda
SaleItems.belongsTo(Sales); // um item de venda pode ter uma venda

SaleItems.belongsTo(Products); // Um item de enda por ter um produto
Products.hasMany(SaleItems); // um produto pode ter muitos itens de venda

db.sequelize.sync({ force: true });


module.exports = {
    Employees,
    Products,
    SaleItems,
    Sales
}