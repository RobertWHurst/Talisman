

function TemplateCache() {
  this._compiledTemplates = {};
}

TemplateCache.prototype.compile = function(src, locals) {
  if (!this._compiledTemplates[src]) {
    this._compiledTemplates[src] = _.template(src);
  }
  return this._compiledTemplates[src](locals);
};

TemplateCache.prototype.purge = function() {
  this._compiledTemplates = {};
};


exports = module.exports = new TemplateCache();
exports.TemplateCache = TemplateCache;
