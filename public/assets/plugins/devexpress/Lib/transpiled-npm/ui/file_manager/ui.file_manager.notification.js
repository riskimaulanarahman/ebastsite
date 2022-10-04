"use strict";

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../core/renderer"));

var _extend = require("../../core/utils/extend");

var _type = require("../../core/utils/type");

var _deferred = require("../../core/utils/deferred");

var _window = require("../../core/utils/window");

var _ui = _interopRequireDefault(require("../widget/ui.widget"));

var _popup = _interopRequireDefault(require("../popup"));

var _ui2 = _interopRequireDefault(require("../drawer/ui.drawer"));

var _uiFile_managerNotification = _interopRequireDefault(require("./ui.file_manager.notification.progress_panel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var window = (0, _window.getWindow)();
var ADAPTIVE_STATE_SCREEN_WIDTH = 1000;
var FILE_MANAGER_NOTIFICATION_CLASS = 'dx-filemanager-notification';
var FILE_MANAGER_NOTIFICATION_DRAWER_CLASS = "".concat(FILE_MANAGER_NOTIFICATION_CLASS, "-drawer");
var FILE_MANAGER_NOTIFICATION_DRAWER_PANEL_CLASS = "".concat(FILE_MANAGER_NOTIFICATION_DRAWER_CLASS, "-panel");
var FILE_MANAGER_NOTIFICATION_POPUP_CLASS = "".concat(FILE_MANAGER_NOTIFICATION_CLASS, "-popup");
var FILE_MANAGER_NOTIFICATION_POPUP_ERROR_CLASS = "".concat(FILE_MANAGER_NOTIFICATION_CLASS, "-popup-error");
var FILE_MANAGER_NOTIFICATION_COMMON_CLASS = "".concat(FILE_MANAGER_NOTIFICATION_CLASS, "-common");
var FILE_MANAGER_NOTIFICATION_SEPARATOR_CLASS = "".concat(FILE_MANAGER_NOTIFICATION_CLASS, "-separator");
var FILE_MANAGER_NOTIFICATION_DETAILS_CLASS = "".concat(FILE_MANAGER_NOTIFICATION_CLASS, "-details");
var FILE_MANAGER_NOTIFICATION_COMMON_NO_ITEM_CLASS = "".concat(FILE_MANAGER_NOTIFICATION_CLASS, "-common-no-item");

var FileManagerNotificationControl = /*#__PURE__*/function (_Widget) {
  _inheritsLoose(FileManagerNotificationControl, _Widget);

  function FileManagerNotificationControl() {
    return _Widget.apply(this, arguments) || this;
  }

  var _proto = FileManagerNotificationControl.prototype;

  _proto._initMarkup = function _initMarkup() {
    var _this = this;

    _Widget.prototype._initMarkup.call(this);

    this._initActions();

    this._actionProgressStatus = 'default';
    this._operationInProgressCount = 0;
    this._failedOperationCount = 0;
    this._isInAdaptiveState = this._isSmallScreen();
    var $progressPanelContainer = this.option('progressPanelContainer');
    var $progressDrawer = (0, _renderer.default)('<div>').addClass(FILE_MANAGER_NOTIFICATION_DRAWER_CLASS).appendTo($progressPanelContainer);
    (0, _renderer.default)('<div>').addClass(FILE_MANAGER_NOTIFICATION_DRAWER_PANEL_CLASS).appendTo($progressDrawer);
    var drawerOptions = (0, _extend.extend)({
      opened: false,
      position: 'right',
      template: function template(container) {
        return _this._ensureProgressPanelCreated(container);
      }
    }, this._getProgressDrawerAdaptiveOptions());
    this._progressDrawer = this._createComponent($progressDrawer, _ui2.default, drawerOptions);
    var $drawerContent = $progressDrawer.find(".".concat(FILE_MANAGER_NOTIFICATION_DRAWER_PANEL_CLASS)).first();
    var contentRenderer = this.option('contentTemplate');

    if ((0, _type.isFunction)(contentRenderer)) {
      contentRenderer($drawerContent);
    }
  };

  _proto.tryShowProgressPanel = function tryShowProgressPanel() {
    var _this2 = this;

    var promise = new _deferred.Deferred();

    if (this._actionProgressStatus === 'default' || this._isProgressDrawerOpened()) {
      return promise.resolve().promise();
    }

    setTimeout(function () {
      _this2._progressDrawer.show().done(promise.resolve);

      _this2._getNotificationPopup().hide();

      _this2._tryHideActionProgress();
    });
    return promise.promise();
  };

  _proto.addOperation = function addOperation(processingMessage, allowCancel, allowProgressAutoUpdate) {
    this._operationInProgressCount++;

    var operationInfo = this._progressPanel.addOperation(processingMessage, allowCancel, allowProgressAutoUpdate);

    this._updateActionProgress(processingMessage, 'progress');

    return operationInfo;
  };

  _proto.addOperationDetails = function addOperationDetails(info, details, showCloseButton) {
    this._progressPanel.addOperationDetails(info, details, showCloseButton);
  };

  _proto.updateOperationItemProgress = function updateOperationItemProgress(operationInfo, itemIndex, itemProgress, commonProgress) {
    this._progressPanel.updateOperationItemProgress(operationInfo, itemIndex, itemProgress, commonProgress);
  };

  _proto.completeOperationItem = function completeOperationItem(operationInfo, itemIndex, commonProgress) {
    this._progressPanel.completeOperationItem(operationInfo, itemIndex, commonProgress);
  };

  _proto.completeOperation = function completeOperation(info, commonText, isError, statusText) {
    this._operationInProgressCount--;

    if (isError) {
      this._failedOperationCount++;
    } else {
      this._showPopup(commonText);
    }

    this._progressPanel.completeOperation(info, commonText, isError, statusText);

    if (!this._isProgressDrawerOpened() || !this._tryHideActionProgress()) {
      var status = this._failedOperationCount === 0 ? 'success' : 'error';

      this._updateActionProgress('', status);
    }
  };

  _proto.completeSingleOperationWithError = function completeSingleOperationWithError(operationInfo, errorInfo) {
    this._progressPanel.completeSingleOperationWithError(operationInfo, errorInfo.detailErrorText);

    this._notifyError(errorInfo);
  };

  _proto.addOperationDetailsError = function addOperationDetailsError(operationInfo, errorInfo) {
    this._progressPanel.addOperationDetailsError(operationInfo, errorInfo.itemIndex, errorInfo.detailErrorText);

    this._notifyError(errorInfo);
  };

  _proto._hideProgressPanel = function _hideProgressPanel() {
    var _this3 = this;

    setTimeout(function () {
      return _this3._progressDrawer.hide();
    });
  };

  _proto._tryHideActionProgress = function _tryHideActionProgress() {
    if (this._operationInProgressCount === 0 && this._failedOperationCount === 0) {
      this._updateActionProgress('', 'default');

      return true;
    }

    return false;
  };

  _proto._updateActionProgress = function _updateActionProgress(message, status) {
    this._actionProgressStatus = status;

    this._raiseActionProgress(message, status);
  };

  _proto._isSmallScreen = function _isSmallScreen() {
    if (!(0, _window.hasWindow)()) {
      return false;
    }

    return (0, _renderer.default)(window).width() <= ADAPTIVE_STATE_SCREEN_WIDTH;
  };

  _proto._dimensionChanged = function _dimensionChanged(dimension) {
    if (!dimension || dimension !== 'height') {
      this._checkAdaptiveState();
    }
  };

  _proto._checkAdaptiveState = function _checkAdaptiveState() {
    var oldState = this._isInAdaptiveState;
    this._isInAdaptiveState = this._isSmallScreen();

    if (this._progressDrawer && oldState !== this._isInAdaptiveState) {
      if (this._progressPanel) {
        this._progressPanel.$element().detach();
      }

      var options = this._getProgressDrawerAdaptiveOptions();

      this._progressDrawer.option(options);
    }
  };

  _proto._getProgressDrawerAdaptiveOptions = function _getProgressDrawerAdaptiveOptions() {
    if (this._isInAdaptiveState) {
      return {
        openedStateMode: 'overlap',
        shading: true,
        closeOnOutsideClick: true
      };
    } else {
      return {
        openedStateMode: 'shrink',
        shading: false,
        closeOnOutsideClick: false
      };
    }
  };

  _proto._ensureProgressPanelCreated = function _ensureProgressPanelCreated(container) {
    var _this4 = this;

    if (!this._progressPanel) {
      var $progressPanelElement = (0, _renderer.default)('<div>').appendTo(container);
      this._progressPanel = this._createComponent($progressPanelElement, this._getProgressPanelComponent(), {
        onOperationClosed: function onOperationClosed(_ref) {
          var info = _ref.info;
          return _this4._onProgressPanelOperationClosed(info);
        },
        onOperationCanceled: function onOperationCanceled(_ref2) {
          var info = _ref2.info;
          return _this4._raiseOperationCanceled(info);
        },
        onOperationItemCanceled: function onOperationItemCanceled(_ref3) {
          var item = _ref3.item,
              itemIndex = _ref3.itemIndex;
          return _this4._raiseOperationItemCanceled(item, itemIndex);
        },
        onPanelClosed: function onPanelClosed() {
          return _this4._hideProgressPanel();
        }
      });
    } else {
      this._progressPanel.$element().appendTo(container);
    }
  };

  _proto._getProgressPanelComponent = function _getProgressPanelComponent() {
    return _uiFile_managerNotification.default;
  };

  _proto._notifyError = function _notifyError(errorInfo) {
    this._showPopupError(errorInfo);

    this._updateActionProgress(errorInfo.commonErrorText, 'error');
  };

  _proto._onProgressPanelOperationClosed = function _onProgressPanelOperationClosed(info) {
    if (info.hasError) {
      this._failedOperationCount--;

      this._tryHideActionProgress();
    }
  };

  _proto._isProgressDrawerOpened = function _isProgressDrawerOpened() {
    return this._progressDrawer.option('opened');
  };

  _proto._showPopup = function _showPopup(content, errorMode) {
    if (this._isProgressDrawerOpened()) {
      return;
    }

    this._getNotificationPopup()._wrapper().toggleClass(FILE_MANAGER_NOTIFICATION_POPUP_ERROR_CLASS, !!errorMode);

    this._getNotificationPopup().option('contentTemplate', content);

    if (!this._getNotificationPopup().option('visible')) {
      this._getNotificationPopup().show();
    }
  };

  _proto._showPopupError = function _showPopupError(errorInfo) {
    var $content = (0, _renderer.default)('<div>');
    var $message = (0, _renderer.default)('<div>').addClass(FILE_MANAGER_NOTIFICATION_COMMON_CLASS).text(errorInfo.commonErrorText);
    var $separator = (0, _renderer.default)('<div>').addClass(FILE_MANAGER_NOTIFICATION_SEPARATOR_CLASS);
    (0, _renderer.default)('<div>').appendTo($separator);
    var $details = (0, _renderer.default)('<div>').addClass(FILE_MANAGER_NOTIFICATION_DETAILS_CLASS);

    if (errorInfo.item) {
      this._progressPanel.createErrorDetailsProgressBox($details, errorInfo.item, errorInfo.detailErrorText);
    } else {
      $message.addClass(FILE_MANAGER_NOTIFICATION_COMMON_NO_ITEM_CLASS);

      this._progressPanel.renderError($details, $separator, errorInfo.detailErrorText);
    }

    $content.append($message, $separator, $details);

    this._showPopup($content, true);
  };

  _proto._getNotificationPopup = function _getNotificationPopup() {
    if (!this._notificationPopup) {
      var $popup = (0, _renderer.default)('<div>').addClass(FILE_MANAGER_NOTIFICATION_POPUP_CLASS).appendTo(this.$element());
      this._notificationPopup = this._createComponent($popup, _popup.default, {
        container: this.$element(),
        width: 'auto',
        height: 'auto',
        showTitle: false,
        dragEnabled: false,
        shading: false,
        visible: false,
        closeOnOutsideClick: true,
        animation: {
          duration: 0
        },
        position: {
          my: 'right top',
          at: 'right top',
          of: this.option('positionTarget'),
          offset: '-10 -5'
        }
      });
    }

    return this._notificationPopup;
  };

  _proto._raiseActionProgress = function _raiseActionProgress(message, status) {
    this._actions.onActionProgress({
      message: message,
      status: status
    });
  };

  _proto._raiseOperationCanceled = function _raiseOperationCanceled(info) {
    this._actions.onOperationCanceled({
      info: info
    });
  };

  _proto._raiseOperationItemCanceled = function _raiseOperationItemCanceled(item, index) {
    this._actions.onOperationItemCanceled({
      item: item,
      itemIndex: index
    });
  };

  _proto._initActions = function _initActions() {
    this._actions = {
      onActionProgress: this._createActionByOption('onActionProgress'),
      onOperationCanceled: this._createActionByOption('onOperationCanceled'),
      onOperationItemCanceled: this._createActionByOption('onOperationItemCanceled')
    };
  };

  _proto._getDefaultOptions = function _getDefaultOptions() {
    return (0, _extend.extend)(_Widget.prototype._getDefaultOptions.call(this), {
      progressPanelContainer: null,
      contentTemplate: null,
      onActionProgress: null,
      onOperationCanceled: null,
      onOperationItemCanceled: null
    });
  };

  _proto._optionChanged = function _optionChanged(args) {
    var name = args.name;

    switch (name) {
      case 'progressPanelContainer':
      case 'contentTemplate':
        break;

      case 'onActionProgress':
      case 'onOperationCanceled':
      case 'onOperationItemCanceled':
        this._actions[name] = this._createActionByOption(name);
        break;

      default:
        _Widget.prototype._optionChanged.call(this, args);

    }
  };

  return FileManagerNotificationControl;
}(_ui.default);

exports.default = FileManagerNotificationControl;
module.exports = exports.default;