
// Dependencies 

var restful = require('node-restful');
var mongoose = restful.mongoose;

//Scheme
var productSchema = new mongoose.Schema({
	name: String,
	sku: String,
	price: String
});

// Return Model

module.exports = restful.model('Products', productSchema);