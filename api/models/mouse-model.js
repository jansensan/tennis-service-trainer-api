const _ = require('lodash'),
  fs = require('fs'),
  logger = require('../../modules/logger');


module.exports = (function () {

  'use strict';

  // vars
  let data = [];


  // public api
  return {
    addEntry: addEntry,
    saveToFile: saveToFile,
  };


  // method definitions

  /** Saves an entry of mouse positions. */
  function addEntry(entry) {
    logger.logMethod('mouseModel', 'addEntry');

    let newEntry = {
      x: entry[0].value,
      y: entry[1].value,
      timestamp: new Date().getTime()
    }
    data.push(newEntry);
  }

  /** Saves the mouse positions to disk. */
  function saveToFile() {
    logger.logMethod('mouseModel', 'saveToFile');

    fs.writeFile(
      getFilename(),
      getJSONData(),
      function onSaveCompleted (error) {
        if (error) {
          console.log(error);
        } else {
          console.log('file saved');
        }
      }
    );

    reset();
  }


  // private methods definitions

  /** Provides a filename for the mouse positions log. */
  function getFilename() {
    // create logs/ directory if it doesn't exist
    if (!fs.existsSync('logs')) {
      fs.mkdirSync('logs');
    }

    return 'logs/mouse-positions-' + new Date().getTime() + '.json';
  }

  /** Cleans data and formats it to JSON. */
  function getJSONData() {
    // remove entries with duplicated timestamps
    let cleansedData = _.uniqBy(data, 'timestamp');

    // return json-formatted data
    return JSON.stringify(cleansedData);
  }

  /** Empties the saved mous positions. */
  function reset() {
    data.length = 0;
    data = [];
  }

})();
