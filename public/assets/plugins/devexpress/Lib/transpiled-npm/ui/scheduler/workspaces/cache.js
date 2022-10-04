"use strict";

exports.cache = exports.Cache = void 0;

var _type = require("../../../core/utils/type");

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cache = /*#__PURE__*/function () {
  function Cache() {
    this._init();
  }

  var _proto = Cache.prototype;

  _proto._init = function _init() {
    this._cache = new Map();
  };

  _proto.clear = function clear() {
    this._init();
  };

  _proto.get = function get(name, callback) {
    if (!this._cache.has(name) && callback) {
      this.set(name, callback());
    }

    return this._cache.get(name);
  };

  _proto.set = function set(name, value) {
    (0, _type.isDefined)(value) && this._cache.set(name, value);
  };

  _createClass(Cache, [{
    key: "size",
    get: function get() {
      return this._cache.size;
    }
  }]);

  return Cache;
}();

exports.Cache = Cache;
var cache = new Cache();
exports.cache = cache;