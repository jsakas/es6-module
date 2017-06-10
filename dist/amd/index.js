define([], function () {
  "use strict";

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var Math = function () {
    function Math() {
      _classCallCheck(this, Math);
    }

    _createClass(Math, [{
      key: "add",
      value: function add(x, y) {
        return x + y;
      }
    }, {
      key: "subtract",
      value: function subtract(x, y) {
        return x - y;
      }
    }, {
      key: "multiply",
      value: function multiply(x, y) {
        return x * y;
      }
    }, {
      key: "divide",
      value: function divide(x, y) {
        return x / y;
      }
    }]);

    return Math;
  }();
});