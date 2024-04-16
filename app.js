const express = require('express')
const app = express()
const handlebars = require('express-handlebars').engine
const bodyParser = require('body-parser')
const port = 8081


app.engine('handlebars', handlebars( {defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Create
app.get('/', function(req, res){
    res.render('index')
})

// Read
app.get('/consultar', async (req, res) =>{
    const agendamentos = await post.findAll();
    const params = req.query;

      res.render('consultar', {
        agendamentos: agendamentos.map((post) => post.get({ plain: true })), 
        params
    });
})

// Update
app.get('/atualizar/:id', async (req, res) =>{
    const id = req.params.id;
    const agendamento = await post.findByPk(id);

    if(agendamento == null){
        res.redirect('/')
    }
    const agendamentoJSON = agendamento.toJSON();

    res.render('atualizar', { agendamento: agendamentoJSON });
})

// Delete
app.post('/apagar/:id', async (req, res) =>{
    const id = req.params.id;

    await post.destroy({
        where: {
          id: id,
        },
      });

    res.redirect('/consultar?sucess=Agendamento excluido com sucesso');
})


app.post('/cadastrar', function(req, res){
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao,
    }).then(function(){
        res.redirect('/consultar?sucess=Agendamento criado com sucesso');
    }).catch(function(error){
        res.redirect('/consultar?danger=Erro ao criar agendamento');
    })
})

app.post('/atualizar', async (req, res) =>{
    const agendamento = await post.findByPk(req.body.id);

    agendamento.update({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao,
    }).then(function(){
        res.redirect('/consultar?sucess=Agendamento atualizado com sucesso');
    }).catch(function(error){
        res.redirect('/consultar?danger=Erro ao atualizar agendamento');
    })
})



app.listen(port, function(){
    console.log('Servidor Ligado');
    console.log('http://localhost:' + port);
})