var _ = require('../helpers');

module.exports = {

  create: function () {
    var Component = _.makeStruct("typeName hitPoints");
    return new Component("health", 0);
  }

}
