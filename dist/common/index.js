"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * The `Math` class provides some simple math functions.
 * @example
 * let math = new Math();
 * let sum = math.sum(3, 5);
 * console.log(sum);
 */
var Math2 = function () {
  function Math2() {
    _classCallCheck(this, Math2);
  }

  _createClass(Math2, [{
    key: "add",

    /**
     * @param {number} x
     * @param {number} y
     * @return {number} sum of x and y
     */
    value: function add(x, y) {
      return x + y;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {number} difference of x and y
     */

  }, {
    key: "subtract",
    value: function subtract(x, y) {
      return x - y;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {number} product of x and y
     */

  }, {
    key: "multiply",
    value: function multiply(x, y) {
      return x * y;
    }

    /**
     * @param {number} x
     * @param {number} y
     * @return {number} quotient of x and y
     */

  }, {
    key: "divide",
    value: function divide(x, y) {
      return x / y;
    }
  }]);

  return Math2;
}();

module.exports = Math2;
window.Math2 = Math2;