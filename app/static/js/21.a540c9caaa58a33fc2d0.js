webpackJsonp([21],{2351:function(t,e,n){var a=n(2)(n(2728),n(2729),function(t){n(2726)},null,null);t.exports=a.exports},2364:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o,r=c(n(194)),i=c(n(195)),l=(a=(0,i.default)(r.default.mark(function t(){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.default.Api.Category.getAllCategoryListOfBafang(u.default.Const.COMPONENT_ROOT_CATEGORY));case 1:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)}),s=(o=(0,i.default)(r.default.mark(function t(){return r.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",u.default.HttpHelp.request({method:"GET",url:"/nl/nlPublic/company/all"}));case 1:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)}),u=c(n(3));function c(t){return t&&t.__esModule?t:{default:t}}var d={getAllCategory:l,getAllCustomer:s};e.default=d},2423:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o=n(3),r=(a=o)&&a.__esModule?a:{default:a};var i={addStockOut:function(t){return r.default.HttpHelp.request({method:"POST",url:"/NlOutStock",data:t})},delOneStockOut:function(t){return r.default.HttpHelp.request({method:"DELETE",url:"/NlOutStock/"+t})},stockOutFilter:function(t,e,n){return r.default.HttpHelp.request({method:"POST",url:"/NlOutStock/filter",data:t,params:{page:e||0,size:n||10}})},print:function(t,e){return r.default.HttpHelp.request({method:"POST",url:"/NlOutStock/printOutboundOrderPdf",data:t,params:e})},filterAll:function(t){return r.default.HttpHelp.request({method:"POST",url:"/NlOutStock/filterAll",data:{nl_out_stock_header_id:t}})},saveHeader:function(t){return r.default.HttpHelp.request({method:"POST",url:"/NlOutStock/save2",data:t})},exportfile:function(t){return r.default.HttpHelp.request({method:"GET",url:"/NlOutStock/exportNlOutStock",data:t,responseType:"blob"})}};e.default=i},2424:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a,o=n(3),r=(a=o)&&a.__esModule?a:{default:a};var i={filter:function(t,e,n){return r.default.HttpHelp.request({method:"POST",url:"/NlOutStockHeader/filter2",data:t,params:{page:e||0,size:n||10}})},save:function(t){return r.default.HttpHelp.request({method:"POST",url:"/NlOutStockHeader/save2",data:t})},remove:function(t){return r.default.HttpHelp.request({method:"DELETE",url:"/NlOutStockHeader/"+t})},findOne:function(t){return r.default.HttpHelp.request({method:"GET",url:"/NlOutStockHeader/"+t})},approved:function(t){return r.default.HttpHelp.request({method:"PUT",url:"/NlOutStockHeader/"+t+"/approved"})}};e.default=i},2726:function(t,e,n){var a=n(2727);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);n(2279)("d3de913e",a,!0,{})},2727:function(t,e,n){(t.exports=n(2278)(!0)).push([t.i,".stock-out-index{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.stock-out-index .list-form-inline{height:100%;line-height:50px;width:calc(100% - 130px)}.stock-out-index .list-form-inline .el-form-item{margin-right:2px!important;margin-bottom:0}.stock-out-index .list-form-inline .el-form-item__label{color:#fff;width:100px;text-align:left;margin-left:5px}.stock-out-index .list-form-inline .el-form-item__content{width:180px!important}.stock-out-index .status_approved{color:#98b42c}.stock-out-index .status_create{color:#e26829}.stock-out-index .dialog-region .el-dialog__body{padding:30px 67px}.stock-out-index .dialog-region .item{margin:20px 0;font-size:0;height:30px}.stock-out-index .dialog-region .item .item-box{line-height:30px}.stock-out-index .dialog-region .item .label{display:inline-block;width:115px;height:30px;vertical-align:middle}.stock-out-index .dialog-region .item .label span{color:#e26829;display:inline-block}.stock-out-index .dialog-region .item .input{margin-left:40px;width:260px}.stock-out-index .dialog-region .item .input i{color:#ffffff99}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/views/nl-view/stocks/out.vue"],names:[],mappings:"AACA,iBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,WAAY,AACZ,WAAa,CACd,AACD,mCACI,YAAa,AACb,iBAAkB,AAClB,wBAA0B,CAC7B,AACD,iDACM,2BAA6B,AAC7B,eAAiB,CACtB,AACD,wDACM,WAAY,AACZ,YAAa,AACb,gBAAiB,AACjB,eAAiB,CACtB,AACD,0DACM,qBAAwB,CAC7B,AACD,kCACI,aAAe,CAClB,AACD,gCACI,aAAe,CAClB,AACD,iDACI,iBAAmB,CACtB,AACD,sCACI,cAAe,AACf,YAAa,AACb,WAAa,CAChB,AACD,gDACM,gBAAkB,CACvB,AACD,6CACM,qBAAsB,AACtB,YAAa,AACb,YAAa,AACb,qBAAuB,CAC5B,AACD,kDACQ,cAAe,AACf,oBAAsB,CAC7B,AACD,6CACM,iBAAkB,AAClB,WAAa,CAClB,AACD,+CACQ,eAAiB,CACxB",file:"out.vue",sourcesContent:["\n.stock-out-index {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.stock-out-index .list-form-inline {\n    height: 100%;\n    line-height: 50px;\n    width: calc(100% - 130px);\n}\n.stock-out-index .list-form-inline .el-form-item {\n      margin-right: 2px !important;\n      margin-bottom: 0;\n}\n.stock-out-index .list-form-inline .el-form-item__label {\n      color: #fff;\n      width: 100px;\n      text-align: left;\n      margin-left: 5px;\n}\n.stock-out-index .list-form-inline .el-form-item__content {\n      width: 180px !important;\n}\n.stock-out-index .status_approved {\n    color: #98b42c;\n}\n.stock-out-index .status_create {\n    color: #e26829;\n}\n.stock-out-index .dialog-region .el-dialog__body {\n    padding: 30px 67px;\n}\n.stock-out-index .dialog-region .item {\n    margin: 20px 0;\n    font-size: 0;\n    height: 30px;\n}\n.stock-out-index .dialog-region .item .item-box {\n      line-height: 30px;\n}\n.stock-out-index .dialog-region .item .label {\n      display: inline-block;\n      width: 115px;\n      height: 30px;\n      vertical-align: middle;\n}\n.stock-out-index .dialog-region .item .label span {\n        color: #e26829;\n        display: inline-block;\n}\n.stock-out-index .dialog-region .item .input {\n      margin-left: 40px;\n      width: 260px;\n}\n.stock-out-index .dialog-region .item .input i {\n        color: #ffffff99;\n}\n"],sourceRoot:""}])},2728:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=d(n(194)),o=d(n(195)),r=d(n(2364)),i=d(n(2423)),l=d(n(2424)),s=d(n(3)),u=d(n(767)),c=d(n(4));function d(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{loading:!1,headData:["Order No.","Customer","Purpose","Date","Create Date","User","Status","Operation"],tableList:[],formSearch:{},currentPage:1,total:0,formData:{},PurposeList:s.default.StatusData.PURPOSE,customerList:[]}},created:function(){var t=(0,o.default)(a.default.mark(function t(){var e=this;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:this.loading=!0,r.default.getAllCustomer().then(function(t){e.customerList=t.data,e.loading=!1}),this.getData();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),methods:{goSearch:function(){this.getData()},onClean:function(){this.formSearch.order_no="",this.formSearch.purpose="",this.formSearch.customer_id="",this.formSearch.startDate="",this.formSearch.endDate="",this.getData()},onPrint:function(){var t=(0,o.default)(a.default.mark(function t(e){var n,o=this;return a.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=[],this.loading=!0,t.next=4,i.default.filterAll(e.id).then(function(t){n=t.data.map(function(t){return t.id}),o.loading=!1});case 4:i.default.print(n,{headerId:e.id}).then(function(t){var e="stock out-"+(0,c.default)().format("YYYY-MM-DD"),n=new Blob([t.data],{type:"text/html;charset=utf-8"});(0,u.default)(n,e+".html")});case 5:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),add:function(){this.$router.push({name:"StockOutDetail",params:{id:0}})},onExport:function(){var t={orderNo:this.formSearch.order_no,customerId:this.formSearch.customer_id};if(this.formSearch.startDate){var e=(0,c.default)(this.formSearch.startDate).startOf("day").valueOf();t.startDate=s.default.Util.parseDate(e)}if(this.formSearch.endDate){var n=(0,c.default)(this.formSearch.endDate).endOf("day").valueOf();t.endDate=s.default.Util.parseDate(n)}i.default.exportfile(t).then(function(t){var e="stock out-"+(0,c.default)().format("YYYY-MM-DD");(0,u.default)(t.data,e+".xlsx")})},onEdit:function(t){this.$router.push({name:"StockOutDetail",params:{id:t.id}})},onDelete:function(t){var e=this;this.$confirm("Are you sure you wish to delete this?","Delete",{confirmButtonText:"Yes",cancelButtonText:"No",type:"warning"}).then(function(){e.deleteStockOut(t)}).catch(function(){})},onReview:function(t,e){var n=this;switch(t){case"approved":this.$confirm("Do you agree to operate?","Review",{confirmButtonText:"Yes",cancelButtonText:"No",type:"warning"}).then(function(){n.approvedStockOut(e.id)})}},approvedStockOut:function(t){var e=this;this.loading=!0,l.default.approved(t).then(function(t){e.$message({type:"success",message:"Review Success!"}),e.getData(),e.loading=!1}).catch(function(t){e.$message({message:t.body.error,type:"error"}),e.loading=!1})},handleCurrentChange:function(t){this.currentPage=t,this.getData()},deleteStockOut:function(t){var e=this;this.loading=!0,l.default.remove(t.id).then(function(t){e.$message({type:"success",message:"Delete Success!"}),e.getData(),e.loading=!1}).catch(function(t){e.$message({message:t.body.error,type:"error"}),e.loading=!1})},getData:function(){var t=this;this.loading=!0;var e={order_no:this.formSearch.order_no,purpose:this.formSearch.purpose,customer_id:this.formSearch.customer_id,date:{}};if(this.formSearch.startDate){var n=(0,c.default)(this.formSearch.startDate).startOf("day").valueOf();e.date.start=s.default.Util.parseDate(n)}if(this.formSearch.endDate){var a=(0,c.default)(this.formSearch.endDate).endOf("day").valueOf();e.date.end=s.default.Util.parseDate(a)}l.default.filter(e,this.currentPage).then(function(e){t.tableList=e.data.content.map(function(t){return t.selected=!1,t}),t.total=e.data.totalElements,t.loading=!1}).catch(function(e){t.loading=!1})}}}},2729:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"stock-out-index"},[n("div",{staticClass:"search-header"},[n("el-form",{staticClass:"list-form-inline",attrs:{inline:!0,model:t.formSearch}},[n("el-form-item",[n("el-input",{attrs:{placeholder:"Order No."},model:{value:t.formSearch.order_no,callback:function(e){t.$set(t.formSearch,"order_no","string"==typeof e?e.trim():e)},expression:"formSearch.order_no"}})],1),t._v(" "),n("el-form-item",[n("el-select",{attrs:{filterable:"",placeholder:"Customer"},model:{value:t.formSearch.customer_id,callback:function(e){t.$set(t.formSearch,"customer_id",e)},expression:"formSearch.customer_id"}},t._l(t.customerList,function(t){return n("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}),1)],1),t._v(" "),n("el-form-item",[n("el-select",{attrs:{placeholder:"Purpose"},model:{value:t.formSearch.purpose,callback:function(e){t.$set(t.formSearch,"purpose",e)},expression:"formSearch.purpose"}},t._l(t.PurposeList,function(t,e){return n("el-option",{key:e,attrs:{label:t,value:t}})}),1)],1),t._v(" "),n("el-form-item",[n("el-date-picker",{attrs:{type:"date",placeholder:"Start Date"},model:{value:t.formSearch.startDate,callback:function(e){t.$set(t.formSearch,"startDate",e)},expression:"formSearch.startDate"}})],1),t._v(" "),n("el-form-item",[n("el-date-picker",{attrs:{type:"date",placeholder:"End Date"},model:{value:t.formSearch.endDate,callback:function(e){t.$set(t.formSearch,"endDate",e)},expression:"formSearch.endDate"}})],1),t._v(" "),n("div",{staticClass:"btn-group-inline-icon"},[n("div",{staticClass:"icons"},[n("span",{staticClass:"icon-item search",attrs:{title:"search"},on:{click:t.goSearch}}),t._v(" "),n("div",{staticClass:"icon-item clear",attrs:{title:"clear"},on:{click:t.onClean}})])])],1),t._v(" "),n("div",{staticClass:"btn-group-top"},[n("div",{staticClass:"icons"},[n("button",{staticClass:"el-button el-button--preview",attrs:{type:"button"},on:{click:function(e){return t.add()}}},[t._v("\n          Add\n          "),n("i",{staticClass:"el-icon-plus btn-icon"})]),t._v(" "),n("button",{staticClass:"el-button el-button--preview",attrs:{type:"button"},on:{click:t.onExport}},[t._v("Export")])])])],1),t._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-wrap",attrs:{"element-loading-text":"loading..."}},[n("div",{staticClass:"table-content-holder"},[t.tableList.length<=0&&!t.loading?n("div",{staticClass:"no-data-content"},[t._v("noResult")]):n("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[n("thead",t._l(t.headData,function(e,a){return n("td",{key:a},[t._v(t._s(e))])}),0),t._v(" "),n("tbody",t._l(t.tableList,function(e){return n("tr",{key:e.id},[n("td",[t._v(t._s(e.order_no))]),t._v(" "),n("td",[t._v(t._s(e.customer_name))]),t._v(" "),n("td",[t._v(t._s(e.purpose))]),t._v(" "),n("td",[t._v(t._s(t._f("timeFormat")(e.date,"Y-m-d")))]),t._v(" "),n("td",[t._v(t._s(t._f("timeFormat")(e.create_time,"Y-m-d")))]),t._v(" "),n("td",[t._v(t._s(e.create_user_id))]),t._v(" "),n("td",{class:[0==e.status?"status_create":"status_approved"]},[t._v(t._s(0==e.status?"Create":"Approved"))]),t._v(" "),n("td",[n("button",{staticClass:"btn-underline",on:{click:function(n){return n.stopPropagation(),t.onPrint(e)}}},[t._v("Print")]),t._v(" "),n("button",{staticClass:"btn-underline",on:{click:function(n){return n.stopPropagation(),t.onEdit(e)}}},[t._v("Edit")]),t._v(" "),n("button",{staticClass:"btn-underline",attrs:{disabled:1===e.status},on:{click:function(n){return n.stopPropagation(),t.onDelete(e)}}},[t._v("Delete")]),t._v(" "),n("el-dropdown",{attrs:{trigger:"click"},on:{command:function(n){return t.onReview(n,e)}}},[n("span",{staticClass:"el-dropdown-link"},[t._v("\n                  Review\n                  "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{disabled:1===e.status,icon:"el-icon-plus",command:"approved"}},[t._v("Approved")])],1)],1)],1)])}),0)])]),t._v(" "),n("div",{staticClass:"table-footer"},[n("el-pagination",{attrs:{"current-page":t.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e}}}),t._v(" "),n("p",{staticClass:"total"},[t._v("total: "+t._s(t.total))])],1)])])},staticRenderFns:[]}}});
//# sourceMappingURL=21.a540c9caaa58a33fc2d0.js.map