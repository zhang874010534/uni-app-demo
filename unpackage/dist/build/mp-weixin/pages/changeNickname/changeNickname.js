(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/changeNickname/changeNickname"],{"1bb1":function(n,e,t){"use strict";t.r(e);var a=t("5aa8"),u=t.n(a);for(var c in a)"default"!==c&&function(n){t.d(e,n,function(){return a[n]})}(c);e["default"]=u.a},"4aec":function(n,e,t){"use strict";var a=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"a",function(){return a}),t.d(e,"b",function(){return u})},"5aa8":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{userLogin:{}}},onLoad:function(){this.userLogin=n.getStorageSync("userLogin")},methods:{changeNickname:function(e){var t=e.detail.value.nickname;this.userLogin.username=t,n.setStorageSync("userLogin",this.userLogin),n.navigateBack({delta:1})}}};e.default=t}).call(this,t("543d")["default"])},"6c72":function(n,e,t){"use strict";t.r(e);var a=t("4aec"),u=t("1bb1");for(var c in u)"default"!==c&&function(n){t.d(e,n,function(){return u[n]})}(c);t("9187");var i=t("2877"),r=Object(i["a"])(u["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},8576:function(n,e,t){},9187:function(n,e,t){"use strict";var a=t("8576"),u=t.n(a);u.a},fb51:function(n,e,t){"use strict";(function(n){t("5dfb"),t("921b");a(t("66fd"));var e=a(t("6c72"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])}},[["fb51","common/runtime","common/vendor"]]]);