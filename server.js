// Dependencies
var express = require ('express');
var mongoose = require('mongoose');
var bodyParser = require ('body-parser');

// MongoDB
//mongoose.connect('mongodb://localhost/rest_test');

//Express
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', require('./routes/api'));

// start server
app.set('port',(process.env.PORT || 3000));
app.listen(app.get('port'),function());
console.log('API is running on port 3000');