var express = require('express')
var fs      = require('fs')
var app = express()

var args = process.argv.slice(2);
var CMD  = args[0] || "test";
var PORT = (args.length == 2 && args[1]) || 9001;
var id = Math.floor(Math.random()*1000);
app.get('/', function(req, res) 
{
	res.send("Hi From "+id);
});

function start() 
{
	return new Promise(function(resolve,reject)
	{
		server = app.listen(PORT, function () {

			var host = server.address().address
			var port = server.address().port

			console.log('Example app listening at http://%s:%s', host, port)
			resolve({host: host, port: port});
		});
	});
}

function stop() 
{
	return server.close();
}


if( CMD === "start" )
{
	start();
}

module.exports = { start: start, stop: stop};