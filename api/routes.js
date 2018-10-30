// dependencies
var bodyParser = require('body-parser');


module.exports = function (app) {

  // set headers for cors
  app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

  // to support json-encoded bodies
  app.use(bodyParser.json());

  // to support url-encoded bodies
  app.use(bodyParser.urlencoded({
    extended: true
  })); 

  // home
  app.get('/', getHome);

  // methods definitions
  function getHome(request, response) {
    response.send('<h1>Tennis Service Trainer API</h1>');
  }
};
