webpackJsonp([10],{2320:function(e,t,i){var n=i(2)(i(2597),i(2598),function(e){i(2595)},null,null);e.exports=n.exports},2359:function(e,t,i){var n=i(2)(i(2362),i(2363),function(e){i(2360)},"data-v-128fc700",null);e.exports=n.exports},2360:function(e,t,i){var n=i(2361);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(2279)("57843c56",n,!0,{})},2361:function(e,t,i){(e.exports=i(2278)(!0)).push([e.i,".dialog[data-v-128fc700]{overflow:hidden}.dialog span.required[data-v-128fc700]{color:#e26829;display:inline-block;padding-left:4px}.dialog .el-dialog__body[data-v-128fc700]{font-size:0}.dialog .item[data-v-128fc700]{line-height:30px;display:inline-block}.dialog .item .title[data-v-128fc700]{display:inline-block;width:80px}.dialog .item .content[data-v-128fc700]{margin:10px;display:inline-block;width:250px}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/components/email/email-dialog.vue"],names:[],mappings:"AACA,yBACE,eAAiB,CAClB,AACD,uCACI,cAAe,AACf,qBAAsB,AACtB,gBAAkB,CACrB,AACD,0CACI,WAAa,CAChB,AACD,+BACI,iBAAkB,AAClB,oBAAsB,CACzB,AACD,sCACM,qBAAsB,AACtB,UAAY,CACjB,AACD,wCACM,YAAa,AACb,qBAAsB,AACtB,WAAa,CAClB",file:"email-dialog.vue",sourcesContent:["\n.dialog[data-v-128fc700] {\n  overflow: hidden;\n}\n.dialog span.required[data-v-128fc700] {\n    color: #e26829;\n    display: inline-block;\n    padding-left: 4px;\n}\n.dialog .el-dialog__body[data-v-128fc700] {\n    font-size: 0;\n}\n.dialog .item[data-v-128fc700] {\n    line-height: 30px;\n    display: inline-block;\n}\n.dialog .item .title[data-v-128fc700] {\n      display: inline-block;\n      width: 80px;\n}\n.dialog .item .content[data-v-128fc700] {\n      margin: 10px;\n      display: inline-block;\n      width: 250px;\n}\n"],sourceRoot:""}])},2362:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a=i(3),o=(n=a)&&n.__esModule?n:{default:n};t.default={props:{title:{type:String,default:"Send Email"},dialogVisible:{type:Boolean,required:!0}},data:function(){return{email:""}},methods:{dialogInvitation:function(){this.required()&&this.$emit("send",this.email)},dialogCancel:function(){this.$emit("cancel")},required:function(){return!!o.default.Util.isEmail(this.email)||(this.$message({message:"E-mail is illegitimate",type:"warning"}),!1)}}}},2363:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("el-dialog",{staticClass:"dialog",attrs:{title:e.title,visible:e.dialogVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,size:"tiny"},on:{"update:visible":function(t){e.dialogVisible=t}}},[i("div",{staticClass:"item"},[i("label",{staticClass:"title"},[e._v("\n      Email\n      "),i("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),i("div",{staticClass:"content"},[i("el-input",{model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)]),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.dialogInvitation}},[e._v(" Send ")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:e.dialogCancel}},[e._v(" Cancel ")])],1)])},staticRenderFns:[]}},2595:function(e,t,i){var n=i(2596);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);i(2279)("785953fc",n,!0,{})},2596:function(e,t,i){(e.exports=i(2278)(!0)).push([e.i,".PI-list{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.PI-list .list-form-inline{height:100%;line-height:50px}.PI-list .list-form-inline .el-form-item{margin-right:2px!important;margin-bottom:0}.PI-list .list-form-inline .el-form-item__label{color:#fff;width:83px;text-align:left;margin-left:5px}.PI-list .list-form-inline .el-form-item__content{width:206px!important}.PI-list .list-form-inline .el-date-editor{width:206px}.PI-list .table-wrap .long-td{max-width:270px;text-overflow:ellipsis;overflow:hidden;text-align:left}.PI-list .dialog-warehouse{overflow:hidden}.PI-list .dialog-warehouse .el-dialog__body{font-size:0}.PI-list .dialog-warehouse .item{width:50%;line-height:30px;display:inline-block}.PI-list .dialog-warehouse .item .land{width:250px}.PI-list .dialog-warehouse .item .title{display:inline-block;width:80px}.PI-list .dialog-warehouse .item .content{margin:10px;display:inline-block;width:250px}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/views/nl/sales/proforma-invoice.vue"],names:[],mappings:"AACA,SACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,WAAY,AACZ,WAAa,CACd,AACD,2BACI,YAAa,AACb,gBAAkB,CACrB,AACD,yCACM,2BAA6B,AAC7B,eAAiB,CACtB,AACD,gDACM,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,eAAiB,CACtB,AACD,kDACM,qBAAwB,CAC7B,AACD,2CACM,WAAa,CAClB,AACD,8BACI,gBAAiB,AACjB,uBAAwB,AACxB,gBAAiB,AACjB,eAAiB,CACpB,AACD,2BACI,eAAiB,CACpB,AACD,4CACM,WAAa,CAClB,AACD,iCACM,UAAW,AACX,iBAAkB,AAClB,oBAAsB,CAC3B,AACD,uCACQ,WAAa,CACpB,AACD,wCACQ,qBAAsB,AACtB,UAAY,CACnB,AACD,0CACQ,YAAa,AACb,qBAAsB,AACtB,WAAa,CACpB",file:"proforma-invoice.vue",sourcesContent:["\n.PI-list {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.PI-list .list-form-inline {\n    height: 100%;\n    line-height: 50px;\n}\n.PI-list .list-form-inline .el-form-item {\n      margin-right: 2px !important;\n      margin-bottom: 0;\n}\n.PI-list .list-form-inline .el-form-item__label {\n      color: #fff;\n      width: 83px;\n      text-align: left;\n      margin-left: 5px;\n}\n.PI-list .list-form-inline .el-form-item__content {\n      width: 206px !important;\n}\n.PI-list .list-form-inline .el-date-editor {\n      width: 206px;\n}\n.PI-list .table-wrap .long-td {\n    max-width: 270px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    text-align: left;\n}\n.PI-list .dialog-warehouse {\n    overflow: hidden;\n}\n.PI-list .dialog-warehouse .el-dialog__body {\n      font-size: 0;\n}\n.PI-list .dialog-warehouse .item {\n      width: 50%;\n      line-height: 30px;\n      display: inline-block;\n}\n.PI-list .dialog-warehouse .item .land {\n        width: 250px;\n}\n.PI-list .dialog-warehouse .item .title {\n        display: inline-block;\n        width: 80px;\n}\n.PI-list .dialog-warehouse .item .content {\n        margin: 10px;\n        display: inline-block;\n        width: 250px;\n}\n"],sourceRoot:""}])},2597:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(i(3)),a=o(i(2359));function o(e){return e&&e.__esModule?e:{default:e}}t.default={components:{EmailDialog:a.default},data:function(){return{loading:!1,formSearch:{date:"",pi_no:"",sales_order_no:"",customer_id:""},headData:[],tableList:[],currentPage:1,total:0,dialogDeleteVisible:!1,dialogReviewVisible:!1,currentID:"",currentPINo:"",supplierData:[],purpose:[{id:0,name:"Warehouse stocking"},{id:1,name:"Sales purchase"},{id:2,name:"After-sales procurement"}],statusData:["Created","Confirm"],status:"",customerList:[],emailDialogVisible:!1}},i18n:{messages:{}},created:function(){},computed:{},mounted:function(){this.headData=["Date","PI No.","Telephone","Customer","Customer Art Nr.","Creator","Status","Operation"],this.getPIList(),this.getAllCustomer()},methods:{goAfterIndex:function(){this.$router.push({name:"afterIndex"})},onSearch:function(){this.getPIList()},onClean:function(){this.formSearch={date:"",pi_no:"",sales_order_no:"",customer_id:""},this.getPIList()},onView:function(e){this.$router.push({name:"PIDetails",query:{orderId:e.id}})},onEdit:function(e){this.$router.push({name:"PIHeader",query:{orderId:e.id}})},onSendEmail:function(e){this.currentID=e.id,this.currentPINo=e.pi_no,this.emailDialogVisible=!0},sendEmail:function(e){n.default.Api.Common.sendEmailStaff(this.currentPINo,e),this.emailDialogVisible=!1},sendCancel:function(e){this.emailDialogVisible=!1},onDelete:function(e){this.currentID=e.id,this.dialogDeleteVisible=!0},onAdd:function(){this.$router.push({name:"PIHeader"})},handleCurrentChange:function(e){this.currentPage=e,n.default.Data.set(n.default.Const.DATA.KEY_AFTER_SALES_PAGE,this.currentPage),this.getPIList()},deleteInvitation:function(){var e=this,t=this;this.loading=!0,this.deletePIList(this.currentID).then(function(i){201===i.code?e.$message({message:"You can't delete this PI order because it is not a Creation status.",type:"warning"}):t.getPIList(),e.loading=!1,e.dialogDeleteVisible=!1}).catch(function(t){e.$message({message:t,type:"error"}),e.dialogDeleteVisible=!1,e.loading=!1})},getAllCustomer:function(){var e=this;return this.loading=!0,n.default.Api.request({method:"GET",url:"/nl/nlPublic/company/all"}).then(function(t){e.loading=!1,e.customerList=t}).catch(function(t){scope.$message({message:t,type:"error"}),e.loading=!1})},getPIList:function(){var e=this;e.loading=!0;var t="";return this.formSearch.date&&(t={start:n.default.Util.parseDate(this.formSearch.date[0])||"",end:n.default.Util.parseDate(this.formSearch.date[1])||""}),n.default.Api.request({method:"POST",url:"/nl/sales/proformaInvoice/filter",data:{date:t,pi_no:this.formSearch.pi_no,sales_order_no:this.formSearch.sales_order_no,customer_id:this.formSearch.customer_id},params:{page:this.currentPage,size:10}}).then(function(t){if(e.loading=!1,-2===t.code)throw t.message;e.tableList=t.content,e.total=t.totalElements}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1})},deletePIList:function(e){return n.default.Api.request({method:"DELETE",url:"/nl/sales/proformaInvoice/"+e})},putPIStatus:function(e,t){return n.default.Api.request({method:"put",url:"/nl/sales/proformaInvoice/"+e+"/status",params:{status:t}})},getSupplier:function(){return n.default.Api.request({method:"GET",url:"/nl/nlPublic/supplier/all"})},conversionSupplier:function(e){if(this.supplierData.length>0){var t=this.supplierData.filter(function(t){return t.id===e});return t.length>0?t[0].company_name:"--"}},conversionPurpose:function(e){if(this.purpose.length>0){var t=this.purpose.filter(function(t){return t.id===e});if(t.length>0)return t[0].name}},conversionStatus:function(e){return this.statusData[e]?this.statusData[e]:"-"},handleCommand:function(e,t){this.status=e,this.currentID=t.id,this.dialogReviewVisible=!0},reviewInvitation:function(){var e=this,t=this.status;e.dialogReviewVisible=!1,e.loading=!0,e.putPIStatus(this.currentID,t).then(function(t){e.$message({message:"Successful Review",type:"success"}),e.loading=!1,e.getPIList()},function(t){e.loading=!1})}},watch:{}}},2598:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"PI-list"},[i("div",{staticClass:"search-header"},[i("el-form",{staticClass:"list-form-inline",attrs:{inline:!0,model:e.formSearch}},[i("el-form-item",{attrs:{label:"PI No."}},[i("el-input",{attrs:{placeholder:"PI No."},model:{value:e.formSearch.pi_no,callback:function(t){e.$set(e.formSearch,"pi_no",t)},expression:"formSearch.pi_no"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"Customer"}},[i("el-select",{attrs:{filterable:"",placeholder:"Customer"},model:{value:e.formSearch.customer_id,callback:function(t){e.$set(e.formSearch,"customer_id",t)},expression:"formSearch.customer_id"}},e._l(e.customerList,function(e){return i("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:"Order No."}},[i("el-input",{attrs:{placeholder:"Order No."},model:{value:e.formSearch.sales_order_no,callback:function(t){e.$set(e.formSearch,"sales_order_no",t)},expression:"formSearch.sales_order_no"}})],1),e._v(" "),i("el-form-item",{attrs:{label:"Date"}},[i("el-date-picker",{attrs:{type:"daterange",placeholder:"Select date range"},model:{value:e.formSearch.date,callback:function(t){e.$set(e.formSearch,"date",t)},expression:"formSearch.date"}})],1),e._v(" "),i("div",{staticClass:"btn-group-inline-icon"},[i("div",{staticClass:"icons"},[i("div",{staticClass:"icon-item search",attrs:{title:"search"},on:{click:e.onSearch}}),e._v(" "),i("div",{staticClass:"icon-item clear",attrs:{title:"clear"},on:{click:e.onClean}})])]),e._v(" "),i("div",{staticClass:"btn-group-top"},[i("div",{staticClass:"icons"},[i("div",{directives:[{name:"ilpermission",rawName:"v-ilpermission",value:"proforma-invoice-add",expression:"'proforma-invoice-add'"}],staticClass:"icon-item add-v2",attrs:{title:"add"},on:{click:e.onAdd}})])])],1)],1),e._v(" "),i("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-wrap"},[i("div",{staticClass:"table-content-holder"},[e.tableList.length<=0&&!e.loading?i("div",{staticClass:"no-data-content"},[e._v("noResult")]):i("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[i("thead",e._l(e.headData,function(t,n){return i("td",{key:n},[e._v(e._s(t))])}),0),e._v(" "),!e.loading&&e.tableList.length>0?i("tbody",e._l(e.tableList,function(t){return i("tr",{key:t.id},[i("td",[e._v(e._s(e._f("dateFormat")(t.date)))]),e._v(" "),i("td",[e._v(e._s(t.pi_no))]),e._v(" "),i("td",[e._v(e._s(t.country_code+" "+t.telephone))]),e._v(" "),i("td",[e._v(e._s(t.customer_name))]),e._v(" "),i("td",[e._v(e._s(t.customer_order_no))]),e._v(" "),i("td",[e._v(e._s(t.createUser))]),e._v(" "),0==t.status?i("td",[e._v("Created")]):e._e(),e._v(" "),1==t.status?i("td",[e._v("Delivered")]):e._e(),e._v(" "),2==t.status?i("td",[e._v("Used")]):e._e(),e._v(" "),i("td",[i("button",{staticClass:"btn-underline",on:{click:function(i){return i.stopPropagation(),e.onView(t)}}},[e._v("view")]),e._v(" "),i("button",{staticClass:"btn-underline",on:{click:function(i){return i.stopPropagation(),e.onSendEmail(t)}}},[e._v("email")]),e._v(" "),i("button",{directives:[{name:"ilpermission",rawName:"v-ilpermission",value:"proforma-invoice-add",expression:"'proforma-invoice-add'"}],staticClass:"btn-underline",on:{click:function(i){return i.stopPropagation(),e.onEdit(t)}}},[e._v("edit")]),e._v(" "),i("button",{directives:[{name:"ilpermission",rawName:"v-ilpermission",value:"proforma-invoice-delete",expression:"'proforma-invoice-delete'"}],staticClass:"btn-underline",on:{click:function(i){return i.stopPropagation(),e.onDelete(t)}}},[e._v("delete")]),e._v(" "),i("el-dropdown",{directives:[{name:"ilpermission",rawName:"v-ilpermission",value:"proforma-invoice-review",expression:"'proforma-invoice-review'"}],staticClass:"statusDrop",attrs:{trigger:"click"},on:{command:function(i){return e.handleCommand(i,t)}}},[i("span",{staticClass:"el-dropdown-link"},[e._v("\n                  action\n                  "),i("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e._v(" "),i("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[i("el-dropdown-item",{attrs:{command:"Delivered",disabled:1===t.status||2===t.status}},[e._v("Delivered")]),e._v(" "),i("el-dropdown-item",{attrs:{command:"Used",disabled:2===t.status}},[e._v("Used")])],1)],1)],1)])}),0):e._e()])]),e._v(" "),i("div",{staticClass:"table-footer"},[i("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}}),e._v(" "),i("p",{staticClass:"total"},[e._v("total: "+e._s(e.total))])],1)]),e._v(" "),i("el-dialog",{attrs:{title:"Delete Invoice",visible:e.dialogDeleteVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogDeleteVisible=t}}},[i("p",[e._v("Are you sure to delete it ?")]),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.deleteInvitation}},[e._v("yes")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogDeleteVisible=!1}}},[e._v("no")])],1)]),e._v(" "),i("el-dialog",{attrs:{title:"Review Shipment Order",visible:e.dialogReviewVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogReviewVisible=t}}},[i("p",[e._v("Are you sure to do it ?")]),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{attrs:{type:"primary"},on:{click:e.reviewInvitation}},[e._v("yes")]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogReviewVisible=!1}}},[e._v("no")])],1)]),e._v(" "),i("email-dialog",{attrs:{dialogVisible:e.emailDialogVisible},on:{send:function(t){return e.sendEmail(t)},cancel:e.sendCancel}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=10.6d3c43140c4fdf2bf5b9.js.map