var _    = require('underscore');
var Comm = require('./comm');
var Base = require('./base');


var Application = Base.extend({

  constructor: function(opts) {
    this._setupSubApplications(opts);
    Base.call(this, arguments);
  },

  start: function(opts) {
    this._setupComm(opts);
    this._startSubApplications(opts);
  },

  _setupComm: function(opts) {
    this.comm = opts.comm = _.result(opts, 'comm') || new Comm({
      channel: _.result(opts, 'commChannel', 'talisman')
    });
  },

  _setupSubApplications: function(opts) {
    this.applications = _.result(opts, 'applications');
  },

  _startSubApplications: function(opts) {
    if (!this.applications) { return; }

    for (var appName in this.applications) {
      this.applications[appName].start(opts);
    }
  }
});


module.exports = Application;
