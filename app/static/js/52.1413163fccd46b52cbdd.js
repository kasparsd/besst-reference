webpackJsonp([52],{2280:function(e,t,i){var s=i(2)(i(2428),i(2429),function(e){i(2426)},null,null);e.exports=s.exports},2426:function(e,t,i){var s=i(2427);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);i(2279)("62e3c6f6",s,!0,{})},2427:function(e,t,i){(e.exports=i(2278)(!0)).push([e.i,".warehouse-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.warehouse-list span.required{color:#e26829;display:inline-block}.warehouse-list .list-form-inline{height:100%;line-height:50px}.warehouse-list .list-form-inline .el-form-item{margin-right:2px!important;margin-bottom:0}.warehouse-list .list-form-inline .el-form-item__label{color:#fff;padding:11px 12px}.warehouse-list .list-form-inline .el-form-item__content{width:180px!important}.warehouse-list .table-wrap .long-td{max-width:270px;text-overflow:ellipsis;overflow:hidden;text-align:left}.warehouse-list .dialog-warehouse{overflow:hidden}.warehouse-list .dialog-warehouse .el-dialog__body{font-size:0;padding:30px 20px 30px 66px}.warehouse-list .dialog-warehouse .item{width:50%;line-height:30px;display:inline-block}.warehouse-list .dialog-warehouse .item .land{width:250px}.warehouse-list .dialog-warehouse .item .title{display:inline-block;width:80px}.warehouse-list .dialog-warehouse .item .content{margin:10px;display:inline-block;width:250px}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/views/nl/warehouse/warehouse-list.vue"],names:[],mappings:"AACA,gBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,WAAY,AACZ,WAAa,CACd,AACD,8BACI,cAAe,AACf,oBAAsB,CACzB,AACD,kCACI,YAAa,AACb,gBAAkB,CACrB,AACD,gDACM,2BAA6B,AAC7B,eAAiB,CACtB,AACD,uDACM,WAAY,AACZ,iBAAmB,CACxB,AACD,yDACM,qBAAwB,CAC7B,AACD,qCACI,gBAAiB,AACjB,uBAAwB,AACxB,gBAAiB,AACjB,eAAiB,CACpB,AACD,kCACI,eAAiB,CACpB,AACD,mDACM,YAAa,AACb,2BAA6B,CAClC,AACD,wCACM,UAAW,AACX,iBAAkB,AAClB,oBAAsB,CAC3B,AACD,8CACQ,WAAa,CACpB,AACD,+CACQ,qBAAsB,AACtB,UAAY,CACnB,AACD,iDACQ,YAAa,AACb,qBAAsB,AACtB,WAAa,CACpB",file:"warehouse-list.vue",sourcesContent:["\n.warehouse-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.warehouse-list span.required {\n    color: #e26829;\n    display: inline-block;\n}\n.warehouse-list .list-form-inline {\n    height: 100%;\n    line-height: 50px;\n}\n.warehouse-list .list-form-inline .el-form-item {\n      margin-right: 2px !important;\n      margin-bottom: 0;\n}\n.warehouse-list .list-form-inline .el-form-item__label {\n      color: #fff;\n      padding: 11px 12px;\n}\n.warehouse-list .list-form-inline .el-form-item__content {\n      width: 180px !important;\n}\n.warehouse-list .table-wrap .long-td {\n    max-width: 270px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    text-align: left;\n}\n.warehouse-list .dialog-warehouse {\n    overflow: hidden;\n}\n.warehouse-list .dialog-warehouse .el-dialog__body {\n      font-size: 0;\n      padding: 30px 20px 30px 66px;\n}\n.warehouse-list .dialog-warehouse .item {\n      width: 50%;\n      line-height: 30px;\n      display: inline-block;\n}\n.warehouse-list .dialog-warehouse .item .land {\n        width: 250px;\n}\n.warehouse-list .dialog-warehouse .item .title {\n        display: inline-block;\n        width: 80px;\n}\n.warehouse-list .dialog-warehouse .item .content {\n        margin: 10px;\n        display: inline-block;\n        width: 250px;\n}\n"],sourceRoot:""}])},2428:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=l(i(20)),a=l(i(3)),n=l(i(5)),o=l(i(90));function l(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{loading:!1,headData:[],tableList:[],currentPage:1,total:0,areaCodeList:[],regionList:[],currentID:"",warehouse:{},dialogTitle:"",dialogWarehouseVisible:!1,dialogDeleteVisible:!1,formSearch:{region_id:""}}},i18n:{messages:{en:n.default.Dealer.Index}},created:function(){},computed:{},mounted:function(){var e=this;e.areaCodeList=o.default.init(),e.loading=!0,e.getAllRegion().then(function(t){if(-2===t.code)throw t.message;e.loading=!1,e.regionList=t}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1}),e.getWarehouseList(),this.headData=["Code","Warehouse Name","Region","Country","City","Area","Address","Phone","Email","Operation"]},methods:{regionName:function(e){if(this.regionList.length>0){var t=this.regionList.filter(function(t){return t.id===e.region_id});return t.length>0?t[0].warehouse_region_name:"-"}},goAfterIndex:function(){this.$router.push({name:"afterIndex"})},onSearch:function(){this.getWarehouseList()},onClean:function(){this.formSearch.region_id="",this.getWarehouseList()},onEdit:function(e){this.warehouse=JSON.parse((0,s.default)(e)),this.dialogTitle="Update Warehous",this.dialogWarehouseVisible=!0},onDelete:function(e){this.currentID=e.id,this.dialogDeleteVisible=!0},dialogAdd:function(){this.warehouse={address:"",city:"",code:"",country_code:"+86",district:"",email:"",name:"",phone:"",country:""},this.dialogTitle="Add Warehous",this.dialogWarehouseVisible=!0},dialogConfirm:function(){var e=this;this.required()&&(this.loading=!0,this.postWarehouse(this.warehouse).then(function(t){if(-2===t.code)throw t.message;e.loading=!1,e.dialogWarehouseVisible=!1,e.getWarehouseList()}).catch(function(t){e.$message({message:t,type:"error"}),e.dialogWarehouseVisible=!1,e.loading=!1}))},dialogCancel:function(){this.dialogWarehouseVisible=!1},deleteInvitation:function(){var e=this,t=this;t.loading=!0,this.deleteWarehouse(t.currentID).then(function(i){201===i.code?e.$message({message:"You can't delete the warehouse because it contains the area that is being used.",type:"warning"}):t.getWarehouseList(),t.loading=!1,t.dialogDeleteVisible=!1},function(e){t.loading=!1,t.dialogDeleteVisible=!1})},handleCurrentChange:function(e){this.currentPage=e,a.default.Data.set(a.default.Const.DATA.KEY_AFTER_SALES_PAGE,this.currentPage),this.getWarehouseList()},getAllRegion:function(){return a.default.Api.request({method:"GET",url:"/nl/warehouse/region/all"})},getWarehouseList:function(){var e=this;this.loading=!0,a.default.Api.request({method:"post",url:"/nl/warehouse/filter",data:{region_id:this.formSearch.region_id},params:{page:this.currentPage,size:10}}).then(function(t){e.tableList=t.content,e.total=t.totalElements,e.loading=!1},function(t){e.loading=!1})},postWarehouse:function(e){return a.default.Api.request({method:"post",url:"/nl/warehouse",data:e})},deleteWarehouse:function(e){return a.default.Api.request({method:"delete",url:"/nl/warehouse/"+e})},required:function(){for(var e in this.warehouse)if("update_user_id"!==e&&"update_time"!==e){if(!a.default.Util.isEmail(this.warehouse.email))return this.$message({message:"E-mail is illegitimate",type:"warning"}),!1;if(""===this.warehouse[e]||null==this.warehouse[e]||void 0==this.warehouse[e])return this.$message({message:"Please input "+e,type:"warning"}),!1}return!0}},watch:{}}},2429:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"warehouse-list"},[i("div",{staticClass:"search-header"},[i("el-form",{staticClass:"list-form-inline",attrs:{inline:!0,model:e.formSearch}},[i("el-form-item",{attrs:{label:"Region"}},[i("el-select",{attrs:{placeholder:"Region"},model:{value:e.formSearch.region_id,callback:function(t){e.$set(e.formSearch,"region_id",t)},expression:"formSearch.region_id"}},e._l(e.regionList,function(e){return i("el-option",{key:e.id,attrs:{label:e.warehouse_region_name,value:e.id}})}),1)],1),e._v(" "),i("div",{staticClass:"btn-group-inline-icon"},[i("div",{staticClass:"icons"},[i("div",{staticClass:"icon-item search",attrs:{title:"search"},on:{click:e.onSearch}}),e._v(" "),i("div",{staticClass:"icon-item clear",attrs:{title:"clear"},on:{click:e.onClean}})])])],1),e._v(" "),i("div",{staticClass:"btn-group-top"},[i("div",{staticClass:"icons"},[i("div",{directives:[{name:"ilpermission",rawName:"v-ilpermission",value:"warehouse-list-add",expression:"'warehouse-list-add'"}],staticClass:"icon-item add-v2",attrs:{title:"add"},on:{click:e.dialogAdd}})])])],1),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-wrap"},[i("div",{staticClass:"table-content-holder"},[e.tableList.length<=0&&!e.loading?i("div",{staticClass:"no-data-content"},[e._v("\n        noResult\n      ")]):i("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[i("thead",e._l(e.headData,function(t,s){return i("td",{key:s},[e._v(e._s(t))])}),0),e._v(" "),!e.loading&&e.tableList.length>0?i("tbody",e._l(e.tableList,function(t){return i("tr",{key:t.id},[i("td",[e._v(e._s(t.code))]),e._v(" "),i("td",[e._v(e._s(t.name))]),e._v(" "),i("td",[e._v(e._s(e.regionName(t)))]),e._v(" "),i("td",[e._v(e._s(t.country))]),e._v(" "),i("td",[e._v(e._s(t.city))]),e._v(" "),i("td",[e._v(e._s(t.district))]),e._v(" "),i("td",[e._v(e._s(t.address))]),e._v(" "),i("td",[e._v(e._s(t.phone))]),e._v(" "),i("td",[e._v(e._s(t.email))]),e._v(" "),i("td",[i("a",{directives:[{name:"ilpermission",rawName:"v-ilpermission",value:"warehouse-list-add",expression:"'warehouse-list-add'"}],staticClass:"btn-underline",on:{click:function(i){return i.stopPropagation(),e.onEdit(t)}}},[e._v("edit")]),e._v(" "),i("a",{directives:[{name:"ilpermission",rawName:"v-ilpermission",value:"warehouse-list-delete",expression:"'warehouse-list-delete'"}],staticClass:"btn-underline",on:{click:function(i){return i.stopPropagation(),e.onDelete(t)}}},[e._v("delete")])])])}),0):e._e()])]),e._v(" "),i("div",{staticClass:"table-footer"},[i("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}}),e._v(" "),i("p",{staticClass:"total"},[e._v("total: "+e._s(e.total))])],1)]),e._v(" "),i("el-dialog",{staticClass:"dialog-warehouse",attrs:{title:e.dialogTitle,visible:e.dialogWarehouseVisible,"custom-class":"edit-dialog"},on:{"update:title":function(t){e.dialogTitle=t},"update:visible":function(t){e.dialogWarehouseVisible=t}}},[i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[e._v("\n        Code\n        "),i("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),i("div",{staticClass:"content"},[i("el-input",{model:{value:e.warehouse.code,callback:function(t){e.$set(e.warehouse,"code",t)},expression:"warehouse.code"}})],1)]),e._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[e._v("\n        Name\n        "),i("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),i("div",{staticClass:"content"},[i("el-input",{model:{value:e.warehouse.name,callback:function(t){e.$set(e.warehouse,"name",t)},expression:"warehouse.name"}})],1)]),e._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[e._v("\n        Region\n        "),i("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),i("div",{staticClass:"content"},[i("el-select",{staticClass:"land",attrs:{slot:"append",filterable:""},slot:"append",model:{value:e.warehouse.region_id,callback:function(t){e.$set(e.warehouse,"region_id",t)},expression:"warehouse.region_id"}},e._l(e.regionList,function(e){return i("el-option",{key:e.id,attrs:{label:e.warehouse_region_name,value:e.id}})}),1)],1)]),e._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[e._v("\n        Country\n        "),i("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),i("div",{staticClass:"content"},[i("el-select",{staticClass:"land",attrs:{slot:"prepend",filterable:""},slot:"prepend",model:{value:e.warehouse.country,callback:function(t){e.$set(e.warehouse,"country",t)},expression:"warehouse.country"}},e._l(e.areaCodeList,function(e,t){return i("el-option",{key:t,attrs:{label:e.area_en,value:e.area_en}})}),1)],1)]),e._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[e._v("\n        City\n        "),i("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),i("div",{staticClass:"content"},[i("el-input",{model:{value:e.warehouse.city,callback:function(t){e.$set(e.warehouse,"city",t)},expression:"warehouse.city"}})],1)]),e._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[e._v("\n        District\n        "),i("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),i("div",{staticClass:"content"},[i("el-input",{model:{value:e.warehouse.district,callback:function(t){e.$set(e.warehouse,"district",t)},expression:"warehouse.district"}})],1)]),e._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[e._v("\n        Address\n        "),i("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),i("div",{staticClass:"content"},[i("el-input",{model:{value:e.warehouse.address,callback:function(t){e.$set(e.warehouse,"address",t)},expression:"warehouse.address"}})],1)]),e._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[e._v("\n        Phone\n        "),i("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),i("div",{staticClass:"content"},[i("el-input",{model:{value:e.warehouse.phone,callback:function(t){e.$set(e.warehouse,"phone",t)},expression:"warehouse.phone"}},[i("el-select",{attrs:{slot:"prepend",filterable:""},slot:"prepend",model:{value:e.warehouse.country_code,callback:function(t){e.$set(e.warehouse,"country_code",t)},expression:"warehouse.country_code"}},e._l(e.areaCodeList,function(e){return i("el-option",{key:e.area_code,attrs:{label:e.area_code,value:e.area_code}})}),1)],1)],1)]),e._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[e._v("\n        Email\n        "),i("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),i("div",{staticClass:"content"},[i("el-input",{model:{value:e.warehouse.email,callback:function(t){e.$set(e.warehouse,"email",t)},expression:"warehouse.email"}})],1)]),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"preview"},on:{click:e.dialogConfirm}},[e._v("confirm")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.dialogCancel}},[e._v("cancel")])],1)]),e._v(" "),i("el-dialog",{attrs:{title:"Delete Warehous",visible:e.dialogDeleteVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogDeleteVisible=t}}},[i("p",[e._v("Are you sure to delete it ?")]),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.deleteInvitation}},[e._v("yes")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogDeleteVisible=!1}}},[e._v("no")])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=52.1413163fccd46b52cbdd.js.map