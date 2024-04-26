const express = require('express');
const router = express.Router();
const { Sales } = require('../../../../models/tables');

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get('/api/sales', async (req, res) => {
    try {
        const sales = await Sales.findAll();
        res.json(sales);
    } catch(err) {
        res.status(500).json({
            msg: 'Erro ao buscar vendas',
            err
        });
    }
});

router.post('/api/sales', async (req, res) => {
    // Data provided by HTML form
    const {
        total
    } = req.body;

    // Insert a sale into database
    try {
        const newSale = await Sales.create({
            total: parseInt(total)
        });

        res.status(201).json({
            msg: "Venda cadastrada",
            newSale
        });
    } catch(err) {
        res.status(500).json({
            msg: "Erro ao cadastrar venda",
            err
        });
    }
});

router.put('/api/sales', async (req, res) => {
    // Update sale fields
    try {
        // Get sale id
        let id = parseInt(req.query.id) || parseInt(req.body.id);
    
        // Get sale data
        const {
            total
        } = req.body;

        // Update sale
        const updatedSale = await Sales.update(
            {
                total: parseInt(total)
            },
            {
                where: {
                    id
                }
            }
        );

        res.status(201).json({
            msg: "Venda atualizada",
            updatedSale
        });
    } catch(err) {
        res.status(500).json({
            msg: 'Erro ao atualizar venda',
            err
        });
    }
});

router.delete('/api/sales', async (req, res) => {
    try {
        // Get sale id
        let id = parseInt(req.query.id);

        // Remove sale by ID
        const removedSale = await Sales.destroy({
            where: {
                id
            }
        });

        res.status(204).json({
            msg: 'Venda removida',
            removedSale
        })
    } catch(err) {
        res.status(500).json({
            msg: 'Erro ao remover venda',
            err
        });
    }
});

module.exports = router;