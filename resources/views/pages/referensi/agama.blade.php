@extends('layouts.default', ['sidebarSearch' => true])

@section('title', 'Referensi Agama')

@section('content')


		<!-- begin panel -->
		<div class="panel panel-info">
			<!-- begin panel-heading -->
			<div class="panel-heading">
				<h4 class="panel-title">Referensi Agama </h4>
				<div class="panel-heading-btn">
					<a href="javascript:;" class="btn btn-xs btn-icon btn-circle btn-warning"
						data-click="panel-collapse"><i class="fa fa-minus"></i></a>
				</div>
			</div>
			<!-- end panel-heading -->
			<!-- begin panel-body -->
			<div class="panel-body">
                <div id="grid-agama" style="height: 640px; width:100%;"></div>
			</div>
			<!-- end panel-body -->
		</div>
		<!-- end panel -->

@endsection

@push('scripts')
<script>

var store = new DevExpress.data.CustomStore({
        key: "id",
        load: function() {
            return sendRequest(apiurl + "/ref-agama");
        },
        insert: function(values) {
            return sendRequest(apiurl + "/ref-agama", "POST", values);
        },
        update: function(key, values) {
            return sendRequest(apiurl + "/ref-agama/"+key, "PUT", values);
        },
        remove: function(key) {
            return sendRequest(apiurl + "/ref-agama/"+key, "DELETE");
        }
    });

    function moveEditColumnToLeft(dataGrid) {
		dataGrid.columnOption("command:edit", { 
			visibleIndex: -1,
			width: 80 
		});
    }

    // attribute
    var dataGrid = $("#grid-agama").dxDataGrid({    
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
            mode: "multiple"
        },
        editing: {
            useIcons:true,
            mode: "cell",
            allowAdding: true,
            allowUpdating: true,
            allowDeleting: true,
        },
        scrolling: {
            mode: "virtual"
        },
        columns: [
            {
                caption: '#',
                formItem: { 
                    visible: false
                },
                width: 40,
                cellTemplate: function(container, options) {
                    container.text(options.rowIndex +1);
                }
            },
            { 
                dataField: "keterangan_agama",
                caption: "Agama",
                validationRules: [
                    { type: "required" }
                ]
            }
           
        ],
        export: {
            enabled: true,
            fileName: "ref-agama",
            excelFilterEnabled: true,
            allowExportSelectedData: true
        },
        onContentReady: function(e){
            moveEditColumnToLeft(e.component);
        },
        onEditorPreparing: function(e) {
       
        },
        onToolbarPreparing: function(e) {
            dataGrid = e.component;
    
            e.toolbarOptions.items.unshift({						
                location: "after",
                widget: "dxButton",
                options: {
                    hint: "Refresh Data",
                    icon: "refresh",
                    onClick: function() {
                        dataGrid.refresh();
                    }
                }
            })
        },
    }).dxDataGrid("instance");

</script>

@endpush
