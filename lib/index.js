'use strict';

var logger = require('morgan');

module.exports = function(filter, display) {
  var customLogger = function customLogger(tokens, req, res) {
    if(!filter(req, res)) {
      return;
    }

    var info = display(req, res);

    var status = res.statusCode;
    var color = 32;
    var error = "";
    if(status >= 500) {
      color = 31;
      error = res._body;
    }
    else if(status >= 400) {
      color = 33;
      error = res._body;
    }
    else if(status >= 300) {
      color = 36;
    }

    return '\x1b[90m' + req.method + ' ' + (info ? info : '???') + ":" + req.url + ' ' + '\x1b[' + color + 'm' + res.statusCode + ' \x1b[90m' + (new Date() - req._startTime) + 'ms' + '\x1b[0m' + ' ' + error;
  };

  module.exports.customLogger = customLogger;
  return logger(customLogger);
};
