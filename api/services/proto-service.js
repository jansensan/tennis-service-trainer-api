const logger = require('../../modules/logger'),
  mouseModel = require('../models/mouse-model');


module.exports = function () {
  // public api
  return {
    parseMousePosition: parseMousePosition,
    parseTestMessage: parseTestMessage,
  };


  // methods definitions

  /** Parses the mouse position from an OSC message. */
  function parseMousePosition(message) {
    mouseModel.addEntry(message.args);
  }

  /** Parses a test OSC message. */
  function parseTestMessage(message) {
    logger.logMethod('protoService', 'parseTestMessage');
    console.log('message: ', message);
  }

}();
