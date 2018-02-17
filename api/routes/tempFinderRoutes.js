'use strict';
module.exports = function(app) {
  var controller = require('../controllers/tempFinderController');
  app.route('/temperature/:city')
    .get(controller.getTemperature);
};