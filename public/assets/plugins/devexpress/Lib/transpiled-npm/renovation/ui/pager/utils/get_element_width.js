"use strict";

exports.getElementStyle = getElementStyle;
exports.getElementWidth = getElementWidth;
exports.getElementMinWidth = getElementMinWidth;

var _get_computed_style = _interopRequireDefault(require("./get_computed_style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function toNumber(attribute) {
  return attribute ? Number(attribute.replace("px", "")) : 0;
}

function getElementStyle(name, element) {
  var computedStyle = (0, _get_computed_style.default)(element) || {};
  return toNumber(computedStyle[name]);
}

function getElementWidth(element) {
  return getElementStyle("width", element);
}

function getElementMinWidth(element) {
  return getElementStyle("minWidth", element);
}