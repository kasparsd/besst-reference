webpackJsonp([40],{2340:function(e,t,i){var a=i(2)(i(2678),i(2680),function(e){i(2676)},null,null);e.exports=a.exports},2676:function(e,t,i){var a=i(2677);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);i(2279)("7bdddf35",a,!0,{})},2677:function(e,t,i){(e.exports=i(2278)(!0)).push([e.i,".clean-record{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.clean-record span.required{color:#e26829;display:inline-block}.clean-record .el-date-editor{width:250px}.clean-record .list-form-inline{height:100%;line-height:50px}.clean-record .list-form-inline .el-form-item{margin-right:2px!important;margin-bottom:0}.clean-record .list-form-inline .el-form-item__label{color:#fff;padding:11px 12px}.clean-record .list-form-inline .el-form-item__content{width:180px!important}.clean-record .table-wrap .long-td{max-width:270px;text-overflow:ellipsis;overflow:hidden;text-align:left}.clean-record .input-sn:after{top:5px}.clean-record .item-row{width:100%}.clean-record .item-row .text-area{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;width:100%;margin:40px 0 10px}.clean-record .item-row .text-area p{text-align:center;padding-top:20px}.clean-record .dialog-cleanRecord{overflow:hidden}.clean-record .dialog-cleanRecord .el-dialog__body{font-size:0;padding:30px 20px 30px 35px}.clean-record .dialog-cleanRecord .item{width:50%;line-height:30px;display:inline-block}.clean-record .dialog-cleanRecord .item .land{width:230px}.clean-record .dialog-cleanRecord .item .title{display:inline-block;width:130px}.clean-record .dialog-cleanRecord .item .content{margin:10px;display:inline-block;width:230px}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/views/nl/clean-management/clean-record.vue"],names:[],mappings:"AACA,cACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,WAAY,AACZ,WAAa,CACd,AACD,4BACI,cAAe,AACf,oBAAsB,CACzB,AACD,8BACI,WAAa,CAChB,AACD,gCACI,YAAa,AACb,gBAAkB,CACrB,AACD,8CACM,2BAA6B,AAC7B,eAAiB,CACtB,AACD,qDACM,WAAY,AACZ,iBAAmB,CACxB,AACD,uDACM,qBAAwB,CAC7B,AACD,mCACI,gBAAiB,AACjB,uBAAwB,AACxB,gBAAiB,AACjB,eAAiB,CACpB,AACD,8BACI,OAAS,CACZ,AACD,wBACI,UAAY,CACf,AACD,mCACM,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,yBAA0B,AACtB,6BAA8B,AAClC,WAAY,AACZ,kBAAsB,CAC3B,AACD,qCACQ,kBAAmB,AACnB,gBAAkB,CACzB,AACD,kCACI,eAAiB,CACpB,AACD,mDACM,YAAa,AACb,2BAA6B,CAClC,AACD,wCACM,UAAW,AACX,iBAAkB,AAClB,oBAAsB,CAC3B,AACD,8CACQ,WAAa,CACpB,AACD,+CACQ,qBAAsB,AACtB,WAAa,CACpB,AACD,iDACQ,YAAa,AACb,qBAAsB,AACtB,WAAa,CACpB",file:"clean-record.vue",sourcesContent:["\n.clean-record {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.clean-record span.required {\n    color: #e26829;\n    display: inline-block;\n}\n.clean-record .el-date-editor {\n    width: 250px;\n}\n.clean-record .list-form-inline {\n    height: 100%;\n    line-height: 50px;\n}\n.clean-record .list-form-inline .el-form-item {\n      margin-right: 2px !important;\n      margin-bottom: 0;\n}\n.clean-record .list-form-inline .el-form-item__label {\n      color: #fff;\n      padding: 11px 12px;\n}\n.clean-record .list-form-inline .el-form-item__content {\n      width: 180px !important;\n}\n.clean-record .table-wrap .long-td {\n    max-width: 270px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    text-align: left;\n}\n.clean-record .input-sn:after {\n    top: 5px;\n}\n.clean-record .item-row {\n    width: 100%;\n}\n.clean-record .item-row .text-area {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n      -ms-flex-pack: distribute;\n          justify-content: space-around;\n      width: 100%;\n      margin: 40px 0 10px 0;\n}\n.clean-record .item-row .text-area p {\n        text-align: center;\n        padding-top: 20px;\n}\n.clean-record .dialog-cleanRecord {\n    overflow: hidden;\n}\n.clean-record .dialog-cleanRecord .el-dialog__body {\n      font-size: 0;\n      padding: 30px 20px 30px 35px;\n}\n.clean-record .dialog-cleanRecord .item {\n      width: 50%;\n      line-height: 30px;\n      display: inline-block;\n}\n.clean-record .dialog-cleanRecord .item .land {\n        width: 230px;\n}\n.clean-record .dialog-cleanRecord .item .title {\n        display: inline-block;\n        width: 130px;\n}\n.clean-record .dialog-cleanRecord .item .content {\n        margin: 10px;\n        display: inline-block;\n        width: 230px;\n}\n"],sourceRoot:""}])},2678:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=f(i(338)),n=f(i(20)),l=f(i(194)),o=f(i(195)),r=f(i(3)),s=f(i(5)),c=f(i(90)),d=f(i(2679)),u=f(i(766));function f(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{loading:!1,formSearch:{ci_no:""},headData:[],tableList:[],areaCodeList:[],currentPage:1,total:0,currentID:"",deliveryNoData:[],formData:{clean_type:0,org_id:r.default.Data.getOrg().id,customer_id:0,ci_no:"",ci_file_id:"",country:"",vat:"",sailing_date:"",invoice_no:"",invoice_file_id:"",other:"",other_file_id:"",operator_id:r.default.Data.getUser()?r.default.Data.getUser().id:"",deliver_order_no:""},upload:{url:r.default.Const.NET.FILE_UPLOAD_END_POINT,paramName:"file",params:{token:r.default.Data.getToken()},ci_file:[],other_file:[],invoice_file:[]},dialogTitle:"",dialogVisible:!1,dialogDeleteVisible:!1,dialogReviewVisible:!1,customerList:[],sailing_date:new Date,statusData:[{id:0,name:"STATUS_READY"},{id:1,name:"EXPORT_CLEAN"},{id:2,name:"IMPORT_CLEAN"},{id:3,name:"STATUS_FINISH"}],cleanType:[{id:0,name:"TYPE_IN"},{id:1,name:"TYPE_OUT"}],ciList:[],timer:""}},i18n:{messages:{en:s.default.Dealer.Index}},created:function(){var e=(0,o.default)(l.default.mark(function e(){var t,i=this;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,this.areaCodeList=c.default.init(),this.getCleanRecord(),this.loading=!0,e.next=6,u.default.getAllDelivery().then(function(e){var i=e.data.filter(function(e){return 3===e.status});t.deliveryNoData=i.map(function(e){return{id:e.id,company_id:e.company_id,value:e.delivery_order_no,status:e.status,sales_name:e.create_user_id,shipment:e.shipment,origin:e.origin,destination:e.destination}}),t.loading=!1}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1});case 6:return t.loading=!0,e.next=9,u.default.getAllCustomer().then(function(e){t.customerList=e.data,t.loading=!1}).catch(function(e){i.$message({message:e,type:"error"}),i.loading=!1});case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),computed:{},mounted:function(){this.headData=["CI No.","Customer","Clean Type","Invoice No.","Deliver Order No.","Status","Operation"]},methods:{goAfterIndex:function(){this.$router.push({name:"afterIndex"})},handleCommand:function(e,t){this.status=e,this.currentID=t.id,this.dialogReviewVisible=!0},createStateFilter:function(e){return function(t){return-1!==t.value.indexOf(e.toLowerCase())}},querySearchAsync:function(e,t){var i=this.deliveryNoData;t(e?i.filter(this.createStateFilter(e)):i)},handleInputConfirm:function(e){this.formData.deliver_order_no=e.value,this.formData.customer_id=e.company_id},handleChange:function(e){var t=this.customerList.find(function(t){return t.id===e});if(!t)return this.formData.vat="",void(this.formData.country="");this.formData.vat=t.vat_no,this.formData.country=t.country},ci_file_success:function(e,t,i){this.formData.ci_file_id=e.data.file.id},ci_file_change:function(e,t){this.upload.ci_file=t.slice(-1)},ci_file_remove:function(e,t){this.upload.ci_file=t},file_preview:function(e){var t=void 0;if(e.response){var i=e.response.data.file;t=r.default.Const.NET.FILE_URL_PREFIX+i.hash+"."+i.ext}else t=r.default.Const.NET.FILE_URL_PREFIX+e.hash+"."+e.ext;window.open(t)},invoice_file_success:function(e,t,i){this.formData.invoice_file_id=e.data.file.id},invoice_file_change:function(e,t){this.upload.invoice_file=t.slice(-1)},invoice_file_remove:function(e,t){this.upload.invoice_file=t},other_file_success:function(e,t,i){this.formData.other_file_id=e.data.file.id},other_file_change:function(e,t){this.upload.other_file=t.slice(-1)},other_file_remove:function(e,t){this.upload.other_file=t},pipeStatus:function(e){var t=this.statusData.filter(function(t){return t.id===e});return t.length>0?t[0].name:"/"},pipeCustomer:function(e){var t=this.customerList.filter(function(t){return t.id===e});return t.length>0?t[0].name:"/"},pipeType:function(e){var t=this.cleanType.filter(function(t){return t.id===e});return t.length>0?t[0].name:"/"},reviewInvitation:function(){var e=this;e.dialogReviewVisible=!1,e.loading=!0,d.default.statusCleanRecord(this.currentID,this.status).then(function(t){if(-2===t.code)throw t.message;e.$message({message:"Review Successfully",type:"success"}),e.loading=!1,e.getCleanRecord()}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1})},onSearch:function(){this.getCleanRecord()},onClean:function(){this.currentPage=1,this.formSearch={ci_no:""},this.getCleanRecord()},onEdit:function(){var e=(0,o.default)(l.default.mark(function e(t){return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.upload={url:r.default.Const.NET.FILE_UPLOAD_END_POINT,paramName:"file",params:{token:r.default.Data.getToken()},ci_file:[],other_file:[],invoice_file:[]},e.next=3,this.loadImg();case 3:e.sent,this.formData=JSON.parse((0,n.default)(t)),this.dialogTitle="Update Clean Record",this.dialogVisible=!0;case 7:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),loadImg:function(){var e=(0,o.default)(l.default.mark(function e(){var t,i,n,o=this;return l.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=new a.default(function(e,t){r.default.Api.FileError.findFile(o.formData.ci_file_id).then(function(t){o.upload.ci_file.push(t.file),e(t)},function(e){t(e)})}),i=new a.default(function(e,t){r.default.Api.FileError.findFile(o.formData.invoice_file_id).then(function(t){o.upload.invoice_file.push(t.file),e(t)},function(e){t(e)})}),n=new a.default(function(e,t){r.default.Api.FileError.findFile(o.formData.other_file_id).then(function(t){o.upload.other_file.push(t.file),e(t)},function(e){t(e)})}),e.abrupt("return",a.default.all([t,i,n]));case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),onDelete:function(e){this.currentID=e.id,this.dialogDeleteVisible=!0},dialogAdd:function(){this.formData={clean_type:0,org_id:r.default.Data.getOrg().id,customer_id:"",ci_no:"",ci_file_id:"",country:"",vat:"",sailing_date:"",invoice_no:"",invoice_file_id:"",other:"",other_file_id:"",operator_id:r.default.Data.getUser()?r.default.Data.getUser().id:"",deliver_order_no:""},this.upload={url:r.default.Const.NET.FILE_UPLOAD_END_POINT,paramName:"file",params:{token:r.default.Data.getToken()},ci_file:[],other_file:[],invoice_file:[]},this.dialogTitle="Add Clean Record",this.dialogVisible=!0},dialogConfirm:function(){var e=this;this.required()&&(this.loading=!0,this.formData.sailing_date=r.default.Util.parseDate(this.sailing_date),d.default.postCleanRecord(this.formData).then(function(t){if(-2===t.code)throw t.message;e.loading=!1,e.dialogVisible=!1,e.getCleanRecord()}).catch(function(t){e.$message({message:t,type:"error"}),e.dialogVisible=!1,e.loading=!1}))},dialogCancel:function(){this.dialogVisible=!1},deleteInvitation:function(){var e=this;e.loading=!0,d.default.deleteCleanRecord(e.currentID).then(function(t){e.$message({message:"Save Successfully",type:"success"}),e.loading=!1,e.dialogDeleteVisible=!1,e.getCleanRecord()}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1,e.dialogDeleteVisible=!1})},handleCurrentChange:function(e){this.currentPage=e,r.default.Data.set(r.default.Const.DATA.KEY_AFTER_SALES_PAGE,this.currentPage),this.getCleanRecord()},getCleanRecord:function(){var e=this;this.loading=!0,d.default.filterCleanRecord(this.currentPage,this.formSearch).then(function(t){e.tableList=t.data.content,e.total=t.data.totalElements,e.loading=!1}).catch(function(e){scope.$message({message:e,type:"error"}),scope.loading=!1,scope.dialogDeleteVisible=!1})},required:function(){return""===this.formData.ci_no?(this.$message({message:"Please add CI No.",type:"warning"}),!1):""===this.formData.customer_id?(this.$message({message:"Please add Customer",type:"warning"}),!1):""===this.formData.clean_type?(this.$message({message:"Please add Clean Type",type:"warning"}),!1):""!==this.formData.invoice_no||(this.$message({message:"Please add Invoice No.",type:"warning"}),!1)}},watch:{}}},2679:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=i(3),l=(a=n)&&a.__esModule?a:{default:a};var o={filterCleanRecord:function(e,t){return l.default.HttpHelp.request({method:"POST",url:"/nl/clean/cleanRecord/filter",data:{ci_no:t.ci_no},params:{page:e,size:10}})},postCleanRecord:function(e){return l.default.HttpHelp.request({method:"POST",url:"/nl/clean/cleanRecord",data:e})},deleteCleanRecord:function(e){return l.default.HttpHelp.request({method:"DELETE",url:"/nl/clean/cleanRecord/"+e})},getCleanRecordId:function(e){return l.default.HttpHelp.request({method:"GET",url:"/nl/clean/cleanRecord/"+e})},statusCleanRecord:function(e,t){return l.default.HttpHelp.request({method:"PUT",url:"/nl/clean/cleanRecord/"+e+"/status",params:{status:t}})}};t.default=o},2680:function(e,t,i){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"clean-record"},[a("div",{staticClass:"search-header"},[a("el-form",{staticClass:"list-form-inline",attrs:{inline:!0,model:e.formSearch}},[a("el-form-item",{attrs:{label:"CI No."}},[a("el-input",{attrs:{placeholder:"CI No."},model:{value:e.formSearch.ci_no,callback:function(t){e.$set(e.formSearch,"ci_no",t)},expression:"formSearch.ci_no"}})],1),e._v(" "),a("div",{staticClass:"btn-group-inline-icon"},[a("div",{staticClass:"icons"},[a("div",{staticClass:"icon-item search",attrs:{title:"search"},on:{click:e.onSearch}}),e._v(" "),a("div",{staticClass:"icon-item clear",attrs:{title:"clear"},on:{click:e.onClean}})])])],1),e._v(" "),a("div",{staticClass:"btn-group-top"},[a("div",{staticClass:"icons"},[a("div",{directives:[{name:"ilpermission",rawName:"v-ilpermission",value:"clean-record-add",expression:"'clean-record-add'"}],staticClass:"icon-item add-v2",attrs:{title:"add"},on:{click:e.dialogAdd}})])])],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-wrap"},[a("div",{staticClass:"table-content-holder"},[e.tableList.length<=0&&!e.loading?a("div",{staticClass:"no-data-content"},[e._v("\n        noResult\n      ")]):a("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("thead",e._l(e.headData,function(t,i){return a("td",{key:i},[e._v(e._s(t))])}),0),e._v(" "),!e.loading&&e.tableList.length>0?a("tbody",e._l(e.tableList,function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.ci_no))]),e._v(" "),a("td",[e._v(e._s(e.pipeCustomer(t.customer_id)))]),e._v(" "),a("td",[e._v(e._s(e.pipeType(t.clean_type)))]),e._v(" "),a("td",[e._v(e._s(t.invoice_no))]),e._v(" "),a("td",[e._v(e._s(t.deliver_order_no))]),e._v(" "),a("td",[e._v(e._s(e.pipeStatus(t.status)))]),e._v(" "),a("td",[a("a",{directives:[{name:"ilpermission",rawName:"v-ilpermission",value:"clean-record-add",expression:"'clean-record-add'"}],staticClass:"btn-underline",on:{click:function(i){return i.stopPropagation(),e.onEdit(t)}}},[e._v("edit")]),e._v(" "),a("a",{directives:[{name:"ilpermission",rawName:"v-ilpermission",value:"clean-record-delete",expression:"'clean-record-delete'"}],staticClass:"btn-underline",on:{click:function(i){return i.stopPropagation(),e.onDelete(t)}}},[e._v("delete")]),e._v(" "),a("el-dropdown",{directives:[{name:"ilpermission",rawName:"v-ilpermission",value:"clean-record-review",expression:"'clean-record-review'"}],staticClass:"statusDrop",attrs:{trigger:"click"},on:{command:function(i){return e.handleCommand(i,t)}}},[a("span",{staticClass:"el-dropdown-link"},[e._v("\n                  action\n                  "),a("i",{staticClass:"el-icon-caret-bottom el-icon--right"})]),e._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"EXPORT_CLEAN",disabled:1===t.status||2===t.status||3===t.status}},[e._v("EXPORT_CLEAN")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"IMPORT_CLEAN",disabled:1!==t.status||2===t.status||3===t.status}},[e._v("IMPORT_CLEAN")]),e._v(" "),a("el-dropdown-item",{attrs:{command:"STATUS_FINISH",disabled:3===t.status}},[e._v("STATUS_FINISH")])],1)],1)],1)])}),0):e._e()])]),e._v(" "),a("div",{staticClass:"table-footer"},[a("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t}}}),e._v(" "),a("p",{staticClass:"total"},[e._v("total: "+e._s(e.total))])],1)]),e._v(" "),a("el-dialog",{staticClass:"dialog-cleanRecord",attrs:{title:e.dialogTitle,visible:e.dialogVisible,"custom-class":"edit-dialog"},on:{"update:title":function(t){e.dialogTitle=t},"update:visible":function(t){e.dialogVisible=t}}},[a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[e._v("\n        CI No.\n        "),a("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input input-sn",attrs:{placeholder:"CI No."},model:{value:e.formData.ci_no,callback:function(t){e.$set(e.formData,"ci_no",t)},expression:"formData.ci_no"}})],1)]),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[e._v("\n        Delivery Order No.\n        "),a("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),a("div",{staticClass:"content"},[a("el-autocomplete",{staticClass:"input",staticStyle:{width:"100%"},attrs:{"fetch-suggestions":e.querySearchAsync,placeholder:"Delivery Order No."},on:{select:e.handleInputConfirm},model:{value:e.formData.deliver_order_no,callback:function(t){e.$set(e.formData,"deliver_order_no",t)},expression:"formData.deliver_order_no"}})],1)]),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[e._v("\n        Customer\n        "),a("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),a("div",{staticClass:"content"},[a("el-select",{staticClass:"land",attrs:{slot:"append",filterable:"",placeholder:"Customer"},on:{change:e.handleChange},slot:"append",model:{value:e.formData.customer_id,callback:function(t){e.$set(e.formData,"customer_id",t)},expression:"formData.customer_id"}},e._l(e.customerList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)]),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[e._v("\n        Invoice No.\n        "),a("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input input-sn",attrs:{placeholder:"Invoice No."},model:{value:e.formData.invoice_no,callback:function(t){e.$set(e.formData,"invoice_no",t)},expression:"formData.invoice_no"}})],1)]),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[e._v("\n        Clean Type\n        "),a("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),a("div",{staticClass:"content"},[a("el-select",{staticClass:"land",attrs:{slot:"append",filterable:"",placeholder:"Clean Type"},slot:"append",model:{value:e.formData.clean_type,callback:function(t){e.$set(e.formData,"clean_type",t)},expression:"formData.clean_type"}},e._l(e.cleanType,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1)]),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[e._v("Other No.")]),e._v(" "),a("div",{staticClass:"content"},[a("el-input",{staticClass:"input input-sn",attrs:{placeholder:"Other No."},model:{value:e.formData.other,callback:function(t){e.$set(e.formData,"other",t)},expression:"formData.other"}})],1)]),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[e._v("\n        Country\n        "),a("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),a("div",{staticClass:"content"},[a("el-select",{staticClass:"land",attrs:{slot:"append",filterable:"",placeholder:"Country",disabled:""},slot:"append",model:{value:e.formData.country,callback:function(t){e.$set(e.formData,"country",t)},expression:"formData.country"}},e._l(e.areaCodeList,function(e){return a("el-option",{key:e.area_en,attrs:{label:e.area_en,value:e.area_en}})}),1)],1)]),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[e._v("\n        Vat No.\n        "),a("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),a("div",{staticClass:"content"},[a("el-input",{attrs:{placeholder:"Vat No.",disabled:""},model:{value:e.formData.vat,callback:function(t){e.$set(e.formData,"vat",t)},expression:"formData.vat"}})],1)]),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"title"},[e._v("\n        Sailing Date\n        "),a("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),a("div",{staticClass:"content"},[a("el-date-picker",{staticClass:"input",staticStyle:{width:"100%"},attrs:{type:"date",placeholder:"Sailing Date"},model:{value:e.sailing_date,callback:function(t){e.sailing_date=t},expression:"sailing_date"}})],1)]),e._v(" "),a("div",{staticClass:"item-row"},[a("div",{staticClass:"content text-area"},[a("div",[a("el-upload",{staticClass:"btn btn-primary upload-btn",attrs:{action:e.upload.url,data:e.upload.params,multiple:!1,"on-change":e.ci_file_change,"on-remove":e.ci_file_remove,"on-success":e.ci_file_success,"on-preview":e.file_preview,"file-list":e.upload.ci_file}},[0===e.upload.ci_file.length?a("img",{staticClass:"upload-icon",attrs:{src:i(53)}}):e._e()]),e._v(" "),a("p",[e._v("CI")])],1),e._v(" "),a("div",[a("el-upload",{staticClass:"btn btn-primary upload-btn",attrs:{action:e.upload.url,data:e.upload.params,multiple:!1,"on-change":e.invoice_file_change,"on-remove":e.invoice_file_remove,"on-success":e.invoice_file_success,"on-preview":e.file_preview,"file-list":e.upload.invoice_file}},[0===e.upload.invoice_file.length?a("img",{staticClass:"upload-icon",attrs:{src:i(53)}}):e._e()]),e._v(" "),a("p",[e._v("Invoice")])],1),e._v(" "),a("div",[a("el-upload",{staticClass:"btn btn-primary upload-btn",attrs:{action:e.upload.url,data:e.upload.params,multiple:!1,"on-change":e.other_file_change,"on-remove":e.other_file_remove,"on-success":e.other_file_success,"on-preview":e.file_preview,"file-list":e.upload.other_file}},[0===e.upload.other_file.length?a("img",{staticClass:"upload-icon",attrs:{src:i(53)}}):e._e()]),e._v(" "),a("p",[e._v("Other")])],1)])]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"preview"},on:{click:e.dialogConfirm}},[e._v("confirm")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.dialogCancel}},[e._v("cancel")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"Delete Warehous",visible:e.dialogDeleteVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogDeleteVisible=t}}},[a("p",[e._v("Are you sure to delete it ?")]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.deleteInvitation}},[e._v("yes")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogDeleteVisible=!1}}},[e._v("no")])],1)]),e._v(" "),a("el-dialog",{attrs:{title:"Review Shipment Order",visible:e.dialogReviewVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogReviewVisible=t}}},[a("p",[e._v("Are you sure to do it ?")]),e._v(" "),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.reviewInvitation}},[e._v("yes")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogReviewVisible=!1}}},[e._v("no")])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=40.85d245c09a4651a9547a.js.map