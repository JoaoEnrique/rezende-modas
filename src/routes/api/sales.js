const express = require('express');
const router = express.Router();
const { Sales } = require('../../../models/tables');

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
    // Dados vindos do formulário HTML
    const {
        total
    } = req.body;

    // Cadastro de uma venda no banco
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
    // Atualizar campos da venda
    try {
        // ID da venda
        let id = parseInt(req.query.id) || parseInt(req.body.id);
    
        // Dados da venda
        const {
            total
        } = req.body;

        // Atualizar campo da venda através do ID
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
        // ID da venda
        let id = parseInt(req.query.id);

        // Remover a venda através do ID
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