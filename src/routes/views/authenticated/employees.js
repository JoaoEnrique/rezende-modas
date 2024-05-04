const express = require('express');
const auth = require('../../../middlewares/auth');

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

router.get('/employees/list');

router.get('/employees/register');

router.get('/employees/edit');

module.exports = router;