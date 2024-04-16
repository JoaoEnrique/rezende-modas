const express = require('express')
const app = express()
const handlebars = require('express-handlebars').engine
const bodyParser = require('body-parser')
const port = 8081
// const tables = require('./models/tables')


app.engine('handlebars', handlebars( {defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// index
app.get('/', function(req, res){
    res.render('index')
})

// Read
app.get('/read', async (req, res) =>{
})

// View Create
app.get('/create', async (req, res) =>{
})

// View edit
app.get('/edit/:id', async (req, res) =>{
})

// Delete
app.post('/delete/:id', async (req, res) =>{
})

app.post('/save', function(req, res){
})

app.post('/update', async (req, res) =>{

})

app.listen(port, function(){
    console.log('Servidor Ligado');
    console.log('http://localhost:' + port);
})
