const express = require('express');
const auth = require('../../../middlewares/auth');

const router = express.Router();

router.get('/catalogs/masculine', auth, (req, res) => {
    const { formattedURL } = req;
    const { userInfo } = req;

    res.render(formattedURL, {
        title: 'Catálogo Masculino',
        name: userInfo.nome,
        email: userInfo.email
    })
})

router.get('/catalogs/feminine', auth, (req, res) => {
    const { formattedURL } = req;
    const { userInfo } = req;

    console.log(userInfo)

    res.render(formattedURL, {
        title: 'Catálogo Feminino',
        name: userInfo.nome,
        email: userInfo.email
    })
})

module.exports = router;