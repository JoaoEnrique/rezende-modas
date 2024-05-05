const express = require('express');
const router = express.Router();
const { Products } = require('../../../models/tables');
 
router.get('/api/products', async (req, res) => {
    try {
        const products = await Products.findAll();
        res.json(products);
    } catch(err) {
        res.status(500).json({
            msg: "Erro ao buscar produtos",
            err
        })
    }
});

router.get('/api/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const product = await Products.findByPk(productId);
        if (product) {
            res.json(product);
        } else {
            res.status(404).json({ msg: 'Produto não encontrado' });
        }
    } catch(err) {
        res.status(500).json({
            msg: "Erro ao buscar produto por ID",
            err
        });
    }
});


router.post('/api/products', async (req, res) => {
    // Dados do formulário HTML
    const {
        reference,
        type,
        quantity,
        price
    } = req.body;

    // Inserção de um produto no banco
    try {
        const newProduct = await Products.create({
            reference,
            type,
            quantity: parseInt(quantity),
            price: price.toFixed(2)
        });

        res.status(201).json({
            msg: "Produto cadastrado",
            newProduct
        });
    } catch(err) {
        res.status(500).json({
            msg: "Erro ao cadastrar produto",
            err
        });
    }
});

router.put('/api/products', async(req, res) => {
    // Atualização dos campos do produto
    try {
        // ID do produto
        let id = parseInt(req.query.id) || parseInt(req.body.id);
    
        // Dados do produto
        const {
            reference,
            type,
            quantity,
            price
        } = req.body;

        // Atualização no banco
        const updatedProduct = await Products.update(
            {
                reference,
                type,
                quantity: parseInt(quantity),
                price: price.toFixed(2)
            },
            {
                where: {
                    id
                }
            }
        );

        res.status(201).json({
            msg: "Produto atualizado",
            updatedProduct
        });
    } catch(err) {
        res.status(500).json({
            msg: 'Erro ao atualizar produto',
            err
        });
    }
})

router.delete('/api/products', async (req, res) => {
    try {
        // ID do produto
        let id = parseInt(req.query.id);

        // Remoção do produto pelo seu ID
        const removedProduct = await Products.destroy({
            where: {
                id
            }
        });

        res.status(204).json({
            msg: 'Produto removido',
            removedProduct
        })
    } catch(err) {
        res.status(500).json({
            msg: 'Erro ao remover produto',
            err
        });
    }
});

module.exports = router;