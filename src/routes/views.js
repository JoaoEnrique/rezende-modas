const express = require('express');
const router = express.Router();

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

module.exports = router