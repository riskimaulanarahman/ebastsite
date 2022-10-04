"use strict";

exports.default = void 0;

var _uiDrawer = require("./ui.drawer.animation");

var _uiDrawerRendering = _interopRequireDefault(require("./ui.drawer.rendering.strategy"));

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _extend = require("../../core/utils/extend");

var _inflector = require("../../core/utils/inflector");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var ShrinkStrategy = /*#__PURE__*/function (_DrawerStrategy) {
  _inheritsLoose(ShrinkStrategy, _DrawerStrategy);

  function ShrinkStrategy() {
    return _DrawerStrategy.apply(this, arguments) || this;
  }

  var _proto = ShrinkStrategy.prototype;

  _proto._slidePositionRendering = function _slidePositionRendering(config, _, animate) {
    if (animate) {
      var animationConfig = (0, _extend.extend)(config.defaultAnimationConfig, {
        $element: config.$panel,
        margin: config.panelOffset,
        duration: this.getDrawerInstance().option('animationDuration'),
        direction: config.direction
      });

      _uiDrawer.animation.margin(animationConfig);
    } else {
      config.$panel.css('margin' + (0, _inflector.camelize)(config.direction, true), config.panelOffset);
    }
  };

  _proto._expandPositionRendering = function _expandPositionRendering(config, _, animate) {
    var drawer = this.getDrawerInstance();

    if (animate) {
      var animationConfig = (0, _extend.extend)(config.defaultAnimationConfig, {
        $element: config.$panel,
        size: config.size,
        duration: drawer.option('animationDuration'),
        direction: config.direction
      });

      _uiDrawer.animation.size(animationConfig);
    } else {
      if (drawer.isHorizontalDirection()) {
        (0, _renderer.default)(config.$panel).css('width', config.size);
      } else {
        (0, _renderer.default)(config.$panel).css('height', config.size);
      }
    }
  };

  _proto._getPositionRenderingConfig = function _getPositionRenderingConfig(isDrawerOpened) {
    return (0, _extend.extend)(_DrawerStrategy.prototype._getPositionRenderingConfig.call(this, isDrawerOpened), {
      panelOffset: this._getPanelOffset(isDrawerOpened)
    });
  };

  _proto.isViewContentFirst = function isViewContentFirst(position, isRtl) {
    return (isRtl ? position === 'left' : position === 'right') || position === 'bottom';
  };

  return ShrinkStrategy;
}(_uiDrawerRendering.default);

var _default = ShrinkStrategy;
exports.default = _default;
module.exports = exports.default;