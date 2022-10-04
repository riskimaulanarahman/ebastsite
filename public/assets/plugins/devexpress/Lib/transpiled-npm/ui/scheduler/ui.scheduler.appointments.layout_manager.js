"use strict";

exports.default = void 0;

var _common = require("../../core/utils/common");

var _uiSchedulerAppointmentsStrategy = _interopRequireDefault(require("./rendering_strategies/ui.scheduler.appointments.strategy.vertical"));

var _uiSchedulerAppointmentsStrategy2 = _interopRequireDefault(require("./rendering_strategies/ui.scheduler.appointments.strategy.horizontal"));

var _uiSchedulerAppointmentsStrategy3 = _interopRequireDefault(require("./rendering_strategies/ui.scheduler.appointments.strategy.horizontal_month_line"));

var _uiSchedulerAppointmentsStrategy4 = _interopRequireDefault(require("./rendering_strategies/ui.scheduler.appointments.strategy.horizontal_month"));

var _uiSchedulerAppointmentsStrategy5 = _interopRequireDefault(require("./rendering_strategies/ui.scheduler.appointments.strategy.agenda"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RENDERING_STRATEGIES = {
  'horizontal': _uiSchedulerAppointmentsStrategy2.default,
  'horizontalMonth': _uiSchedulerAppointmentsStrategy4.default,
  'horizontalMonthLine': _uiSchedulerAppointmentsStrategy3.default,
  'vertical': _uiSchedulerAppointmentsStrategy.default,
  'agenda': _uiSchedulerAppointmentsStrategy5.default
};

var AppointmentLayoutManager = /*#__PURE__*/function () {
  function AppointmentLayoutManager(instance, renderingStrategy) {
    this.instance = instance;
    renderingStrategy && this.initRenderingStrategy(renderingStrategy);
  }

  var _proto = AppointmentLayoutManager.prototype;

  _proto.getCellDimensions = function getCellDimensions(options) {
    if (this.instance._workSpace) {
      return {
        width: this.instance._workSpace.getCellWidth(),
        height: this.instance._workSpace.getCellHeight(),
        allDayHeight: this.instance._workSpace.getAllDayHeight()
      };
    }
  };

  _proto.getGroupOrientation = function getGroupOrientation(options) {
    if (this.instance._workSpace) {
      options.callback(this.instance._workSpace._getRealGroupOrientation());
    }
  };

  _proto.initRenderingStrategy = function initRenderingStrategy(renderingStrategy) {
    var Strategy = RENDERING_STRATEGIES[renderingStrategy];
    this._renderingStrategyInstance = new Strategy(this.instance);
    this.renderingStrategy = renderingStrategy;
  };

  _proto.createAppointmentsMap = function createAppointmentsMap(items) {
    var _this = this;

    var _this$getCellDimensio = this.getCellDimensions(),
        allDayHeight = _this$getCellDimensio.allDayHeight;

    this.instance._allDayCellHeight = allDayHeight;
    this.getGroupOrientation({
      callback: function callback(groupOrientation) {
        return _this.instance._groupOrientation = groupOrientation;
      }
    });
    var appointments = items ? items.slice() : [];
    this._positionMap = this._renderingStrategyInstance.createTaskPositionMap(appointments);
    return this._createAppointmentsMapCore(appointments, this._positionMap);
  };

  _proto._createAppointmentsMapCore = function _createAppointmentsMapCore(list, positionMap) {
    var _this2 = this;

    return list.map(function (data, index) {
      if (!_this2._renderingStrategyInstance.keepAppointmentSettings()) {
        delete data.settings;
      }

      var appointmentSettings = positionMap[index];
      appointmentSettings.forEach(function (settings) {
        settings.direction = _this2.renderingStrategy === 'vertical' && !settings.allDay ? 'vertical' : 'horizontal';
      });
      return {
        itemData: data,
        settings: appointmentSettings,
        needRepaint: true,
        needRemove: false
      };
    });
  };

  _proto._isDataChanged = function _isDataChanged(data) {
    var updatedData = this.instance.getUpdatedAppointment();
    return updatedData === data || this.instance.getUpdatedAppointmentKeys().some(function (item) {
      return data[item.key] === item.value;
    });
  };

  _proto._isAppointmentShouldAppear = function _isAppointmentShouldAppear(currentAppointment, sourceAppointment) {
    return currentAppointment.needRepaint && sourceAppointment.needRemove;
  };

  _proto._isSettingChanged = function _isSettingChanged(settings, sourceSetting) {
    if (settings.length !== sourceSetting.length) {
      return true;
    }

    for (var i = 0; i < settings.length; i++) {
      var newSettings = settings[i];
      var oldSettings = sourceSetting[i];

      if (oldSettings) {
        // exclude sortedIndex property for comparison in commonUtils.equalByValue
        oldSettings.sortedIndex = newSettings.sortedIndex;
      }

      if (!(0, _common.equalByValue)(newSettings, oldSettings)) {
        return true;
      }
    }

    return false;
  };

  _proto._getAssociatedSourceAppointment = function _getAssociatedSourceAppointment(currentAppointment, sourceAppointments) {
    for (var i = 0; i < sourceAppointments.length; i++) {
      var item = sourceAppointments[i];

      if (item.itemData === currentAppointment.itemData) {
        return item;
      }
    }

    return null;
  };

  _proto._getDeletedAppointments = function _getDeletedAppointments(currentAppointments, sourceAppointments) {
    var result = [];

    for (var i = 0; i < sourceAppointments.length; i++) {
      var sourceAppointment = sourceAppointments[i];

      var currentAppointment = this._getAssociatedSourceAppointment(sourceAppointment, currentAppointments);

      if (!currentAppointment) {
        sourceAppointment.needRemove = true;
        result.push(sourceAppointment);
      }
    }

    return result;
  };

  _proto.getRepaintedAppointments = function getRepaintedAppointments(currentAppointments, sourceAppointments) {
    var _this3 = this;

    if (sourceAppointments.length === 0 || this.renderingStrategy === 'agenda') {
      return currentAppointments;
    }

    currentAppointments.forEach(function (appointment) {
      var sourceAppointment = _this3._getAssociatedSourceAppointment(appointment, sourceAppointments);

      if (sourceAppointment) {
        appointment.needRepaint = _this3._isDataChanged(appointment.itemData) || _this3._isSettingChanged(appointment.settings, sourceAppointment.settings) || _this3._isAppointmentShouldAppear(appointment, sourceAppointment);
      }
    });
    return currentAppointments.concat(this._getDeletedAppointments(currentAppointments, sourceAppointments));
  };

  _proto.getRenderingStrategyInstance = function getRenderingStrategyInstance() {
    return this._renderingStrategyInstance;
  };

  return AppointmentLayoutManager;
}();

var _default = AppointmentLayoutManager;
exports.default = _default;
module.exports = exports.default;