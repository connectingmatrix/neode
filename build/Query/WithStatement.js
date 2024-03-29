"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UnionStatement = exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var WithStatement = /*#__PURE__*/function () {
  function WithStatement() {
    _classCallCheck(this, WithStatement);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    this._with = args;
  }

  _createClass(WithStatement, [{
    key: "toString",
    value: function toString() {
      var vars = this._with.join(',');

      return 'WITH ' + vars;
    }
  }]);

  return WithStatement;
}();

exports["default"] = WithStatement;

var UnionStatement = /*#__PURE__*/function () {
  function UnionStatement(args) {
    _classCallCheck(this, UnionStatement);

    this._with = args;
  }

  _createClass(UnionStatement, [{
    key: "toString",
    value: function toString() {
      return 'UNION ' + this._with;
    }
  }]);

  return UnionStatement;
}();

exports.UnionStatement = UnionStatement;