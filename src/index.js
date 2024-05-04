require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

// Views routers
const homeViewsRouter = require('./routes/views/public/index');
const loginViewsRouter = require('./routes/views/public/login');
const employeesViewsRouter = require('./routes/views/authenticated/employees');
const productsViewsRouter = require('./routes/views/authenticated/products');
const salesViewsRouter = require('./routes/views/authenticated/sales');
const catalogsViewsRouter = require('./routes/views/authenticated/catalogs');

// API routers
const productsRouter = require('./routes/api/products/routes');
const salesRouter = require('./routes/api/sales/routes');
const saleItemsRouter = require('./routes/api/saleItems/routes');
const employeesRouter = require('./routes/api/employee/routes');
const loginRouter = require('./routes/api/login');

const PORT = process.env.PORT || 3000;

// Configuração do handlebars
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs.engine({
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "layouts") 

}));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "views"));

// Servindo arquivos estáticos
app.use(express.static('src'));
app.use(express.urlencoded({ extended: true }));

// Inicialização do servidor
app.listen(PORT, () => {
    console.log('Servidor Ligado');
    console.log('http://localhost:' + PORT);
})

// Views
app.use(homeViewsRouter);
app.use(loginViewsRouter);
app.use(employeesViewsRouter);
app.use(productsViewsRouter);
app.use(salesViewsRouter);
app.use(catalogsViewsRouter);

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