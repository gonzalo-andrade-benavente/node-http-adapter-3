'use strict';

const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');


router.get('/',  (req, res) => {
    res.send('Hello World');
});

router.get('/product', productController.getProduct);

module.exports = router;