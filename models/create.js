
const tables = require('./tables')
const Products = tables.Products
const Employees = tables.Employees
const SaleItems = tables.SaleItems
const Sales = tables.Sales

// Inserir um funcionário
Employees.create({
    name: 'Caio',
    email: 'caio@exemplo.com',
    password: '123'
}).then(employee => {
    console.log('Funcionário inserido:', employee.get());
}).catch(err => {
    console.error('Erro ao inserir funcionário:', err);
});

// Inserir um produto
Products.create({
    reference: 'REF123',
    type: 'Camisa',
    quantity: 10,
    price: 50.00
}).then(product => {
    console.log('Produto inserido:', product.get());
}).catch(err => {
    console.error('Erro ao inserir produto:', err);
});

// Inserir uma venda
Sales.create({
    employeeId: 1,
    total: 250.00
}).then(sale => {
    console.log('Venda inserida:', sale.get());
}).catch(err => {
    console.error('Erro ao inserir venda:', err);
});


// Inserir um item de venda
SaleItems.create({
    saleId: 1,
    productId: 1,
    quantity: 5
}).then(saleItem => {
    console.log('Item de venda inserido:', saleItem.get());
}).catch(err => {
    console.error('Erro ao inserir item de venda:', err);
});