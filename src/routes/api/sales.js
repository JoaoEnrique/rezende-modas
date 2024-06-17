const express = require('express');
const router = express.Router();
const { Sales, SaleItems, Products, Employees } = require('../../../models/tables');
const jwt = require('jsonwebtoken');

router.get('/api/sales', async (req, res) => {
    try {
        const sales = await Sales.findAll({
            include: Employees
        });
        res.json(sales);
    } catch(err) {
        res.status(500).json({
            msg: 'Erro ao buscar vendas',
            err
        });
    }
});

router.post('/api/sales', async (req, res) => {
    const { token } = req.cookies;

    const userInfo = jwt.verify(token, process.env.TOKEN_SECRET);
    
    // Dados vindos do formulário HTML
    const {
        product: productId,
        quantity: quantitySold
    } = req.body;

    // Cadastro de uma venda no banco
    try {
        const product = await Products.findByPk(parseInt(productId))
        
        const total = (product.price * quantitySold).toFixed(2);

        const employee = await Employees.findOne({
            where: {
                email: userInfo.email
            }
        })

        const newSale = await Sales.create({
            total,
            employeeId: employee.id
        });


        await SaleItems.create({
            quantity: quantitySold,
            productId,
            saleId: newSale.id
        })

        const updatedProductQuantity = product.quantity - quantitySold;

        await Products.update(
            {
                quantity: updatedProductQuantity
            },
            {
                where: {
                    id: productId
                }
            }
        )

        res.status(201).json({
            msg: "Venda cadastrada",
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