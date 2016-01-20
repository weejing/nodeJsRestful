
// dependencies

var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');1

// Routes
Product.methods(['get','put','post', 'delete']);
Product.register(router,'/products')

// return router
module.exports = router;