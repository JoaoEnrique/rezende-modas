require('dotenv').config();
const express = require('express');
const app = express();
const viewsRouter = require('./routes/views');
const apiRouter = require('./routes/api');
const handlebars = require('express-handlebars').engine;
const bodyParser = require('body-parser');
const port = 4000;

// Config handlebars
const exphbs = require('express-handlebars');
const path = require('path');

app.engine('handlebars', exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts")
}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "views"));

// Servidor
app.listen(process.env.PORT || port, function(){
    console.log('Servidor Ligado');
    console.log('http://localhost:' + port);
})

// Views
app.use(viewsRouter);

// API
app.use(apiRouter);