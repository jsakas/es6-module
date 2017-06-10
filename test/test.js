const Math = require('../dist/common/');
var assert = require('assert');

var math = new Math();

describe('Math', function() {
  describe('#add()', function() {
    it('should return the sum of two numbers', function() {
      assert.equal(5, math.add(2, 3));
    });
  });

  describe('#subtract()', function() {
    it('should return the difference of two numbers', function() {
      assert.equal(-1, math.subtract(2, 3));
    });
  });

  describe('#multiply()', function() {
    it('should return the product of two numbers', function() {
      assert.equal(6, math.multiply(2, 3));
    });
  });

  describe('#divide()', function() {
    it('should return the quotient of two numbers', function() {
      assert.equal(0.5, math.divide(2, 4));
    });
  });
});
