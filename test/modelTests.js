
var blanket = require('blanket');
var sinon   = require('sinon');
var assert  = require('assert');

var fs   = require('fs');
var path = require('path');

var settings = require('../src/settings');

var Entity          = require('../src/model/entity.js');
var HealthComponent = require('../src/model/healthComponent.js');


// Settings test suite

suite('Model', function () {

  setup(function () {});

  test('Create entity returns valid entity', function () {
    var entityName = 'test';
    var testEntity = new Entity(entityName);

    assert.equal(testEntity.name, entityName, 'name which was passed in does not match');
  });

  test('Create entity with health component', function () {
    var monster = new Entity('monster');
    var hp      = new HealthComponent;

    monster.addComponent(hp);
    assert.equal(monster.components.health, hp, "component has not been successfully added");
  });

  teardown(function () {});

});
