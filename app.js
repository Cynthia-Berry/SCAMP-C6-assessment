require('dotenv').config();

const express = require('express'), swaggerUi = require('swagger-ui-express');
const path = require('path'), cors = require("cors");
const createError = require('http-errors'), nodemailer = require('nodemailer');

global.appRoot = path.resolve(__dirname);
global.appName = 'Payment Reminder Application';
global.version = 'v1';
global.patchVersion = 'v1.0.0';

const port = process.env.PORT || 5000;
const sequelize = require('./middlewares/config/database');
const swaggerDocument = require('./middlewares/utils/swagger.json');

const Token = require('./models/auth.model');
const User = require('./models/user.model');
const Client = require('./models/client.model');
const Invoice = require('./models/invoice.model');
const authRouter = require('./routes/auth.route');
const indexRouter = require('./routes/index.route');
const userRouter = require('./routes/user.route');
const clientRouter = require('./routes/client.route');
const invoiceRouter = require('./routes/invoice.route');


const app = express();

/**** VIEW ENGIN SETUP ****/
app.set('views', path.join(__dirname, 'middlewares/views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname, 'middlewares/public')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Accept", "application/json");
  res.header("Access-Control-Allow-Credentials", 'true');
  next();
});

/**** ROUTES ****/
app.use('/auth', authRouter)
app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/client', clientRouter);
app.use('/invoice', invoiceRouter);
app.use(`/api-doc`, swaggerUi.serve);
app.get(`/api-doc`, swaggerUi.setup(swaggerDocument, false, {"docExpansion": 'none'}));


sequelize.authenticate().then(() =>
  console.log('Connection has been established successfully.')
).catch(((error) => console.error('Unable to connect to the database:', error)));


app.use((req, res, next) => {
  next(createError(404, 'This URL does not exist!'));
});

app.use((error, req, res, next) => {
  res['status'](error['status'] || 500);
  res['render']('error', {header: '404 Not Found', message: 'Use discovery service', code: error['status']});
  next();
});

/**** DATABASE TABLE RELATIONSHIP ****/
//save token and userId on a different table
User.hasOne(Token);

// create relationship between users and invoice
Invoice.belongsTo(User, {constraints: true, onDelete: 'SET NULL'});
User.hasMany(Invoice);

//create a relationship between user and client
Client.belongsTo(User, {onDelete: 'SET NULL'});
User.hasMany(Client);

//create a relationship between client and invoice
Invoice.belongsTo(Client);
Client.hasMany(Invoice);


(async () => {
  await sequelize.sync({alter: true});
  app.listen(port, () =>
    console.log(`[${appName}]: Node Live Development Server is listening on localhost:${port}, open your browser on: http://localhost:${port}/`)
  );
})();

