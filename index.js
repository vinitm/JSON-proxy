var express = require('express');
var request = require('request');
var config = require('./config');
var app = express();

var allowedURLs = [
	'/api/v2/list_movies.json',
	'/ajax/search',
	'/assets/images/movies/*',
	'/torrent/*'
];
app.get(allowedURLs, function(req, res) {
	var url = config.baseUrl + req.originalUrl;
	request.get(url)
		.on('error', function(err) {
			console.log(err);
		}).pipe(res);
});

app.get('/*', function(req, res) {
	res.status(403);
	res.end();
});

app.listen(config.port, function() {
	console.log('Example app listening on port ' + config.port + '!');
});