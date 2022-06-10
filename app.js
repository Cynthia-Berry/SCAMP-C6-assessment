const express = require('express');
const path = require("path");


global.appRoot = path.resolve(__dirname);
global.appName = 'Payment Reminder Application';
global.version = 'v1';
global.patchVersion = 'v1.0.0';

const app = express();
const port = 5000;
const sequelize = require('./config/database');

const indexRouter = require('./routes/index.route');
const userRouter = require('./routes/user.route');

const User = require('./models/user.model');

sequelize.authenticate().then(() =>
    console.log('Connection has been established successfully.')
).catch(((error) => console.error('Unable to connect to the database:', error)));

//ROUTES
app.use('/', indexRouter);
app.use('/users', userRouter);

const jane = User.build({ username: "Jane" });
console.log(jane instanceof User);
console.log(jane.username); // "Jane"


app.listen(port, () =>
    console.log(`[${appName}]: Node Live Development Server is listening on localhost:${port}, open your browser on: http://localhost:${port}/`)
);