var blanket = require('blanket');
var sinon = require('sinon');
var assert = require('assert');

var fs = require('fs');
var path = require('path');

var settings = require('../src/settings');

suite ('Settings', function() {
  setup(function() {
    // mock fs.read
    sinon.stub(fs, 'readFileSync').returns('{"httpPort" : 1234}');
    sinon.stub(path, 'resolve').returns('test.json');
  });
  
  test('path.resolve should be called once', function() {
    settings.use('config/settings.json');
    assert(path.resolve.calledOnce);
    
  });
  
  test('fs.readFileSync should be called once', function() {
    settings.use('config/settings.json');
    assert(fs.readFileSync.calledOnce);
  });
  
  test('fs.readFileSync should return object with httpPort of 1234', function() {
    var serverSettings = settings.use('test.json');
    assert.equal(1234, serverSettings.httpPort);
  });  
  
  teardown(function() {
    // then restore
    fs.readFileSync.restore();
    path.resolve.restore();
  });
});