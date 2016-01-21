
// dependencies

var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');

// Routes
Product.methods(['get','put','post', 'delete']);
Product.register(router,'/products')

/*app.get('/products', function(req,res){
	Product.find(function (err, data){
		res.json(data);
	});
});
*/

// return router
module.exports = router;