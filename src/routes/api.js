const express = require('express');
const router = express.Router();
const tables = require('../../models/tables');
const { Products, Employees, SaleItems, Sales } = tables;

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// ROTAS

// Produtos
router.get('/api/products', function(req, res){
    const result = Products.findAll().then(result => {
        res.json(result);
    })
    .catch(err => {
        console.error('Erro ao buscar produtos:', err);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    });
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

// Vendas
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