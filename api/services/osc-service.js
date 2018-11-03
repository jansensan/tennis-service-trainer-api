const osc = require('osc'),
  logger = require('../../modules/logger'),

  OSCMessageTypes = require('../constants/osc-message-types'),
  protoService = require('./proto-service'),
  mouseModel = require('../models/mouse-model');


require('dotenv-safe').load({
  sample: '.env-sample'
});


module.exports = function () {

  'use strict';

  // consts
  var Local = {
    ADDRESS: process.env.LOCAL_ADDRESS,
    PORT: process.env.LOCAL_PORT
  };


  // vars
  var udpPort = null;
  var isPortOpen = false;


  // public api
  return {
    init: init,
    send: send
  };


  // methods definitions

  /** Initializes the service. */
  function init() {
    openPort();
    udpPort.on('message', onMessageReceived);
  }

  /** Sends an OSC message to a device. */
  function send(device, oscAddress, oscData) {
    // error checking
    var prefix = 'Error at oscService#send: ';
    if (arguments.length === 0) {
      throw new Error(prefix + 'no arguments provided');
    }
    if (!_.isObject(device) || !_.get(device, 'ADDRESS') || !_.get(device, 'PORT')) {
      throw new Error(prefix + '"device" argument expected to be an Object.');
    }
    if (_.isUndefined(oscAddress)) {
      throw new Error(prefix + '"oscAddress" argument is expected.');
    }
    if (_.isUndefined(oscData)) {
      throw new Error(prefix + '"oscData" argument is expected.');
    }

    // send OSC message
    udpPort.send(
      {
        address: oscAddress,
        args: oscData
      },
      device.ADDRESS,
      device.PORT
    );
  }


  // private methods definitions
  function openPort() {
    // exit quickly if port is already opened
    if (isPortOpen) {
      return;
    }

    // create an osc.js UDP port listener
    udpPort = new osc.UDPPort({
      localAddress: Local.ADDRESS,
      localPort: Local.PORT,
      metadata: true
    });

    // open socket
    udpPort.open();

    // wait for "ready" event
    udpPort.on('ready', onPortOpened);
    udpPort.on('error', onPortFailed);

    // event handlers definitions
    function onPortOpened() {
      logger.logMethod('oscService', 'onPortOpened');
      console.log('osc server running, listening to port ' + Local.PORT);

      isPortOpen = true;
    }

    function onPortFailed(error) {
      console.log(error);
    }
  }


  // event handlers
  function onMessageReceived(oscMessage) {
    logger.logMethod('oscService', 'onMessageReceived');
    console.log('oscMessage: ', oscMessage);

    // TODO: handle errors

    switch (oscMessage.address) {
      case OSCMessageTypes.TEST:
        protoService.parseTestMessage(oscMessage);
        break;

      case OSCMessageTypes.NEW_MOUSE_POSITION:
        protoService.parseMousePosition(oscMessage);
        break;

      case OSCMessageTypes.STOP_RECORDING_MOUSE_POSITION:
        mouseModel.saveToFile();
        break;
    }
  }

}();
