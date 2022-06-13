const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');

global.appRoot = path.resolve(__dirname);
global.appName = 'Payment Reminder Application';
global.version = 'v1';
global.patchVersion = 'v1.0.0';

const app = express();
const port = 5000;
const sequelize = require('./config/database');


const User = require('./models/user.model');
const Client = require('./models/client.model');
const Invoice = require('./models/invoice.model');
const indexRouter = require('./routes/index.route');
const userRouter = require('./routes/user.route');
const clientRouter = require('./routes/client.route');
const invoiceRouter = require('./routes/invoice.route');

sequelize.authenticate().then(() =>
    console.log('Connection has been established successfully.')
).catch(((error) => console.error('Unable to connect to the database:', error)));


app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

//ROUTES
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/client', clientRouter);
app.use('/invoice', invoiceRouter);


(async () => {
    await sequelize.sync({ alter: true });
})();

app.listen(port, () =>
    console.log(`[${appName}]: Node Live Development Server is listening on localhost:${port}, open your browser on: http://localhost:${port}/`)
);