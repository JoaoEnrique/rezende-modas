const express = require('express');
const router = express.Router();
const { Products } = require('../../../models/tables');
const { db } = require('../../../models/firestore.js')
require("../../../models/listenProducts.js")


router.get('/api/products', async (req, res) => {
    try {
        db.collection('products').get().then(querySnapshot => {
            let products = [];
            querySnapshot.forEach(documentSnapshot => {
                let a = documentSnapshot.data();
                a.id = documentSnapshot.id;
                a.price = parseFloat(a.price) + (a.price * 10 / 100);
                products.push(a);
            });
            res.json(products);
        }).catch(err => {
            res.status(500).json({
                msg: "Erro ao buscar produtos",
                err
            })
        });   
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

        db.collection('products').doc(productId).get().then(documentSnapshot => {
            if(documentSnapshot.exists){
                const product = documentSnapshot.data();
                product.id = productId;
                res.json(product);
            }else 
            res.status(404).json({ msg: 'Produto não encontrado' });
    
        }).catch(err =>{
            res.status(500).json({
                msg: "Erro ao buscar produto por ID",
                err
            });
        })
        // const productId = req.params.id;
        // const product = await Products.findByPk(productId);
        // if (product) {
        //     res.json(product);
        // } else {
        //     res.status(404).json({ msg: 'Produto não encontrado' });
        // }
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
        name,
        reference,
        type,
        quantity,
        price
    } = req.body;

    // Inserção de um produto no banco
    try {
        db.collection('products').add({
            name,
            reference,
            type,
            quantity: parseInt(quantity),
            price: parseFloat(price).toFixed(2)
        }).then(function(){
            res.status(201).json({
                msg: "Produto cadastrado",
            });
        }).catch(err =>{
            res.status(500).json({
                msg: "Erro ao cadastrar produto",
                err
            });
        })

        // const newProduct = await Products.create({
        //     name,
        //     reference,
        //     type,
        //     quantity: parseInt(quantity),
        //     price: parseFloat(price).toFixed(2)
        // });

        
    } catch(err) {
        console.log(err)
        res.status(500).json({
            msg: "Erro ao cadastrar produto",
            err
        });
    }
});

router.put('/api/products/:id', async(req, res) => {
    // Atualização dos campos do produto
    try {
        // ID do produto
        let id = req.params.id;
    
        // Dados do produto
        const {
            name,
            reference,
            quantity,
            price
        } = req.body;

        db.collection('products').doc(id).update({
            name,
            reference,
            quantity: parseInt(quantity),
            price: parseFloat(price).toFixed(2)
        }).then(function(){
            res.status(201).json({
                msg: "Produto atualizado",
            });
        }).catch(err =>{
            res.status(500).json({
                msg: 'Erro ao atualizar produto',
                err
            });
        })

        // Atualização no banco
        // await Products.update(
        //     {
        //         name,
        //         reference,
        //         quantity: parseInt(quantity),
        //         price: parseFloat(price).toFixed(2)
        //     },
        //     {
        //         where: {
        //             id
        //         }
        //     }
        // );

        
    } catch(err) {
        console.log(err);
        res.status(500).json({
            msg: 'Erro ao atualizar produto',
            err
        });
    }
})

router.delete('/api/products/:id', async (req, res) => {
    try {
        // ID do produto
        let id = req.params.id;

        const removedProduct = db.collection('products').doc(id).delete().then(function(){
            res.status(204).json({
                msg: 'Produto removido',
                removedProduct
            })
        }).catch(err => {
            res.status(500).json({
                msg: 'Erro ao remover produto',
                err
            });
        })

        // Remoção do produto pelo seu ID
        // const removedProduct = await Products.destroy({
        //     where: {
        //         id
        //     }
        // });

        
    } catch(err) {
        res.status(500).json({
            msg: 'Erro ao remover produto',
            err
        });
    }
});

module.exports = router;