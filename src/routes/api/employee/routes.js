const express = require('express');
const router = express.Router();
const { Employees } = require('../../../../models/tables');

router.get('/api/employee', async (req, res) => {
    return res.json("HAHA");
});

router.post('/api/employee', async (req, res) => {

});

router.put('/api/employee', async (req, res) => {

});

router.delete('/api/employee', async (req, res) => {
});

module.exports = router;