const express = require('express');
const path = require("path");
const app = express();
const port = 5000;


global.appRoot = path.resolve(__dirname);
global.appName = 'Payment Reminder Application';
global.version = 'v1';
global.patchVersion = 'v1.0.0';

app.listen(port, () =>
    console.log(`[${appName}]: Node Live Development Server is listening on localhost:${port}, open your browser on: http://localhost:${port}/`)
);