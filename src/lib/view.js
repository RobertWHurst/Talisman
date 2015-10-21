var _             = require('underscore');
var $             = require('jquery');
var Base          = require('./base');
var templateCache = require('./template-cache');


var View = Base.extend({

  constructor: function(opts) {
    _.extend(this, _.pick(opts, this.constructor.properties));
    this._setupElement(opts);
    Base.call(this, arguments);
  },

  $: function(    ) {
    return this.$el.find.apply(this.$el, arguments);
  },

  querySelector: function(    ) {
    return this.el.querySelector.apply(this.el, arguments);
  },

  querySelectorAll: function(    ) {
    return this.el.querySelectorAll.apply(this.el, arguments);
  },

  remove: function() {
    this.$el.remove();
    this.removeAllListeners();
  },

  render: function() {
    this.renderWithTemplate(this);
  },

  renderWithTemplate: function(locals) {
    var templateSrc = _.result(this, 'template');
    this.$el.html(templateCache(templateSrc, locals));
  },

  setElement: function($el) {
    if (!$el.jquery) { $el = $($el); }
    if ($el.size() !== 1) {
      throw new Error('Views must have exactly one root element');
    }
    this.el  = $el.get(0);
    this.$el = $el;
  },

  _getDocument: function() {
    return global.document || this.document;
  };

  _setupElement: function(opts) {
    this.setElement(_.result(this, 'el') || this._createElement(opts));
  },

  _createElement: function(opts) {
    var tagName = _.result(this, 'tagName') || 'div';
    var doc     = this._getDocument();
    return doc.createElement(tagName);
  }
});

View.properties = [
  'model',
  'collection',
  'el',
  'id',
  'attributes',
  'className',
  'tagName',
  'events'
];


module.exports = View;
