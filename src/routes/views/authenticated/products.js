const express = require('express');
const auth = require('../../../middlewares/auth');
const axios = require('axios');

const router = express.Router();

router.get('/products', auth, (req, res) => {
    const { formattedURL } = req;
    const { userInfo } = req;

    res.render(formattedURL, {
        title: 'Produtos',
        name: userInfo.nome,
        email: userInfo.email
    })
});

router.get('/products/list', auth, async (req, res) => {
    try {
        const { formattedURL } = req;
        const { userInfo } = req;
        
        const response = await axios('https://rezendes-modas.onrender.com/api/products');
        const products = response.data;

        res.render(formattedURL, {
            title: 'Produtos',
            name: userInfo.nome,
            email: userInfo.email,
            produtos: products
        });
    } catch(err) {
        console.log(err);
    }
});

router.get('/products/register', auth, async (req, res) => {
    const { formattedURL } = req;
    const { userInfo } = req;

    res.render(formattedURL, {
        title: 'Cadastrar Produto',
        name: userInfo.nome,
        email: userInfo.email
    });
});

router.get('/products/edit/:id', auth, async (req, res) => {
    try {
        const { userInfo } = req;
        
        const response = await axios.get(`https://rezendes-modas.onrender.com/api/products/${req.params.id}`);

        const product = response.data;

        res.render('products/edit', {
            title: 'Editar Produto',
            name: userInfo.nome,
            email: userInfo.email,
            produto: product
        });
    } catch(err) {
        console.log(err);
    }
});

module.exports = router;