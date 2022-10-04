"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.ValidationMessage = ValidationMessage;
exports.ValidationMessageProps = exports.viewFunction = void 0;

var _widget = require("./common/widget");

var _validation_message = _interopRequireDefault(require("../../ui/validation_message"));

var _dom_component_wrapper = require("./common/dom_component_wrapper");

var Preact = _interopRequireWildcard(require("preact"));

var _hooks = require("preact/hooks");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var viewFunction = function viewFunction(_ref) {
  var componentProps = _ref.componentProps,
      rootElementRef = _ref.props.rootElementRef,
      restAttributes = _ref.restAttributes;
  return Preact.h(_dom_component_wrapper.DomComponentWrapper, _extends({
    rootElementRef: rootElementRef,
    componentType: _validation_message.default,
    componentProps: componentProps
  }, restAttributes));
};

exports.viewFunction = viewFunction;

var ValidationMessageProps = _objectSpread(_objectSpread({}, _widget.WidgetProps), {}, {
  mode: "auto",
  offset: {
    h: 0,
    v: 0
  }
});

exports.ValidationMessageProps = ValidationMessageProps;

function ValidationMessage(props) {
  var __componentProps = (0, _hooks.useCallback)(function __componentProps() {
    var _props$boundary, _props$container, _props$target, _props$rootElementRef;

    var _props$boundary$conta = _objectSpread(_objectSpread({}, props), {}, {
      boundary: (_props$boundary = props.boundary) === null || _props$boundary === void 0 ? void 0 : _props$boundary.current,
      container: (_props$container = props.container) === null || _props$container === void 0 ? void 0 : _props$container.current,
      target: (_props$target = props.target) === null || _props$target === void 0 ? void 0 : _props$target.current,
      rootElementRef: (_props$rootElementRef = props.rootElementRef) === null || _props$rootElementRef === void 0 ? void 0 : _props$rootElementRef.current
    }),
        rootElementRef = _props$boundary$conta.rootElementRef,
        restProps = _objectWithoutProperties(_props$boundary$conta, ["rootElementRef"]);

    return restProps;
  }, [props]);

  var __restAttributes = (0, _hooks.useCallback)(function __restAttributes() {
    var _props$boundary2, _props$container2, _props$target2, _props$rootElementRef2;

    var _props$boundary$conta2 = _objectSpread(_objectSpread({}, props), {}, {
      boundary: (_props$boundary2 = props.boundary) === null || _props$boundary2 === void 0 ? void 0 : _props$boundary2.current,
      container: (_props$container2 = props.container) === null || _props$container2 === void 0 ? void 0 : _props$container2.current,
      target: (_props$target2 = props.target) === null || _props$target2 === void 0 ? void 0 : _props$target2.current,
      rootElementRef: (_props$rootElementRef2 = props.rootElementRef) === null || _props$rootElementRef2 === void 0 ? void 0 : _props$rootElementRef2.current
    }),
        _feedbackHideTimeout = _props$boundary$conta2._feedbackHideTimeout,
        _feedbackShowTimeout = _props$boundary$conta2._feedbackShowTimeout,
        accessKey = _props$boundary$conta2.accessKey,
        activeStateEnabled = _props$boundary$conta2.activeStateEnabled,
        activeStateUnit = _props$boundary$conta2.activeStateUnit,
        aria = _props$boundary$conta2.aria,
        boundary = _props$boundary$conta2.boundary,
        children = _props$boundary$conta2.children,
        className = _props$boundary$conta2.className,
        classes = _props$boundary$conta2.classes,
        container = _props$boundary$conta2.container,
        disabled = _props$boundary$conta2.disabled,
        focusStateEnabled = _props$boundary$conta2.focusStateEnabled,
        height = _props$boundary$conta2.height,
        hint = _props$boundary$conta2.hint,
        hoverStateEnabled = _props$boundary$conta2.hoverStateEnabled,
        mode = _props$boundary$conta2.mode,
        name = _props$boundary$conta2.name,
        offset = _props$boundary$conta2.offset,
        onActive = _props$boundary$conta2.onActive,
        onClick = _props$boundary$conta2.onClick,
        onContentReady = _props$boundary$conta2.onContentReady,
        onDimensionChanged = _props$boundary$conta2.onDimensionChanged,
        onFocusIn = _props$boundary$conta2.onFocusIn,
        onFocusOut = _props$boundary$conta2.onFocusOut,
        onInactive = _props$boundary$conta2.onInactive,
        onKeyDown = _props$boundary$conta2.onKeyDown,
        onKeyboardHandled = _props$boundary$conta2.onKeyboardHandled,
        onVisibilityChange = _props$boundary$conta2.onVisibilityChange,
        positionRequest = _props$boundary$conta2.positionRequest,
        rootElementRef = _props$boundary$conta2.rootElementRef,
        rtlEnabled = _props$boundary$conta2.rtlEnabled,
        tabIndex = _props$boundary$conta2.tabIndex,
        target = _props$boundary$conta2.target,
        validationErrors = _props$boundary$conta2.validationErrors,
        visible = _props$boundary$conta2.visible,
        width = _props$boundary$conta2.width,
        restProps = _objectWithoutProperties(_props$boundary$conta2, ["_feedbackHideTimeout", "_feedbackShowTimeout", "accessKey", "activeStateEnabled", "activeStateUnit", "aria", "boundary", "children", "className", "classes", "container", "disabled", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "mode", "name", "offset", "onActive", "onClick", "onContentReady", "onDimensionChanged", "onFocusIn", "onFocusOut", "onInactive", "onKeyDown", "onKeyboardHandled", "onVisibilityChange", "positionRequest", "rootElementRef", "rtlEnabled", "tabIndex", "target", "validationErrors", "visible", "width"]);

    return restProps;
  }, [props]);

  return viewFunction({
    props: _objectSpread({}, props),
    componentProps: __componentProps(),
    restAttributes: __restAttributes()
  });
}

ValidationMessage.defaultProps = _objectSpread({}, ValidationMessageProps);