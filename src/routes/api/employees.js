const express = require('express');
const router = express.Router();
const { Employees } = require('../../../models/tables');
const { db } = require('../../../models/firestore.js')

router.get('/api/employees', async (req, res) => {
    try {
        db.collection('employees').get().then(querySnapshot => {
            let employees = [];
            querySnapshot.forEach(documentSnapshot => {
                let a = documentSnapshot.data();
                a.id = documentSnapshot.id;
                employees.push(a);
            });
            res.json(employees);
        }).catch(err => {
            res.status(500).json({
                msg: "Erro ao buscar funcionários",
                err
            })
        });   

        // const employees = await Employees.findAll({
        //     attributes: { exclude: ['password'] } // Exclui o campo de senha da consulta
        // });

        // res.json(employees);
    } catch(err) {
        res.status(500).json({
            msg: "Erro ao buscar funcionários",
            err
        })
    }
});

router.get('/api/employees/:id', async (req, res) => {
    try {
        const employeeId = req.params.id;
        const employee = await Employees.findByPk(employeeId, {
            attributes: { exclude: ['password'] } // Exclui o campo de senha da consulta
        });
        if (employee) {
            res.json(employee);
        } else {
            res.status(404).json({ msg: 'Funcionário não encontrado' });
        }
    } catch(err) {
        res.status(500).json({
            msg: "Erro ao buscar funcionário por ID",
            err
        });
    }
});

router.post('/api/employees', async (req, res) => {
    // Dados do formulário HTML
    const {
        name,
        email,
        password
    } = req.body;

    // IInserção de um usuário no banco
    try {
        const newEmployee = db.collection('employees').add({
            nome: name,
            email: email,
            password: password,
        }).then(function(){
            res.status(201).json({
                msg: "Funcionário cadastrado",
                newEmployee
            });
        }).catch(err =>{
            res.status(500).json({
                msg: "Erro ao cadastrar funcionário",
                err
            });
        })
        // const newEmployee = await Employees.create({
        //     name,
        //     email,
        //     password
        // });

        // res.status(201).json({
        //     msg: "Funcionário cadastrado",
        //     newEmployee
        // });
    } catch(err) {
        res.status(500).json({
            msg: "Erro ao cadastrar funcionário",
            err
        });
    }
});

router.put('/api/employees/:id', async(req, res) => {
    // Atualização dos campos do funcionário
    try {
        // ID do funcionário
        let id = parseInt(req.params.id);
    
        // Dados do funcionário
        const {
            name,
            email
        } = req.body;

        // Atualização do funcionário
        const updatedEmployee = await Employees.update(
            {
                name,
                email
            },
            {
                where: {
                    id
                }
            }
        );

        res.status(201).json({
            msg: "Funcionário atualizado",
            updatedEmployee
        });
    } catch(err) {
        res.status(500).json({
            msg: 'Erro ao atualizar funcionário',
            err
        });
    }
});

router.delete('/api/employees/:id', async (req, res) => {
    try {
        // ID do funcionário
        let id = parseInt(req.params.id);

        // Remoção do funcionário por ID
        const removedEmployee = await Employees.destroy({
            where: {
                id
            }
        });

        res.status(204).json({
            msg: 'Funcionário removido',
            removedEmployee
        })
    } catch(err) {
        res.status(500).json({
            msg: 'Erro ao remover funcionário',
            err
        });
    }
});

module.exports = router;