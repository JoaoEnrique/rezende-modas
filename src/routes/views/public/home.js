const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.get('/', (req, res) => {
    const { token } = req.cookies;
    let userInfo = null;

    if (token) {
        userInfo = jwt.verify(token, process.env.TOKEN_SECRET);
    }

    res.render('index', {
        title: 'Home - Rezende modas',
        name: userInfo?.nome,
        email: userInfo?.email
    })
})

module.exports = router