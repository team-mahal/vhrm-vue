(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{18:function(t,e,r){"use strict";function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function n(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e,r,o,n,s,a){try{var i=t[s](a),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(o,n)}var c={name:"LoginWithGithub",computed:{githubAuth:function(){return window.config.githubAuth},url:function(){return"/api/oauth/github"}},mounted:function(){window.addEventListener("message",this.onMessage,!1)},beforeDestroy:function(){window.removeEventListener("message",this.onMessage)},methods:{login:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var r,o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=l("",e.$t("login")),t.next=3,e.$store.dispatch("auth/fetchOauthUrl",{provider:"github"});case 3:o=t.sent,r.location.href=o;case 5:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,n){var s=t.apply(e,r);function a(t){i(s,o,n,a,c,"next",t)}function c(t){i(s,o,n,a,c,"throw",t)}a(void 0)}))})()},onMessage:function(t){t.origin===window.origin&&t.data.token&&(this.$store.dispatch("auth/saveToken",{token:t.data.token}),this.$router.push({name:"home"}))}}};function l(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};"object"===a(t)&&(r=t,t=""),r=n({url:t,title:e,width:600,height:720},r);var o=void 0!==window.screenLeft?window.screenLeft:window.screen.left,s=void 0!==window.screenTop?window.screenTop:window.screen.top,i=window.innerWidth||document.documentElement.clientWidth||window.screen.width,c=window.innerHeight||document.documentElement.clientHeight||window.screen.height;r.left=i/2-r.width/2+o,r.top=c/2-r.height/2+s;var l=Object.keys(r).reduce((function(t,e){return t.push("".concat(e,"=").concat(r[e])),t}),[]).join(","),u=window.open(t,e,l);return window.focus&&u.focus(),u}var u=r(1),m=Object(u.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return this.githubAuth?e("button",{staticClass:"btn btn-dark ml-auto",attrs:{type:"button"},on:{click:this.login}},[this._v("\n  "+this._s(this.$t("login_with"))+"\n  "),e("fa",{attrs:{icon:["fab","github"]}})],1):this._e()}),[],!1,null,null,null);e.a=m.exports},27:function(t,e,r){"use strict";r.r(e);var o=r(2),n=r.n(o);function s(t,e,r,o,n,s,a){try{var i=t[s](a),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(o,n)}var a={middleware:"guest",layout:"basic",components:{LoginWithGithub:r(18).a},metaInfo:function(){return{title:this.$t("register")}},data:function(){return{form:new n.a({name:"",email:"",password:"",password_confirmation:""}),mustVerifyEmail:!1}},methods:{register:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var r,o,n,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/register");case 2:if(r=t.sent,!(o=r.data).status){t.next=8;break}e.mustVerifyEmail=!0,t.next=16;break;case 8:return t.next=10,e.form.post("/api/login");case 10:return n=t.sent,s=n.data.token,e.$store.dispatch("auth/saveToken",{token:s}),t.next=15,e.$store.dispatch("auth/updateUser",{user:o});case 15:e.$router.push({name:"home"});case 16:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,n){var a=t.apply(e,r);function i(t){s(a,o,n,i,c,"next",t)}function c(t){s(a,o,n,i,c,"throw",t)}i(void 0)}))})()}}},i=r(1),c=Object(i.a)(a,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row items-center"},[r("div",{staticClass:"col-lg-8 m-auto text-center"},[t.mustVerifyEmail?r("card",{staticClass:"text-center",attrs:{title:t.$t("register")}},[r("div",{staticClass:"alert alert-success",attrs:{role:"alert"}},[t._v("\n\t\t\t\t"+t._s(t.$t("verify_email_address"))+"\n\t\t\t")])]):r("card",{attrs:{title:t.$t("register")}},[r("div",{staticClass:"max-w-xs m-auto"},[r("form",{staticClass:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.register(e)},keydown:function(e){return t.form.onKeydown(e)}}},[r("div",{staticClass:"form-group row"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 text-left"},[t._v(t._s(t.$t("name")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",class:{"is-invalid":t.form.errors.has("name")},attrs:{type:"text",name:"name"},domProps:{value:t.form.name},on:{input:function(e){e.target.composing||t.$set(t.form,"name",e.target.value)}}}),t._v(" "),r("has-error",{staticClass:"mt-2 text-red-600 text-left font-semibold",attrs:{form:t.form,field:"name"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 text-left"},[t._v(t._s(t.$t("email")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{staticClass:"mt-2 text-red-600 text-left font-semibold",attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 text-left"},[t._v(t._s(t.$t("password")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",class:{"is-invalid":t.form.errors.has("password")},attrs:{type:"password",name:"password"},domProps:{value:t.form.password},on:{input:function(e){e.target.composing||t.$set(t.form,"password",e.target.value)}}}),t._v(" "),r("has-error",{staticClass:"mt-2 text-red-600 text-left font-semibold",attrs:{form:t.form,field:"password"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2 text-left"},[t._v(t._s(t.$t("confirm_password")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password_confirmation,expression:"form.password_confirmation"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",class:{"is-invalid":t.form.errors.has("password_confirmation")},attrs:{type:"password",name:"password_confirmation"},domProps:{value:t.form.password_confirmation},on:{input:function(e){e.target.composing||t.$set(t.form,"password_confirmation",e.target.value)}}}),t._v(" "),r("has-error",{staticClass:"mt-2 text-red-600 text-left font-semibold",attrs:{form:t.form,field:"password_confirmation"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"text-center mt-2"},[r("v-button",{attrs:{loading:t.form.busy}},[t._v("\n\t\t\t\t\t\t\t\t"+t._s(t.$t("register"))+"\n\t\t\t\t\t\t\t")]),t._v(" "),r("login-with-github")],1)])])])])],1)])}),[],!1,null,null,null);e.default=c.exports}}]);