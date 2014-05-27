var blanket = require('blanket');
var sinon   = require('sinon');
var assert  = require('assert');

var fs   = require('fs');
var path = require('path');

var settings = require('../src/settings');

var Entity       = require('../src/model/entity.js');
var healthSystem = require('../src/systems/health.js');
var statusSystem = require('../src/systems/status.js');


// Status system test suite

suite('Status System', function () {
  var monster = null;

  setup(function () {
    monster  = new Entity('monster');
    statuses = statusSystem.create();
    hp       = healthSystem.create();

    monster.addComponent(statuses);
    monster.addComponent(hp);
    healthSystem.setHp(monster, 50);

    statusSystem.addStatus(monster, 'Poison', {
      hook: 'turnStart',
      remaining: 3,
      callbacks: {
        elapsed: function () {},
        turnStart: function (monster) { healthSystem.damage(monster, 10); }
      }
    });
  });

  test('Add new statuses component to entity', function () {
    assert.ok(monster.components.statuses, "component has not been successfully added");
  });

  test('Add a status to a status list', function () {
    assert.equal(monster.components.statuses[0].name, 'Poison');
    assert.equal(monster.components.statuses[0].hook, 'turnStart');
    assert.equal(monster.components.statuses[0].remaining, 3);
  });

  test('turnStart hook should decrease remaining count by one', function () {
    statusSystem.update(monster, 'turnStart');
    assert.equal(monster.components.statuses[0].remaining, 2);
  });

  test('turnStart hooks should not decrease counter below zero', function () {
    statusSystem.update(monster, 'turnStart');
    statusSystem.update(monster, 'turnStart');
    statusSystem.update(monster, 'turnStart');
    assert.equal(monster.components.statuses[0].remaining, 0);
    statusSystem.update(monster, 'turnStart');
    assert.equal(monster.components.statuses[0].remaining, 0);
  });

  test('elapsed callback should be called at correct time', function () {
    sinon.stub(monster.components.statuses[0].callbacks, 'elapsed');
    statusSystem.update(monster, 'turnStart');
    statusSystem.update(monster, 'turnStart');
    statusSystem.update(monster, 'turnStart');
    assert(monster.components.statuses[0].callbacks.elapsed.calledOnce);
  });

  test('turnStart callback should called every time', function () {
    sinon.stub(monster.components.statuses[0].callbacks, 'turnStart');
    statusSystem.update(monster, 'turnStart');
    statusSystem.update(monster, 'turnStart');
    statusSystem.update(monster, 'turnStart');
    assert.equal(monster.components.statuses[0].callbacks.turnStart.callCount, 3);
  });

  test('poison should damage the monster by ten every time', function () {
    statusSystem.update(monster, 'turnStart');
    assert.equal(monster.components.health.hitPoints, 40);
    statusSystem.update(monster, 'turnStart');
    assert.equal(monster.components.health.hitPoints, 30);
    statusSystem.update(monster, 'turnStart');
    assert.equal(monster.components.health.hitPoints, 20);
    statusSystem.update(monster, 'turnStart');
    assert.equal(monster.components.health.hitPoints, 10);
    statusSystem.update(monster, 'turnStart');
    assert.equal(monster.components.health.hitPoints, 0);
  });

  teardown(function () {});
});
