const express = require('express');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/employees', auth('Funcionários'));

router.get('/employees/list', auth('Listar funcionário'));

router.get('/employees/register', auth('Cadastrar funcionário'));

router.get('/employees/edit', auth('Editar funcionário'));

module.exports = router;