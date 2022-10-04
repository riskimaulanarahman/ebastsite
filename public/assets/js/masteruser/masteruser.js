// main
var store = new DevExpress.data.CustomStore({
	key: 'id',
	load: function() {
		return sendRequest(apiurl + '/master-user');
	},
	insert: function(values) {
		return sendRequest(apiurl + '/master-user', 'POST', values);
	},
	update: function(key, values) {
		return sendRequest(apiurl + '/master-user/' + key, 'PUT', values);
	},
	remove: function(key) {
		return sendRequest(apiurl + '/master-user/' + key, 'DELETE');
	}
});

function moveEditColumnToLeft(dataGrid) {
	dataGrid.columnOption('command:edit', {
		visibleIndex: -1,
		width: 80
	});
}

RoleType = [
	{ id: 1, roletype: 'admin' },
	{ id: 2, roletype: 'vendor' },
	{ id: 3, roletype: 'reviewer' },
	{ id: 4, roletype: 'spv' }
];

Vendor = [
	{ id: 1, vendortype: 'EID' },
	{ id: 2, vendortype: 'ZTE' },
];
// attribute
var dataGrid = $('#master-user')
	.dxDataGrid({
		dataSource: store,
		allowColumnReordering: true,
		allowColumnResizing: true,
		columnsAutoWidth: true,
		columnMinWidth: 80,
		wordWrapEnabled: true,
		showBorders: true,
		filterRow: { visible: true },
		filterPanel: { visible: true },
		headerFilter: { visible: true },
		selection: {
			mode: 'multiple'
		},
		editing: {
			useIcons: true,
			mode: 'popup',
			allowAdding: true,
			allowUpdating: true,
			allowDeleting: true,
			popup: {
				title: 'User Info',
				showTitle: true,
				width: 700,
				height: 525,
				position: {
					my: 'center',
					at: 'center',
					of: window
				}
			},
			form: {
				items: [
					{
						itemType: 'group',
						colCount: 2,
						colSpan: 2,
						items: [
							{
								dataField: 'nama_lengkap'
							}
						]
					},
					{
						itemType: 'group',
						colCount: 2,
						colSpan: 2,
						caption: 'Login Info',
						items: [ 'role','vendor', 'email', 'username', 'password' ]
					}
				]
			}
		},
		scrolling: {
			mode: 'virtual'
		},
		columns: [
			{
				caption: '#',
				formItem: {
					visible: false
				},
				width: 40,
				cellTemplate: function(container, options) {
					container.text(options.rowIndex + 1);
				}
			},
			{
				dataField: 'nama_lengkap',
				caption: 'nama lengkap',
				validationRules: [ { type: 'required' } ]
			},
			{
				dataField: 'username',
				validationRules: [ { type: 'required' } ]
			},
			{
				dataField: 'password',
				visible: false
			},
			{
				dataField: 'email',
				validationRules: [
					{
						type: 'email'
					},
					{
						type: 'required'
					}
				]
			},
			{
				dataField: 'role',
				editorType: 'dxSelectBox',
				validationRules: [
					{
						type: 'required'
					}
				],
				editorOptions: {
					dataSource: RoleType,
					valueExpr: 'roletype',
					displayExpr: 'roletype'
				}
			},
			{
				dataField: 'vendor',
				editorType: 'dxSelectBox',
				editorOptions: {
					dataSource: Vendor,
					valueExpr: 'vendortype',
					displayExpr: 'vendortype'
				}
			}
		],
		export: {
			enabled: true,
			fileName: 'master-user',
			excelFilterEnabled: true,
			allowExportSelectedData: true
		},
		onContentReady: function(e) {
			moveEditColumnToLeft(e.component);
		},
		onEditorPreparing: function(e) {
			if (e.dataField === 'password' && e.parentType === 'dataRow') {
				e.editorOptions.value = '';
			}
		},
		onToolbarPreparing: function(e) {
			dataGrid = e.component;

			e.toolbarOptions.items.unshift({
				location: 'after',
				widget: 'dxButton',
				options: {
					hint: 'Refresh Data',
					icon: 'refresh',
					onClick: function() {
						dataGrid.refresh();
					}
				}
			});
		}
	})
	.dxDataGrid('instance');
