const express = require('express');
const router = express.Router();

router.get('/sales', (req, res) => {
    res.render('sales/index', { title: 'Vendas' })
})

router.get('/sales/list',  async (req, res) => {
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

router.get('/sales/register', async (req, res) => {
    try {
        const products = await Products.findAll();
        res.render('sales/register', { title: 'Vendas', products: products.map((Products) => Products.get({ plain: true })),  });
    } catch (error) {
        res.status(500).send('Erro ao carregar os produtos: ' + error);
    }
})

router.get('/sales/edit/:id', (req, res) => {
    res.render('sales/edit', { title: 'Editar Venda' })
})

router.post('/sales/create', async (req, res) => {
    // Dados do formulário HTML
    const {
        product_id,
        reference,
        type,
        prices,
        quantity,
        subtotal,
        total
    } = req.body;

    // Cadastrar uma venda no banco
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

module.exports = router;