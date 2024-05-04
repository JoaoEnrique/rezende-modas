const express = require('express');
const auth = require('../../../middlewares/auth');

const router = express.Router();
router.use(auth);

router.get('/catalogs/masculine', (req, res) => {
    res.render('catalogs/masculine', { title: 'Catálogo Masculino' })
})

router.get('/catalogs/feminine', (req, res) => {
    res.render('catalogs/feminine', { title: 'Catálogo Feminino' })
})

module.exports = router;