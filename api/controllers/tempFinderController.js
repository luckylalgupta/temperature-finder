'use strict';

var https = require('https');

exports.getTemperature = function(request, response) {
	var city = request.params.city;
	var searchtext = "select item.condition from weather.forecast where woeid in (select woeid from geo.places(1) where text='" + city + "') and u='c'";
	console.log(searchtext);
	var responseBody;
	var optionsget = {
		host: "query.yahooapis.com",
		path: "/v1/public/yql?q=" + encodeURI(searchtext) + "&format=json",
		method: 'GET'
	};
	var reqGet = https.request(optionsget, function(res) {
	    res.on('data', function(d) {
	        responseBody = "Temperature of "+city+ " is "+JSON.parse(d).query.results.channel.item.condition.temp+" degree Celcius";
	        response.send(responseBody);
	    });
	});

	 
	reqGet.end();
};