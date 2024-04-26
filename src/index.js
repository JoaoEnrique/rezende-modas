require('dotenv').config();
const express = require('express');
const app = express();
const viewsRouter = require('./routes/views');
const apiRouter = require('./routes/api');
const handlebars = require('express-handlebars').engine;
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;

// Config handlebars
const exphbs = require('express-handlebars');
const path = require('path');

app.engine('handlebars', exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "layouts") 

}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "views"));

// Servidor
app.listen(PORT, function(){
    console.log('Servidor Ligado');
    console.log('http://localhost:' + PORT);
})

// Views
app.use(viewsRouter);

// API
app.use(apiRouter);