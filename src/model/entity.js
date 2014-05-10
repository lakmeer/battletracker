var _ = require('../helpers');

module.exports = {

  createEntity: function (name) {
    var Entity = _.makeStruct("id name components");
    return new Entity(Date.now(), name, {}); //using unix timestamp as id for now - yes I know it's possible for this to not be a unique id
  },

  addComponent: function (entity, component) {
    entity.components[component.typeName] = component;
  }

}