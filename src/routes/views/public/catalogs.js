const express = require('express');
const auth = require('../../../middlewares/auth');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/catalogs/masculine', (req, res) => {
    const { token } = req.cookies;
    let userInfo = null;

    if (token) {
        userInfo = jwt.verify(token, process.env.TOKEN_SECRET);
    }

    res.render('catalogs/masculine', {
        title: 'Catálogo Masculino',
        name: userInfo?.nome,
        email: userInfo?.email
    })
})

router.get('/catalogs/feminine', (req, res) => {
    const { token } = req.cookies;
    let userInfo = null;

    if (token) {
        userInfo = jwt.verify(token, process.env.TOKEN_SECRET);
    }

    res.render('catalogs/feminine', {
        title: 'Catálogo Feminino',
        name: userInfo?.nome,
        email: userInfo?.email
    })
})

module.exports = router;