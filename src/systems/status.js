
var ComponentSystem = require('../componentSystem.js');


// Status

var statusSystem = new ComponentSystem('status', function () {
  return [ ];
});

statusSystem.addMethod('newStatus', function (entity, name, hook, rem) {
  entity.components.statuses.push {
    name: name,
    hook : hook,
    remaining: rem
  }
});

statusSystem.addMethod('update', function (entity, hook) {
  entity.components.statuses.forEach(function (status) {
    if (status.hook === hook) {
      status.remaining -= 1;
    }

    if (status.remaining <= 0) {
      ....
    }
  });
});


// Export

module.exports = statusSystem;

