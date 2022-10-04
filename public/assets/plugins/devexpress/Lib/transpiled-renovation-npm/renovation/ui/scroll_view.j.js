"use strict";

exports.default = void 0;

var _component_registrator = _interopRequireDefault(require("../../core/component_registrator"));

var _component = _interopRequireDefault(require("../preact_wrapper/component"));

var _scroll_view = require("./scroll_view");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ScrollView = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(ScrollView, _BaseComponent);

  function ScrollView() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = ScrollView.prototype;

  _proto.content = function content() {
    return this._toPublicElement(this.viewRef.content());
  };

  _proto.scrollBy = function scrollBy(distance) {
    return this.viewRef.scrollBy(distance);
  };

  _proto.scrollTo = function scrollTo(targetLocation) {
    return this.viewRef.scrollTo(targetLocation);
  };

  _proto.scrollToElement = function scrollToElement(element, offset) {
    return this.viewRef.scrollToElement(this._patchElementParam(element), offset);
  };

  _proto.scrollHeight = function scrollHeight() {
    return this.viewRef.scrollHeight();
  };

  _proto.scrollWidth = function scrollWidth() {
    return this.viewRef.scrollWidth();
  };

  _proto.scrollOffset = function scrollOffset() {
    return this.viewRef.scrollOffset();
  };

  _proto.scrollTop = function scrollTop() {
    return this.viewRef.scrollTop();
  };

  _proto.scrollLeft = function scrollLeft() {
    return this.viewRef.scrollLeft();
  };

  _proto.clientHeight = function clientHeight() {
    return this.viewRef.clientHeight();
  };

  _proto.clientWidth = function clientWidth() {
    return this.viewRef.clientWidth();
  };

  _proto._getActionConfigs = function _getActionConfigs() {
    return {
      onScroll: {}
    };
  };

  _createClass(ScrollView, [{
    key: "_propsInfo",
    get: function get() {
      return {
        twoWay: [],
        allowNull: [],
        elements: []
      };
    }
  }, {
    key: "_viewComponent",
    get: function get() {
      return _scroll_view.ScrollView;
    }
  }]);

  return ScrollView;
}(_component.default);

exports.default = ScrollView;
(0, _component_registrator.default)("dxScrollView", ScrollView);
module.exports = exports.default;