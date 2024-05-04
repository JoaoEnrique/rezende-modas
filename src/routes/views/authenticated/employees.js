const express = require('express');
const auth = require('../../../middlewares/auth');
const axios = require('axios');

const router = express.Router();

router.use(auth);

router.get('/employees', (req, res) => {
    const { userInfo } =  req;
    const { formattedURL } = req;

    res.render(formattedURL, {
        title: 'Funcionários',
        name: userInfo.nome,
        email: userInfo.email
    });
});

router.get('/employees/list', (req, res) => {
    const { userInfo } =  req;
    const { formattedURL } = req;

    // fetch('../routes/api/employee')
    //     .then(response => console.log(response.data))
    //     .catch(err => console.log(err)) 

    res.render(formattedURL, {
        title: 'Listar funcionários',
        name: userInfo.nome,
        email: userInfo.email
    });
});

router.get('/employees/register');

router.get('/employees/edit');

module.exports = router;