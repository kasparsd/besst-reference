webpackJsonp([46],{2342:function(t,e,i){var a=i(2)(i(2687),i(2689),function(t){i(2685)},null,null);t.exports=a.exports},2685:function(t,e,i){var a=i(2686);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);i(2279)("75324215",a,!0,{})},2686:function(t,e,i){(t.exports=i(2278)(!0)).push([t.i,".customer-service{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.customer-service span.required{color:#e26829;display:inline-block}.customer-service .list-form-inline{height:100%;line-height:50px}.customer-service .list-form-inline .el-form-item{margin-right:2px!important;margin-bottom:0}.customer-service .list-form-inline .el-form-item__label{color:#fff;padding:11px 12px}.customer-service .list-form-inline .el-form-item__content{width:180px!important}.customer-service .loading{width:100px;height:100px;position:absolute;top:50%;left:50%;margin-top:-50px;margin-left:-50px}.customer-service .table-wrap .long-td{max-width:270px;text-overflow:ellipsis;overflow:hidden;text-align:left}.customer-service .dialog-md{overflow:hidden}.customer-service .dialog-md .el-dialog__body{font-size:0;padding:30px 20px 30px 48px}.customer-service .dialog-md .item{width:50%;line-height:30px;display:inline-block}.customer-service .dialog-md .item .input-special{width:200px}.customer-service .dialog-md .item .title{display:inline-block;width:135px}.customer-service .dialog-md .item .content{margin:10px;display:inline-block;width:200px}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/views/nl/after-sales/customer-service/carrier-order.vue"],names:[],mappings:"AACA,kBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,WAAY,AACZ,WAAa,CACd,AACD,gCACI,cAAe,AACf,oBAAsB,CACzB,AACD,oCACI,YAAa,AACb,gBAAkB,CACrB,AACD,kDACM,2BAA6B,AAC7B,eAAiB,CACtB,AACD,yDACM,WAAY,AACZ,iBAAmB,CACxB,AACD,2DACM,qBAAwB,CAC7B,AACD,2BACI,YAAa,AACb,aAAc,AACd,kBAAmB,AACnB,QAAS,AACT,SAAU,AACV,iBAAkB,AAClB,iBAAmB,CACtB,AACD,uCACI,gBAAiB,AACjB,uBAAwB,AACxB,gBAAiB,AACjB,eAAiB,CACpB,AACD,6BACI,eAAiB,CACpB,AACD,8CACM,YAAa,AACb,2BAA6B,CAClC,AACD,mCACM,UAAW,AACX,iBAAkB,AAClB,oBAAsB,CAC3B,AACD,kDACQ,WAAa,CACpB,AACD,0CACQ,qBAAsB,AACtB,WAAa,CACpB,AACD,4CACQ,YAAa,AACb,qBAAsB,AACtB,WAAa,CACpB",file:"carrier-order.vue",sourcesContent:["\n.customer-service {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.customer-service span.required {\n    color: #e26829;\n    display: inline-block;\n}\n.customer-service .list-form-inline {\n    height: 100%;\n    line-height: 50px;\n}\n.customer-service .list-form-inline .el-form-item {\n      margin-right: 2px !important;\n      margin-bottom: 0;\n}\n.customer-service .list-form-inline .el-form-item__label {\n      color: #fff;\n      padding: 11px 12px;\n}\n.customer-service .list-form-inline .el-form-item__content {\n      width: 180px !important;\n}\n.customer-service .loading {\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    margin-top: -50px;\n    margin-left: -50px;\n}\n.customer-service .table-wrap .long-td {\n    max-width: 270px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    text-align: left;\n}\n.customer-service .dialog-md {\n    overflow: hidden;\n}\n.customer-service .dialog-md .el-dialog__body {\n      font-size: 0;\n      padding: 30px 20px 30px 48px;\n}\n.customer-service .dialog-md .item {\n      width: 50%;\n      line-height: 30px;\n      display: inline-block;\n}\n.customer-service .dialog-md .item .input-special {\n        width: 200px;\n}\n.customer-service .dialog-md .item .title {\n        display: inline-block;\n        width: 135px;\n}\n.customer-service .dialog-md .item .content {\n        margin: 10px;\n        display: inline-block;\n        width: 200px;\n}\n"],sourceRoot:""}])},2687:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o(i(20)),s=o(i(3)),n=o(i(90)),r=o(i(2688));function o(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{loading:!1,formSearch:{logistics_order_no:""},headData:[],tableList:[],currentPage:1,total:0,areaCodeList:[],formData:{address:"",amount:0,company_name:"",contacts:"",country:"",logistics_order_no:"",metering:"",priority:0,status:0,transportain_type:0},dialogTitle:"",dialogVisible:!1,dialogDeleteVisible:!1,currentID:""}},i18n:{messages:{}},created:function(){},computed:{},mounted:function(){this.areaCodeList=n.default.init(),this.headData=["Logistics Order No.","Company Name","Contacts","Amount","Status","Operation"],this.filterCarrier()},methods:{onSearch:function(){this.filterCarrier()},onClean:function(){this.formSearch={},this.filterCarrier()},onEdit:function(t){this.formData=JSON.parse((0,a.default)(t)),this.date=1e3*this.formData.birthday,this.dialogTitle="Update Carrier Order",this.dialogVisible=!0},onDelete:function(t){this.currentID=t.id,this.dialogDeleteVisible=!0},handleCurrentChange:function(t){this.currentPage=t,s.default.Data.set(s.default.Const.DATA.KEY_AFTER_SALES_PAGE,this.currentPage),this.filterCarrier()},dialogAdd:function(){this.dialogTitle="Add Carrier Order",this.dialogVisible=!0,this.formData={address:"",amount:0,company_name:"",contacts:"",country:"",logistics_order_no:"",metering:"",priority:0,status:0,transportain_type:0}},deleteInvitation:function(){var t=this,e=this;e.loading=!0,r.default.deleteCarrier(this.currentID).then(function(){t.loading=!1,t.dialogDeleteVisible=!1,e.filterCarrier()}).catch(function(e){t.$message({message:e,type:"error"}),t.dialogDeleteVisible=!1,t.loading=!1})},dialogConfirm:function(){var t=this;this.loading=!0,r.default.postCarrier(this.formData).then(function(){t.$message({message:"Successfully saved",type:"success"}),t.dialogVisible=!1,t.loading=!1,t.filterCarrier()}).catch(function(e){t.$message({message:e,type:"error"}),t.dialogVisible=!1,t.loading=!1})},dialogCancel:function(){this.dialogVisible=!1,this.formData={employee_no:"",fullName:"",nickName:"",star:"",gender:"",birthday:""},this.date=""},checkParams:function(){return!!this.orderItems.length||(this.$message({message:"Please add item",type:"warning"}),!1)},filterCarrier:function(){var t=this;t.loading=!0,r.default.filterCarrier(this.currentPage,this.formSearch).then(function(e){t.tableList=e.data.content,t.total=e.data.totalElements,t.loading=!1})}},watch:{}}},2688:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,s=i(3),n=(a=s)&&a.__esModule?a:{default:a};var r={filterCarrier:function(t,e){return n.default.HttpHelp.request({method:"POST",url:"/nl/order/carrier/filter",data:{logistics_order_no:e.logistics_order_no},params:{page:t,size:10}})},postCarrier:function(t){return n.default.HttpHelp.request({method:"POST",url:"/nl/order/carrier",data:t})},deleteCarrier:function(t){return n.default.HttpHelp.request({method:"DELETE",url:"/nl/order/carrier/"+t})}};e.default=r},2689:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"customer-service"},[i("div",{staticClass:"search-header"},[i("div",{staticClass:"btn-group-inline"},[i("div",{staticClass:"icons"},[i("span",{staticClass:"icon-item back",attrs:{title:"back"},on:{click:function(e){return t.$router.back()}}})])]),t._v(" "),i("el-form",{staticClass:"list-form-inline",attrs:{inline:!0,model:t.formSearch}},[i("el-form-item",{attrs:{label:"Employee No."}},[i("el-input",{attrs:{placeholder:"Logistics Order No."},model:{value:t.formSearch.logistics_order_no,callback:function(e){t.$set(t.formSearch,"logistics_order_no",e)},expression:"formSearch.logistics_order_no"}})],1),t._v(" "),i("div",{staticClass:"btn-group-inline-icon"},[i("div",{staticClass:"icons"},[i("div",{staticClass:"icon-item search",attrs:{title:"search"},on:{click:t.onSearch}}),t._v(" "),i("div",{staticClass:"icon-item clear",attrs:{title:"clear"},on:{click:t.onClean}})])])],1),t._v(" "),i("div",{staticClass:"btn-group-top"},[i("div",{staticClass:"icons"},[i("div",{staticClass:"icon-item add-v2",attrs:{title:"add"},on:{click:t.dialogAdd}})])])],1),t._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-wrap"},[i("div",{staticClass:"table-content-holder"},[t.tableList.length<=0&&!t.loading?i("div",{staticClass:"no-data-content"},[t._v("noResult")]):i("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[i("thead",t._l(t.headData,function(e,a){return i("td",{key:a},[t._v(t._s(e))])}),0),t._v(" "),!t.loading&&t.tableList.length>0?i("tbody",t._l(t.tableList,function(e){return i("tr",{key:e.id},[i("td",[t._v(t._s(e.logistics_order_no))]),t._v(" "),i("td",[t._v(t._s(e.company_name))]),t._v(" "),i("td",[t._v(t._s(e.contacts))]),t._v(" "),i("td",[t._v(t._s(e.amount))]),t._v(" "),i("td",[t._v(t._s(e.status))]),t._v(" "),i("td",[i("a",{staticClass:"btn-underline",on:{click:function(i){return i.stopPropagation(),t.onEdit(e)}}},[t._v("edit")]),t._v(" "),i("a",{staticClass:"btn-underline",on:{click:function(i){return i.stopPropagation(),t.onDelete(e)}}},[t._v("delete")])])])}),0):t._e()])]),t._v(" "),i("div",{staticClass:"table-footer"},[i("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}),t._v(" "),i("p",{staticClass:"total"},[t._v("total: "+t._s(t.total))])],1)]),t._v(" "),i("el-dialog",{staticClass:"dialog-md",attrs:{title:t.dialogTitle,visible:t.dialogVisible,"custom-class":"edit-dialog"},on:{"update:title":function(e){t.dialogTitle=e},"update:visible":function(e){t.dialogVisible=e}}},[i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[t._v("\n                Logistics Order No.\n                "),i("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),i("div",{staticClass:"content"},[i("el-input",{attrs:{placeholder:"Logistics Order No."},model:{value:t.formData.logistics_order_no,callback:function(e){t.$set(t.formData,"logistics_order_no",e)},expression:"formData.logistics_order_no"}})],1)]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[t._v("\n                Company Name\n                "),i("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),i("div",{staticClass:"content"},[i("el-input",{attrs:{placeholder:"Company Name"},model:{value:t.formData.company_name,callback:function(e){t.$set(t.formData,"company_name",e)},expression:"formData.company_name"}})],1)]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[t._v("\n                Contacts\n                "),i("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),i("div",{staticClass:"content"},[i("el-input",{attrs:{placeholder:"Contacts"},model:{value:t.formData.contacts,callback:function(e){t.$set(t.formData,"contacts",e)},expression:"formData.contacts"}})],1)]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[t._v("\n                Country\n                "),i("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),i("div",{staticClass:"content"},[i("el-select",{staticClass:"input",attrs:{slot:"prepend",filterable:""},slot:"prepend",model:{value:t.formData.country,callback:function(e){t.$set(t.formData,"country",e)},expression:"formData.country"}},t._l(t.areaCodeList,function(t,e){return i("el-option",{key:e,attrs:{label:t.area_en,value:t.area_en}})}),1)],1)]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[t._v("\n                Address\n                "),i("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),i("div",{staticClass:"content"},[i("el-input",{attrs:{placeholder:"Address"},model:{value:t.formData.address,callback:function(e){t.$set(t.formData,"address",e)},expression:"formData.address"}})],1)]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[t._v("\n                Transportain Type\n                "),i("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),i("div",{staticClass:"content"},[i("el-input",{attrs:{placeholder:"Transportain Type"},model:{value:t.formData.transportain_type,callback:function(e){t.$set(t.formData,"transportain_type",e)},expression:"formData.transportain_type"}})],1)]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[t._v("\n                Amount\n                "),i("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),i("div",{staticClass:"content"},[i("el-input",{attrs:{placeholder:"Amount"},model:{value:t.formData.amount,callback:function(e){t.$set(t.formData,"amount",e)},expression:"formData.amount"}})],1)]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[t._v("\n                Metering\n                "),i("span",{staticClass:"required"},[t._v("*")])]),t._v(" "),i("div",{staticClass:"content"},[i("el-input",{attrs:{placeholder:"Metering"},model:{value:t.formData.metering,callback:function(e){t.$set(t.formData,"metering",e)},expression:"formData.metering"}})],1)]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[t._v("Priority")]),t._v(" "),i("div",{staticClass:"content"},[i("el-input-number",{staticClass:"input-special",attrs:{"controls-position":"right",min:1,max:5},model:{value:t.formData.priority,callback:function(e){t.$set(t.formData,"priority",e)},expression:"formData.priority"}})],1)]),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"preview"},on:{click:t.dialogConfirm}},[t._v("confirm")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.dialogCancel}},[t._v("cancel")])],1)]),t._v(" "),i("el-dialog",{attrs:{title:"Delete Carrier Order",visible:t.dialogDeleteVisible,size:"tiny"},on:{"update:visible":function(e){t.dialogDeleteVisible=e}}},[i("p",[t._v("Are you sure to delete it ?")]),t._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:t.deleteInvitation}},[t._v("yes")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.dialogDeleteVisible=!1}}},[t._v("no")])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=46.8d4c07e45ad354d3b53a.js.map