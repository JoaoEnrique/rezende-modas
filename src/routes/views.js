const express = require('express');
const router = express.Router();

// ROTAS
router.use(express.static('src'));

// index
router.get('/', function(req, res){
    res.render('index')
})

// Funcionarios
router.get('/login', function(req, res){
    res.render('login')
})

// Funcionarios
router.get('/employees', function(req, res){
    res.render('employees/index')
})

router.get('/employees/list', function(req, res){
    res.render('employees/list')
})

router.get('/employees/register', function(req, res){
    res.render('employees/register')
})

router.get('/employees/edit', function(req, res){
    res.render('employees/edit')
})

// Produtos
router.get('/products', function(req, res){
    res.render('products/index')
})

router.get('/products/list', function(req, res){
    res.render('products/list')
})

router.get('/products/register', function(req, res){
    res.render('products/register')
})

router.get('/products/edit/:id', function(req, res){
    const id = req.params.id;
    res.render('products/edit', {id: id})
})


// Catalogo
router.get('/catalogs/masculine', function(req, res){
    res.render('catalogs/masculine')
})

router.get('/catalogs/feminine', function(req, res){
    res.render('catalogs/feminine')
})

module.exports = router