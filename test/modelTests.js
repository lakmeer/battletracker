var blanket = require('blanket');
var entityModel = require('../src/model/entity.js');
var healthComponentModel = require('../src/model/healthComponent.js');


var blanket = require('blanket'),
  sinon = require('sinon'),
  assert = require('assert');

var fs = require('fs'),
  path = require('path');

var settings = require('../src/settings');


// Settings test suite

suite('Model', function () {
  setup(function () {});

  test('Create entity returns valid entity', function () {
    var entityName = 'test';
    var testEntity = entityModel.createEntity(entityName);
    assert.equal(testEntity.name, entityName, 'name which was passed in does not match');
  });

  test('Create entity with health component', function () {
    var monster = entityModel.createEntity('monster');
    var hp = healthComponentModel.createHealthComponent();
    entityModel.addComponent(monster, hp);
    assert.equal(monster.components.health, hp, "component has not been successfully added");
  });

  teardown(function () {});
});