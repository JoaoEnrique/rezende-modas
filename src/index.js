require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(cookieParser());

// Views routers
const homeViewsRouter = require('./routes/views/public/home'); // X 
const loginViewsRouter = require('./routes/views/public/login'); // X
const employeesViewsRouter = require('./routes/views/authenticated/employees'); // X
const productsViewsRouter = require('./routes/views/authenticated/products'); // X
const salesViewsRouter = require('./routes/views/authenticated/sales'); // X
const catalogsViewsRouter = require('./routes/views/authenticated/catalogs'); // X

// API routers
// const productsRouter = require('./routes/api/products');
// const salesRouter = require('./routes/api/sales');
// const saleItemsRouter = require('./routes/api/saleItems');
// const employeesRouter = require('./routes/api/employees');
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
app.use(homeViewsRouter); // X
app.use(loginViewsRouter); // X
app.use(employeesViewsRouter); // X
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
// app.use(productsRouter);
// app.use(salesRouter);
// app.use(saleItemsRouter);
// app.use(employeesRouter);
app.use(loginRouter); // X