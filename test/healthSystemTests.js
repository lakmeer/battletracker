var blanket = require('blanket');
var entityModel = require('../src/model/entity.js');
var healthComponentModel = require('../src/model/healthComponent.js');

var healthSystem = require('../src/systems/health.js');


var blanket = require('blanket'),
  sinon = require('sinon'),
  assert = require('assert');

var fs = require('fs'),
  path = require('path');

var settings = require('../src/settings');


// Health system test suite

suite('Health System', function () {
  var monster = null;
  var hp = null;

  setup(function () {
    monster = entityModel.createEntity('monster');
    hp = healthComponentModel.createHealthComponent();
    entityModel.addComponent(monster, hp);
  });

  test('Create entity with health component', function () {
    assert.equal(monster.components.health, hp, "component has not been successfully added");
  });

  test('Set entity health to 100', function () {
    healthSystem.setHp(monster, 100);
    assert.equal(monster.components.health.hitPoints, 100, "monster health is not 100");
  });

  test('Damage entity for 42 from 100hp', function () {
    healthSystem.setHp(monster, 100);
    healthSystem.damage(monster, 42);
    assert.equal(monster.components.health.hitPoints, 58, "monster health is not 58");
  });

  test('Heal entity for 30 from 9hp', function () {
    healthSystem.setHp(monster, 9);
    healthSystem.heal(monster, 30);
    assert.equal(monster.components.health.hitPoints, 39, "monster health is not 39");
  });

  teardown(function () {});
});