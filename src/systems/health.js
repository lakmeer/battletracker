module.exports = {

  setHp: function (entity, hp) {
    if (entity.components.health) {
      entity.components.health.hitPoints = hp;
    } else {
      console.log("" + entity.name + 'does not have health.');
    }
  },

  damage: function (entity, amount) {
    if (entity.components.health) {
      entity.components.health.hitPoints -= amount;
    } else {
      console.log("" + entity.name + 'cannot be damaged.');
    }
  },

  heal: function (entity, amount) {
    if (entity.components.health) {
      entity.components.health.hitPoints += amount;
    } else {
      console.log("" + entity.name + 'cannot be healed.');
    }
  },

}