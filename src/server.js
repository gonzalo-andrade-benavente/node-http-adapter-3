'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 8081;

app.get('/', function (req, res) {
    res.send('Hello World')
});
   
const server = app.listen(port, () => {
    console.log(`Hola mundo en el puerto ${port}`);
});

module.exports = server;



