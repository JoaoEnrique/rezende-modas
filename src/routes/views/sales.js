const express = require('express');
const jwt = require('jsonwebtoken');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.get('/sales', auth('Vendas'))

router.get('/sales/list', auth('Listar vendas'));

router.get('/sales/register', auth('Cadastrar venda'))

router.get('/sales/edit/:id', auth('Editar venda'))

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