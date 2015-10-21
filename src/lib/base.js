
var EventEmitter = require('events').EventEmitter;
var inherits     = require('util').inherits;
var _            = require('underscore');


function Base(    ) {
  EventEmitter.call(this);
  this.initialize.apply(this, arguments);
}
inherits(Base, EventEmitter);

Base.extend = function(protoProps, staticProps) {
  protoProps  || (protoProps  = {});
  staticProps || (staticProps = {});

  var child = protoProps.constructor || (protoProps.constructor = function(   ) {
    return this.apply(this, arguments);
  });

  _.extend(child, this, staticProps);

  child.prototype             = _.create(parent.prototype, protoProps);
  child.prototype.super       = parent.prototype;
  child.prototype.constructor = child;
  child.super                 = this;

  return child;
};

Base.prototype.initialize = _.noop;


module.exports = Base;
