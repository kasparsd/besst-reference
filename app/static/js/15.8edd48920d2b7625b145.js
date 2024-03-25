webpackJsonp([15],{2338:function(e,t,a){var i=a(2)(a(2670),a(2671),function(e){a(2668)},null,null);e.exports=i.exports},2368:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=a(3),r=(i=n)&&i.__esModule?i:{default:i};var s={getDeliveryById:function(e){return r.default.HttpHelp.request({method:"get",url:"/nl/sales/delivery/"+e})},filterDeliveryDetails:function(e,t,a){return r.default.HttpHelp.request({method:"POST",url:"/nl/sales/delivery/detail/filter",data:{delivery_order_id:a},params:{page:e,size:10}})}};t.default=s},2396:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=a(3),r=(i=n)&&i.__esModule?i:{default:i};var s={getDeliveryPIDetails:function(e){return r.default.Api.request({method:"get",url:"/nl/sales/delivery/"+e+"/pi/detail"})},printDelivery:function(e){return r.default.HttpHelp.request({method:"Get",url:"/nl/sales/delivery/"+e+"/print",responseType:"blob"})}};t.default=s},2399:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=a(3),r=(i=n)&&i.__esModule?i:{default:i};var s={filterCommercialInvoice:function(e,t){return r.default.HttpHelp.request({method:"POST",url:"/nl/clean/commercialInvoice/filter",data:{ci_no:t.ci_no,date:t.date,customer_id:t.customer_id},params:{page:e,size:10}})},postCommercialInvoice:function(e){return r.default.HttpHelp.request({method:"POST",url:"/nl/clean/commercialInvoice",data:e})},deleteCommercialInvoice:function(e){return r.default.HttpHelp.request({method:"DELETE",url:"/nl/clean/commercialInvoice/"+e})},getCommercialInvoiceId:function(e){return r.default.HttpHelp.request({method:"GET",url:"/nl/clean/commercialInvoice/"+e})},putReceiptStatus:function(e,t){return r.default.HttpHelp.request({method:"PUT",url:"/nl/clean/commercialInvoice/"+e+"/status",params:{status:t}})}};t.default=s},2415:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,n=a(3),r=(i=n)&&i.__esModule?i:{default:i};var s={postPIDetailsBulk:function(e){return r.default.HttpHelp.request({method:"POST",url:"/nl/sales/proformaInvoice/detail/bulk",data:e})}};t.default=s},2668:function(e,t,a){var i=a(2669);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);a(2279)("5fe40b2a",i,!0,{})},2669:function(e,t,a){(e.exports=a(2278)(!0)).push([e.i,".CI-header-save{width:100%;height:100%}.CI-header-save span.required{color:#e26829;display:inline-block}.CI-header-save .el-form-item{margin-right:2px!important;margin-bottom:0}.CI-header-save .el-form-item__label{color:#fff;width:83px;text-align:left;margin-left:5px}.CI-header-save .el-form-item__content{width:180px!important}.CI-header-save .content-width{min-width:1285px}.CI-header-save .content{border:1px solid #2b2f3b;margin:20px auto 0}.CI-header-save .content .order-info{width:100%}.CI-header-save .content .order-info .title{height:50px;line-height:50px;padding-left:40px}.CI-header-save .content .order-info .left{float:left;width:100%;height:440px;background:#353945;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b;border-bottom:1px solid #2b2f3b}.CI-header-save .content .order-info .left .item{line-height:60px;overflow:hidden;width:49%;height:50px;display:inline-block}.CI-header-save .content .order-info .left .item .label{display:inline-block;width:135px;margin-left:15px}.CI-header-save .content .order-info .left .item .input{margin-left:10px;width:256px;border-radius:0 0 10px 10px}.CI-header-save .content .order-info .left .item .el-input-group__prepend .el-select .el-input .el-input__inner{width:92px}.CI-header-save .content .order-info .left .item .el-input-group__prepend .el-select .el-input .el-input__inner:hover{border-color:transparent}.CI-header-save .content .parts-list{position:relative;text-align:right;padding:0 40px;font-size:12px;overflow:hidden;height:50px;line-height:50px;width:100%;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b}.CI-header-save .content .parts-list .first-total{margin-right:48px}.CI-header-save .content .parts-list .att-total{display:inline-block;color:#e26829}.CI-header-save .content .order-info-two{width:100%;height:111px}.CI-header-save .content .order-info-two .title{height:50px;line-height:50px;padding-left:40px}.CI-header-save .content .order-info-two .pi-left{float:left;width:100%;height:60px;background:#353945;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b;padding:16px;border-bottom:1px solid #2b2f3b}.CI-header-save .content .order-info-two .pi-left .el-tag+.el-tag{margin-left:10px}.CI-header-save .content .order-info-two .pi-left .button-new-tag{margin-left:6px}.CI-header-save .content .footer{width:100%;height:60px;line-height:60px;padding-left:40px;-webkit-box-shadow:0 -1px #2b2f3b;box-shadow:0 -1px #2b2f3b;text-align:right;padding-right:40px}","",{version:3,sources:["/Users/bys/工作/Bafang/BESST/besst-client/src/views/nl/clean-management/commerial-invoice-save.vue"],names:[],mappings:"AACA,gBACE,WAAY,AACZ,WAAa,CACd,AACD,8BACI,cAAe,AACf,oBAAsB,CACzB,AACD,8BACI,2BAA6B,AAC7B,eAAiB,CACpB,AACD,qCACI,WAAY,AACZ,WAAY,AACZ,gBAAiB,AACjB,eAAiB,CACpB,AACD,uCACI,qBAAwB,CAC3B,AACD,+BACI,gBAAkB,CACrB,AACD,yBACI,yBAA0B,AAC1B,kBAAyB,CAC5B,AACD,qCACM,UAAY,CACjB,AACD,4CACQ,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CAC1B,AACD,2CACQ,WAAY,AACZ,WAAY,AACZ,aAAc,AACd,mBAAoB,AACpB,kCAAmC,AAC3B,0BAA2B,AACnC,+BAAiC,CACxC,AACD,iDACU,iBAAkB,AAClB,gBAAiB,AACjB,UAAW,AACX,YAAa,AACb,oBAAsB,CAC/B,AACD,wDACY,qBAAsB,AACtB,YAAa,AACb,gBAAkB,CAC7B,AACD,wDACY,iBAAkB,AAClB,YAAa,AACb,2BAA6B,CACxC,AACD,gHACY,UAAY,CACvB,AACD,sHACY,wBAA0B,CACrC,AACD,qCACM,kBAAmB,AACnB,iBAAkB,AAClB,eAAgB,AAChB,eAAgB,AAChB,gBAAiB,AACjB,YAAa,AACb,iBAAkB,AAClB,WAAY,AACZ,kCAAmC,AAC3B,yBAA2B,CACxC,AACD,kDACQ,iBAAmB,CAC1B,AACD,gDACQ,qBAAsB,AACtB,aAAe,CACtB,AACD,yCACM,WAAY,AACZ,YAAc,CACnB,AACD,gDACQ,YAAa,AACb,iBAAkB,AAClB,iBAAmB,CAC1B,AACD,kDACQ,WAAY,AACZ,WAAY,AACZ,YAAa,AACb,mBAAoB,AACpB,kCAAmC,AAC3B,0BAA2B,AACnC,aAAc,AACd,+BAAiC,CACxC,AACD,kEACU,gBAAkB,CAC3B,AACD,kEACU,eAAiB,CAC1B,AACD,iCACM,WAAY,AACZ,YAAa,AACb,iBAAkB,AAClB,kBAAmB,AACnB,kCAAmC,AAC3B,0BAA2B,AACnC,iBAAkB,AAClB,kBAAoB,CACzB",file:"commerial-invoice-save.vue",sourcesContent:["\n.CI-header-save {\n  width: 100%;\n  height: 100%;\n}\n.CI-header-save span.required {\n    color: #e26829;\n    display: inline-block;\n}\n.CI-header-save .el-form-item {\n    margin-right: 2px !important;\n    margin-bottom: 0;\n}\n.CI-header-save .el-form-item__label {\n    color: #fff;\n    width: 83px;\n    text-align: left;\n    margin-left: 5px;\n}\n.CI-header-save .el-form-item__content {\n    width: 180px !important;\n}\n.CI-header-save .content-width {\n    min-width: 1285px;\n}\n.CI-header-save .content {\n    border: 1px solid #2b2f3b;\n    margin: 20px auto 0 auto;\n}\n.CI-header-save .content .order-info {\n      width: 100%;\n}\n.CI-header-save .content .order-info .title {\n        height: 50px;\n        line-height: 50px;\n        padding-left: 40px;\n}\n.CI-header-save .content .order-info .left {\n        float: left;\n        width: 100%;\n        height: 440px;\n        background: #353945;\n        -webkit-box-shadow: 0 -1px #2b2f3b;\n                box-shadow: 0 -1px #2b2f3b;\n        border-bottom: 1px solid #2b2f3b;\n}\n.CI-header-save .content .order-info .left .item {\n          line-height: 60px;\n          overflow: hidden;\n          width: 49%;\n          height: 50px;\n          display: inline-block;\n}\n.CI-header-save .content .order-info .left .item .label {\n            display: inline-block;\n            width: 135px;\n            margin-left: 15px;\n}\n.CI-header-save .content .order-info .left .item .input {\n            margin-left: 10px;\n            width: 256px;\n            border-radius: 0 0 10px 10px;\n}\n.CI-header-save .content .order-info .left .item .el-input-group__prepend .el-select .el-input .el-input__inner {\n            width: 92px;\n}\n.CI-header-save .content .order-info .left .item .el-input-group__prepend .el-select .el-input .el-input__inner:hover {\n            border-color: transparent;\n}\n.CI-header-save .content .parts-list {\n      position: relative;\n      text-align: right;\n      padding: 0 40px;\n      font-size: 12px;\n      overflow: hidden;\n      height: 50px;\n      line-height: 50px;\n      width: 100%;\n      -webkit-box-shadow: 0 -1px #2b2f3b;\n              box-shadow: 0 -1px #2b2f3b;\n}\n.CI-header-save .content .parts-list .first-total {\n        margin-right: 48px;\n}\n.CI-header-save .content .parts-list .att-total {\n        display: inline-block;\n        color: #e26829;\n}\n.CI-header-save .content .order-info-two {\n      width: 100%;\n      height: 111px;\n}\n.CI-header-save .content .order-info-two .title {\n        height: 50px;\n        line-height: 50px;\n        padding-left: 40px;\n}\n.CI-header-save .content .order-info-two .pi-left {\n        float: left;\n        width: 100%;\n        height: 60px;\n        background: #353945;\n        -webkit-box-shadow: 0 -1px #2b2f3b;\n                box-shadow: 0 -1px #2b2f3b;\n        padding: 16px;\n        border-bottom: 1px solid #2b2f3b;\n}\n.CI-header-save .content .order-info-two .pi-left .el-tag + .el-tag {\n          margin-left: 10px;\n}\n.CI-header-save .content .order-info-two .pi-left .button-new-tag {\n          margin-left: 6px;\n}\n.CI-header-save .content .footer {\n      width: 100%;\n      height: 60px;\n      line-height: 60px;\n      padding-left: 40px;\n      -webkit-box-shadow: 0 -1px #2b2f3b;\n              box-shadow: 0 -1px #2b2f3b;\n      text-align: right;\n      padding-right: 40px;\n}\n"],sourceRoot:""}])},2670:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=v(a(194)),n=v(a(20)),r=v(a(195)),s=v(a(3)),o=v(a(2399)),l=v(a(2368)),d=v(a(2396)),c=v(a(2415)),u=v(a(766)),m=v(a(90)),f=v(a(7)),p=v(a(5)),h=v(a(9)),A=v(a(10)),C=v(a(8));function v(e){return e&&e.__esModule?e:{default:e}}t.default={data:function(){return{loading:!1,headData:[],currentPage:1,total:0,orderId:0,customerList:[],deliveryNoData:[],formData:{delivery_order_no:"",delivery_order_id:"",address:"",atten:"",ci_no:"",customer_name:"",sales_name:"",customer_id:"",etd:"",id:"",payment_term:"",shipment:"",tel:"",total_amount:0,trade_terms:"",vat:"",date:"",total_volume:0,unit:"Pallet",origin:"",destination:"",country_code:""},shippedData:[{id:1,name:"By Train"},{id:2,name:"By Ship"},{id:3,name:"By Aircraft"}],defaultProps:{id:"id",children:"child",label:"name"},selectCategoryItem:{id:"",name:""},orderItems:[],areaCodeList:[],plData:[],plTags:[],date:new Date,etd:"",nw:"",gw:"",currency:""}},i18n:{messages:{fr:C.default.Component.Order.Save,en:p.default.Component.Order.Save,zh:f.default.Component.Order.Save,de:h.default.Component.Order.Save,nl:A.default.Component.Order.Save}},created:function(){var e=(0,r.default)(i.default.mark(function e(){var t,a=this;return i.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this,this.areaCodeList=m.default.init(),e.next=4,u.default.getAllCustomer().then(function(e){if(-2===e.code)throw e.message;a.customerList=e.data,a.loading=!1}).catch(function(e){a.$message({message:e,type:"error"}),a.loading=!1});case 4:return this.loading=!0,e.next=7,u.default.getAllDelivery().then(function(e){var a=e.data.filter(function(e){return 3===e.status});t.deliveryNoData=a.map(function(e){return{id:e.id,company_id:e.company_id,value:e.delivery_order_no,status:e.status,sales_name:e.create_user_id,shipment:e.shipment,origin:e.origin,destination:e.destination}}),t.loading=!1}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1});case 7:t.orderId=this.$route.query.orderId,t.orderId&&(t.loading=!0,o.default.getCommercialInvoiceId(t.orderId).then(function(e){if(-2===e.data.code)throw e.data.message;return t.formData=JSON.parse((0,n.default)(e.data)),t.etd=1e3*t.formData.etd,t.date=1e3*t.formData.date,t.formData.delivery_order_id}).then(function(e){a.getDeliveryPiDetails(e),a.filterDeliveryDetails(e),t.loading=!1}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1}));case 9:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),computed:{totalAmountCount:function(){var e=0;return this.orderItems.forEach(function(t){var a=t.quantity*t.unit_price*(1+t.vat_rate/100);t.amount=Math.round(100*a)/100,e+=t.amount}),Math.round(100*e)/100},totalWeightCount:function(){var e=0;return this.orderItems.forEach(function(t){var a=Math.round(100*t.gw)/100;e+=a}),Math.round(100*e)/100}},mounted:function(){this.headData=["Item Name","BF Art No.","Customer Art No.","Description","Unit Price","VAT rate","Quantity","Amount","G.W.(KGS)","N.W.(KGS)"]},methods:{goCIList:function(){this.$router.push({name:"commerialInvoice"})},querySearchAsync:function(e,t){var a=this.deliveryNoData;t(e?a.filter(this.createStateFilter(e)):a)},createStateFilter:function(e){return function(t){return-1!==t.value.indexOf(e.toLowerCase())}},handleInputConfirm:function(e){if(this.formData.delivery_order_id=e.id,0!==this.customerList.length||0!==this.plData.length){var t=this.customerList.find(function(t){return t.id===e.company_id});this.filterDeliveryDetails(e.id),this.getDeliveryPiDetails(e.id),t?(this.formData.shipment=e.shipment,this.formData.origin=e.origin,this.formData.destination=e.destination,this.formData.sales_name=e.sales_name,this.formData.customer_id=t.id,this.formData.customer_name=t.name,this.formData.country=t.country,this.formData.address=t.address,this.formData.tel=t.phone,this.formData.country_code=t.country_code,this.formData.vat=t.vat_no,this.formData.trade_terms=t.trade_term,this.formData.payment_term=t.payment_term,this.formData.atten=t.receiver_name):this.initCustomeInfo()}},initCustomeInfo:function(){this.formData.shipment="",this.formData.origin="",this.formData.destination="",this.formData.sales_name="",this.formData.customer_id="",this.formData.customer_name="",this.formData.country="",this.formData.country_code="",this.formData.address="",this.formData.tel="",this.formData.vat="",this.formData.trade_terms="",this.formData.payment_term="",this.formData.atten=""},checkParams:function(){return this.orderItems.length?""===this.formData.delivery_order_no?(this.$message({message:"Please add Delivery Order No. ",type:"warning"}),!1):""===this.formData.etd||this.etd<=0?(this.$message({message:"Please add ETD",type:"warning"}),!1):""===this.formData.date||this.date<=0?(this.$message({message:"Please add Date ",type:"warning"}),!1):this.formData.total_amount<=0||""===this.formData.total_amount?(this.$message({message:"Please add Total Amount",type:"warning"}),!1):!(this.formData.total_volume<=0||""===this.formData.total_volume)||(this.$message({message:"Please add Total Volume",type:"warning"}),!1):(this.$message({message:"Please add item",type:"warning"}),!1)},onPreview:function(){},onCreate:function(){var e=this,t=this;this.formData.etd=s.default.Util.parseDate(this.etd)||0,this.formData.date=s.default.Util.parseDate(this.date)||0,t.loading=!0,o.default.postCommercialInvoice(this.formData).then(function(e){if(-2===e.code)throw e.message;t.formData=JSON.parse((0,n.default)(e.data)),t.date=1e3*t.formData.date,t.etd=1e3*t.formData.etd,t.orderId=e.data.id,t.$router.push({name:"commerialInvoiceSave",query:{orderId:e.data.id}})}).then(function(){return c.default.postPIDetailsBulk(e.orderItems)}).then(function(a){t.orderItems=JSON.parse((0,n.default)(a.data)),t.$message({message:"Save Successfully",type:"success"}),t.loading=!1,e.$router.go(-1)}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1})},filterDeliveryDetails:function(e){var t=this;l.default.filterDeliveryDetails(1,{},e).then(function(e){t.plTags=e.data.content,t.loading=!1}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1})},getDeliveryPiDetails:function(e){var t=this;d.default.getDeliveryPIDetails(e).then(function(e){t.orderItems=e.filter(function(e){return e.currency=e.currency-0,t.currency=e.currency,e}),t.loading=!1}).catch(function(e){t.$message({message:e,type:"error"}),t.loading=!1})}},watch:{}}},2671:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"CI-header-save"},[a("div",{staticClass:"header"},[a("div",{staticClass:"btn-group-inline"},[a("div",{staticClass:"icons"},[a("div",{staticClass:"icon-item back",attrs:{title:"back"},on:{click:e.goCIList}})])]),e._v(" "),a("label",{staticClass:"title"},[e._v(e._s(e.orderId?"Edit Commerial Invoice":"Add Commerial Invoice"))])]),e._v(" "),a("div",{staticClass:"content-wrap"},[a("div",{directives:[{name:"loading",rawName:"v-loading.body",value:e.loading,expression:"loading",modifiers:{body:!0}}],staticClass:"content content-width"},[a("div",{staticClass:"order-info"},[a("label",{staticClass:"title"},[e._v("Commerial Invoice")]),e._v(" "),a("div",{staticClass:"left"},[a("div",{staticClass:"item"},[e._m(0),e._v(" "),a("el-autocomplete",{ref:"saveTagInput",staticClass:"input",attrs:{size:"small","fetch-suggestions":e.querySearchAsync,placeholder:"Delivery Order No."},on:{select:e.handleInputConfirm},model:{value:e.formData.delivery_order_no,callback:function(t){e.$set(e.formData,"delivery_order_no",t)},expression:"formData.delivery_order_no"}})],1),e._v(" "),a("div",{staticClass:"item"},[e._m(1),e._v(" "),a("el-date-picker",{staticClass:"input",attrs:{type:"date",placeholder:"Date"},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("Customer")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Customer",disabled:""},model:{value:e.formData.customer_name,callback:function(t){e.$set(e.formData,"customer_name",t)},expression:"formData.customer_name"}})],1),e._v(" "),a("div",{staticClass:"item"},[e._m(2),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Address",disabled:""},model:{value:e.formData.address,callback:function(t){e.$set(e.formData,"address",t)},expression:"formData.address"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("CI No.")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"CI No.",disabled:""},model:{value:e.formData.ci_no,callback:function(t){e.$set(e.formData,"ci_no",t)},expression:"formData.ci_no"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("Tel")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{disabled:!0,placeholder:"Tel"},model:{value:e.formData.tel,callback:function(t){e.$set(e.formData,"tel",t)},expression:"formData.tel"}},[a("el-select",{staticClass:"country-code",attrs:{slot:"prepend",filterable:"",disabled:!0},slot:"prepend",model:{value:e.formData.country_code,callback:function(t){e.$set(e.formData,"country_code",t)},expression:"formData.country_code"}},e._l(e.areaCodeList,function(e){return a("el-option",{key:e.area_code,attrs:{label:e.area_code,value:e.area_code}})}),1)],1)],1),e._v(" "),a("div",{staticClass:"item"},[e._m(3),e._v(" "),a("el-date-picker",{staticClass:"input",attrs:{type:"date",placeholder:"ETD"},model:{value:e.etd,callback:function(t){e.etd=t},expression:"etd"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("VAT No.")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"VAT No.",disabled:""},model:{value:e.formData.vat,callback:function(t){e.$set(e.formData,"vat",t)},expression:"formData.vat"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("Shipment")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Shipment",disabled:""},model:{value:e.formData.shipment,callback:function(t){e.$set(e.formData,"shipment",t)},expression:"formData.shipment"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("Trade Terms")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Trade Terms",disabled:""},model:{value:e.formData.trade_terms,callback:function(t){e.$set(e.formData,"trade_terms",t)},expression:"formData.trade_terms"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("Origin")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Origin",disabled:""},model:{value:e.formData.origin,callback:function(t){e.$set(e.formData,"origin",t)},expression:"formData.origin"}})],1),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("Destination")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Destination",disabled:""},model:{value:e.formData.destination,callback:function(t){e.$set(e.formData,"destination",t)},expression:"formData.destination"}})],1),e._v(" "),a("div",{staticClass:"item"},[e._m(4),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Receiver",disabled:""},model:{value:e.formData.atten,callback:function(t){e.$set(e.formData,"atten",t)},expression:"formData.atten"}})],1),e._v(" "),a("div",{staticClass:"item"},[e._m(5),e._v(" "),a("div",{staticClass:"input",staticStyle:{display:"inline-block",height:"60px"}},[a("el-input",{staticClass:"input",staticStyle:{width:"137px","margin-left":"0"},attrs:{placeholder:"Total Amount"},model:{value:e.formData.total_amount,callback:function(t){e.$set(e.formData,"total_amount",t)},expression:"formData.total_amount"}}),e._v(" "),a("el-input",{staticClass:"input",staticStyle:{width:"105px"},attrs:{disabled:!0},model:{value:e.formData.unit,callback:function(t){e.$set(e.formData,"unit",t)},expression:"formData.unit"}})],1)]),e._v(" "),a("div",{staticClass:"item"},[a("label",{staticClass:"label"},[e._v("Payment Term")]),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Payment Terms",disabled:""},model:{value:e.formData.payment_term,callback:function(t){e.$set(e.formData,"payment_term",t)},expression:"formData.payment_term"}})],1),e._v(" "),a("div",{staticClass:"item"},[e._m(6),e._v(" "),a("el-input",{staticClass:"input",attrs:{placeholder:"Total Volume"},model:{value:e.formData.total_volume,callback:function(t){e.$set(e.formData,"total_volume",t)},expression:"formData.total_volume"}},[a("template",{slot:"append"},[e._v("CBM")])],2)],1)])]),e._v(" "),a("div",{staticClass:"order-info-two"},[a("label",{staticClass:"title"},[e._v("Pakeage List")]),e._v(" "),a("div",{staticClass:"pi-left"},e._l(e.plTags,function(t){return a("el-tag",{key:t.id,attrs:{size:"small"}},[e._v(e._s(t.pi_no))])}),1)]),e._v(" "),a("div",{staticClass:"table-wrap"},[a("table",{staticClass:"table-content",attrs:{border:"0",cellspacing:"0",cellpadding:"0"}},[a("thead",e._l(e.headData,function(t){return a("td",[e._v(e._s(t))])}),0),e._v(" "),a("tbody",e._l(e.orderItems,function(t,i){return a("tr",[a("td",[e._v(e._s(t.model_name))]),e._v(" "),a("td",[e._v(e._s(t.bf_art_no))]),e._v(" "),a("td",[e._v(e._s(t.customer_art_no))]),e._v(" "),a("td",[e._v(e._s(t.description))]),e._v(" "),a("td",[e._v(e._s(e._f("currencyType")(t.currency))+e._s(t.unit_price))]),e._v(" "),a("td",[e._v(e._s(t.vat_rate)+"%")]),e._v(" "),a("td",[e._v(e._s(t.quantity))]),e._v(" "),a("td",[e._v(e._s(t.amount))]),e._v(" "),a("td",[a("el-input",{staticClass:"input",attrs:{placeholder:"G.W.(KGS)"},model:{value:t.gw,callback:function(a){e.$set(t,"gw",a)},expression:"item.gw"}})],1),e._v(" "),a("td",[a("el-input",{staticClass:"input",attrs:{placeholder:"N.W.(KGS)"},model:{value:t.nw,callback:function(a){e.$set(t,"nw",a)},expression:"item.nw"}})],1)])}),0)])]),e._v(" "),a("div",{staticClass:"parts-list"},[a("span",{staticClass:"att-total first-total"},[e._v("Total Amount to be paid: "+e._s(e._f("currencyType")(e.currency))+e._s(e.totalAmountCount))]),e._v(" "),a("span",{staticClass:"att-total"},[e._v("Total Weight: "+e._s(e.totalWeightCount)+"kg")])]),e._v(" "),a("div",{staticClass:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.onPreview}},[e._v("CI Preview")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.onCreate}},[e._v("Save")])],1)])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              Delivery Order No.\n              "),t("span",{staticClass:"required"},[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              Date\n              "),t("span",{staticClass:"required"},[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              Address\n              "),t("span",{staticClass:"required"},[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              ETD\n              "),t("span",{staticClass:"required"},[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              Receiver\n              "),t("span",{staticClass:"required"},[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              Total Amount\n              "),t("span",{staticClass:"required"},[this._v("*")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("label",{staticClass:"label"},[this._v("\n              Total Volume\n              "),t("span",{staticClass:"required"},[this._v("*")])])}]}}});
//# sourceMappingURL=15.8edd48920d2b7625b145.js.map