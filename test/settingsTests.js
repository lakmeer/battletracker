var blanket = require('blanket');
var sinon = require('sinon');
var assert = require('assert');

var fs = require('fs');
var path = require('path');

var settings = require('../src/settings');

suite ('Settings', function() {
  setup(function() {
    // mock fs.read
    sinon.stub(fs, 'readFileSync').returns('{"httpPort" : 8080}');
    sinon.stub(path, 'resolve').returns('config/settings.json');
  });
  
  test('path.resolve should be called once', function() {
    settings.use('config/settings.json');
    assert(path.resolve.calledOnce);
    
  });
  
  test('fs.readFileSync should be called once', function() {
    settings.use('config/settings.json');
    assert(fs.readFileSync.calledOnce);
  });
  
  test('fs.readFileSync should return object with httpPort of 8080', function() {
    var serverSettings = settings.use('config/settings.json');
    assert.equal(8080, serverSettings.httpPort);
  });  
  
  teardown(function() {
    // then restore
    fs.readFileSync.restore();
    path.resolve.restore();
  });
});