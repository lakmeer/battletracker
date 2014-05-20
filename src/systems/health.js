
var ComponentSystem = require('../componentSystem.js');


// Health

var healthSystem = new ComponentSystem('health', function () {
  return {
    hitPoints: 0
  }
});

healthSystem.addMethod('setHp', function (entity, hp) {
  entity.components.health.hitPoints = hp;
});

healthSystem.addMethod( 'damage', function (entity, amount) {
  entity.components.health.hitPoints -= amount;
});

healthSystem.addMethod( 'heal', function (entity, amount) {
  entity.components.health.hitPoints += amount;
});



// Export

module.exports = healthSystem;

