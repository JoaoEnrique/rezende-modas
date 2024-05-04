const express = require('express');
const cookieParser = require('cookie-parser');
const router = express.Router();

router.use(cookieParser());

router.get('/employees', (req, res) => {
    const { token } = req.cookies;

    if (token) {
        res.render('employees', { title: 'Funcionários' });
    } else {
        res.status(301).redirect('/login');
    }
})

router.get('/employees/list', (req, res) => {
    res.render('employees/list', { title: 'Listar Funcionário' })
})

router.get('/employees/register', (req, res) => {
    res.render('employees/register', { title: 'Cadastrar Funcionário' })
})

router.get('/employees/edit', (req, res) => {
    res.render('employees/edit', { title: 'Editar Funcionário' })
})

module.exports = router;