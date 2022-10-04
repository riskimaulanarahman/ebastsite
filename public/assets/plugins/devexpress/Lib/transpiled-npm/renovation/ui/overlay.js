"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.Overlay = Overlay;
exports.OverlayProps = exports.viewFunction = void 0;

var _widget = require("./common/widget");

var _overlay = _interopRequireDefault(require("../../ui/overlay"));

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
    componentType: _overlay.default,
    componentProps: componentProps
  }, restAttributes));
};

exports.viewFunction = viewFunction;

var OverlayProps = _objectSpread(_objectSpread({}, _widget.WidgetProps), {}, {
  integrationOptions: {},
  templatesRenderAsynchronously: false,
  shading: true,
  closeOnOutsideClick: false,
  closeOnTargetScroll: false,
  animation: {
    type: "pop",
    duration: 300,
    to: {
      opacity: 0,
      scale: 0.55
    },
    from: {
      opacity: 1,
      scale: 1
    }
  },
  visible: false,
  propagateOutsideClick: true,
  _checkParentVisibility: false,
  rtlEnabled: false,
  contentTemplate: "content",
  maxWidth: null
});

exports.OverlayProps = OverlayProps;

function Overlay(props) {
  var __componentProps = (0, _hooks.useCallback)(function __componentProps() {
    var _props$rootElementRef2;

    var _props$rootElementRef = _objectSpread(_objectSpread({}, props), {}, {
      rootElementRef: (_props$rootElementRef2 = props.rootElementRef) === null || _props$rootElementRef2 === void 0 ? void 0 : _props$rootElementRef2.current
    }),
        rootElementRef = _props$rootElementRef.rootElementRef,
        restProps = _objectWithoutProperties(_props$rootElementRef, ["rootElementRef"]);

    return restProps;
  }, [props]);

  var __restAttributes = (0, _hooks.useCallback)(function __restAttributes() {
    var _props$rootElementRef4;

    var _props$rootElementRef3 = _objectSpread(_objectSpread({}, props), {}, {
      rootElementRef: (_props$rootElementRef4 = props.rootElementRef) === null || _props$rootElementRef4 === void 0 ? void 0 : _props$rootElementRef4.current
    }),
        _checkParentVisibility = _props$rootElementRef3._checkParentVisibility,
        _feedbackHideTimeout = _props$rootElementRef3._feedbackHideTimeout,
        _feedbackShowTimeout = _props$rootElementRef3._feedbackShowTimeout,
        accessKey = _props$rootElementRef3.accessKey,
        activeStateEnabled = _props$rootElementRef3.activeStateEnabled,
        activeStateUnit = _props$rootElementRef3.activeStateUnit,
        animation = _props$rootElementRef3.animation,
        aria = _props$rootElementRef3.aria,
        children = _props$rootElementRef3.children,
        className = _props$rootElementRef3.className,
        classes = _props$rootElementRef3.classes,
        closeOnOutsideClick = _props$rootElementRef3.closeOnOutsideClick,
        closeOnTargetScroll = _props$rootElementRef3.closeOnTargetScroll,
        container = _props$rootElementRef3.container,
        contentTemplate = _props$rootElementRef3.contentTemplate,
        disabled = _props$rootElementRef3.disabled,
        focusStateEnabled = _props$rootElementRef3.focusStateEnabled,
        height = _props$rootElementRef3.height,
        hint = _props$rootElementRef3.hint,
        hoverStateEnabled = _props$rootElementRef3.hoverStateEnabled,
        integrationOptions = _props$rootElementRef3.integrationOptions,
        maxWidth = _props$rootElementRef3.maxWidth,
        name = _props$rootElementRef3.name,
        onActive = _props$rootElementRef3.onActive,
        onClick = _props$rootElementRef3.onClick,
        onContentReady = _props$rootElementRef3.onContentReady,
        onDimensionChanged = _props$rootElementRef3.onDimensionChanged,
        onFocusIn = _props$rootElementRef3.onFocusIn,
        onFocusOut = _props$rootElementRef3.onFocusOut,
        onInactive = _props$rootElementRef3.onInactive,
        onKeyDown = _props$rootElementRef3.onKeyDown,
        onKeyboardHandled = _props$rootElementRef3.onKeyboardHandled,
        onVisibilityChange = _props$rootElementRef3.onVisibilityChange,
        propagateOutsideClick = _props$rootElementRef3.propagateOutsideClick,
        rootElementRef = _props$rootElementRef3.rootElementRef,
        rtlEnabled = _props$rootElementRef3.rtlEnabled,
        shading = _props$rootElementRef3.shading,
        tabIndex = _props$rootElementRef3.tabIndex,
        templatesRenderAsynchronously = _props$rootElementRef3.templatesRenderAsynchronously,
        visible = _props$rootElementRef3.visible,
        width = _props$rootElementRef3.width,
        restProps = _objectWithoutProperties(_props$rootElementRef3, ["_checkParentVisibility", "_feedbackHideTimeout", "_feedbackShowTimeout", "accessKey", "activeStateEnabled", "activeStateUnit", "animation", "aria", "children", "className", "classes", "closeOnOutsideClick", "closeOnTargetScroll", "container", "contentTemplate", "disabled", "focusStateEnabled", "height", "hint", "hoverStateEnabled", "integrationOptions", "maxWidth", "name", "onActive", "onClick", "onContentReady", "onDimensionChanged", "onFocusIn", "onFocusOut", "onInactive", "onKeyDown", "onKeyboardHandled", "onVisibilityChange", "propagateOutsideClick", "rootElementRef", "rtlEnabled", "shading", "tabIndex", "templatesRenderAsynchronously", "visible", "width"]);

    return restProps;
  }, [props]);

  return viewFunction({
    props: _objectSpread({}, props),
    componentProps: __componentProps(),
    restAttributes: __restAttributes()
  });
}

Overlay.defaultProps = _objectSpread({}, OverlayProps);