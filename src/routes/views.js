const express = require('express');
const router = express.Router();
const { Products } = require('../../models/tables');
const { Sales } = require('../../models/tables');
const { SaleItems } = require('../../models/tables');
const { Employees } = require('../../models/tables');
router.use(express.urlencoded({ extended: true }));

// ROTAS
router.use(express.static('src'));

// index
router.get('/', function(req, res){
    res.render('index', { title: 'Home - Rezendes moda' })
})

// Funcionarios
router.get('/login', function(req, res){
    res.render('login', { title: 'Login' })
})

// Funcionarios
router.get('/employees', function(req, res){
    res.render('employees/index', { title: 'Funcionários' })
})

router.get('/employees/list', function(req, res){
    res.render('employees/list', { title: 'Listar Funcionário' })
})

router.get('/employees/register', function(req, res){
    res.render('employees/register', { title: 'Cadastrar Funcionário' })
})

router.get('/employees/edit', function(req, res){
    res.render('employees/edit', { title: 'Editar Funcionário' })
})

// Produtos
router.get('/products', function(req, res){
    res.render('products/index', { title: 'Produtos' })
})

router.get('/products/list', function(req, res){
    res.render('products/list', { title: 'Listar Produto' })
})

router.get('/products/register', function(req, res){
    res.render('products/register', { title: 'Cadastrar Produto' })
})

router.get('/products/edit/:id', function(req, res){
    res.render('products/edit', { title: 'Editar Produto' })
})

// Catalogo
router.get('/catalogs/masculine', function(req, res){
    res.render('catalogs/masculine', { title: 'Catálogo Masculino' })
})

router.get('/catalogs/feminine', function(req, res){
    res.render('catalogs/feminine', { title: 'Catálogo Feminino' })
})

// Vendas
router.get('/sales', function(req, res){
    res.render('sales/index', { title: 'Vendas' })
})

router.get('/sales/list',  async function(req, res){
    try {
        const sales = await Sales.findAll({
            include: {
                model: Employees, // Nome do modelo da tabela de funcionários
                as: 'employee' // Alias para referenciar a tabela de funcionários nos resultados
            }
        });
        res.render('sales/list', { title: 'Listar Vendas', sales: sales.map((Sales) => Sales.get({ plain: true })),  });
    }catch (error) {
        res.status(500).send('Erro ao carregar as vendas: ' + error);
    }
})

router.get('/sales/register', async function(req, res){
    try {
        const products = await Products.findAll();
        res.render('sales/register', { title: 'Vendas', products: products.map((Products) => Products.get({ plain: true })),  });
    } catch (error) {
        res.status(500).send('Erro ao carregar os produtos: ' + error);
    }
})

router.get('/sales/edit/:id', function(req, res){
    res.render('sales/edit', { title: 'Editar Venda' })
})

router.post('/sales/create', async (req, res) => {
    // Data provided by HTML form
    console.log(req.body); // Isso imprimirá todos os campos do formulário no console
    const {
        product_id,
        reference,
        type,
        prices,
        quantity,
        subtotal,
        total
    } = req.body;


    // Insert a sale into database
    try {
        const newSale = await Sales.create({
            total: parseFloat(total),
            employeeId: 1
        });

        for (let i = 0; i < product_id.length; i++) {
            const newItem = await SaleItems.create({
                productId: product_id[i],
                quantity: quantity[i],
                saleId: newSale.id
            });
        }

        res.redirect('/sales/list');

    } catch(err) {
        res.redirect('sales/register');
    }
});

module.exports = router