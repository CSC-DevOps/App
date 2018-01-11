var express = require('express')
var fs      = require('fs')
var app = express()

var args = process.argv.slice(2);
var PORT = args[0];
var id = Math.floor(Math.random()*1000);
app.get('/', function(req, res) 
{
	res.send("Hi From "+id);
});

var server = app.listen(PORT, function () {

	var host = server.address().address
	var port = server.address().port

	console.log('Example app listening at http://%s:%s', host, port)
});
