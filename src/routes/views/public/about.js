const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/about', (req, res) => {
    const { token } = req.cookies;
    let userInfo = null;

    if (token) {
        userInfo = jwt.verify(token, process.env.TOKEN_SECRET);
    }

    res.render('about', {
        title: 'Home - Sobre nós',
        name: userInfo?.nome,
        email: userInfo?.email
    })
})

module.exports = router