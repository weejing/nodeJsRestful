// Dependencies
var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require ('body-parser');

// MongoDB
mongoose.connect(process.env.MONGOLAB_URI, function(error){
	if (error) console.error(error);
	else console.log('mongo connected');
});

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// start server
app.set('port',(process.env.PORT || 3000));
app.listen(app.get('port'));
console.log('API is running on port', app.get('port'));