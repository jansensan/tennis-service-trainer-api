const express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  routes = require('./api/routes'),
  oscService = require('./api/services/osc-service'),
  logger = require('./modules/logger');


init();


// methods definitions
function init() {
  logger.logMethod('server.js', 'init');

  // set the defined api routes
  routes(app);

  // start app
  app.listen(port);
  console.log('Tennis Service Trainer API server started on port ' + port);

  oscService.init();
}

