
// Class

var ComponentSystem = function (name, ctor) {
  this.name        = name;
  this.constructor = ctor;
}

ComponentSystem.prototype.checkSupported = function (entity) {
  return entity.components[ this.name ] !== null
    && typeof entity.components[ this.name ] !== 'undefined';
}

ComponentSystem.prototype.addMethod = function (methodName, fn) {
  var context = this;

  this[ methodName ] = function (entity) {
    if (this.checkSupported(entity)) {
      return fn.apply(context, arguments);
    } else {
      console.error(this.name, "::", methodName, "failed.")
    }
  };
}

ComponentSystem.prototype.create = function (object) {
  var instance = this.constructor();
  instance.typeName = this.name;
  return instance;
};


// Export

module.exports = ComponentSystem;

