// dependencies
var express = require('express');
var router = express.Router();

// Model
var users = require('../models/users');

//Routes

router.get('/:username/:password/:role', function(req,res) {
	users.find(req.params.username,req.params.role,function(err,data){
		res.json(data);
	})

});