var _    = require('underscore');
var Base = require('./base');


var Comm = Base.extend({

  constructor: function(opts) {
    this._commandHandlers = {};
    this._requestHandlers = {};
    Base.call(this, arguments);
  },

  request: function(requestName) {
    return _.result(this._requestHandlers, requestName);
  },

  respond: function(requestName, handler) {
    this._requestHandlers[requestName] = handler;
  },

  command: function(commandName    ) {
    if (!this._commandHandlers[commandName]) { return; }
    this._commandHandlers[commandName].apply(this, _.rest(arguments));
  },

  obey: function(commandName, handler) {
    this._commandHandlers[commandName] = handler;
  }
});


module.exports = Comm;
