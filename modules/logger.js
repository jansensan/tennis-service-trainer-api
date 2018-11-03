const chalk = require('chalk'),
 log = console.log;


module.exports = function () {

  'use strict';


  // public api
  return {
    logMethod: logMethod,
    warn: warn,
  };


  // methods definitions

  /** Prints a method name and its parent to the console. */
  function logMethod(parentName, methodName) {
    log('\n' + chalk.white.bgBlue(' --- ' + parentName + '#' + methodName + ' --- '));
  }

  /** Prints a message in yellow to the console. */
  function warn(message) {
    log(chalk.yellow(message));
  }

}();
