require('dotenv').config();
const express = require('express');
const app = express();
const viewsRouter = require('./routes/views');
const productsRouter = require('./routes/api/products/routes');
const salesRouter = require('./routes/api/sales/routes');
const saleItemsRouter = require('./routes/api/saleItems/routes');
const employeesRouter = require('./routes/api/employee/routes');
const loginRouter = require('./routes/api/login');
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

/* TODO
    * Manter produto X
    * Manter vendas X
    * Manter item de vendas
    * Editar funcionário
    * Listar funcionário
    * Fazer login X
    * Integração com o front
*/
app.use(productsRouter);
app.use(salesRouter);
app.use(saleItemsRouter);
app.use(employeesRouter);
app.use(loginRouter);