"use strict";

exports.default = void 0;

var _component_registrator = _interopRequireDefault(require("../../core/component_registrator"));

var _button = _interopRequireDefault(require("../preact_wrapper/button"));

var _button2 = require("./button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Button = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(Button, _BaseComponent);

  function Button() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = Button.prototype;

  _proto.getProps = function getProps() {
    var props = _BaseComponent.prototype.getProps.call(this);

    props.template = this._createTemplateComponent(props, props.template);
    props.onKeyDown = this._wrapKeyDownHandler(props.onKeyDown);
    return props;
  };

  _proto.focus = function focus() {
    return this.viewRef.focus();
  };

  _proto._getActionConfigs = function _getActionConfigs() {
    return {
      onClick: {
        excludeValidators: ["readOnly"]
      },
      onSubmit: {},
      onContentReady: {
        excludeValidators: ["disabled", "readOnly"]
      }
    };
  };

  _createClass(Button, [{
    key: "_propsInfo",
    get: function get() {
      return {
        twoWay: [],
        allowNull: ["accessKey"],
        elements: []
      };
    }
  }, {
    key: "_viewComponent",
    get: function get() {
      return _button2.Button;
    }
  }]);

  return Button;
}(_button.default);

exports.default = Button;
(0, _component_registrator.default)("dxButton", Button);
module.exports = exports.default;