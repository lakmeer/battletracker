
// Require

var ComponentSystem = require('../componentSystem.js');


// Helpers

function invoke (entity, status, fnName, args) {
  var args = [ entity ].concat(args || []);

  if (status.callbacks[fnName]) {
    status.callbacks[fnName].apply(null, args);
  }
}


// Status

var statusSystem = new ComponentSystem('statuses', function () {
  return [ ];
});

statusSystem.addMethod('addStatus', function (entity, name, config) {
  entity.components.statuses.push({
    name: name,
    hook : config.hook,
    remaining: config.remaining,
    callbacks : config.callbacks || {}
  });
});

statusSystem.addMethod('update', function (entity, hook) {
  entity.components.statuses.forEach(function (status) {
    if (status.hook === hook) {
      status.remaining -= 1;
      invoke(entity, status, hook);
    }

    if (status.remaining <= 0) {
      status.remaining = 0;
      invoke(entity, status, 'elapsed');
    }
  });
});


// Export

module.exports = statusSystem;

