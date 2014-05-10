var _ = require('../helpers');

module.exports = {

  createHealthComponent: function () {
    var Component = _.makeStruct("typeName hitPoints");
    return new Component("health", 0);
  },

}