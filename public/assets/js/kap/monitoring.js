$(document).ready(function(){
    role = $('.roleuser').val();

var store = new DevExpress.data.CustomStore({
    key: "id",
    load: function() {
        return sendRequest(apiurl + "/monitoring");
    },
    insert: function(values) {
        // values.lampiran = $path;
        return sendRequest(apiurl + "/monitoring", "POST", values);
    },
    update: function(key, values) {
        // if($path!=""){
        //     values.lampiran = $path;
        // }
        return sendRequest(apiurl + "/monitoring/"+key, "PUT", values);
    },
    remove: function(key) {
        return sendRequest(apiurl + "/monitoring/"+key, "DELETE");
    }
});

function moveEditColumnToLeft(dataGrid) {
    dataGrid.columnOption("command:edit", { 
        visibleIndex: -1,
        width: 80 
    });
}

date = new Date();

// attribute
// $.getJSON(apiurl+'/equipment',function(items) {

var dataGrid = $("#grid-monitoring").dxDataGrid({    
    dataSource: store,
    allowColumnReordering: true,
    allowColumnResizing: true,
    columnsAutoWidth: true,
    columnMinWidth: 130,
    columnHidingEnabled: false,
    wordWrapEnabled: true,
    showBorders: true,
    rowAlternationEnabled: true,
    filterRow: { visible: true },
    filterPanel: { visible: true },
    headerFilter: { visible: true },
    selection: {
        mode: "multiple"
    },
    editing: {
        useIcons:true,
        mode: "cell",
        allowAdding: (role == "admin")?true:false,
        allowUpdating: (role == "admin")?true:false,
        allowDeleting: (role == "admin")?true:false,
        
    },
    pager: {
        visible: true,
        showInfo: true,
    },
    scrolling: {
        mode: "virtual"
    },
    sorting: {
        mode: 'multiple',
    },
    columns: [
        { 
            dataField: "site",
            caption: "Site",
            width: 40,
            sortOrder: 'asc',
            // visible: (role=="admin")?true:false,
            validationRules: [{ type: "required" }]
        },
        { 
            dataField: "vendor_name",
            caption: "Vendor Name",
            width: 200,
            sortOrder: 'asc',
            // editorType: "dxSelectBox",
            // lookup: {
            //     dataSource: listKegiatan,  
            //     valueExpr: 'id',
            //     displayExpr: 'nama_kegiatan',
            // },
            validationRules: [{ type: "required" }]
        },
        { 
            dataField: "no_kap",
            caption: "No Kap",
            sortOrder: 'asc',
            width: 200,

        },
        { 
            dataField: "year",
            caption: "Year",
        },
        { 
            dataField: "subject",
            caption: "Subject",
            width: 150,
        },
        { 
            dataField: "contract_period",
            caption: "Contract Period",
        },
        { 
            dataField: "remarks_update",
            caption: "remarks_update",
        },
        { 
            dataField: "bva_status",
            caption: "bva status",
        },
        { 
            dataField: "bva_date",
            editorType: "dxDateBox",
            dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
            editorOptions: {
                displayFormat: "yyyy-MM-dd",
            }
        },
        { 
            dataField: "site_status",
            caption: "site status",
        },
        { 
            dataField: "site_date",
            editorType: "dxDateBox",
            dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
            editorOptions: {
                displayFormat: "yyyy-MM-dd",
            }
        },
        { 
            dataField: "cmd_status",
            caption: "cmd status",
        },
        { 
            dataField: "cmd_date",
            editorType: "dxDateBox",
            dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
            editorOptions: {
                displayFormat: "yyyy-MM-dd",
            }
        },
        { 
            dataField: "scm_status",
            caption: "scm status",
        },
        { 
            dataField: "scm_date",
            editorType: "dxDateBox",
            dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
            editorOptions: {
                displayFormat: "yyyy-MM-dd",
            }
        },
        { 
            dataField: "ho_status",
            caption: "ho status",
        },
        { 
            dataField: "ho_date",
            editorType: "dxDateBox",
            dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
            editorOptions: {
                displayFormat: "yyyy-MM-dd",
            }
        },
        { 
            dataField: "vendor_status",
            caption: "vendor status",
        },
        { 
            dataField: "vendor_date",
            editorType: "dxDateBox",
            dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
            editorOptions: {
                displayFormat: "yyyy-MM-dd",
            }
        },
        { 
            dataField: "dh_status",
            caption: "dh status",
        },
        { 
            dataField: "dh_date",
            editorType: "dxDateBox",
            dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
            editorOptions: {
                displayFormat: "yyyy-MM-dd",
            }
        },
        { 
            dataField: "ellipse_prpococv",
            caption: "ellipse pr/po/co/cv",
        },
        { 
            dataField: "ellipse_status",
            caption: "ellipse status",
        },
        // { 
        //     dataField: "category",
        //     caption: "category",
        //     width: 100,
        //     editorType: "dxSelectBox",
        //     lookup: {
        //         dataSource: listCategory,  
        //         valueExpr: 'name',
        //         displayExpr: 'name',
        //     },
        // },
        { 
            dataField: "created_at",
            editorType: "dxDateBox",
            dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
            editorOptions: {
                displayFormat: "yyyy-MM-dd",
            }
        },
        { 
            dataField: "last_update",
            editorType: "dxDateBox",
            dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
            editorOptions: {
                displayFormat: "yyyy-MM-dd",
            }
        },
        { 
            dataField: "createdby",
            caption: "createdby",
        },
        { 
            dataField: "updatedby",
            caption: "updatedby",
        },
        // {
        //     dataField: "lampiran",
        //     width: 70,
        //     allowFiltering: false,
        //     allowSorting: false,
        //     cellTemplate: cellTemplate,
        //     editCellTemplate: editCellTemplate
        // }
       
    ],
    export: {
        enabled: true,
        fileName: "data monitoring".date,
        excelFilterEnabled: true,
        allowExportSelectedData: true
    },
    masterDetail: {
        enabled: true,
        template(container, options) {
          const lastdata = options.data;
  
          $('<div>')
            .addClass('master-detail-caption')
            .text(`No KAP ${lastdata.no_kap} : `)
            .appendTo(container);
  
          $('<div>')
            .dxDataGrid({
              columnAutoWidth: true,
              showBorders: true,
              rowAlternationEnabled: true,
              dataSource: new DevExpress.data.DataSource({
                  store: new DevExpress.data.CustomStore({
                      key: 'no_kap',
                      //   data: items.data,
                      load: function() {
                          return sendRequest(apiurl + "/getkap","POST",{nokap:lastdata.no_kap});
                        }
                    }),
                    // filter: ['no_kap', '=', lastdata.no_kap],
                }),
                columns: [
                    { 
                        dataField: "site",
                        caption: "Site",
                    },
                    { 
                        dataField: "subcontractor",
                        caption: "Sub Contractor",
                    },
                    { 
                        dataField: "unit_no",
                        caption: "Unit No",
                    },
                    { 
                        dataField: "type",
                        caption: "Type",
                    },
                    { 
                        dataField: "description",
                        caption: "Description",
                    },
                    { 
                        dataField: "hire_type",
                        caption: "Hire Type",
                    },
                    { 
                        dataField: "period_start",
                        editorType: "dxDateBox",
                        dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
                        editorOptions: {
                            displayFormat: "yyyy-MM-dd",
                        }
                    },
                    { 
                        dataField: "period_end",
                        editorType: "dxDateBox",
                        dataType:"date", format:"dd-MM-yyyy",displayFormat: "dd-MM-yyyy",
                        editorOptions: {
                            displayFormat: "yyyy-MM-dd",
                        }
                    },
                    { 
                        dataField: "currency",
                        caption: "currency",
                        width: 50,
                    },
                    { 
                        dataField: "amount",
                        caption: "amount",
                        dataType: "number",
                        format: "fixedPoint",
                        editorOptions: {
                            format: "fixedPoint"
                        }
                    },
                    { 
                        dataField: "uom",
                        caption: "uom",
                    },
                    { 
                        dataField: "remarks",
                        caption: "remarks",
                    },
                    { 
                        dataField: "status",
                        caption: "status",
                    },
                    { 
                        dataField: "no_kap",
                        caption: "no_kap",
                        width: 150,
            
                    },
                    { 
                        dataField: "category",
                        caption: "category",
                        width: 150,
            
                    },
                ],
            }).appendTo(container);
        },
    },
    onInitialized: function(e) {
        datagrid = e.component;
    },
    onInitNewRow: function(e) {  
        // e.data.bulan = new Date().getMonth()+1;
        // e.data.tahun = new Date().getFullYear();
    } ,
    onContentReady: function(e){
        moveEditColumnToLeft(e.component);
    },
    onEditorPreparing: function(e) {
        // datagrid.getEditor("keterangan").option("value", 'some new text'); 
        if (e.parentType === 'dataRow' && e.dataField === 'createdby') {
            e.editorOptions.readOnly = true;
        }
        if (e.parentType === 'dataRow' && e.dataField === 'updatedby') {
            e.editorOptions.readOnly = true;
        }
        if (e.parentType === 'dataRow' && e.dataField === 'last_update') {
            e.editorOptions.readOnly = true;
        }
        if (e.parentType === 'dataRow' && e.dataField === 'created_at') {
            e.editorOptions.readOnly = true;
        }
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

function cellTemplate(container, options) {
  let imgElement = document.createElement("img");
  imgElement.setAttribute("src", "upload/" + options.value);
  imgElement.setAttribute("height", "50");
  imgElement.setAttribute("width", "70");
  container.append(imgElement);
}

function editCellTemplate(cellElement, cellInfo) {
  let buttonElement = document.createElement("div");
  buttonElement.classList.add("retryButton");
  let retryButton = $(buttonElement).dxButton({
    text: "Retry",
    visible: false,
    onClick: function() {
      // The retry UI/API is not implemented. Use a private API as shown at T611719.
      for (var i = 0; i < fileUploader._files.length; i++) {
        delete fileUploader._files[i].uploadStarted;
      }
      fileUploader.upload();
    }
  }).dxButton("instance");

  $path = "";
  $adafile = "";
  let fileUploaderElement = document.createElement("div");
  let fileUploader = $(fileUploaderElement).dxFileUploader({
    multiple: false,
    accept: "image/*",
    uploadMode: "instantly",
    name: "myFile",
    uploadUrl: apiurl + "/upload-berkas",
    onValueChanged: function(e) {
      let reader = new FileReader();
      reader.onload = function(args) {
        imageElement.setAttribute('src', args.target.result);
      }
      reader.readAsDataURL(e.value[0]); // convert to base64 string
    },
    onUploaded: function(e){
        $path = e.request.response;
        $adafile = false;
        cellInfo.setValue(e.request.responseText);
        retryButton.option("visible", false);
    //   cellInfo.setValue("upload/" + e.request.response);
    //   retryButton.option("visible", false);
    },
    onUploadError: function(e){
        $path = "";
        DevExpress.ui.notify(e.request.response,"error");
    //   let xhttp = e.request;
    //   if(xhttp.status === 400){
    //     e.message = e.error.response;
    //   }
    //   if(xhttp.readyState === 4 && xhttp.status === 0) {
    //     e.message = "Connection refused";
    //   }
    //   retryButton.option("visible", true);
    }
  }).dxFileUploader("instance");

  let imageElement = document.createElement("img");
  imageElement.classList.add("uploadedImage");
  imageElement.setAttribute('src', "upload/" +cellInfo.value);
  imageElement.setAttribute('height', "50");

  cellElement.append(imageElement);
  cellElement.append(fileUploaderElement);
  cellElement.append(buttonElement);
}

})