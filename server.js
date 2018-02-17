var express = require('express');
  app = express();
  port = process.env.PORT || 3000;

var routes = require('./api/routes/tempFinderRoutes'); 
routes(app);

app.listen(port);

console.log('Temperature Finder RESTful API server started on: ' + port);