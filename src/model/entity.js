var _ = require('../helpers');
var idGen = _.uniqueId();


// Entity Class

var Entity = function Entity (name, components) {
  this.id         = idGen();
  this.name       = name;
  this.components = components || {};
}

Entity.prototype.newFromThis = function () {
  var updated = new Entity(this.name, this.components);
  updated.id = this.id;
  return updated;
}

Entity.prototype.addComponent = function (component) {
  var updated = this.newFromThis();
  updated.components[ component.typeName ] = component;
  return updated;
}


// Exports

module.exports = Entity;

