webpackJsonp([58],{2306:function(t,e,i){var n=i(2)(i(2536),i(2537),function(t){i(2534)},null,null);t.exports=n.exports},2534:function(t,e,i){var n=i(2535);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(2279)("b9a0f3fa",n,!0,{})},2535:function(t,e,i){(t.exports=i(2278)(!0)).push([t.i,".shipment-order-details{width:100%;height:100%}.shipment-order-details .table-wrap{width:100%;height:calc(100% - 392px);-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b;overflow-x:hidden}.shipment-order-details span.required{color:#e26829;display:inline-block}.shipment-order-details .content{border:1px solid #2b2f3b}.shipment-order-details .content .order-info{width:100%;height:651px}.shipment-order-details .content .order-info .title{height:50px;line-height:50px;padding-left:40px}.shipment-order-details .content .order-info .left{float:left;width:100%;height:600px;background:#353945;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b}.shipment-order-details .content .order-info .left .item{line-height:60px;overflow:hidden;width:49%;height:50px;display:inline-block}.shipment-order-details .content .order-info .left .item .label{display:inline-block;width:110px;margin-left:15px}.shipment-order-details .content .order-info .left .item span{display:inline-block}.shipment-order-details .content .order-info .left .item .input{margin-left:10px;width:256px;border-radius:0 0 10px 10px}.shipment-order-details .content .order-info .left .item .input-left{margin-left:10px;width:200px}.shipment-order-details .content .order-info .left .item .input-right{width:200px}.shipment-order-details .content .order-info .left .item .input-note{margin-left:10px;width:608px}.shipment-order-details .content .parts-list{text-align:right;padding:0 40px;font-size:12px;overflow:hidden;height:50px;line-height:50px;width:100%;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b}.shipment-order-details .content .parts-list .att-btn{padding:6px 9px;min-width:0;margin:11px auto;display:block}.shipment-order-details .content .parts-list .labelAdd{margin-left:14px}.shipment-order-details .content .footer{width:100%;height:60px;line-height:60px;padding-left:40px;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b}.shipment-order-details .content .footer .footer-pagination{float:right}.shipment-order-details .dialog .el-dialog--large{width:1100px}.shipment-order-details .dialog .header .search-content{width:200px;margin-right:10px}.shipment-order-details .dialog .header .search-btn{position:absolute;top:15px;left:250px;width:30px;height:30px}.shipment-order-details .table-wrap .table-content{padding-bottom:0}.shipment-order-details .pagination{padding:10px}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/views/nl/shipment-order/shipment-order-details.vue"],names:[],mappings:"AACA,wBACE,WAAY,AACZ,WAAa,CACd,AACD,oCACI,WAAY,AACZ,0BAA2B,AAC3B,kCAAmC,AAC3B,0BAA2B,AACnC,iBAAmB,CACtB,AACD,sCACI,cAAe,AACf,oBAAsB,CACzB,AACD,iCACI,wBAA0B,CAC7B,AACD,6CACM,WAAY,AACZ,YAAc,CACnB,AACD,oDACQ,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CAC1B,AACD,mDACQ,WAAY,AACZ,WAAY,AACZ,aAAc,AACd,mBAAoB,AACpB,kCAAmC,AAC3B,yBAA2B,CAC1C,AACD,yDACU,iBAAkB,AAClB,gBAAiB,AACjB,UAAW,AACX,YAAa,AACb,oBAAsB,CAC/B,AACD,gEACY,qBAAsB,AACtB,YAAa,AACb,gBAAkB,CAC7B,AACD,8DACY,oBAAsB,CACjC,AACD,gEACY,iBAAkB,AAClB,YAAa,AACb,2BAA6B,CACxC,AACD,qEACY,iBAAkB,AAClB,WAAa,CACxB,AACD,sEACY,WAAa,CACxB,AACD,qEACY,iBAAkB,AAClB,WAAa,CACxB,AACD,6CACM,iBAAkB,AAClB,eAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,WAAY,AACZ,kCAAmC,AAC3B,yBAA2B,CACxC,AACD,sDACQ,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,aAAe,CACtB,AACD,uDACQ,gBAAkB,CACzB,AACD,yCACM,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,kCAAmC,AAC3B,yBAA2B,CACxC,AACD,4DACQ,WAAa,CACpB,AACD,kDACI,YAAc,CACjB,AACD,wDACI,YAAa,AACb,iBAAmB,CACtB,AACD,oDACI,kBAAmB,AACnB,SAAU,AACV,WAAY,AACZ,WAAY,AACZ,WAAa,CAChB,AACD,mDACI,gBAAkB,CACrB,AACD,oCACI,YAAc,CACjB",file:"shipment-order-details.vue",sourcesContent:["\n.shipment-order-details {\n  width: 100%;\n  height: 100%;\n}\n.shipment-order-details .table-wrap {\n    width: 100%;\n    height: calc(100% - 392px);\n    -webkit-box-shadow: 0 -1px #2b2f3b;\n            box-shadow: 0 -1px #2b2f3b;\n    overflow-x: hidden;\n}\n.shipment-order-details span.required {\n    color: #e26829;\n    display: inline-block;\n}\n.shipment-order-details .content {\n    border: 1px solid #2b2f3b;\n}\n.shipment-order-details .content .order-info {\n      width: 100%;\n      height: 651px;\n}\n.shipment-order-details .content .order-info .title {\n        height: 50px;\n        line-height: 50px;\n        padding-left: 40px;\n}\n.shipment-order-details .content .order-info .left {\n        float: left;\n        width: 100%;\n        height: 600px;\n        background: #353945;\n        -webkit-box-shadow: 0 -1px #2b2f3b;\n                box-shadow: 0 -1px #2b2f3b;\n}\n.shipment-order-details .content .order-info .left .item {\n          line-height: 60px;\n          overflow: hidden;\n          width: 49%;\n          height: 50px;\n          display: inline-block;\n}\n.shipment-order-details .content .order-info .left .item .label {\n            display: inline-block;\n            width: 110px;\n            margin-left: 15px;\n}\n.shipment-order-details .content .order-info .left .item span {\n            display: inline-block;\n}\n.shipment-order-details .content .order-info .left .item .input {\n            margin-left: 10px;\n            width: 256px;\n            border-radius: 0 0 10px 10px;\n}\n.shipment-order-details .content .order-info .left .item .input-left {\n            margin-left: 10px;\n            width: 200px;\n}\n.shipment-order-details .content .order-info .left .item .input-right {\n            width: 200px;\n}\n.shipment-order-details .content .order-info .left .item .input-note {\n            margin-left: 10px;\n            width: 608px;\n}\n.shipment-order-details .content .parts-list {\n      text-align: right;\n      padding: 0 40px;\n      font-size: 12px;\n      overflow: hidden;\n      height: 50px;\n      line-height: 50px;\n      width: 100%;\n      -webkit-box-shadow: 0 -1px #2b2f3b;\n              box-shadow: 0 -1px #2b2f3b;\n}\n.shipment-order-details .content .parts-list .att-btn {\n        padding: 6px 9px;\n        min-width: 0;\n        margin: 11px auto;\n        display: block;\n}\n.shipment-order-details .content .parts-list .labelAdd {\n        margin-left: 14px;\n}\n.shipment-order-details .content .footer {\n      width: 100%;\n      height: 60px;\n      line-height: 60px;\n      padding-left: 40px;\n      -webkit-box-shadow: 0 -1px #2b2f3b;\n              box-shadow: 0 -1px #2b2f3b;\n}\n.shipment-order-details .content .footer .footer-pagination {\n        float: right;\n}\n.shipment-order-details .dialog .el-dialog--large {\n    width: 1100px;\n}\n.shipment-order-details .dialog .header .search-content {\n    width: 200px;\n    margin-right: 10px;\n}\n.shipment-order-details .dialog .header .search-btn {\n    position: absolute;\n    top: 15px;\n    left: 250px;\n    width: 30px;\n    height: 30px;\n}\n.shipment-order-details .table-wrap .table-content {\n    padding-bottom: 0;\n}\n.shipment-order-details .pagination {\n    padding: 10px;\n}\n"],sourceRoot:""}])},2536:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=A(i(3)),s=A(i(7)),a=A(i(5)),r=A(i(9)),l=A(i(10)),o=A(i(8)),d=A(i(767));function A(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{loading:!1,tableHead:["Item Name","BF Art Nr","Specification","Quantity"],orderItems:[],orderDetails:[],departmentList:[],warehouseList:[]}},i18n:{messages:{fr:o.default.Component.Order.Save,en:a.default.Component.Order.Save,zh:s.default.Component.Order.Save,de:r.default.Component.Order.Save,nl:l.default.Component.Order.Save}},computed:{},mounted:function(){var t=this,e=this,i=e.$route.query.id;i&&(e.loading=!0,e.getShipment(i).then(function(t){e.loading=!1,e.orderItems=t},function(t){e.loading=!1}),e.loading=!0,e.getShipmentDetails(i).then(function(t){e.loading=!1,e.orderDetails=t.content},function(t){e.loading=!1})),e.loading=!0,this.getAllWarehouse().then(function(i){t.warehouseList=i,e.loading=!1}),e.loading=!0,this.getAllDepartment().then(function(i){e.loading=!1,t.departmentList=i})},methods:{getShipment:function(t){return n.default.Api.request({method:"get",url:"/nl/order/shipment/"+t})},getShipmentDetails:function(t){return n.default.Api.request({method:"post",url:"/nl/order/shipment/detail/filter",data:{shipment_id:t},params:{page:1,size:999}})},getAllWarehouse:function(){return n.default.Api.request({method:"GET",url:"/nl/warehouse/all"})},getAllDepartment:function(){return n.default.Api.request({method:"GET",url:"/nl/public/department/all"})},onPrint:function(){var t=this;return n.default.Api.request({method:"GET",url:"/nl/order/shipment/"+this.$route.query.id+"/print"}).then(function(e){var i=new Date,n=i.getFullYear()+"-"+i.getMonth()+"-"+i.getDay(),s=new Blob([e],{type:"text/html;charset=utf-8"}),a=t.orderItems.order_no||n;(0,d.default)(s,a+".html")})},warehousePipe:function(t){if(this.warehouseList.length>0){var e=this.warehouseList.filter(function(e){return e.id===t});return e.length>0?e[0].name:"-"}},departmentPipe:function(t){if(this.departmentList.length>0){var e=this.departmentList.filter(function(e){return e.id===t});return e.length>0?e[0].name:"-"}}}}},2537:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"shipment-order-details"},[i("div",{staticClass:"header"},[i("div",{staticClass:"btn-group-inline"},[i("div",{staticClass:"icons"},[i("div",{staticClass:"icon-item back",attrs:{title:"back"},on:{click:function(e){return t.$router.back()}}})])]),t._v(" "),i("div",{staticClass:"btn-group-top"},[i("div",{staticClass:"icons"},[i("div",{staticClass:"icon-item print",attrs:{title:"print"},on:{click:t.onPrint}})])]),t._v(" "),i("label",{staticClass:"title"},[t._v("Shipment Order Details")])]),t._v(" "),i("div",{staticClass:"content-wrap"},[i("div",{directives:[{name:"loading",rawName:"v-loading.body",value:t.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"content"},[i("div",{staticClass:"order-info"},[i("label",{staticClass:"title"},[t._v("Customer Info")]),t._v(" "),i("div",{staticClass:"left"},[i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Order No.")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.order_no))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Operation User")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.operation_user_id))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Shipment Type")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.shipment_type))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("From Type")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.from_type_code))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Warehouse")]),t._v(" "),i("span",[t._v(t._s(t.warehousePipe(t.orderItems.warehouse_id)))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Storer")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.storer_id))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Department")]),t._v(" "),i("span",[t._v(t._s(t.departmentPipe(t.orderItems.department_id)))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Customer")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.customer_id))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Expected Date")]),t._v(" "),i("span",[t._v(t._s(t._f("dateFormat")(t.orderItems.expected_date)))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Order Memo")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.orderMemo))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Receiver Name")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.receiver_name))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Province")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.province))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("City")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.city))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("District")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.district))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Zip Code")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.zipCode))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Address")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.address))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Mobile")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.mobile))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Telephone")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.telephone))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Email")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.email))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Remark")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.operation_user_id))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Amount")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.amount))])]),t._v(" "),i("div",{staticClass:"item"},[i("label",{staticClass:"label"},[t._v("Description")]),t._v(" "),i("span",[t._v(t._s(t.orderItems.description))])])])]),t._v(" "),i("div",{staticClass:"table-wrap"},[i("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[i("thead",t._l(t.tableHead,function(e){return i("td",[t._v(t._s(e))])}),0),t._v(" "),i("tbody",t._l(t.orderDetails,function(e,n){return i("tr",[i("td",[t._v(t._s(t._f("categoryRoot")(e.category_root_id)))]),t._v(" "),i("td",[t._v(t._s(e.item_code))]),t._v(" "),i("td",[t._v(t._s(e.item_name))]),t._v(" "),i("td",[t._v(t._s(e.quantity))])])}),0)])])])])])},staticRenderFns:[]}}});
//# sourceMappingURL=58.72195867547c11a7787e.js.map