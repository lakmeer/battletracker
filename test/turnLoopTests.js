var blanket  = require('blanket');
var sinon    = require('sinon');
var assert   = require('assert');

var TurnLoop = require('../src/turnLoop');


suite('Test Loop', function () {

  var turnLoop;

  var myStructure = [
    { hook: 'turnStart',  wait: false },
    { hook: 'turnDuring', wait: true  },
    { hook: 'turnEnd',    wait: false }
  ];

  setup(function () {
    turnLoop = new TurnLoop(myStructure);
  });

  test('Create a new Turn Loop will fail with null structure', function () {
    assert.throws(function () { var turnLoop = new TurnLoop(); }, ReferenceError);
  });

  test('Create a new Turn Loop with the given structure', function () {
    assert.ok(turnLoop);
    assert.deepEqual(turnLoop.structure, myStructure);
  });

  test('Attach a hook callback', function () {
    turnLoop.on('turnStart', function () { console.log('start'); });
    turnLoop.runTurn();

    // More tests pls
  });

  teardown(function () {
  });

});

