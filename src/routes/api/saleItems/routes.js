const express = require('express');
const router = express.Router();
const { SaleItems } = require('../../../../models/tables');

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/api/saleItems', async (req, res) => {
    try {
        const saleItems = await SaleItems.findAll();
        res.json(saleItems);
    } catch(err) {
        res.status(500).json({
            msg: 'Erro ao buscar items da venda',
            err
        });
    }
});

router.post('/api/saleItems', async (req, res) => {
    
});

router.put('/api/saleItems', async (req, res) => {

});

router.delete('/api/saleItems', async (req, res) => {
});

module.exports = router;