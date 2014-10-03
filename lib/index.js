"use strict";

var morgan = require("morgan");

morgan.token('color', function(req, res, field) {
  if(!field) {
    return '\x1b[90m';
  }
  return '\x1b[' + field + 'm';
});

morgan.token('color-reset', function() {
  return '\x1b[0m';
});

morgan.token('status-color', function(req, res) {
  var color = 32;
  var status = res.statusCode;
  if (status >= 500) {
    color = 31;
  }
  else if (status >= 400) {
    color = 33;
  }
  else if (status >= 300) {
    color = 36;
  }
  return '\x1b[' + color + 'm';
});

morgan.token('time-spent', function(req) {
  return (new Date() - req._startTime) + 'ms';
});

// Override this if you want to display a user
morgan.token('user', function() {
  return '???:';
});

// Override this if you want to append something to the log, like an error
morgan.token('append', function() {
  // Need to make the string thruthy, or it is replaced by '-' by morgan
  return ' ';
});

morgan.format('custom', ':color[90]:method :user:url :status-color:status:color[90] :time-spent:color-reset :append');

module.exports = morgan;
