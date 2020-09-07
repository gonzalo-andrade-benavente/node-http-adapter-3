'use strict';

const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');



router.get('/healthcheck', (req, res) => { 
    res.json({ status: 'UP'}); 
});

// Validate Headers.

router.get('/products', productController.getProduct);

router.get('/product/:id', productController.getProductById);

module.exports = router;