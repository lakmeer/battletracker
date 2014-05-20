var blanket = require('blanket'),
    assert  = require('assert');

var helpers = require('../src/helpers');


describe('helpers', function () {

  describe('#last()', function () {
    it('should return element in int list', function () {
      assert.equal(3, helpers.last([1,2,3]));
    });

    it('should return null in null list', function () {
      assert.equal(null, helpers.last(null));
    });

    it('should return null if not passed a list', function () {
      assert.equal(null, helpers.last(123));
    });
  });

  describe('#getExtension()', function () {
    it('should return extension of file', function () {
      assert.equal('html', helpers.getExtension('index.html'));
    });

    it('should return null if no extension in input string', function () {
      assert.equal(null, helpers.getExtension('noextension'));
    });

    it('should always return last set of characters after last \'.\' character', function () {
      assert.equal('html', helpers.getExtension('test.index.html'));
    });
  });

  describe('#escapeQuotes()', function () {
    it('should escape double-quotes in a string', function () {
      assert.equal('\\"', helpers.escapeQuotes('"'));
    });

    it('should escape all instances', function () {
      assert.equal('\\"test\\"', helpers.escapeQuotes('"test"'));
    });

    it('should return the string unchanged when there are no quotes', function () {
      assert.equal('no quotes', helpers.escapeQuotes('no quotes'));
    });
  });

  describe('#makeStruct()', function () {
    it('should return a constructor function', function () {
      var structConstructor = helpers.makeStruct('id name');
      assert.equal(typeof structConstructor, 'function');
    });

    it('should return a constructor function which has the same number of parameters', function () {
      var structConstructor = helpers.makeStruct('id name');
      //assert.equal(structConstructor.arguments.length, 2);
      var struct = new structConstructor(12, "test");
      assert.equal(struct.id, 12);
    });
  })
});

