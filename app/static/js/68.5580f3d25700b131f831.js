webpackJsonp([68],{2310:function(e,i,t){var o=t(2)(t(2552),t(2553),function(e){t(2550)},null,null);e.exports=o.exports},2550:function(e,i,t){var o=t(2551);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);t(2279)("1f6f5bd4",o,!0,{})},2551:function(e,i,t){(e.exports=t(2278)(!0)).push([e.i,".permission-category{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.permission-category span.required{color:#e26829;display:inline-block}.permission-category .list-form-inline{height:100%;line-height:50px}.permission-category .list-form-inline .el-form-item{margin-right:2px!important;margin-bottom:0}.permission-category .list-form-inline .el-form-item__content{width:180px!important}.permission-category .table-wrap .long-td{max-width:270px;text-overflow:ellipsis;overflow:hidden;text-align:left}.permission-category .dialog-permission .el-dialog__body{padding:30px 66px}.permission-category .dialog-permission .item{margin:20px 0;font-size:0;height:30px}.permission-category .dialog-permission .item .item-box{line-height:30px}.permission-category .dialog-permission .item .label{display:inline-block;width:120px;height:30px;vertical-align:middle}.permission-category .dialog-permission .item .input{margin-left:40px;width:260px}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/views/nl/permission/permission-category.vue"],names:[],mappings:"AACA,qBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,WAAY,AACZ,WAAa,CACd,AACD,mCACI,cAAe,AACf,oBAAsB,CACzB,AACD,uCACI,YAAa,AACb,gBAAkB,CACrB,AACD,qDACM,2BAA6B,AAC7B,eAAiB,CACtB,AACD,8DACM,qBAAwB,CAC7B,AACD,0CACI,gBAAiB,AACjB,uBAAwB,AACxB,gBAAiB,AACjB,eAAiB,CACpB,AACD,yDACI,iBAAmB,CACtB,AACD,8CACI,cAAe,AACf,YAAa,AACb,WAAa,CAChB,AACD,wDACM,gBAAkB,CACvB,AACD,qDACM,qBAAsB,AACtB,YAAa,AACb,YAAa,AACb,qBAAuB,CAC5B,AACD,qDACM,iBAAkB,AAClB,WAAa,CAClB",file:"permission-category.vue",sourcesContent:["\n.permission-category {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.permission-category span.required {\n    color: #e26829;\n    display: inline-block;\n}\n.permission-category .list-form-inline {\n    height: 100%;\n    line-height: 50px;\n}\n.permission-category .list-form-inline .el-form-item {\n      margin-right: 2px !important;\n      margin-bottom: 0;\n}\n.permission-category .list-form-inline .el-form-item__content {\n      width: 180px !important;\n}\n.permission-category .table-wrap .long-td {\n    max-width: 270px;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    text-align: left;\n}\n.permission-category .dialog-permission .el-dialog__body {\n    padding: 30px 66px;\n}\n.permission-category .dialog-permission .item {\n    margin: 20px 0;\n    font-size: 0;\n    height: 30px;\n}\n.permission-category .dialog-permission .item .item-box {\n      line-height: 30px;\n}\n.permission-category .dialog-permission .item .label {\n      display: inline-block;\n      width: 120px;\n      height: 30px;\n      vertical-align: middle;\n}\n.permission-category .dialog-permission .item .input {\n      margin-left: 40px;\n      width: 260px;\n}\n"],sourceRoot:""}])},2552:function(e,i,t){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var o=a(t(20)),n=a(t(3));function a(e){return e&&e.__esModule?e:{default:e}}i.default={data:function(){return{loading:!1,formSearch:{permission_category_code:""},headData:[],tableList:[],currentPage:1,total:0,category:{permission_category_code:"",permission_category_name:""},dialogTitle:"",dialogCategoryVisible:!1,dialogDeleteVisible:!1,currentID:""}},i18n:{messages:{}},created:function(){},computed:{},mounted:function(){this.getPermissionCategory(),this.headData=["ID","Category Code","Category Name","Operation"]},methods:{goAfterIndex:function(){this.$router.push({name:"afterIndex"})},onSearch:function(){this.getPermissionCategory()},onClean:function(){this.formSearch={permission_category_code:""},this.getPermissionCategory()},onEdit:function(e){this.category=JSON.parse((0,o.default)(e)),this.dialogTitle="Update Category",this.dialogCategoryVisible=!0},onDelete:function(e){this.currentID=e.id,this.dialogDeleteVisible=!0},handleCurrentChange:function(e){this.currentPage=e,n.default.Data.set(n.default.Const.DATA.KEY_AFTER_SALES_PAGE,this.currentPage),this.getPermissionCategory()},dialogAdd:function(){this.dialogTitle="Add Category",this.dialogCategoryVisible=!0,this.category={permission_category_code:"",permission_category_name:""}},deleteInvitation:function(){var e=this,i=this;i.loading=!0,this.deletePermissionCategory(i.currentID).then(function(t){i.loading=!1,e.dialogDeleteVisible=!1,i.getPermissionCategory()},function(e){i.loading=!1,i.dialogDeleteVisible=!1})},dialogConfirm:function(){if(this.category.permission_category_code)if(this.category.permission_category_name){this.loading=!0;var e=this;this.postPermissionCategory(this.category).then(function(i){e.loading=!1,e.getPermissionCategory(),e.dialogCategoryVisible=!1},function(i){e.loading=!1,e.dialogCategoryVisible=!1})}else this.$message({message:"Please input category name",type:"warning"});else this.$message({message:"Please input category code",type:"warning"})},dialogCancel:function(){this.dialogCategoryVisible=!1,this.category={}},getPermissionCategory:function(){var e=this;this.loading=!0;var i=this;n.default.Api.request({method:"post",url:"/nl/public/permission/category/filter",data:{permission_category_code:this.formSearch.permission_category_code},params:{page:this.currentPage,size:10}}).then(function(t){i.loading=!1,e.tableList=t.content,e.total=t.totalPages*t.size},function(e){i.loading=!1})},postPermissionCategory:function(e){return n.default.Api.request({method:"POST",url:"/nl/public/permission/category",data:e})},deletePermissionCategory:function(e){return n.default.Api.request({method:"DELETE",url:"/nl/public/permission/category/"+e})}},watch:{}}},2553:function(e,i){e.exports={render:function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("div",{staticClass:"permission-category"},[t("div",{staticClass:"search-header"},[t("el-form",{staticClass:"list-form-inline",attrs:{inline:!0,model:e.formSearch}},[t("el-form-item",{attrs:{label:"Category Code"}},[t("el-input",{attrs:{placeholder:"Category Code"},model:{value:e.formSearch.permission_category_code,callback:function(i){e.$set(e.formSearch,"permission_category_code",i)},expression:"formSearch.permission_category_code"}})],1),e._v(" "),t("div",{staticClass:"btn-group-inline-icon"},[t("div",{staticClass:"icons"},[t("div",{staticClass:"icon-item search",attrs:{title:"search"},on:{click:e.onSearch}}),e._v(" "),t("div",{staticClass:"icon-item clear",attrs:{title:"clear"},on:{click:e.onClean}})])])],1),e._v(" "),t("div",{staticClass:"btn-group-top"},[t("div",{staticClass:"icons"},[t("div",{staticClass:"icon-item add-v2",attrs:{title:"add"},on:{click:e.dialogAdd}})])])],1),e._v(" "),t("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"table-wrap"},[t("div",{staticClass:"table-content-holder"},[e.tableList.length<=0&&!e.loading?t("div",{staticClass:"no-data-content"},[e._v("noResult")]):t("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[t("thead",e._l(e.headData,function(i,o){return t("td",{key:o},[e._v(e._s(i))])}),0),e._v(" "),!e.loading&&e.tableList.length>0?t("tbody",e._l(e.tableList,function(i){return t("tr",{key:i.id},[t("td",[e._v(e._s(i.id))]),e._v(" "),t("td",[e._v(e._s(i.permission_category_code))]),e._v(" "),t("td",[e._v(e._s(i.permission_category_name))]),e._v(" "),t("td",[t("a",{staticClass:"btn-underline",on:{click:function(t){return t.stopPropagation(),e.onEdit(i)}}},[e._v("edit")]),e._v(" "),t("a",{staticClass:"btn-underline",on:{click:function(t){return t.stopPropagation(),e.onDelete(i)}}},[e._v("delete")])])])}),0):e._e()])]),e._v(" "),t("div",{staticClass:"table-footer"},[t("el-pagination",{attrs:{"current-page":e.currentPage,"page-size":10,layout:"prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"update:currentPage":function(i){e.currentPage=i},"update:current-page":function(i){e.currentPage=i}}}),e._v(" "),t("p",{staticClass:"total"},[e._v("total: "+e._s(e.total))])],1)]),e._v(" "),t("el-dialog",{staticClass:"dialog-permission",attrs:{title:e.dialogTitle,visible:e.dialogCategoryVisible},on:{"update:title":function(i){e.dialogTitle=i},"update:visible":function(i){e.dialogCategoryVisible=i}}},[t("div",{staticClass:"item"},[t("div",{staticClass:"item-box"},[t("label",{staticClass:"label"},[e._v("Category Code\n          "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("el-input",{staticClass:"input",model:{value:e.category.permission_category_code,callback:function(i){e.$set(e.category,"permission_category_code",i)},expression:"category.permission_category_code"}})],1)]),e._v(" "),t("div",{staticClass:"item"},[t("div",{staticClass:"item-box"},[t("label",{staticClass:"label"},[e._v("Category Name\n          "),t("span",{staticClass:"required"},[e._v("*")])]),e._v(" "),t("el-input",{staticClass:"input",model:{value:e.category.permission_category_name,callback:function(i){e.$set(e.category,"permission_category_name",i)},expression:"category.permission_category_name"}})],1)]),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"preview"},on:{click:e.dialogConfirm}},[e._v("confirm")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:e.dialogCancel}},[e._v("cancel")])],1)]),e._v(" "),t("el-dialog",{attrs:{title:"Delete Permission",visible:e.dialogDeleteVisible,size:"tiny"},on:{"update:visible":function(i){e.dialogDeleteVisible=i}}},[t("p",[e._v("Are you sure to delete it ?")]),e._v(" "),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.deleteInvitation}},[e._v("yes")]),e._v(" "),t("el-button",{attrs:{type:"primary"},on:{click:function(i){e.dialogDeleteVisible=!1}}},[e._v("no")])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=68.5580f3d25700b131f831.js.map