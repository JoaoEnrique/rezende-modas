const express = require('express');
const auth = require('../../../middlewares/auth');

const router = express.Router();

router.get('/', auth, (req, res) => {
    const { formattedURL } = req;
    const { userInfo } = req;

    res.render(formattedURL, {
        title: 'Home - Rezende modas',
        name: userInfo.nome,
        email: userInfo.email
    })
})

module.exports = router