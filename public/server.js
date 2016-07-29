var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('Hello express!');
});

app.get('/about', function(req, res){
	res.send('My name is Henrik!');
});



//about
app.listen(3000);