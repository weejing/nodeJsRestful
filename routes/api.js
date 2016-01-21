
// dependencies

var express = require('express');
var router = express.Router();

// Models
var Product = require('../models/product');

// Routes
//Product.methods(['get','put','post', 'delete']);
//Product.register(router,'/products')

router.get('/Products/:name/:skul/:price', function(req,res){
	var Product1 = new Product();
	Product1.name = req.params.name;
	Product1.skul = req.params.skul;
	Product1.price = req.params.price;

	Product1.save(function(err) {
		if(err)
			console.log(err.stack);
	});
});

router.get('/Products', function (req,res){
	Product.find(function(err,data) {
		res.json(data);
	})
})


// return router
module.exports = router;