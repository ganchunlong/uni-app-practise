(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/uni-nav-bar/uni-nav-bar"],{"776b":function(t,n,e){"use strict";var u=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"a",function(){return u}),e.d(n,"b",function(){return i})},"8ce5":function(t,n,e){},"8fc2":function(t,n,e){"use strict";e.r(n);var u=e("776b"),i=e("cff2");for(var r in i)"default"!==r&&function(t){e.d(n,t,function(){return i[t]})}(r);e("cb12");var a=e("2877"),o=Object(a["a"])(i["default"],u["a"],u["b"],!1,null,null,null);n["default"]=o.exports},cb12:function(t,n,e){"use strict";var u=e("8ce5"),i=e.n(u);i.a},cff2:function(t,n,e){"use strict";e.r(n);var u=e("f26c"),i=e.n(u);for(var r in u)"default"!==r&&function(t){e.d(n,t,function(){return u[t]})}(r);n["default"]=i.a},f26c:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return e.e("components/uni-status-bar/uni-status-bar").then(e.bind(null,"a23d"))},i=function(){return e.e("components/uni-icon/uni-icon").then(e.bind(null,"80e2"))},r={name:"UniNavBar",components:{uniStatusBar:u,uniIcon:i},props:{title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:"#000000"},backgroundColor:{type:String,default:"#FFFFFF"},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[String,Boolean],default:!0},border:{type:[String,Boolean],default:!0}},methods:{onClickLeft:function(){this.$emit("click-left")},onClickRight:function(){this.$emit("click-right")}}};n.default=r}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/uni-nav-bar/uni-nav-bar-create-component',
    {
        'components/uni-nav-bar/uni-nav-bar-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("8fc2"))
        })
    },
    [['components/uni-nav-bar/uni-nav-bar-create-component']]
]);                
