const express = require('express');
const auth = require('../../../middlewares/auth');
const axios = require('axios');

const router = express.Router();

router.get('/sales', auth, async (req, res) => {
    try {
        const { formattedURL } = req;
        const { userInfo } = req;
        
        const response = await axios('http://localhost:3000/api/sales');
        const sales = response.data;

        res.render(formattedURL, {
            title: 'Vendas',
            name: userInfo.nome,
            email: userInfo.email,
            vendas: sales
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            msg: 'Erro ao carregar vendas'
        });
    }
});

router.get('/sales/list', auth, async (req, res) => {
    try {
        const { formattedURL } = req;
        const { userInfo } = req;

        const response = await axios('http://localhost:3000/api/sales');
        const sales = response.data;

        res.render(formattedURL, {
            title: 'Vendas',
            name: userInfo.nome,
            email: userInfo.email,
            sales: sales
        });
    } catch(err) {
        console.log(err);
    }
});

router.get('/sales/register', auth, async (req, res) => {
    const { formattedURL } = req;
    const { userInfo } = req;

    const response = await axios('http://localhost:3000/api/products');
    const products = response.data;

    res.render(formattedURL, {
        title: 'Registrar Venda',
        name: userInfo.nome,
        email: userInfo.email,
        products
    });
});

router.get('/sales/edit/:id', auth, async (req, res) => {
    try {
        const { userInfo } = req;
        
        const response = await axios.get(`http://localhost:3000/api/sales/${req.params.id}`);
        const sale = response.data;

        res.render('sales/edit', {
            title: 'Editar Venda',
            name: userInfo.nome,
            email: userInfo.email,
            venda: sale
        });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            msg: 'Erro ao carregar venda'
        });
    }
});

module.exports = router;


// router.post('/sales/create', auth('Listar vendas'))

// async (req, res) => {
//     // Dados do formulário HTML
//     const {
//         product_id,
//         reference,
//         type,
//         prices,
//         quantity,
//         subtotal,
//         total
//     } = req.body;

//     // Cadastrar uma venda no banco
//     try {
//         const newSale = await Sales.create({
//             total: parseFloat(total),
//             employeeId: 1
//         });

//         for (let i = 0; i < product_id.length; i++) {
//             const newItem = await SaleItems.create({
//                 productId: product_id[i],
//                 quantity: quantity[i],
//                 saleId: newSale.id
//             });
//         }

//         res.redirect('/sales/list');
//     } catch(err) {
//         res.redirect('sales/register');
//     }
// });

module.exports = router;