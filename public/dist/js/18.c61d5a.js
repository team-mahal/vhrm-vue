(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{25:function(t,e,r){"use strict";r.r(e);var s=r(2),a=r.n(s);function o(t,e,r,s,a,o,n){try{var i=t[o](n),l=i.value}catch(t){return void r(t)}i.done?e(l):Promise.resolve(l).then(s,a)}var n={middleware:"guest",metaInfo:function(){return{title:this.$t("reset_password")}},data:function(){return{status:"",form:new a.a({email:""})}},methods:{send:function(){var t,e=this;return(t=regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.form.post("/api/password/email");case 2:r=t.sent,s=r.data,e.status=s.status,e.form.reset();case 6:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(s,a){var n=t.apply(e,r);function i(t){o(n,s,a,i,l,"next",t)}function l(t){o(n,s,a,i,l,"throw",t)}i(void 0)}))})()}}},i=r(1),l=Object(i.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-8 m-auto"},[r("card",{attrs:{title:t.$t("reset_password")}},[r("form",{on:{submit:function(e){return e.preventDefault(),t.send(e)},keydown:function(e){return t.form.onKeydown(e)}}},[r("alert-success",{attrs:{form:t.form,message:t.status}}),t._v(" "),r("div",{staticClass:"form-group row"},[r("label",{staticClass:"col-md-3 col-form-label text-md-right"},[t._v(t._s(t.$t("email")))]),t._v(" "),r("div",{staticClass:"col-md-7"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:{"is-invalid":t.form.errors.has("email")},attrs:{type:"email",name:"email"},domProps:{value:t.form.email},on:{input:function(e){e.target.composing||t.$set(t.form,"email",e.target.value)}}}),t._v(" "),r("has-error",{attrs:{form:t.form,field:"email"}})],1)]),t._v(" "),r("div",{staticClass:"form-group row"},[r("div",{staticClass:"col-md-9 ml-md-auto"},[r("v-button",{attrs:{loading:t.form.busy}},[t._v("\n\t\t\t\t\t\t\t"+t._s(t.$t("send_password_reset_link"))+"\n\t\t\t\t\t\t")])],1)])],1)])],1)])}),[],!1,null,null,null);e.default=l.exports}}]);