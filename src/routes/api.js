const express = require('express');
const router = express.Router();
const tables = require('../../models/tables');
const { 
    Products, 
    Employees, 
    SaleItems, 
    Sales 
} = tables;

router.use(express.urlencoded({ extended: false }));
router.use(express.json());

// ROTAS

/* TODO
    * Manter produto
    * Manter vendas
    * Manter item de vendas
    * Editar funcionário
    * Listar funcionário
    * Fazer login
*/

// Produtos
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

router.post('/api/products', async (req, res) => {
    // Data provided by a HTML form
    const {
        reference,
        type,
        quantity,
        price
    } = req.body;

    // Insert a product into database
    try {
        const product = await Products.create({
            reference,
            type,
            quantity,
            price
        });

        res.status(201).json({
            msg: "Produto cadastrado",
            product
        });
    } catch(err) {
        res.status(500).json({
            msg: "Erro ao cadastrar produto",
            err
        });
    }
});

router.put('/api/products', async(req, res) => {
    // Update product fields
    try {
        // Get product id
        let id = parseInt(req.query.id) || parseInt(req.body.id);
    
        // Get product data
        const {
            reference,
            type,
            quantity,
            price
        } = req.body;

        // Update product
        const product = await Products.update(
            {
                reference,
                type,
                quantity,
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
            product
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
        // Get product id
        let id = parseInt(req.query.id);

        // Remove product by ID
        const removedProduct = Products.destroy({
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

// Vendas
router.get('/api/sales', function(req, res){
    const result = Sales.findAll().then(result => {
        res.json(result);
    })
    .catch(err => {
        console.error('Erro ao buscar produtos:', err);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    });
});

// Item da Venda
router.get('/api/saleIitems', function(req, res){
    const result = SaleItems.findAll().then(result => {
        res.json(result);
    })

    .catch(err => {
        console.error('Erro ao buscar produtos:', err);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    });
});

// Funcionário
router.get('/api/employee', function(req, res){
    const result = Employees.findAll().then(result => {
        res.json(result);
    })
    .catch(err => {
        console.error('Erro ao buscar produtos:', err);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    });
});

module.exports = router