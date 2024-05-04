require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// Views routers
const employeesViewsRouter = require('./routes/views/employees');
const productsViewsRouter = require('./routes/views/products');
const salesViewsRouter = require('./routes/views/sales');
const catalogsViewsRouter = require('./routes/views/catalogs');
const homeViewsRouter = require('./routes/views/index');
const loginViewsRouter = require('./routes/views/login');

// API routers
const productsRouter = require('./routes/api/products/routes');
const salesRouter = require('./routes/api/sales/routes');
const saleItemsRouter = require('./routes/api/saleItems/routes');
const employeesRouter = require('./routes/api/employee/routes');
const loginRouter = require('./routes/api/login');

const PORT = process.env.PORT || 3000;

// Config handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "layouts") 

}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "views"));

app.use(express.static('src'));
app.use(express.urlencoded({ extended: true }));

// Inicialização do servidor
app.listen(PORT, () => {
    console.log('Servidor Ligado');
    console.log('http://localhost:' + PORT);
})

// Views
app.use(homeViewsRouter);
app.use(employeesViewsRouter);
app.use(productsViewsRouter);
app.use(salesViewsRouter);
app.use(catalogsViewsRouter);
app.use(loginViewsRouter);

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