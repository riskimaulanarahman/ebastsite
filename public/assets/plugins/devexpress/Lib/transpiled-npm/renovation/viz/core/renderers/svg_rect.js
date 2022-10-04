"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.RectSvgElement = RectSvgElement;
exports.RectSvgElementProps = exports.viewFunction = void 0;

var _base_graphics_props = _interopRequireDefault(require("./base_graphics_props"));

var _utils = require("./utils");

var Preact = _interopRequireWildcard(require("preact"));

var _hooks = require("preact/hooks");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var viewFunction = function viewFunction(_ref) {
  var _ref$parsedProps = _ref.parsedProps,
      fill = _ref$parsedProps.fill,
      height = _ref$parsedProps.height,
      opacity = _ref$parsedProps.opacity,
      rx = _ref$parsedProps.rx,
      ry = _ref$parsedProps.ry,
      stroke = _ref$parsedProps.stroke,
      strokeOpacity = _ref$parsedProps.strokeOpacity,
      strokeWidth = _ref$parsedProps.strokeWidth,
      width = _ref$parsedProps.width,
      x = _ref$parsedProps.x,
      y = _ref$parsedProps.y,
      rectRef = _ref.rectRef;
  return Preact.h("rect", {
    ref: rectRef,
    x: x,
    y: y,
    width: width,
    height: height,
    rx: rx,
    ry: ry,
    fill: fill,
    stroke: stroke,
    strokeWidth: strokeWidth,
    strokeOpacity: strokeOpacity,
    opacity: opacity
  });
};

exports.viewFunction = viewFunction;

var RectSvgElementProps = _objectSpread(_objectSpread({}, _base_graphics_props.default), {}, {
  x: 0,
  y: 0,
  width: 0,
  height: 0
});

exports.RectSvgElementProps = RectSvgElementProps;

function RectSvgElement(props) {
  var __rectRef = (0, _hooks.useRef)();

  var _useState = (0, _hooks.useState)(function () {
    return props.sharp !== undefined ? props.sharp : props.defaultSharp;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      __state_sharp = _useState2[0],
      __state_setSharp = _useState2[1];

  var __parsedProps = (0, _hooks.useCallback)(function __parsedProps() {
    var tmpX;
    var tmpY;
    var tmpWidth;
    var tmpHeight;

    var tmpProps = _objectSpread({}, _objectSpread(_objectSpread({}, props), {}, {
      sharp: props.sharp !== undefined ? props.sharp : __state_sharp
    }));

    var height = tmpProps.height,
        strokeWidth = tmpProps.strokeWidth,
        width = tmpProps.width,
        x = tmpProps.x,
        y = tmpProps.y;
    var sw;

    if (x !== undefined || y !== undefined || width !== undefined || height !== undefined || strokeWidth !== undefined) {
      tmpX = x !== undefined ? x : 0;
      tmpY = y !== undefined ? y : 0;
      tmpWidth = width !== undefined ? width : 0;
      tmpHeight = height !== undefined ? height : 0;
      sw = strokeWidth !== undefined ? strokeWidth : 0;
      var maxSW = ~~((tmpWidth < tmpHeight ? tmpWidth : tmpHeight) / 2);
      var newSW = Math.min(sw, maxSW);
      tmpProps.x = tmpX + newSW / 2;
      tmpProps.y = tmpY + newSW / 2;
      tmpProps.width = tmpWidth - newSW;
      tmpProps.height = tmpHeight - newSW;
      (sw !== newSW || !(newSW === 0 && strokeWidth === undefined)) && (tmpProps.strokeWidth = newSW);
    }

    tmpProps.sharp && (tmpProps.sharp = false);
    return tmpProps;
  }, [props, __state_sharp]);

  var __restAttributes = (0, _hooks.useCallback)(function __restAttributes() {
    var _props$sharp = _objectSpread(_objectSpread({}, props), {}, {
      sharp: props.sharp !== undefined ? props.sharp : __state_sharp
    }),
        dashStyle = _props$sharp.dashStyle,
        defaultSharp = _props$sharp.defaultSharp,
        fill = _props$sharp.fill,
        height = _props$sharp.height,
        opacity = _props$sharp.opacity,
        rotate = _props$sharp.rotate,
        rotateX = _props$sharp.rotateX,
        rotateY = _props$sharp.rotateY,
        rx = _props$sharp.rx,
        ry = _props$sharp.ry,
        scaleX = _props$sharp.scaleX,
        scaleY = _props$sharp.scaleY,
        sharp = _props$sharp.sharp,
        sharpChange = _props$sharp.sharpChange,
        sharpDirection = _props$sharp.sharpDirection,
        stroke = _props$sharp.stroke,
        strokeOpacity = _props$sharp.strokeOpacity,
        strokeWidth = _props$sharp.strokeWidth,
        translateX = _props$sharp.translateX,
        translateY = _props$sharp.translateY,
        width = _props$sharp.width,
        x = _props$sharp.x,
        y = _props$sharp.y,
        restProps = _objectWithoutProperties(_props$sharp, ["dashStyle", "defaultSharp", "fill", "height", "opacity", "rotate", "rotateX", "rotateY", "rx", "ry", "scaleX", "scaleY", "sharp", "sharpChange", "sharpDirection", "stroke", "strokeOpacity", "strokeWidth", "translateX", "translateY", "width", "x", "y"]);

    return restProps;
  }, [props, __state_sharp]);

  (0, _hooks.useEffect)(function () {
    var props = __parsedProps();

    (0, _utils.applyGraphicProps)(__rectRef.current, props, props.x, props.y);
  }, [props, __state_sharp]);
  return viewFunction({
    props: _objectSpread(_objectSpread({}, props), {}, {
      sharp: props.sharp !== undefined ? props.sharp : __state_sharp
    }),
    rectRef: __rectRef,
    parsedProps: __parsedProps(),
    restAttributes: __restAttributes()
  });
}

RectSvgElement.defaultProps = _objectSpread({}, RectSvgElementProps);