const express = require('express');
const router = express.Router();
const tables = require('../../models/tables');
const { 
    Products, 
    Employees, 
    SaleItems, 
    Sales 
} = tables;

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// ROTAS

/* TODO
    * Manter produto
    * Manter vendas
    * Manter item de vendas
    * Editar funcionário
    * Listar funcionário
    * Fazer login
*/

// Produtos
router.get('/api/products', async (req, res) => {
    try {
        const products = await Products.findAll();
    
        res.json(products);
    } catch(err) {
        res.status(500).json({
            msg: "Erro ao buscar produtos",
            err
        })
    }
});

router.post('/api/products', async (req, res) => {

});

router.put('/api/products', async (req, res) => {

});

router.delete('/api/products', async (req, res) => {

});

// Vendas
router.get('/api/sales', function(req, res){
    const result = Sales.findAll().then(result => {
        res.json(result);
    })
    .catch(err => {
        console.error('Erro ao buscar produtos:', err);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    });
});

// Item da Venda
router.get('/api/saleIitems', function(req, res){
    const result = SaleItems.findAll().then(result => {
        res.json(result);
    })

    .catch(err => {
        console.error('Erro ao buscar produtos:', err);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    });
});

// Funcionário
router.get('/api/employee', function(req, res){
    const result = Employees.findAll().then(result => {
        res.json(result);
    })
    .catch(err => {
        console.error('Erro ao buscar produtos:', err);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    });
});

module.exports = router