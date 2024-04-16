const express = require('express')
const app = express()
const handlebars = require('express-handlebars').engine
const bodyParser = require('body-parser')
const port = 4000
// const tables = require('./models/tables')

const exphbs = require("express-handlebars");
const path = require("path");

app.engine("handlebars", exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts")
}));
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// servidor
app.listen(process.env.PORT || port, function(){
    console.log('Servidor Ligado');
    console.log('http://localhost:' + port);
})


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// ROTAS

// index
app.get('/', function(req, res){
    res.render('index')
})

// Read
app.get('/read', async (req, res) =>{
    res.send("foi")
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