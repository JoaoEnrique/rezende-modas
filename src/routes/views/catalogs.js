const express = require('express');
const router = express.Router();

router.get('/catalogs/masculine', (req, res) => {
    res.render('catalogs/masculine', { title: 'Catálogo Masculino' })
})

router.get('/catalogs/feminine', (req, res) => {
    res.render('catalogs/feminine', { title: 'Catálogo Feminino' })
})

module.exports = router;