const express = require('express');
const auth = require('../../../middlewares/auth');
const axios = require('axios')

const router = express.Router();

router.get('/employees', auth, (req, res) => {
    const { formattedURL } = req;
    const { userInfo } = req;

    res.render(formattedURL, {
        title: 'Funcionários',
        name: userInfo.nome,
        email: userInfo.email
    })
});

router.get('/employees/list', auth, async (req, res) => {
    try {
        const { formattedURL } = req;
        const { userInfo } = req;
        const response = await axios('https://rezendes-modas.onrender.com/api/employees');
        const employees = response.data;

        res.render(formattedURL, {
            title: 'Funcionários',
            name: userInfo.nome,
            email: userInfo.email,
            funcionarios: employees
        });
    } catch(err) {
        console.log(err);
    }
});

router.get('/employees/register', auth, async (req, res) => {
    const { formattedURL } = req;
    const { userInfo } = req;

    res.render(formattedURL, {
        title: 'Cadastrar Funcionário',
        name: userInfo.nome,
        email: userInfo.email
    })
})

router.get('/employees/edit/:id', auth, async (req, res) => {
    try {
        const { userInfo } = req;
        const response = await axios.get(`https://rezendes-modas.onrender.com/api/employees/${req.params.id}`);
        const employee = response.data;

        res.render('employees/edit', {
            title: 'Editar Funcionário',
            name: userInfo.nome,
            email: userInfo.email,
            funcionario: employee
        })
    } catch(err) {
        console.log(err);
    }
})

module.exports = router;