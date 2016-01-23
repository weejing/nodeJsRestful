// Dependencies 

var restful = require('node-restful');
var mongoose = restful.mongoose;

// scheme 
var userSchema = new mongoose.Schema({
	username: String,
	password: String
});