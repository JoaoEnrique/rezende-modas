const express = require('express');
const auth = require('../../../middlewares/auth');

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

router.get('/products/list');

router.get('/products/register');

router.get('/products/edit/:id');

module.exports = router;