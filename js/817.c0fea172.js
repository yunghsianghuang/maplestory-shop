"use strict";(self["webpackChunkmaplestory_shop"]=self["webpackChunkmaplestory_shop"]||[]).push([[817],{3817:function(t,a,s){s.r(a),s.d(a,{default:function(){return p}});var e=function(){var t=this,a=t._self._c;return a("div",[a("div",{staticClass:"container py-3"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb bg-white"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-maple",attrs:{to:"/"}},[t._v(" 首頁 ")])],1),a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-maple",attrs:{to:"/category"}},[t._v(" 所有商品 ")])],1),a("li",{staticClass:"breadcrumb-item active",attrs:{"aria-current":"page"}},[a("span",[t._v(t._s(t.product.title))])])])]),a("div",{staticClass:"row main"},[a("div",{staticClass:"col-md-6 mb-4 mb-md-0"},[a("div",{staticClass:"double-border p-3 p-sm-4 h-100"},[a("figure",{staticClass:"mb-4 item-image",style:{backgroundImage:`url(${t.product.imageUrl})`}}),a("h5",{staticClass:"pt-4 text-maple border-top"},[t._v(" 【商品敘述】 ")]),a("p",[t._v(t._s(t.product.content))]),a("h5",{staticClass:"pt-4 text-maple border-top"},[t._v(" 【商品規格】 ")]),a("p",{staticClass:"mb-0"},[t._v(" "+t._s(t.product.description)+" ")])])]),a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"double-border p-3 p-sm-4"},["熱銷商品"===t.product.category?a("span",{staticClass:"badge float-right badge-danger category-badge"},[t._v(t._s(t.product.category))]):t._e(),"最新商品"===t.product.category?a("span",{staticClass:"badge float-right badge-moderate category-badge"},[t._v(t._s(t.product.category))]):t._e(),"楓葉武器"===t.product.category||"楓葉防具"===t.product.category?a("span",{staticClass:"badge float-right badge-maple category-badge"},[t._v(t._s(t.product.category))]):t._e(),"不速之客"===t.product.category?a("span",{staticClass:"badge float-right badge-dark category-badge"},[t._v(t._s(t.product.category))]):t._e(),a("h2",{staticClass:"h3 product-title pb-4 border-bottom"},[a("span",{staticClass:"pb-4"},[t._v(t._s(t.product.title))])]),t.product.price?t._e():a("div",{staticClass:"h5 mt-4 mb-3"},[t._v(" NT"+t._s(t._f("currency")(t.product.origin_price))+" ")]),t.product.price?a("div",{staticClass:"h6 text-secondary mt-4"},[t._v(" 原價 NT"+t._s(t._f("currency")(t.product.origin_price))+" ")]):t._e(),t.product.price?a("div",{staticClass:"h5 mb-3 text-maple sale-price"},[t._v(" 特價 NT"+t._s(t._f("currency")(t.product.price))+" ")]):t._e(),a("select",{directives:[{name:"model",rawName:"v-model",value:t.product.num,expression:"product.num"}],staticClass:"form-control my-3",attrs:{name:""},on:{change:[function(a){var s=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.product,"num",a.target.multiple?s:s[0])},function(a){return t.enablingBtn()}]}},[a("option",{attrs:{value:"0",selected:"",disabled:""}},[t._v(" 請選擇數量 ")]),t._l(10,(function(s){return a("option",{key:s,domProps:{value:s}},[t._v(" 選購 "+t._s(s)+" "+t._s(t.product.unit)+" ")])}))],2),a("p",[t._v(" 小計 "),a("strong",[t._v(t._s(t._f("currency")(t.product.num*t.product.price)))]),t._v(" 元 ")]),a("button",{staticClass:"btn btn-maple mb-4 w-100 disabledBtn",attrs:{type:"button",disabled:""},on:{click:function(a){return t.addToCart(t.product.id,t.product.num)}}},[t._v(" 加到購物車 ")]),a("h5",{staticClass:"pt-4 text-maple border-top"},[t._v(" 【配送及其他說明】 ")]),a("p",[t._v("為保障會員個資安全，您所訂購的商品之出貨標籤上，我們將會遮蔽部份姓名，如造成您的收貨困擾，請見諒。")]),t._m(0)])])])])])},r=[function(){var t=this,a=t._self._c;return a("div",{staticClass:"ship-info"},[a("table",{staticClass:"table table-borderless"},[a("tbody",[a("tr",[a("td",{staticClass:"font-weight-bold pr-0",attrs:{width:"96px"}},[t._v(" 寄送時間： ")]),a("td",{staticClass:"pl-0"},[a("span",{staticClass:"text-danger"},[t._v("弓箭手村6h到貨（試營運）")]),a("br"),t._v("全島24h到貨，遲到提供100元現金積點。全年無休，週末假日照常出貨。 ")])]),a("tr",[a("td",{staticClass:"font-weight-bold pr-0",attrs:{width:"96px"}},[t._v(" 送貨方式： ")]),a("td",{staticClass:"pl-0"},[t._v(" 透過篤伊宅配公司送達。 "),a("br"),t._v("消費者訂購之商品若經配送兩次無法送達，再經本公司以電話與Email均無法聯繫逾三天者，本公司將取消該筆訂單，並且全額退款。 ")])]),a("tr",[a("td",{staticClass:"font-weight-bold pr-0",attrs:{width:"96px"}},[t._v(" 送貨範圍： ")]),a("td",{staticClass:"pl-0"},[t._v(" 限維多利亞島與離島地區，部分離島地區（包括鯨魚號、黃金海灘、台灣…等）貨件，將送至到岸船公司碼頭，需請收貨人自行至碼頭取貨。注意！收件地址請勿為郵政信箱。 ")])]),a("tr",[a("td",{staticClass:"font-weight-bold pr-0",attrs:{width:"96px"}},[t._v(" 售後服務： ")]),a("td",{staticClass:"pl-0"},[t._v(" 新品瑕疵 ")])])])])])}],c=s(8513),o={data(){return{product:{num:0}}},async created(){const t=this,{id:a}=t.$route.params;t.$store.dispatch("global/updateLoading",!0);const s=await(0,c.YN)(a);t.product=s.data.product,t.$set(t.product,"num",0),t.$store.dispatch("global/updateLoading",!1)},methods:{addToCart(t,a=1){this.$store.dispatch("global/addToCart",{id:t,qty:a})},enablingBtn(){document.querySelector(".disabledBtn").disabled=!1}}},i=o,d=s(3736),l=(0,d.Z)(i,e,r,!1,null,"c57e89e8",null),p=l.exports}}]);
//# sourceMappingURL=817.c0fea172.js.map