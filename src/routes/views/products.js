const express = require('express');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/products', auth('Produtos'));

router.get('/products/list', auth('Listar produtos'));

router.get('/products/register', auth('Cadastrar produto'));

router.get('/products/edit/:id', auth('Editar produto'));

module.exports = router;