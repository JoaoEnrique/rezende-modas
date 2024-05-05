require('dotenv').config();
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

app.use(cookieParser());
app.use(express.json());

// Views routers
const homeViewsRouter = require('./routes/views/public/home');
const loginViewsRouter = require('./routes/views/public/login');
const employeesViewsRouter = require('./routes/views/authenticated/employees');
const productsViewsRouter = require('./routes/views/authenticated/products');
const salesViewsRouter = require('./routes/views/authenticated/sales');
const catalogsViewsRouter = require('./routes/views/public/catalogs'); 

// API routers
const employeesRouter = require('./routes/api/employees');
const productsRouter = require('./routes/api/products');
const salesRouter = require('./routes/api/sales');
const loginRouter = require('./routes/api/login');
// const saleItemsRouter = require('./routes/api/saleItems');

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
app.use(catalogsViewsRouter);
// app.use(salesViewsRouter);

// API
app.use(employeesRouter);
app.use(productsRouter);
app.use(salesRouter);
app.use(loginRouter);
// app.use(saleItemsRouter);