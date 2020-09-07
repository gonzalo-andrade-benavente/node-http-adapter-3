'use strict';

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes/routes');

const port = process.env.PORT || 8081;

//Middleware
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:100000}));
app.use('/', routes);

const server = app.listen(port, () => {
    console.log(`Server listenning in port ${port}`);
});

module.exports = server;



