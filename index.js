var express = require('express');
var request = require('request');
var config = require('./config');
var validUrl = require('valid-url');
var app = express();

app.get('/*', function(req, res) {
	var url = req.query.url;
	if (validUrl.isUri(url)) {
		request.get(url)
			.on('error', function(err) {
				console.log(err);
			}).pipe(res);
	} else {
		console.log(url + ' is not a URL');
		res.end();
	}

});

app.listen(config.port, function() {
	console.log('Example app listening on port ' + config.port + '!');
});
