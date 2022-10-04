"use strict";

exports.default = void 0;

var _component_registrator = _interopRequireDefault(require("../../../core/component_registrator"));

var _component = _interopRequireDefault(require("../../preact_wrapper/component"));

var _data_grid = require("./data_grid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DataGrid = /*#__PURE__*/function (_BaseComponent) {
  _inheritsLoose(DataGrid, _BaseComponent);

  function DataGrid() {
    return _BaseComponent.apply(this, arguments) || this;
  }

  var _proto = DataGrid.prototype;

  _proto.getProps = function getProps() {
    var props = _BaseComponent.prototype.getProps.call(this);

    props.rowTemplate = this._createTemplateComponent(props, props.rowTemplate);
    props.onKeyDown = this._wrapKeyDownHandler(props.onKeyDown);
    return props;
  };

  _proto.beginCustomLoading = function beginCustomLoading(messageText) {
    return this.viewRef.beginCustomLoading(messageText);
  };

  _proto.byKey = function byKey(key) {
    return this.viewRef.byKey(key);
  };

  _proto.cancelEditData = function cancelEditData() {
    return this.viewRef.cancelEditData();
  };

  _proto.cellValue = function cellValue(rowIndex, dataField, value) {
    return this.viewRef.cellValue(rowIndex, dataField, value);
  };

  _proto.clearFilter = function clearFilter(filterName) {
    return this.viewRef.clearFilter(filterName);
  };

  _proto.clearSelection = function clearSelection() {
    return this.viewRef.clearSelection();
  };

  _proto.clearSorting = function clearSorting() {
    return this.viewRef.clearSorting();
  };

  _proto.closeEditCell = function closeEditCell() {
    return this.viewRef.closeEditCell();
  };

  _proto.collapseAdaptiveDetailRow = function collapseAdaptiveDetailRow() {
    return this.viewRef.collapseAdaptiveDetailRow();
  };

  _proto.columnCount = function columnCount() {
    return this.viewRef.columnCount();
  };

  _proto.columnOption = function columnOption(id, optionName, optionValue) {
    return this.viewRef.columnOption(id, optionName, optionValue);
  };

  _proto.deleteColumn = function deleteColumn(id) {
    return this.viewRef.deleteColumn(id);
  };

  _proto.deleteRow = function deleteRow(rowIndex) {
    return this.viewRef.deleteRow(rowIndex);
  };

  _proto.deselectAll = function deselectAll() {
    return this.viewRef.deselectAll();
  };

  _proto.deselectRows = function deselectRows(keys) {
    return this.viewRef.deselectRows(keys);
  };

  _proto.editCell = function editCell(rowIndex, dataField) {
    return this.viewRef.editCell(rowIndex, dataField);
  };

  _proto.editRow = function editRow(rowIndex) {
    return this.viewRef.editRow(rowIndex);
  };

  _proto.endCustomLoading = function endCustomLoading() {
    return this.viewRef.endCustomLoading();
  };

  _proto.expandAdaptiveDetailRow = function expandAdaptiveDetailRow(key) {
    return this.viewRef.expandAdaptiveDetailRow(key);
  };

  _proto.filter = function filter(filterExpr) {
    return this.viewRef.filter(filterExpr);
  };

  _proto.focus = function focus(element) {
    return this.viewRef.focus(this._patchElementParam(element));
  };

  _proto.getCellElement = function getCellElement(rowIndex, dataField) {
    return this.viewRef.getCellElement(rowIndex, dataField);
  };

  _proto.getCombinedFilter = function getCombinedFilter(returnDataField) {
    return this.viewRef.getCombinedFilter(returnDataField);
  };

  _proto.getDataSource = function getDataSource() {
    return this.viewRef.getDataSource();
  };

  _proto.getKeyByRowIndex = function getKeyByRowIndex(rowIndex) {
    return this.viewRef.getKeyByRowIndex(rowIndex);
  };

  _proto.getRowElement = function getRowElement(rowIndex) {
    return this.viewRef.getRowElement(rowIndex);
  };

  _proto.getRowIndexByKey = function getRowIndexByKey(key) {
    return this.viewRef.getRowIndexByKey(key);
  };

  _proto.getScrollable = function getScrollable() {
    return this.viewRef.getScrollable();
  };

  _proto.getVisibleColumnIndex = function getVisibleColumnIndex(id) {
    return this.viewRef.getVisibleColumnIndex(id);
  };

  _proto.hasEditData = function hasEditData() {
    return this.viewRef.hasEditData();
  };

  _proto.hideColumnChooser = function hideColumnChooser() {
    return this.viewRef.hideColumnChooser();
  };

  _proto.isAdaptiveDetailRowExpanded = function isAdaptiveDetailRowExpanded(key) {
    return this.viewRef.isAdaptiveDetailRowExpanded(key);
  };

  _proto.isRowFocused = function isRowFocused(key) {
    return this.viewRef.isRowFocused(key);
  };

  _proto.isRowSelected = function isRowSelected(key) {
    return this.viewRef.isRowSelected(key);
  };

  _proto.keyOf = function keyOf(obj) {
    return this.viewRef.keyOf(obj);
  };

  _proto.navigateToRow = function navigateToRow(key) {
    return this.viewRef.navigateToRow(key);
  };

  _proto.pageCount = function pageCount() {
    return this.viewRef.pageCount();
  };

  _proto.pageIndex = function pageIndex(newIndex) {
    return this.viewRef.pageIndex(newIndex);
  };

  _proto.pageSize = function pageSize(value) {
    return this.viewRef.pageSize(value);
  };

  _proto.refresh = function refresh(changesOnly) {
    return this.viewRef.refresh(changesOnly);
  };

  _proto.repaintRows = function repaintRows(rowIndexes) {
    return this.viewRef.repaintRows(rowIndexes);
  };

  _proto.saveEditData = function saveEditData() {
    return this.viewRef.saveEditData();
  };

  _proto.searchByText = function searchByText(text) {
    return this.viewRef.searchByText(text);
  };

  _proto.selectAll = function selectAll() {
    return this.viewRef.selectAll();
  };

  _proto.selectRows = function selectRows(keys, preserve) {
    return this.viewRef.selectRows(keys, preserve);
  };

  _proto.selectRowsByIndexes = function selectRowsByIndexes(indexes) {
    return this.viewRef.selectRowsByIndexes(indexes);
  };

  _proto.showColumnChooser = function showColumnChooser() {
    return this.viewRef.showColumnChooser();
  };

  _proto.undeleteRow = function undeleteRow(rowIndex) {
    return this.viewRef.undeleteRow(rowIndex);
  };

  _proto.updateDimensions = function updateDimensions() {
    return this.viewRef.updateDimensions();
  };

  _proto.addColumn = function addColumn(columnOptions) {
    return this.viewRef.addColumn(columnOptions);
  };

  _proto.addRow = function addRow() {
    return this.viewRef.addRow();
  };

  _proto.clearGrouping = function clearGrouping() {
    return this.viewRef.clearGrouping();
  };

  _proto.collapseAll = function collapseAll(groupIndex) {
    return this.viewRef.collapseAll(groupIndex);
  };

  _proto.collapseRow = function collapseRow(key) {
    return this.viewRef.collapseRow(key);
  };

  _proto.expandAll = function expandAll(groupIndex) {
    return this.viewRef.expandAll(groupIndex);
  };

  _proto.expandRow = function expandRow(key) {
    return this.viewRef.expandRow(key);
  };

  _proto.exportToExcel = function exportToExcel(selectionOnly) {
    return this.viewRef.exportToExcel(selectionOnly);
  };

  _proto.getSelectedRowKeys = function getSelectedRowKeys() {
    return this.viewRef.getSelectedRowKeys();
  };

  _proto.getSelectedRowsData = function getSelectedRowsData() {
    return this.viewRef.getSelectedRowsData();
  };

  _proto.getTotalSummaryValue = function getTotalSummaryValue(summaryItemName) {
    return this.viewRef.getTotalSummaryValue(summaryItemName);
  };

  _proto.getVisibleColumns = function getVisibleColumns(headerLevel) {
    return this.viewRef.getVisibleColumns(headerLevel);
  };

  _proto.getVisibleRows = function getVisibleRows() {
    return this.viewRef.getVisibleRows();
  };

  _proto.isRowExpanded = function isRowExpanded(key) {
    return this.viewRef.isRowExpanded(key);
  };

  _proto.totalCount = function totalCount() {
    return this.viewRef.totalCount();
  };

  _proto.getController = function getController(name) {
    return this.viewRef.getController(name);
  };

  _proto._getActionConfigs = function _getActionConfigs() {
    return {
      onCellClick: {},
      onCellDblClick: {},
      onCellHoverChanged: {},
      onCellPrepared: {},
      onContextMenuPreparing: {},
      onEditingStart: {},
      onEditorPrepared: {},
      onEditorPreparing: {},
      onExported: {},
      onExporting: {},
      onFileSaving: {},
      onFocusedCellChanged: {},
      onFocusedCellChanging: {},
      onFocusedRowChanged: {},
      onFocusedRowChanging: {},
      onRowClick: {},
      onRowDblClick: {},
      onRowPrepared: {},
      onAdaptiveDetailRowPreparing: {},
      onDataErrorOccurred: {},
      onInitNewRow: {},
      onRowCollapsed: {},
      onRowCollapsing: {},
      onRowExpanded: {},
      onRowExpanding: {},
      onRowInserted: {},
      onRowInserting: {},
      onRowRemoved: {},
      onRowRemoving: {},
      onRowUpdated: {},
      onRowUpdating: {},
      onRowValidating: {},
      onSelectionChanged: {},
      onToolbarPreparing: {},
      onActive: {},
      onDimensionChanged: {},
      onInactive: {},
      onKeyboardHandled: {},
      onVisibilityChange: {},
      onFocusIn: {},
      onFocusOut: {},
      onClick: {},
      onContentReady: {
        excludeValidators: ["disabled", "readOnly"]
      }
    };
  };

  _createClass(DataGrid, [{
    key: "_propsInfo",
    get: function get() {
      return {
        twoWay: [["filterValue", null, "filterValueChange"], ["focusedColumnIndex", -1, "focusedColumnIndexChange"], ["focusedRowIndex", -1, "focusedRowIndexChange"], ["focusedRowKey", null, "focusedRowKeyChange"], ["selectedRowKeys", [], "selectedRowKeysChange"], ["selectionFilter", [], "selectionFilterChange"]],
        allowNull: ["defaultFilterValue", "defaultFocusedRowKey", "accessKey", "filterValue", "focusedRowKey"],
        elements: []
      };
    }
  }, {
    key: "_viewComponent",
    get: function get() {
      return _data_grid.DataGrid;
    }
  }]);

  return DataGrid;
}(_component.default);

exports.default = DataGrid;
(0, _component_registrator.default)("dxDataGrid", DataGrid);
module.exports = exports.default;