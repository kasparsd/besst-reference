webpackJsonp([60],{2312:function(e,t,n){var i=n(2)(n(2560),n(2561),function(e){n(2558)},null,null);e.exports=i.exports},2558:function(e,t,n){var i=n(2559);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(2279)("242dcf84",i,!0,{})},2559:function(e,t,n){(e.exports=n(2278)(!0)).push([e.i,".permission-setting{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%}.permission-setting .list-form-inline{height:100%;line-height:50px}.permission-setting .list-form-inline .el-form-item{margin-right:2px!important;margin-bottom:0}.permission-setting .list-form-inline .el-form-item__content{width:220px!important}.permission-setting .parts-list{display:-webkit-box;display:-ms-flexbox;display:flex;padding:27px 40px;overflow:hidden;width:100%;-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap}.permission-setting .parts-list .item{width:45%;height:30px;margin:0 20px}.permission-setting .parts-list .item.label{display:inline-block;width:150px}.permission-setting .no-data-content{position:relative;text-align:center;width:80%;margin:0 auto;padding:15px 30%;color:#fff;text-align:left}.permission-setting .transfer-box{text-align:center}.permission-setting .transfer{text-align:left;display:inline-block}.permission-setting .transfer ::-webkit-scrollbar{width:3px;height:14px}.permission-setting .transfer .el-transfer-panel{width:350px}.permission-setting .dialog-per-setting{overflow:hidden}.permission-setting .dialog-per-setting .el-dialog__body{font-size:0}.permission-setting .dialog-per-setting .item{width:50%;line-height:30px;display:inline-block}.permission-setting .dialog-per-setting .item .land{width:250px}.permission-setting .dialog-per-setting .item .title{display:inline-block;width:80px}.permission-setting .dialog-per-setting .item .content{margin:10px;display:inline-block;width:250px}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/views/nl/role/role-setting.vue"],names:[],mappings:"AACA,oBACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,4BAA6B,AAC7B,6BAA8B,AAC1B,0BAA2B,AACvB,sBAAuB,AAC/B,WAAY,AACZ,WAAa,CACd,AACD,sCACI,YAAa,AACb,gBAAkB,CACrB,AACD,oDACM,2BAA6B,AAC7B,eAAiB,CACtB,AACD,6DACM,qBAAwB,CAC7B,AACD,gCACI,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,kBAAmB,AACnB,gBAAiB,AACjB,WAAY,AACZ,sBAAuB,AACnB,mBAAoB,AAChB,qBAAsB,AAC9B,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,mBAAoB,AAChB,cAAgB,CACvB,AACD,sCACM,UAAW,AACX,YAAa,AACb,aAAe,CACpB,AACD,4CACQ,qBAAsB,AACtB,WAAa,CACpB,AACD,qCACI,kBAAmB,AACnB,kBAAmB,AACnB,UAAW,AACX,cAAe,AACf,iBAAkB,AAClB,WAAY,AACZ,eAAiB,CACpB,AACD,kCACI,iBAAmB,CACtB,AACD,8BACI,gBAAiB,AACjB,oBAAsB,CACzB,AACD,kDACM,UAAW,AACX,WAAa,CAClB,AACD,iDACM,WAAa,CAClB,AACD,wCACI,eAAiB,CACpB,AACD,yDACM,WAAa,CAClB,AACD,8CACM,UAAW,AACX,iBAAkB,AAClB,oBAAsB,CAC3B,AACD,oDACQ,WAAa,CACpB,AACD,qDACQ,qBAAsB,AACtB,UAAY,CACnB,AACD,uDACQ,YAAa,AACb,qBAAsB,AACtB,WAAa,CACpB",file:"role-setting.vue",sourcesContent:["\n.permission-setting {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n.permission-setting .list-form-inline {\n    height: 100%;\n    line-height: 50px;\n}\n.permission-setting .list-form-inline .el-form-item {\n      margin-right: 2px !important;\n      margin-bottom: 0;\n}\n.permission-setting .list-form-inline .el-form-item__content {\n      width: 220px !important;\n}\n.permission-setting .parts-list {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    padding: 27px 40px;\n    overflow: hidden;\n    width: 100%;\n    -webkit-box-pack: left;\n        -ms-flex-pack: left;\n            justify-content: left;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap: wrap;\n        flex-wrap: wrap;\n}\n.permission-setting .parts-list .item {\n      width: 45%;\n      height: 30px;\n      margin: 0 20px;\n}\n.permission-setting .parts-list .item.label {\n        display: inline-block;\n        width: 150px;\n}\n.permission-setting .no-data-content {\n    position: relative;\n    text-align: center;\n    width: 80%;\n    margin: 0 auto;\n    padding: 15px 30%;\n    color: #fff;\n    text-align: left;\n}\n.permission-setting .transfer-box {\n    text-align: center;\n}\n.permission-setting .transfer {\n    text-align: left;\n    display: inline-block;\n}\n.permission-setting .transfer ::-webkit-scrollbar {\n      width: 3px;\n      height: 14px;\n}\n.permission-setting .transfer .el-transfer-panel {\n      width: 350px;\n}\n.permission-setting .dialog-per-setting {\n    overflow: hidden;\n}\n.permission-setting .dialog-per-setting .el-dialog__body {\n      font-size: 0;\n}\n.permission-setting .dialog-per-setting .item {\n      width: 50%;\n      line-height: 30px;\n      display: inline-block;\n}\n.permission-setting .dialog-per-setting .item .land {\n        width: 250px;\n}\n.permission-setting .dialog-per-setting .item .title {\n        display: inline-block;\n        width: 80px;\n}\n.permission-setting .dialog-per-setting .item .content {\n        margin: 10px;\n        display: inline-block;\n        width: 250px;\n}\n"],sourceRoot:""}])},2560:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,s=n(3),a=(i=s)&&i.__esModule?i:{default:i};t.default={data:function(){this.$createElement;return{formSearch:{email:""},roleTransferData:[],setRoleData:[],renderFunc:function(e,t){return e("span",[t.role_no.toUpperCase()," - ",t.role_name])},loading:!1,userInfo:{},hasRole:!1,role:{department_id:0,org_id:0,remark:"",role_name:"",role_no:"",role_type:null,status:0,update_time:0,update_user_id:0,user_id:0},dialogTitle:"",departmentList:"",currentDepartment:""}},i18n:{messages:{}},created:function(){},computed:{},mounted:function(){var e=this,t=this;this.loading=!0,this.getAllRole().then(function(n){if(-2===n.code)throw n.message;t.roleTransferData=n.map(function(e){return e.key=e.id,e.label=e.role_name,e}),e.loading=!1}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1}),this.loading=!0,this.getAllDepartment().then(function(t){if(-2===t.code)throw t.message;e.departmentList=t,e.loading=!1}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1})},methods:{clearData:function(){this.setRoleData=[],this.userInfo={},this.hasRole=!1,this.loading=!1},goAfterIndex:function(){this.$router.push({name:"afterIndex"})},onSearch:function(){var e=this;if(!this.formSearch.email)return this.$message({message:"Please input email",type:"warning"}),void this.clearData();this.loading=!0,this.getUserByEmail(this.formSearch.email).then(function(t){return 5===t.code||2===t.code?(e.$message({message:t.message,type:"warning"}),!1):(e.userInfo=t.data,e.getUserRoleDepRelByEmail(e.formSearch.email))},function(t){return e.$message({message:"has error",type:"error"}),!1}).then(function(t){!1!==t?5===t.code||2===t.code?(e.$message({message:t.message,type:"warning"}),e.clearData()):(e.loading=!1,e.hasRole=!0,e.currentDepartment=t.data.rel[0]&&t.data.rel[0].department_id,e.setRoleData=t.data.rel.map(function(e){return e.role_id})):e.clearData()})},onSave:function(){var e=this;if(this.currentDepartment){var t=this.setRoleData.map(function(t){return{role_id:t,user_id:e.userInfo.user.id,department_id:e.currentDepartment}});this.loading=!0,this.saveUserRoleDepRel(t,this.userInfo.user.email).then(function(t){e.loading=!1},function(t){e.$message({message:"has error",type:"error"}),e.clearData()})}else this.$message({message:"Please select department",type:"warning"})},handleChange:function(e,t,n){console.log(e,t,n)},getUserByEmail:function(e){return a.default.Api.request({method:"GET",url:"/user/user-by-email",data:{email:e}})},getUserRoleDepRelByEmail:function(e){return a.default.Api.request({method:"GET",url:"/nl/public/userRoleDepartmentRel/email-to-rel",data:{email:e}})},getAllRole:function(){return a.default.Api.request({method:"GET",url:"/nl/public/role/all"})},getAllDepartment:function(){return a.default.Api.request({method:"GET",url:"/nl/public/department/all"})},saveUserRoleDepRel:function(e,t){return a.default.Api.request({method:"POST",url:"/nl/public/userRoleDepartmentRel/bulk-to-email",data:e,params:{email:t}})}},watch:{}}},2561:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"permission-setting"},[n("div",{staticClass:"header"},[n("el-form",{staticClass:"list-form-inline",attrs:{inline:!0,model:e.formSearch}},[n("el-form-item",[n("el-input",{staticClass:"input",attrs:{placeholder:"Email"},model:{value:e.formSearch.email,callback:function(t){e.$set(e.formSearch,"email",t)},expression:"formSearch.email"}},[n("el-button",{attrs:{slot:"append"},on:{click:e.onSearch},slot:"append"},[n("i",{staticClass:"el-icon-search"})])],1)],1)],1),e._v(" "),n("div",{staticClass:"btn-group-top"},[n("div",{staticClass:"icons"},[e.hasRole?n("div",{staticClass:"icon-item save",attrs:{title:"save"},on:{click:e.onSave}}):e._e()])])],1),e._v(" "),n("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"content-wrap"},[n("div",{staticClass:"content"},[n("div",{staticClass:"parts-list"},[n("div",{staticClass:"item"},[n("label",{staticClass:"label"},[e._v("User ID :")]),e._v(" "),n("span",[e._v(e._s(e.userInfo.user&&e.userInfo.user.id||"-"))])]),e._v(" "),n("div",{staticClass:"item"},[n("label",{staticClass:"label"},[e._v("Name :")]),e._v(" "),n("span",[e._v(e._s(e.userInfo.user&&e.userInfo.user.name||"-"))])]),e._v(" "),n("div",{staticClass:"item"},[n("label",{staticClass:"label"},[e._v("Email :")]),e._v(" "),n("span",[e._v(e._s(e.userInfo.user&&e.userInfo.user.email||"-"))])]),e._v(" "),n("div",{staticClass:"item"},[n("label",{staticClass:"label"},[e._v("Organization ID :")]),e._v(" "),n("span",[e._v(e._s(e.userInfo.org&&e.userInfo.org.id||"-"))])]),e._v(" "),n("div",{staticClass:"item"},[n("label",{staticClass:"label"},[e._v("Organization Name :")]),e._v(" "),n("span",[e._v(e._s(e.userInfo.org&&e.userInfo.org.name||"-"))])]),e._v(" "),!e.loading&&e.roleTransferData.length>0&&e.hasRole?n("div",{staticClass:"item"},[n("label",{staticClass:"label"},[e._v("Department :")]),e._v(" "),n("el-select",{staticClass:"land",attrs:{slot:"prepend",filterable:""},slot:"prepend",model:{value:e.currentDepartment,callback:function(t){e.currentDepartment=t},expression:"currentDepartment"}},e._l(e.departmentList,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1):e._e()])]),e._v(" "),e.hasRole||e.loading?e._e():n("div",{staticClass:"no-data-content"},[e._v("noResult")]),e._v(" "),!e.loading&&e.roleTransferData.length>0&&e.hasRole?n("div",{staticClass:"transfer-box"},[n("el-transfer",{staticClass:"transfer",attrs:{filterable:"","render-content":e.renderFunc,titles:["All Role","Set Role"],"button-texts":["Del","Add"],format:{noChecked:"${total}",hasChecked:"${checked}/${total}"},data:e.roleTransferData},on:{change:e.handleChange},model:{value:e.setRoleData,callback:function(t){e.setRoleData=t},expression:"setRoleData"}})],1):e._e()])])},staticRenderFns:[]}}});
//# sourceMappingURL=60.3c033733995af538024d.js.map