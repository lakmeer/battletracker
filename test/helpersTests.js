var blanket = require('blanket');
var assert = require('assert');

var helpers = require('../src/helpers');

describe('helpers', function () {
  describe('#last()', function () {
    it('should return element in int list', function () {
      assert.equal(3, helpers.last([1, 2, 3]));
    })
  }),
  describe('#last()', function () {
    it('should return null in null list', function () {
      assert.equal(null, helpers.last(null));
    })
  }),
  describe('#last()', function () {
    it('should return null if not passed a list', function () {
      assert.equal(null, helpers.last(123));
    })
  })
});

describe('helpers', function () {
  describe('#getExtension()', function () {
    it('should return extension of file', function () {
      assert.equal('html', helpers.getExtension('index.html'));
    })
  }),
  describe('#getExtension()', function () {
    it('should return null if no extension in input string', function () {
      assert.equal(null, helpers.getExtension('noextension'));
    })
  }),
  describe('#getExtension()', function () {
    it('should always return last set of characters after last \'.\' character', function () {
      assert.equal('html', helpers.getExtension('test.index.html'));
    })
  })
});

describe('helpers', function () {
  describe('#makeStruct()', function () {
    it('should return a constructor function', function () {
      var structConstructor = helpers.makeStruct('id name');
      assert.equal(typeof structConstructor, 'function');
    }),
    it('should return a constructor function which has the same number of parameters', function () {
      var structConstructor = helpers.makeStruct('id name');
      //assert.equal(structConstructor.arguments.length, 2);
      var struct = new structConstructor(12, "test");
      assert.equal(struct.id, 12);
    })
  })
});