webpackJsonp([3],{2341:function(e,t,a){var n=a(2)(a(2683),a(2684),function(e){a(2681)},null,null);e.exports=n.exports},2368:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=a(3),i=(n=s)&&n.__esModule?n:{default:n};var r={getDeliveryById:function(e){return i.default.HttpHelp.request({method:"get",url:"/nl/sales/delivery/"+e})},filterDeliveryDetails:function(e,t,a){return i.default.HttpHelp.request({method:"POST",url:"/nl/sales/delivery/detail/filter",data:{delivery_order_id:a},params:{page:e,size:10}})}};t.default=r},2378:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=a(3),i=(n=s)&&n.__esModule?n:{default:n};var r={filterOrderSchedule:function(e){return i.default.HttpHelp.request({method:"POST",url:"/nl/nlPublic/orderSchedule/filter",data:{delivery_id:e},params:{page:1,size:999}})},filterAfterSalesStatus:function(e){return i.default.HttpHelp.request({method:"POST",url:"/nl/nlPublic/AfterSalesStatus/filter",data:{service_id:e},params:{page:1,size:999}})},filterPurchaseStatus:function(e){return i.default.HttpHelp.request({method:"POST",url:"/nl/nlPublic/orderSchedule/filter",data:{purchase_id:e},params:{page:1,size:999}})}};t.default=r},2379:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=a(3),i=(n=s)&&n.__esModule?n:{default:n};var r={getShipment:function(e){return i.default.HttpHelp.request({method:"get",url:"/nl/order/shipment/"+e})}};t.default=r},2380:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=a(3),i=(n=s)&&n.__esModule?n:{default:n};var r={getInvoice:function(e){return i.default.HttpHelp.request({method:"get",url:"/nl/finance/invoice/"+e})}};t.default=r},2381:function(e,t,a){var n=a(2)(a(2384),a(2385),function(e){a(2382)},"data-v-a28c3764",null);e.exports=n.exports},2382:function(e,t,a){var n=a(2383);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(2279)("0dd3b228",n,!0,{})},2383:function(e,t,a){(e.exports=a(2278)(!0)).push([e.i,".deliver-tab .table-wrap .no-data-content[data-v-a28c3764]{width:100%;height:100%;padding:25px;font-size:14px;text-align:center;color:#a1a5b1;background:none}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/components/step-table-temp/deliver-tab.vue"],names:[],mappings:"AACA,2DACE,WAAY,AACZ,YAAa,AACb,aAAc,AACd,eAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,eAAiB,CAClB",file:"deliver-tab.vue",sourcesContent:["\n.deliver-tab .table-wrap .no-data-content[data-v-a28c3764] {\n  width: 100%;\n  height: 100%;\n  padding: 25px;\n  font-size: 14px;\n  text-align: center;\n  color: #a1a5b1;\n  background: none;\n}\n"],sourceRoot:""}])},2384:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=a(3);(n=s)&&n.__esModule;t.default={name:"deliver-tab",props:["tableList"],data:function(){return{headData:["Delivery Date","Delivery Order No.","Customer No.","Reviewer","Reviewer Date","Operator"]}},mounted:function(){},methods:{onView:function(e){this.$router.push({name:"deliveryListDetails",query:{orderId:event.id}})}}}},2385:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"deliver-tab"},[a("div",{staticClass:"table-wrap"},[a("div",{staticClass:"table-content-holder"},[0===e.tableList.length?a("div",{staticClass:"no-data-content"},[e._v("noResult")]):a("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("thead",e._l(e.headData,function(t,n){return a("td",{key:n},[e._v(e._s(t))])}),0),e._v(" "),e.tableList.length>0?a("tbody",e._l(e.tableList,function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(e._f("dateFormat")(t.delivery_date)))]),e._v(" "),a("td",[e._v(e._s(t.delivery_order_no))]),e._v(" "),a("td",[e._v(e._s(t.customer_no))]),e._v(" "),a("td",[e._v(e._s(t.reviewer))]),e._v(" "),a("td",[e._v(e._s(e._f("dateFormat")(t.reviewer_date)))]),e._v(" "),a("td",[a("button",{staticClass:"btn-underline",on:{click:function(a){return a.stopPropagation(),e.onView(t)}}},[e._v("Detail")])])])}),0):e._e()])])])])},staticRenderFns:[]}},2386:function(e,t,a){var n=a(2)(a(2389),a(2390),function(e){a(2387)},"data-v-d1238a00",null);e.exports=n.exports},2387:function(e,t,a){var n=a(2388);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(2279)("21915561",n,!0,{})},2388:function(e,t,a){(e.exports=a(2278)(!0)).push([e.i,".stock-out-tab .table-wrap .no-data-content[data-v-d1238a00]{width:100%;height:100%;padding:25px;font-size:14px;text-align:center;color:#a1a5b1;background:none}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/components/step-table-temp/stock-out-tab.vue"],names:[],mappings:"AACA,6DACE,WAAY,AACZ,YAAa,AACb,aAAc,AACd,eAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,eAAiB,CAClB",file:"stock-out-tab.vue",sourcesContent:["\n.stock-out-tab .table-wrap .no-data-content[data-v-d1238a00] {\n  width: 100%;\n  height: 100%;\n  padding: 25px;\n  font-size: 14px;\n  text-align: center;\n  color: #a1a5b1;\n  background: none;\n}\n"],sourceRoot:""}])},2389:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=a(3),i=(n=s)&&n.__esModule?n:{default:n};t.default={name:"stock-out-tab",props:["tableList"],data:function(){return{headData:["Operation User","Expected Date","Delivery Order No.","Warehouse","Operator"],warehouseList:[]}},mounted:function(){var e=this;this.loading=!0,this.getAllWarehouse().then(function(t){e.loading=!1,e.warehouseList=t}).catch(function(t){e.$message({message:t,type:"error"}),e.loading=!1})},methods:{onView:function(e){this.$router.push({name:"shipmentOrderDetails",query:{id:e.id}})},pipeWarehouse:function(e){var t=this.warehouseList.filter(function(t){return t.id===e});return t.length>0?t[0].name:"/"},getAllWarehouse:function(){return i.default.Api.request({method:"GET",url:"/nl/warehouse/all"})}}}},2390:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"stock-out-tab"},[a("div",{staticClass:"table-wrap"},[a("div",{staticClass:"table-content-holder"},[0===e.tableList.length?a("div",{staticClass:"no-data-content"},[e._v("noResult")]):a("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("thead",e._l(e.headData,function(t,n){return a("td",{key:n},[e._v(e._s(t))])}),0),e._v(" "),e.tableList.length>0?a("tbody",e._l(e.tableList,function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.createUser))]),e._v(" "),a("td",[e._v(e._s(e._f("dateFormat")(t.expected_date)))]),e._v(" "),a("td",[e._v(e._s(t.order_no))]),e._v(" "),a("td",[e._v(e._s(e.pipeWarehouse(t.warehouse_id)))]),e._v(" "),a("td",[a("button",{staticClass:"btn-underline",on:{click:function(a){return a.stopPropagation(),e.onView(t)}}},[e._v("Detail")])])])}),0):e._e()])])])])},staticRenderFns:[]}},2391:function(e,t,a){var n=a(2)(a(2394),a(2395),function(e){a(2392)},"data-v-3f24d354",null);e.exports=n.exports},2392:function(e,t,a){var n=a(2393);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(2279)("53497fa6",n,!0,{})},2393:function(e,t,a){(e.exports=a(2278)(!0)).push([e.i,".invoice-tab .table-wrap .no-data-content[data-v-3f24d354]{width:100%;height:100%;padding:25px;font-size:14px;text-align:center;color:#a1a5b1;background:none}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/components/step-table-temp/invoice-tab.vue"],names:[],mappings:"AACA,2DACE,WAAY,AACZ,YAAa,AACb,aAAc,AACd,eAAgB,AAChB,kBAAmB,AACnB,cAAe,AACf,eAAiB,CAClB",file:"invoice-tab.vue",sourcesContent:["\n.invoice-tab .table-wrap .no-data-content[data-v-3f24d354] {\n  width: 100%;\n  height: 100%;\n  padding: 25px;\n  font-size: 14px;\n  text-align: center;\n  color: #a1a5b1;\n  background: none;\n}\n"],sourceRoot:""}])},2394:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s=a(3);(n=s)&&n.__esModule;t.default={name:"invoice-tab",props:["tableList"],data:function(){return{headData:["Invoice No","Time","Delivery order no","Operator"]}},mounted:function(){},methods:{onView:function(e){this.$router.push({name:"invoiceListDetails",query:{orderId:e.id}})}}}},2395:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"invoice-tab"},[a("div",{staticClass:"table-wrap"},[a("div",{staticClass:"table-content-holder"},[0===e.tableList.length?a("div",{staticClass:"no-data-content"},[e._v("noResult")]):a("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("thead",e._l(e.headData,function(t,n){return a("td",{key:n},[e._v(e._s(t))])}),0),e._v(" "),e.tableList.length>0?a("tbody",e._l(e.tableList,function(t){return a("tr",{key:t.id},[a("td",[e._v(e._s(t.invoice_no))]),e._v(" "),a("td",[e._v(e._s(e._f("dateFormat")(t.create_time)))]),e._v(" "),a("td",[e._v(e._s(t.deliver_order_no))]),e._v(" "),a("td",[a("button",{staticClass:"btn-underline",on:{click:function(a){return a.stopPropagation(),e.onView(t)}}},[e._v("Detail")])])])}),0):e._e()])])])])},staticRenderFns:[]}},2681:function(e,t,a){var n=a(2682);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(2279)("0f18b5c9",n,!0,{})},2682:function(e,t,a){(e.exports=a(2278)(!0)).push([e.i,".after-sales-schedule .content{border:1px solid #2b2f3b;margin:20px auto 0}.after-sales-schedule .step-warp{border-bottom:1px solid #333;padding:5px 0}.after-sales-schedule .el-step:hover{cursor:pointer}.after-sales-schedule .content-record h3{margin:10px 0}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/views/nl/after-sales/service-center/after-sales-schedule.vue"],names:[],mappings:"AACA,+BACE,yBAA0B,AAC1B,kBAAyB,CAC1B,AACD,iCACE,6BAA8B,AAC9B,aAAe,CAChB,AACD,qCACE,cAAgB,CACjB,AACD,yCACE,aAAe,CAChB",file:"after-sales-schedule.vue",sourcesContent:["\n.after-sales-schedule .content {\n  border: 1px solid #2b2f3b;\n  margin: 20px auto 0 auto;\n}\n.after-sales-schedule .step-warp {\n  border-bottom: 1px solid #333;\n  padding: 5px 0;\n}\n.after-sales-schedule .el-step:hover {\n  cursor: pointer;\n}\n.after-sales-schedule .content-record h3 {\n  margin: 10px 0;\n}\n"],sourceRoot:""}])},2683:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=u(a(47)),s=u(a(3)),i=(u(a(2378)),u(a(2368))),r=u(a(2379)),o=u(a(2380)),c=u(a(2381)),l=u(a(2386)),d=u(a(2391));function u(e){return e&&e.__esModule?e:{default:e}}t.default={components:{deliverTab:c.default,stockOutTab:l.default,invoiceTab:d.default},data:function(){return{loading:!1,active:1,stepDatas:[],currentSetp:1,dialogItemListVisible:!1,deliverList:[],stockOutList:[],invoiceList:[]}},created:function(){this.orderId=this.$route.query.orderId,this.orderId&&this.formatSetpData({service_id:0,service_status:0,service_time:0,delivery_id:0,delivery_status:0,delivery_time:0,service_record_id:0,service_record_status:0,service_record_time:0,shipment_id:0,shipment_status:0,shipment_time:0,invoice_id:0,invoice_status:0,invoice_time:0,parcel_id:0,parcel_status:0,parcel_time:0,progress:1})},mounted:function(){},methods:{formatSetpData:function(e){var t=this,a={service:{index:1,title:"Service Center"},parcel:{index:2,title:"Input Parcel info"},service_record:{index:3,title:"Service Record"},delivery:{index:4,title:"Delivery"},shipment:{index:5,title:"Stock out"},invoice:{index:6,title:"Invoice"}},i=[];t.active=e.progress,(0,n.default)(e).forEach(function(t){var n=t.replace(/([_][^_]+)$/,"");if(a[n]){var s=t.match(/([^_]+)$/)[1];a[n][s]=e[t],a[n].type=n}}),(0,n.default)(a).forEach(function(e){i.push(a[e])}),t.stepDatas=i.map(function(e){return e.time=e.time&&s.default.Util.changeDateForm(1e3*e.time)||"",e.status=t.checkType(e),e}),t.stepChange(t.stepDatas[0])},checkType:function(e){switch(e.type){case"service":case"parcel":case"service_record":case"delivery":return this.deliveryType(e.status);case"shipment":return this.shipmentType(e.status);case"invoice":return this.invoiceType(e.status)}},deliveryType:function(e){switch(e){case 0:case 2:case 5:return"wait";case 1:return"process";case 3:return"success";case 4:return"error";default:return"wait"}},shipmentType:function(e){switch(e){case 0:return"wait";case 1:return"process";case 2:return"error";case 3:return"success";default:return"wait"}},invoiceType:function(e){switch(e){case 0:return"wait";case 1:case 2:case 3:return"process";case 4:return"success";default:return"wait"}},stepChange:function(e){var t=this;if(e.id)switch(this.currentSetp=e.index,e.type){case"service":case"parcel":case"service_record":break;case"delivery":i.default.getDeliveryById(e.id).then(function(e){t.deliverList=[e.data]});break;case"shipment":r.default.getShipment(e.id).then(function(e){t.stockOutList=[e.data]});break;case"invoice":o.default.getInvoice(e.id).then(function(e){t.invoiceList=[e.data]})}},goAfterSalesList:function(){this.$router.push({name:"serviceCenter"})}},computed:{}}},2684:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"after-sales-schedule"},[a("div",{staticClass:"header"},[a("div",{staticClass:"btn-group-inline"},[a("div",{staticClass:"icons"},[a("div",{staticClass:"icon-item back",attrs:{title:"back"},on:{click:e.goAfterSalesList}})])]),e._v(" "),a("label",{staticClass:"title"},[e._v("After Sales Schedule")])]),e._v(" "),a("div",{staticClass:"content-wrap"},[a("div",{staticClass:"content"},[a("div",{staticClass:"step-warp"},[a("el-steps",{attrs:{active:e.active,"align-center":""}},e._l(e.stepDatas,function(t,n){return a("el-step",{key:n,attrs:{title:t.title,description:t.time,status:t.status},nativeOn:{click:function(a){return e.stepChange(t)}}})}),1)],1),e._v(" "),a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"content-record"},[a("div",{directives:[{name:"show",rawName:"v-show",value:1==e.currentSetp,expression:"currentSetp ==1"}]}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:2==e.currentSetp,expression:"currentSetp ==2"}]}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:3==e.currentSetp,expression:"currentSetp ==3"}]}),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:4==e.currentSetp,expression:"currentSetp ==4"}]},[a("deliver-tab",{attrs:{tableList:e.deliverList}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:5==e.currentSetp,expression:"currentSetp == 5"}]},[a("stock-out-tab",{attrs:{tableList:e.stockOutList}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:6==e.currentSetp,expression:"currentSetp == 6"}]},[a("invoice-tab",{attrs:{tableList:e.invoiceList}})],1)])])]),e._v(" "),a("el-dialog",{attrs:{visible:e.dialogItemListVisible,title:"title",size:"large"},on:{"update:visible":function(t){e.dialogItemListVisible=t}}},[a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogItemListVisible=!1}}},[e._v("Close")])],1)])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=3.de309e4e94d286199a14.js.map