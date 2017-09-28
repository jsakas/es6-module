var Math2 = require('../dist/').default;
var assert = require('assert');
var requirejs = require('requirejs');

const math = new Math2();

describe('Math', () => {
  describe('module', () => {
    it('can be loaded as a CommonJS module', () => {
      const commonMath = new Math2();
      assert.equal(typeof commonMath, 'object')
    })

    it('can be loaded as an AMD module', () => {
      requirejs.config({
          'paths': {
            math: '../dist'
          }
      });      
      requirejs(['math'], (amdMath) => {
          assert.equal(typeof amdMath, 'object')
      });
    })
  })
})

describe('Math', () => {
  describe('#add()', () => {
    it('should return the sum of two numbers', () => {
      assert.equal(5, math.add(2, 3));
    });
  });

  describe('#subtract()', () => {
    it('should return the difference of two numbers', () => {
      assert.equal(-1, math.subtract(2, 3));
    });
  });

  describe('#multiply()', () => {
    it('should return the product of two numbers', () => {
      assert.equal(6, math.multiply(2, 3));
    });
  });

  describe('#divide()', () => {
    it('should return the quotient of two numbers', () => {
      assert.equal(0.5, math.divide(2, 4));
    });
  });
});
