"use strict";

exports.default = void 0;

var _renderer = _interopRequireDefault(require("../../../core/renderer"));

var _common = require("../../../core/utils/common");

var _component_registrator = _interopRequireDefault(require("../../../core/component_registrator"));

var _uiSchedulerWork_space = _interopRequireDefault(require("./ui.scheduler.work_space.indicator"));

var _date = _interopRequireDefault(require("../../../core/utils/date"));

var _position = require("../../../core/utils/position");

var _date2 = _interopRequireDefault(require("../../../localization/date"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var MONTH_CLASS = 'dx-scheduler-work-space-month';
var DATE_TABLE_CURRENT_DATE_CLASS = 'dx-scheduler-date-table-current-date';
var DATE_TABLE_FIRST_OF_MONTH_CLASS = 'dx-scheduler-date-table-first-of-month';
var DATE_TABLE_OTHER_MONTH_DATE_CLASS = 'dx-scheduler-date-table-other-month';
var DATE_TABLE_SCROLLABLE_FIXED_CLASS = 'dx-scheduler-scrollable-fixed-content';
var DAYS_IN_WEEK = 7;
var DAY_IN_MILLISECONDS = 86400000;
var toMs = _date.default.dateToMilliseconds;

var SchedulerWorkSpaceMonth = /*#__PURE__*/function (_SchedulerWorkSpace) {
  _inheritsLoose(SchedulerWorkSpaceMonth, _SchedulerWorkSpace);

  function SchedulerWorkSpaceMonth() {
    return _SchedulerWorkSpace.apply(this, arguments) || this;
  }

  var _proto = SchedulerWorkSpaceMonth.prototype;

  _proto._toggleFixedScrollableClass = function _toggleFixedScrollableClass() {
    this._dateTableScrollable.$content().toggleClass(DATE_TABLE_SCROLLABLE_FIXED_CLASS, !this._isWorkSpaceWithCount() && !this._isVerticalGroupedWorkSpace());
  };

  _proto._getElementClass = function _getElementClass() {
    return MONTH_CLASS;
  };

  _proto._getRowCount = function _getRowCount() {
    return this._isWorkSpaceWithCount() ? 4 * this.option('intervalCount') + 2 : 6;
  };

  _proto._getCellCount = function _getCellCount() {
    return DAYS_IN_WEEK;
  };

  _proto._getDateByIndex = function _getDateByIndex(headerIndex) {
    var resultDate = new Date(this._firstViewDate);
    resultDate.setDate(this._firstViewDate.getDate() + headerIndex);
    return resultDate;
  };

  _proto._getFormat = function _getFormat() {
    return this._formatWeekday;
  };

  _proto._calculateCellIndex = function _calculateCellIndex(rowIndex, cellIndex) {
    if (this._isVerticalGroupedWorkSpace()) {
      rowIndex = rowIndex % this._getRowCount();
    } else {
      cellIndex = cellIndex % this._getCellCount();
    }

    return rowIndex * this._getCellCount() + cellIndex;
  };

  _proto._getInterval = function _getInterval() {
    return DAY_IN_MILLISECONDS;
  };

  _proto._getIntervalBetween = function _getIntervalBetween(currentDate) {
    var firstViewDate = this.getStartViewDate();

    var timeZoneOffset = _date.default.getTimezonesDifference(firstViewDate, currentDate);

    return currentDate.getTime() - (firstViewDate.getTime() - this.option('startDayHour') * 3600000) - timeZoneOffset;
  };

  _proto._getDateByCellIndexes = function _getDateByCellIndexes(rowIndex, cellIndex) {
    var date = _SchedulerWorkSpace.prototype._getDateByCellIndexes.call(this, rowIndex, cellIndex);

    this._setStartDayHour(date);

    return date;
  } // TODO: temporary fix, in the future, if we replace table layout on div layout, getCellWidth method need remove. Details in T712431
  // TODO: there is a test for this bug, when changing the layout, the test will also be useless
  ;

  _proto.getCellWidth = function getCellWidth() {
    var _this = this;

    return this.cache.get('cellWidth', function () {
      var DAYS_IN_WEEK = 7;
      var averageWidth = 0;

      _this._getCells().slice(0, DAYS_IN_WEEK).each(function (index, element) {
        return averageWidth += (0, _position.getBoundingRect)(element).width;
      });

      return averageWidth / DAYS_IN_WEEK;
    });
  };

  _proto._calculateHiddenInterval = function _calculateHiddenInterval() {
    return 0;
  };

  _proto._insertAllDayRowsIntoDateTable = function _insertAllDayRowsIntoDateTable() {
    return false;
  };

  _proto._getCellCoordinatesByIndex = function _getCellCoordinatesByIndex(index) {
    var rowIndex = Math.floor(index / this._getCellCount());
    var cellIndex = index - this._getCellCount() * rowIndex;
    return {
      rowIndex: rowIndex,
      cellIndex: cellIndex
    };
  };

  _proto._createWorkSpaceElements = function _createWorkSpaceElements() {
    if (this._isVerticalGroupedWorkSpace()) {
      this._createWorkSpaceScrollableElements();
    } else {
      _SchedulerWorkSpace.prototype._createWorkSpaceElements.call(this);
    }
  };

  _proto._needCreateCrossScrolling = function _needCreateCrossScrolling() {
    return this.option('crossScrollingEnabled') || this._isVerticalGroupedWorkSpace();
  };

  _proto._renderTimePanel = function _renderTimePanel() {
    return (0, _common.noop)();
  };

  _proto._renderAllDayPanel = function _renderAllDayPanel() {
    return (0, _common.noop)();
  };

  _proto._getTableAllDay = function _getTableAllDay() {
    return (0, _common.noop)();
  };

  _proto._toggleAllDayVisibility = function _toggleAllDayVisibility() {
    return (0, _common.noop)();
  };

  _proto._changeAllDayVisibility = function _changeAllDayVisibility() {
    return (0, _common.noop)();
  };

  _proto._setFirstViewDate = function _setFirstViewDate() {
    var firstMonthDate = _date.default.getFirstMonthDate(this._getViewStartByOptions());

    this._firstViewDate = _date.default.getFirstWeekDate(firstMonthDate, this.option('firstDayOfWeek') || _date2.default.firstDayOfWeekIndex());

    this._setStartDayHour(this._firstViewDate);

    var date = this._getViewStartByOptions();

    this._minVisibleDate = new Date(date.setDate(1));
    this._maxVisibleDate = new Date(new Date(date.setMonth(date.getMonth() + this.option('intervalCount'))).setDate(0));
  };

  _proto._getViewStartByOptions = function _getViewStartByOptions() {
    if (!this.option('startDate')) {
      return new Date(this.option('currentDate').getTime());
    } else {
      var startDate = this._getStartViewDate();

      var currentDate = this.option('currentDate');
      var diff = startDate.getTime() <= currentDate.getTime() ? 1 : -1;
      var endDate = new Date(new Date(this._getStartViewDate().setMonth(this._getStartViewDate().getMonth() + diff * this.option('intervalCount'))));

      while (!this._dateInRange(currentDate, startDate, endDate, diff)) {
        startDate = new Date(endDate);

        if (diff > 0) {
          startDate.setDate(1);
        }

        endDate = new Date(new Date(endDate.setMonth(endDate.getMonth() + diff * this.option('intervalCount'))));
      }

      return diff > 0 ? startDate : endDate;
    }
  };

  _proto._getStartViewDate = function _getStartViewDate() {
    var firstMonthDate = _date.default.getFirstMonthDate(this.option('startDate'));

    return firstMonthDate;
  };

  _proto._renderTableBody = function _renderTableBody(options) {
    options.getCellText = this._getCellText.bind(this);

    _SchedulerWorkSpace.prototype._renderTableBody.call(this, options);
  };

  _proto._getCellText = function _getCellText(rowIndex, cellIndex) {
    if (this.isGroupedByDate()) {
      cellIndex = Math.floor(cellIndex / this._getGroupCount());
    } else {
      cellIndex = cellIndex % this._getCellCount();
    }

    var date = this._getDate(rowIndex, cellIndex);

    if (this._isWorkSpaceWithCount() && this._isFirstDayOfMonth(date)) {
      return this._formatMonthAndDay(date);
    }

    return _date2.default.format(date, 'dd');
  };

  _proto._formatMonthAndDay = function _formatMonthAndDay(date) {
    var monthName = _date2.default.getMonthNames('abbreviated')[date.getMonth()];

    return [monthName, _date2.default.format(date, 'day')].join(' ');
  };

  _proto._getDate = function _getDate(week, day) {
    var result = new Date(this._firstViewDate);

    var lastRowInDay = this._getRowCount();

    result.setDate(result.getDate() + week % lastRowInDay * DAYS_IN_WEEK + day);
    return result;
  };

  _proto._updateIndex = function _updateIndex(index) {
    return index;
  };

  _proto._prepareCellData = function _prepareCellData(rowIndex, cellIndex, cell) {
    var data = _SchedulerWorkSpace.prototype._prepareCellData.call(this, rowIndex, cellIndex, cell);

    var $cell = (0, _renderer.default)(cell);
    $cell.toggleClass(DATE_TABLE_CURRENT_DATE_CLASS, this._isCurrentDate(data.startDate)).toggleClass(DATE_TABLE_FIRST_OF_MONTH_CLASS, this._isFirstDayOfMonth(data.startDate)).toggleClass(DATE_TABLE_OTHER_MONTH_DATE_CLASS, this._isOtherMonth(data.startDate));
    return data;
  };

  _proto._isCurrentDate = function _isCurrentDate(cellDate) {
    return _date.default.sameDate(cellDate, this._getToday());
  };

  _proto._isFirstDayOfMonth = function _isFirstDayOfMonth(cellDate) {
    return this._isWorkSpaceWithCount() && cellDate.getDate() === 1;
  };

  _proto._isOtherMonth = function _isOtherMonth(cellDate) {
    return !_date.default.dateInRange(cellDate, this._minVisibleDate, this._maxVisibleDate, 'date');
  };

  _proto.isIndicationAvailable = function isIndicationAvailable() {
    return false;
  };

  _proto.getCellDuration = function getCellDuration() {
    return this._calculateDayDuration() * 3600000;
  };

  _proto.getIntervalDuration = function getIntervalDuration() {
    return toMs('day');
  };

  _proto.getTimePanelWidth = function getTimePanelWidth() {
    return 0;
  };

  _proto.getPositionShift = function getPositionShift(timeShift) {
    return {
      cellPosition: timeShift * this.getCellWidth(),
      top: 0,
      left: 0
    };
  };

  _proto.getCellCountToLastViewDate = function getCellCountToLastViewDate(date) {
    var firstDateTime = date.getTime();
    var lastDateTime = this.getEndViewDate().getTime();
    var dayDurationInMs = this.getCellDuration();
    return Math.ceil((lastDateTime - firstDateTime) / dayDurationInMs);
  };

  _proto.supportAllDayRow = function supportAllDayRow() {
    return false;
  };

  _proto.keepOriginalHours = function keepOriginalHours() {
    return true;
  };

  _proto.calculateEndDate = function calculateEndDate(startDate) {
    var startDateCopy = new Date(startDate);
    return new Date(startDateCopy.setHours(this.option('endDayHour')));
  };

  _proto.getWorkSpaceLeftOffset = function getWorkSpaceLeftOffset() {
    return 0;
  };

  _proto.needApplyCollectorOffset = function needApplyCollectorOffset() {
    return true;
  };

  _proto._getDateTableBorderOffset = function _getDateTableBorderOffset() {
    return this._getDateTableBorder();
  };

  _proto._getCellPositionByIndex = function _getCellPositionByIndex(index, groupIndex) {
    var position = _SchedulerWorkSpace.prototype._getCellPositionByIndex.call(this, index, groupIndex);

    var rowIndex = this._getCellCoordinatesByIndex(index).rowIndex;

    var calculatedTopOffset;

    if (!this._isVerticalGroupedWorkSpace()) {
      calculatedTopOffset = this.getCellHeight() * rowIndex;
    } else {
      calculatedTopOffset = this.getCellHeight() * (rowIndex + groupIndex * this._getRowCount());
    }

    if (calculatedTopOffset) {
      position.top = calculatedTopOffset;
    }

    return position;
  };

  _proto._getHeaderDate = function _getHeaderDate() {
    return this._getViewStartByOptions();
  };

  _proto._supportCompactDropDownAppointments = function _supportCompactDropDownAppointments() {
    return false;
  };

  _proto.scrollToTime = function scrollToTime() {
    return (0, _common.noop)();
  };

  _proto._getRowCountWithAllDayRows = function _getRowCountWithAllDayRows() {
    return this._getRowCount();
  };

  return SchedulerWorkSpaceMonth;
}(_uiSchedulerWork_space.default);

(0, _component_registrator.default)('dxSchedulerWorkSpaceMonth', SchedulerWorkSpaceMonth);
var _default = SchedulerWorkSpaceMonth;
exports.default = _default;
module.exports = exports.default;