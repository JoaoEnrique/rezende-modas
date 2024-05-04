const express = require('express');
const router = express.Router();

router.get('/products', (req, res) => {
    res.render('products/index', { title: 'Produtos' })
})

router.get('/products/list', (req, res) => {
    res.render('products/list', { title: 'Listar Produto' })
})

router.get('/products/register', (req, res) => {
    res.render('products/register', { title: 'Cadastrar Produto' })
})

router.get('/products/edit/:id', (req, res) => {
    res.render('products/edit', { title: 'Editar Produto' })
})

module.exports = router;