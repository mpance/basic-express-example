// grab the packages we need
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
// routes will go here

app.get('/api/users', function(req, res) {
	var user_id = req.param('id');
	var token = req.param('token');
	var geo = req.param('geo');

	res.send(user_id + ' ' + token + ' ' + geo);
});

app.get('/api/:version', function(req, res) {
	res.send(req.params.version);
});


app.get('/api/users/:name', function(req, res) {
	res.send('What is up ' + req.name + '!');
});

app.post('/api/users', function(req, res) {
	var user_id = req.body.id;
	var token = req.body.token;
	var geo = req.body.geo;

	res.send(user_id + ' ' + token + ' ' + geo);
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);

app.param('name', function(req, res, next, name) {
	var modified = name + '-dude';

	req.name = modified;

	next();
});