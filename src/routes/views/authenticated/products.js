const express = require('express');
const auth = require('../../../middlewares/auth');

const router = express.Router();
router.use(auth);

router.get('/products');

router.get('/products/list');

router.get('/products/register');

router.get('/products/edit/:id');

module.exports = router;