var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  routes = require('./api/routes');


// set the defined api routes
routes(app);

// start app
app.listen(port);

console.log('Tennis Service Trainer API server started on port ' + port);
