(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/personal/changemail"],{"08ed":function(e,a,t){},1900:function(e,a,t){"use strict";t.r(a);var n=t("79e9"),o=t("2fee");for(var c in o)"default"!==c&&function(e){t.d(a,e,function(){return o[e]})}(c);t("7c64");var i,l=t("f0c5"),s=Object(l["a"])(o["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],i);a["default"]=s.exports},2132:function(e,a,t){"use strict";(function(e){t("1c35"),t("921b");n(t("66fd"));var a=n(t("1900"));function n(e){return e&&e.__esModule?e:{default:e}}e(a.default)}).call(this,t("6e42")["createPage"])},2175:function(e,a,t){"use strict";(function(e,n){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;c(t("9f11"));var o=c(t("0747"));function c(e){return e&&e.__esModule?e:{default:e}}var i={data:function(){return{mail:"",code:"",captchaFlag:!0,captchaName:"获取验证码",captchaTime:60}},onLoad:function(a){this.mail=e.getStorageSync("mail")},methods:{getCaptcha:function(){var a=this;console.log(n(this.mail," at pages\\personal\\changemail.vue:49")),e.request({url:this.Server_IP+"mailcode",data:{mail:this.mail},header:{"custom-header":"mailcode"},method:"POST",dataType:"json",success:function(t){if(console.log(n(t.data," at pages\\personal\\changemail.vue:61")),"0"==t.data.info.code){var o=a;o.captchaFlag=!1,o.captchaShow=!0;var c=setInterval(function(){--o.captchaTime},1e3);setTimeout(function(){clearInterval(c),o.captchaFlag=!0,o.captchaTime=60},6e4),console.log(n(t.data.data.userId," at pages\\personal\\changemail.vue:72")),console.log(n("成功"," at pages\\personal\\changemail.vue:73")),e.showToast({icon:"none",title:"验证码发送成功，此邮件可能被归类到垃圾箱中，请注意"})}else e.showToast({icon:"none",title:t.data.info.message})}})},next:function(){var a=this,t=[{name:"code",checkType:"notnull",errorMsg:"请输入验证码"},{name:"code",checkType:"string",checkRule:"6",errorMsg:"验证码为6个字符"}],c=o.default.check(a,t);if(!c)return e.showToast({title:o.default.error,icon:"none"}),void(a.isFocus=!0);e.request({url:this.Server_IP+"checkCode",data:{mail:this.mail,code:this.code},header:{"custom-header":"checkCode"},method:"POST",dataType:"json",success:function(t){console.log(n(t.data," at pages\\personal\\changemail.vue:126")),"0"==t.data.info.code?(console.log(n("验证码正确"," at pages\\personal\\changemail.vue:128")),e.navigateTo({url:"./newmail?code="+a.code})):e.showToast({icon:"none",title:t.data.info.message})}})}}};a.default=i}).call(this,t("6e42")["default"],t("0de9")["default"])},"2fee":function(e,a,t){"use strict";t.r(a);var n=t("2175"),o=t.n(n);for(var c in n)"default"!==c&&function(e){t.d(a,e,function(){return n[e]})}(c);a["default"]=o.a},"79e9":function(e,a,t){"use strict";var n,o=function(){var e=this,a=e.$createElement;e._self._c},c=[];t.d(a,"b",function(){return o}),t.d(a,"c",function(){return c}),t.d(a,"a",function(){return n})},"7c64":function(e,a,t){"use strict";var n=t("08ed"),o=t.n(n);o.a}},[["2132","common/runtime","common/vendor"]]]);