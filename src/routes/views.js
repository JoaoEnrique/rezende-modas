const express = require('express');
const router = express.Router();

// ROTAS

// index
router.get('/', function(req, res){
    res.render('index')
})

// Read
router.get('/read', async (req, res) =>{
    res.send("foi")
})

// View Create
router.get('/create', async (req, res) =>{
})

// View edit
router.get('/edit/:id', async (req, res) =>{
})

// Delete
router.post('/delete/:id', async (req, res) =>{
})

router.post('/save', function(req, res){
})

router.post('/update', async (req, res) =>{

})

module.exports = router