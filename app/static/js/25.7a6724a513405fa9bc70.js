webpackJsonp([25],{2332:function(e,t,a){var n=a(2)(a(2645),a(2646),function(e){a(2643)},null,null);e.exports=n.exports},2372:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r,i=d(a(194)),o=d(a(195)),l=(n=(0,o.default)(i.default.mark(function e(t){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.default.HttpHelp.request({method:"GET",url:"/nl/afterSales/serviceCenterOrder/"+t}));case 1:case"end":return e.stop()}},e,this)})),function(e){return n.apply(this,arguments)}),s=(r=(0,o.default)(i.default.mark(function e(){return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",c.default.HttpHelp.request({method:"GET",url:"/nl/afterSales/serviceCenterOrder/all"}));case 1:case"end":return e.stop()}},e,this)})),function(){return r.apply(this,arguments)}),c=d(a(3));function d(e){return e&&e.__esModule?e:{default:e}}var p={filterServiceCenter:function(e,t){return c.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/serviceCenterOrder/filter",data:{customer_id:t.customer_id,order_no:t.order_no,root_category_id:t.root_category_id},params:{page:e,size:10}})},postServiceCenter:function(e){return c.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/serviceCenterOrder",data:e})},getServiceCenter:l,deleteServiceCenter:function(e){return c.default.HttpHelp.request({method:"DELETE",url:"/nl/afterSales/serviceCenterOrder/"+e})},bulkServiceCenterDetail:function(e){return c.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/serviceCenterOrderDetail/bulk",data:e})},getServiceCenterDetail:function(e){return c.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/serviceCenterOrderDetail/filter",data:{service_center_order_no:e},params:{page:1,size:999}})},getAllServiceCenter:s,getDetailBySN:function(e){return c.default.HttpHelp.request({method:"GET",url:"/object/detail-by-sn",data:e})}};t.default=p},2398:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,r=a(3),i=(n=r)&&n.__esModule?n:{default:n};var o={filterTechnical:function(e,t){return i.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/technicalServiceRecord/filter",data:{order_no:t.order_no,customer_id:t.customer_id},params:{page:e,size:10}})},getTechnical:function(e){return i.default.HttpHelp.request({method:"GET",url:"/nl/afterSales/technicalServiceRecord/"+e})},postTechnical:function(e){return i.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/technicalServiceRecord",data:e})},deleteTechnical:function(e){return i.default.HttpHelp.request({method:"DELETE",url:"/nl/afterSales/technicalServiceRecord/"+e})},putTechnicalStatus:function(e,t){return i.default.HttpHelp.request({method:"put",url:"/nl/afterSales/technicalServiceRecord/"+e+"/status",params:{status:t}})},filterTechnicalServiceAllotById:function(e){return i.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/technicalServiceAllot/filter",data:{service_id:e},params:{page:1,size:999}})},bulkTechnicalServiceAllot:function(e){return i.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/technicalServiceAllot/bulk2",data:e})},saveTechnicalServiceAllot:function(e){return i.default.HttpHelp.request({method:"POST",url:"/nl/afterSales/technicalServiceAllot",data:e})}};t.default=o},2643:function(e,t,a){var n=a(2644);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(2279)("43b5b7da",n,!0,{})},2644:function(e,t,a){(e.exports=a(2278)(!0)).push([e.i,".technical-service-save{width:100%;height:100%}.technical-service-save span.required{color:#e26829;display:inline-block}.technical-service-save .content{border:1px solid #2b2f3b}.technical-service-save .content .order-info{width:100%}.technical-service-save .content .order-info .title{height:50px;line-height:50px;padding-left:40px}.technical-service-save .content .order-info .left{float:left;width:100%;background:#353945;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b;border-bottom:1px solid #2b2f3b}.technical-service-save .content .order-info .left .item{line-height:60px;overflow:hidden;width:49%;height:50px;display:inline-block}.technical-service-save .content .order-info .left .item .label{display:inline-block;width:110px;margin-left:15px}.technical-service-save .content .order-info .left .item .input{margin-left:10px;width:256px;border-radius:0 0 10px 10px}.technical-service-save .content .order-info .left .item .input-left{margin-left:10px;width:200px}.technical-service-save .content .order-info .left .item .input-right{width:200px}.technical-service-save .content .order-info .left .item .input-note{margin-left:10px;width:608px}.technical-service-save .content .order-info .left .item-row{width:100%;padding-top:15px}.technical-service-save .content .order-info .left .item-row label{margin-left:15px}.technical-service-save .content .order-info .left .item-row .text-area{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;width:100%;margin:10px 0;padding:5px 15px}.technical-service-save .content .order-info .left .item-row .text-area .el-upload--text{display:-webkit-box;display:-ms-flexbox;display:flex}.technical-service-save .content .table-wrap .el-table:after,.technical-service-save .content .table-wrap .el-table:before{height:0}.technical-service-save .content .table-wrap .demo-table-expand{font-size:0}.technical-service-save .content .table-wrap .demo-table-expand label{width:150px;color:#99a9bf}.technical-service-save .content .table-wrap .demo-table-expand .el-form-item{margin-right:0;margin-bottom:0;width:50%}.technical-service-save .content .table-wrap .pick-list-add .content .order-info .el-table tr{background-color:#353945}.technical-service-save .content .table-wrap .el-table__footer-wrapper thead div,.technical-service-save .content .table-wrap .el-table__header-wrapper thead div{background:#353945;color:#fff}.technical-service-save .content .table-wrap .el-table__expanded-cell{background:#353945;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b}.technical-service-save .content .table-wrap .el-table__expanded-cell:hover{background-color:#353945!important}.technical-service-save .content .parts-list{text-align:right;padding:0 40px;font-size:12px;overflow:hidden;height:50px;line-height:50px;width:100%;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b}.technical-service-save .content .parts-list .att-btn{padding:6px 9px;min-width:0;margin:11px auto;display:block}.technical-service-save .content .parts-list .labelAdd{margin-left:14px}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/views/nl/after-sales/technical-service/technical-service-save.vue"],names:[],mappings:"AACA,wBACE,WAAY,AACZ,WAAa,CACd,AACD,sCACI,cAAe,AACf,oBAAsB,CACzB,AACD,iCACI,wBAA0B,CAC7B,AACD,6CACM,UAAY,CACjB,AACD,oDACQ,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CAC1B,AACD,mDACQ,WAAY,AACZ,WAAY,AACZ,mBAAoB,AACpB,kCAAmC,AAC3B,0BAA2B,AACnC,+BAAiC,CACxC,AACD,yDACU,iBAAkB,AAClB,gBAAiB,AACjB,UAAW,AACX,YAAa,AACb,oBAAsB,CAC/B,AACD,gEACY,qBAAsB,AACtB,YAAa,AACb,gBAAkB,CAC7B,AACD,gEACY,iBAAkB,AAClB,YAAa,AACb,2BAA6B,CACxC,AACD,qEACY,iBAAkB,AAClB,WAAa,CACxB,AACD,sEACY,WAAa,CACxB,AACD,qEACY,iBAAkB,AAClB,WAAa,CACxB,AACD,6DACU,WAAY,AACZ,gBAAkB,CAC3B,AACD,mEACY,gBAAkB,CAC7B,AACD,wEACY,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,yBAA0B,AACtB,6BAA8B,AAClC,WAAY,AACZ,cAAe,AACf,gBAAkB,CAC7B,AACD,yFACc,oBAAqB,AACrB,oBAAqB,AACrB,YAAc,CAC3B,AACD,2HAEM,QAAU,CACf,AACD,gEACM,WAAa,CAClB,AACD,sEACM,YAAa,AACb,aAAe,CACpB,AACD,8EACM,eAAgB,AAChB,gBAAiB,AACjB,SAAW,CAChB,AACD,8FACM,wBAA0B,CAC/B,AACD,kKAEM,mBAAoB,AACpB,UAAY,CACjB,AACD,sEACM,mBAAoB,AACpB,kCAAmC,AAC3B,yBAA2B,CACxC,AACD,4EACM,kCAAqC,CAC1C,AACD,6CACM,iBAAkB,AAClB,eAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,WAAY,AACZ,kCAAmC,AAC3B,yBAA2B,CACxC,AACD,sDACQ,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,aAAe,CACtB,AACD,uDACQ,gBAAkB,CACzB",file:"technical-service-save.vue",sourcesContent:["\n.technical-service-save {\n  width: 100%;\n  height: 100%;\n}\n.technical-service-save span.required {\n    color: #e26829;\n    display: inline-block;\n}\n.technical-service-save .content {\n    border: 1px solid #2b2f3b;\n}\n.technical-service-save .content .order-info {\n      width: 100%;\n}\n.technical-service-save .content .order-info .title {\n        height: 50px;\n        line-height: 50px;\n        padding-left: 40px;\n}\n.technical-service-save .content .order-info .left {\n        float: left;\n        width: 100%;\n        background: #353945;\n        -webkit-box-shadow: 0 -1px #2b2f3b;\n                box-shadow: 0 -1px #2b2f3b;\n        border-bottom: 1px solid #2b2f3b;\n}\n.technical-service-save .content .order-info .left .item {\n          line-height: 60px;\n          overflow: hidden;\n          width: 49%;\n          height: 50px;\n          display: inline-block;\n}\n.technical-service-save .content .order-info .left .item .label {\n            display: inline-block;\n            width: 110px;\n            margin-left: 15px;\n}\n.technical-service-save .content .order-info .left .item .input {\n            margin-left: 10px;\n            width: 256px;\n            border-radius: 0 0 10px 10px;\n}\n.technical-service-save .content .order-info .left .item .input-left {\n            margin-left: 10px;\n            width: 200px;\n}\n.technical-service-save .content .order-info .left .item .input-right {\n            width: 200px;\n}\n.technical-service-save .content .order-info .left .item .input-note {\n            margin-left: 10px;\n            width: 608px;\n}\n.technical-service-save .content .order-info .left .item-row {\n          width: 100%;\n          padding-top: 15px;\n}\n.technical-service-save .content .order-info .left .item-row label {\n            margin-left: 15px;\n}\n.technical-service-save .content .order-info .left .item-row .text-area {\n            display: -webkit-box;\n            display: -ms-flexbox;\n            display: flex;\n            -webkit-box-align: center;\n                -ms-flex-align: center;\n                    align-items: center;\n            -ms-flex-pack: distribute;\n                justify-content: space-around;\n            width: 100%;\n            margin: 10px 0;\n            padding: 5px 15px;\n}\n.technical-service-save .content .order-info .left .item-row .text-area .el-upload--text {\n              display: -webkit-box;\n              display: -ms-flexbox;\n              display: flex;\n}\n.technical-service-save .content .table-wrap .el-table::before,\n    .technical-service-save .content .table-wrap .el-table::after {\n      height: 0;\n}\n.technical-service-save .content .table-wrap .demo-table-expand {\n      font-size: 0;\n}\n.technical-service-save .content .table-wrap .demo-table-expand label {\n      width: 150px;\n      color: #99a9bf;\n}\n.technical-service-save .content .table-wrap .demo-table-expand .el-form-item {\n      margin-right: 0;\n      margin-bottom: 0;\n      width: 50%;\n}\n.technical-service-save .content .table-wrap .pick-list-add .content .order-info .el-table tr {\n      background-color: #353945;\n}\n.technical-service-save .content .table-wrap .el-table__header-wrapper thead div,\n    .technical-service-save .content .table-wrap .el-table__footer-wrapper thead div {\n      background: #353945;\n      color: #fff;\n}\n.technical-service-save .content .table-wrap .el-table__expanded-cell {\n      background: #353945;\n      -webkit-box-shadow: 0 -1px #2b2f3b;\n              box-shadow: 0 -1px #2b2f3b;\n}\n.technical-service-save .content .table-wrap .el-table__expanded-cell:hover {\n      background-color: #353945 !important;\n}\n.technical-service-save .content .parts-list {\n      text-align: right;\n      padding: 0 40px;\n      font-size: 12px;\n      overflow: hidden;\n      height: 50px;\n      line-height: 50px;\n      width: 100%;\n      -webkit-box-shadow: 0 -1px #2b2f3b;\n              box-shadow: 0 -1px #2b2f3b;\n}\n.technical-service-save .content .parts-list .att-btn {\n        padding: 6px 9px;\n        min-width: 0;\n        margin: 11px auto;\n        display: block;\n}\n.technical-service-save .content .parts-list .labelAdd {\n        margin-left: 14px;\n}\n"],sourceRoot:""}])},2645:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=v(a(194)),r=v(a(20)),i=v(a(195)),o=v(a(3)),l=(v(a(90)),v(a(2398))),s=v(a(2372)),c=v(a(766)),d=v(a(5)),p=v(a(7)),A=v(a(9)),u=v(a(10)),f=v(a(8));function v(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{loading:!1,formData:{productionDate:"",service_no:"",carrier_order_id:"",customer_id:"",sn:"",customer_star:"",sales_order_id:"",error_code:"",problem_doc_id:""},orderId:0,customerList:[],productionDate:"",headData:[],categoryList:[],testResultData:[{id:1,name:"Renewed"},{id:2,name:"Maintain"}]}},i18n:{messages:{fr:f.default.Component.Order.Save,en:d.default.Component.Order.Save,zh:p.default.Component.Order.Save,de:A.default.Component.Order.Save,nl:u.default.Component.Order.Save}},computed:{},created:function(){var e=(0,i.default)(n.default.mark(function e(){var t;return n.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return this.headData=["Item Name","BF Art No.","SN","Error Code","Fault Des.","Responsibility","Diagnose","Production Date","Operation"],t=this,this.loading=!0,e.next=5,c.default.getAllCustomer().then(function(e){if(-2===e.data.code)throw e.data.message;t.customerList=e.data,t.loading=!1}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1});case 5:this.orderId=this.$route.query.orderId,this.orderId&&(this.loading=!0,l.default.getTechnical(this.orderId).then(function(e){if(-2===e.data.code)throw e.data.message;return t.formData=JSON.parse((0,r.default)(e.data)),t.productionDate=o.default.Util.changeDateForm(1e3*t.formData.create_time),t.loading=!1,s.default.getServiceCenterDetail(e.data.service_no)}).then(function(e){if(-2===e.data.code)throw e.data.message;t.categoryList=e.data.content,t.loading=!1}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1}));case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),mounted:function(){},methods:{goAfterIndex:function(){this.$router.push({name:"technicalService"})},createOrder:function(){var e=this,t=this;this.loading=!0,this.formData.productionDate=o.default.Util.parseDate(this.productionDate),l.default.postTechnical(this.formData).then(function(a){if(-2===a.data.code)throw a.data.message;t.formData=JSON.parse((0,r.default)(a.data)),t.orderId=a.data.id;var n=e.categoryList.map(function(e){return e.production_date=o.default.Util.parseDate(e.production_date),e});return s.default.bulkServiceCenterDetail(n)}).then(function(a){if(-2===a.data.code)throw a.data.message;e.categoryList=a.data,t.$message({message:"Save Successfully",type:"success"}),t.loading=!1,e.$router.go(-1)}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1})},checkParams:function(){return""===this.formData.customer_id?(this.$message({message:"Please add Customer",type:"warning"}),!1):""!==this.formData.root_category_id||(this.$message({message:"Please add Category",type:"warning"}),!1)},handleItemChange:function(e){var t=this.customerList.find(function(t){return t.id===e});this.formData.customer_name=t&&t.name||"",this.formData.customer_no=t&&t.company_no||"",this.formData.customer_country=t&&t.country||"",this.formData.customer_province=t&&t.province||"",this.formData.customer_city=t&&t.city||"",this.formData.customer_district=t&&t.district||"",this.formData.customer_address=t&&t.address||"",this.formData.customer_contact_country_code=t&&t.country_code||"+86",this.formData.customer_contact_user=t&&t.receiver_name||"",this.formData.customer_contact_phone=t&&t.mobile||"",this.formData.customer_star=t&&t.star||5}}}},2646:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"technical-service-save"},[a("div",{staticClass:"header"},[a("div",{staticClass:"btn-group-inline"},[a("div",{staticClass:"icons"},[a("div",{staticClass:"icon-item back",attrs:{title:"back"},on:{click:e.goAfterIndex}})])]),e._v(" "),a("label",{staticClass:"title"},[e._v("Edit Technical Service")])]),e._v(" "),a("div",{staticClass:"content-wrap"},[a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"content"},[a("div",{staticClass:"order-info"},[a("label",{staticClass:"title"},[e._v("Customer Info")]),e._v(" "),a("div",{staticClass:"left"},[a("div",{staticClass:"item"},[e._m(0),e._v(" "),a("el-input",{staticClass:"input",attrs:{disabled:""},model:{value:e.formData.service_no,callback:function(t){e.$set(e.formData,"service_no",t)},expression:"formData.service_no"}})],1),e._v(" "),a("div",{staticClass:"item"},[e._m(1),e._v(" "),a("el-select",{staticClass:"input",attrs:{slot:"prepend",filterable:""},on:{change:e.handleItemChange},slot:"prepend",model:{value:e.formData.customer_id,callback:function(t){e.$set(e.formData,"customer_id",t)},expression:"formData.customer_id"}},e._l(e.customerList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("Test Results")]),e._v(" "),a("el-select",{staticClass:"input",attrs:{slot:"prepend",filterable:""},slot:"prepend",model:{value:e.formData.test_result,callback:function(t){e.$set(e.formData,"test_result",t)},expression:"formData.test_result"}},e._l(e.testResultData,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}),1)],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("Advice")]),e._v(" "),a("el-input",{staticClass:"input",model:{value:e.formData.advice,callback:function(t){e.$set(e.formData,"advice",t)},expression:"formData.advice"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("Remark")]),e._v(" "),a("el-input",{staticClass:"input",model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("Production Date")]),e._v(" "),a("el-date-picker",{staticClass:"input",attrs:{type:"date",placeholder:"Date"},model:{value:e.productionDate,callback:function(t){e.productionDate=t},expression:"productionDate"}})],1)])]),e._v(" "),e.categoryList.length>0?a("div",{staticClass:"table-wrap table-overflow"},[a("el-table",{staticStyle:{width:"100%",border:"none"},attrs:{data:e.categoryList}},[a("el-table-column",{attrs:{type:"expand"}},[[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"Item Name"}},[a("span",[e._v(e._s(e._f("categoryRoot")(e.props.row.category_root_id)))])]),e._v(" "),a("el-form-item",{attrs:{label:"BF Art No."}},[a("span",[e._v(e._s(e.props.row.bf_art_no))])]),e._v(" "),a("el-form-item",{attrs:{label:"SN"}},[a("span",[e._v(e._s(e.props.row.sn))])]),e._v(" "),a("el-form-item",{attrs:{label:"Error Code"}},[a("el-input",{directives:[{name:"onlyNum",rawName:"v-onlyNum"}],staticClass:"input",attrs:{placeholder:"Error Code"},model:{value:e.props.row.error_code,callback:function(t){e.$set(e.props.row,"error_code",t)},expression:"props.row.error_code"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Fault Des."}},[a("el-input",{staticClass:"input",attrs:{placeholder:"Fault Des."},model:{value:e.props.row.fault_desc,callback:function(t){e.$set(e.props.row,"fault_desc",t)},expression:"props.row.fault_desc"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Responsibility"}},[a("el-input",{directives:[{name:"onlyNum",rawName:"v-onlyNum"}],staticClass:"input",attrs:{placeholder:"Responsibility"},model:{value:e.props.row.division_responsibilities,callback:function(t){e.$set(e.props.row,"division_responsibilities",t)},expression:"props.row.division_responsibilities"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"Diagnose"}},[a("span",[e._v(e._s(e.props.row.diagnosis_id))])]),e._v(" "),a("el-form-item",{attrs:{label:"Production Date"}},[a("span",[e._v(e._s(e._f("dateFormat")(e.props.row.production_date)))])])],1)]],2),e._v(" "),a("el-table-column",{attrs:{label:"Item Name"}},[[a("div",[e._v(e._s(e._f("categoryRoot")(e.scope.row.category_root_id)))])]],2),e._v(" "),a("el-table-column",{attrs:{label:"SN",prop:"sn"}}),e._v(" "),a("el-table-column",{attrs:{label:"Error Code",prop:"error_code"}}),e._v(" "),a("el-table-column",{attrs:{label:"Production Date",prop:"create_time"}},[[a("div",[e._v(e._s(e._f("dateFormat")(e.scopes.row.production_date)))])]],2)],1)],1):e._e(),e._v(" "),a("div",{staticClass:"parts-list"},[a("el-button",{attrs:{type:"primary"},on:{click:e.createOrder}},[e._v("SAVE")])],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              Service No.\n              "),t("span",{staticClass:"required"},[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              Customer\n              "),t("span",{staticClass:"required"},[this._v("*")])])}]}}});
//# sourceMappingURL=25.7a6724a513405fa9bc70.js.map