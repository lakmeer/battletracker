
// Helpers

var _ = require('./helpers');

var invokeSelf = function (a) { a(); }

var keyExists = function (listeners, key) {
  return (listeners[key] && typeof listeners[key].length !== 'undefined');
}

var addListener = function (listeners, key, fn) {
  if (keyExists(listeners, key)) {
    listeners[key].push(fn);
  } else {
    listeners[key] = [ fn ];
  }
};



// Export

var TurnLoop = function TurnLoop (structure) {

  if (structure) {
    this.structure = structure;
  } else {
    throw new ReferenceError({ message : "Cannot create TurnLoop with no structure" });
  }

  this.listeners = {}

};

TurnLoop.prototype.on = function (hook, fn) {
  addListener(this.listeners, hook, fn);
};

TurnLoop.prototype.emit = function (hook) {
  if (keyExists(this.listeners, hook)) {
    this.listeners[hook].forEach(invokeSelf);
  }
}

TurnLoop.prototype.runTurn = function () {
  for (var i in this.structure) {
    var step = this.structure[i];

    this.emit(step.hook);

    if (step.wait) {
      console.log('WAIT FOR DM');
    }
  }
}





module.exports = TurnLoop;
