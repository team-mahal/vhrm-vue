(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{3:function(t,e,n){"use strict";var r={props:{data:{},name:{},click:{type:Function,default:function(){}},classes:{type:Object,default:{btn:!0,"btn-blue":!0,"bg-blue-500":!0,"hover:bg-blue-700":!0,"py-2":!0,"text-white":!0,"font-bold":!0,"px-4":!0,rounded:!0,"float-right":!0}}}},a=n(1),i=Object(a.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:t.classes,attrs:{title:"Update"},on:{click:function(e){return t.click(t.data)}}},[t._m(0),t._v("\n    Edit\n")])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-eye",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.a=i.exports},37:function(t,e,n){"use strict";n.r(e);var r=n(8),a=n.n(r),i=n(3),s=n(2),o=n.n(s),u=n(0),l=n.n(u);function c(t,e,n,r,a,i,s){try{var o=t[i](s),u=o.value}catch(t){return void n(t)}o.done?e(u):Promise.resolve(u).then(r,a)}function d(t){return function(){var e=this,n=arguments;return new Promise((function(r,a){var i=t.apply(e,n);function s(t){c(i,r,a,s,o,"next",t)}function o(t){c(i,r,a,s,o,"throw",t)}s(void 0)}))}}var f={middleware:"auth",components:{EditButon:i.a,Loading:a.a},data:function(){return{base_url:base_url,url:base_url+"/api/issue_types",tableProps:{search:"",length:10,column:"id",dir:"asc"},issue_types:{},updateData:!1,isLoading:!1,form:new o.a({email:"",password:""}),columns:[{label:"ID",name:"id",orderable:!0},{label:"Name",name:"name",orderable:!0},{label:"",name:"Edit",orderable:!1,classes:{btn:!0,"btn-blue":!0,"bg-blue-500":!0,"hover:bg-blue-700":!0,"py-2":!0,"text-white":!0,"font-bold":!0,"px-4":!0,rounded:!0,"float-right":!0},event:"click",handler:this.displayRow,component:i.a}],classes:{"table-container":{"justify-center":!0,"w-full":!0,flex:!0,"border-gray-200":!0,"inline-block":!0,"min-w-full":!0,"rounded-lg":!0,"overflow-hidden":!0},table:{"text-left":!0,"w-full":!0},"t-body":{"bg-white":!0},"t-head-tr":{"border-b":!0,"border-gray":!0},"t-body-tr":{"stripped-table":!0,"bg-grey-darkest":!0},td:{"py-4":!0,"px-6":!0,"border-b":!0,"border-grey-light":!0,"text-gray-light":!0},th:{"text-gray-dark":!0,"border-gray":!0,"border-b-2":!0,"border-t-2":!0,"border-gray-200":!0,"py-3":!0,"px-4":!0,"bg-gray-100":!0,"text-left":!0,"text-xs":!0,"font-semibold":!0,"text-gray-600":!0,uppercase:!0,"tracking-wider":!0}},column:[]}},methods:{cleanForm:function(){this.$refs.modal.hide(),this.getData(this.url),this.updateData=!1,this.form.name="",this.form.id="",this.errors={}},storeOrUpdate:function(){var t=this;return d(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.updateData){e.next=7;break}return e.next=3,t.form.put("/api/issue_types/"+t.form.id);case 3:200===(n=e.sent).status&&(t.cleanForm(),showMessage(n.status,"Issue Type updated successfully")),e.next=11;break;case 7:return e.next=9,t.form.post("/api/issue_types");case 9:200===(r=e.sent).status&&(t.cleanForm(),showMessage(r.status,"Issue Type created successfully"));case 11:case"end":return e.stop()}}),e)})))()},displayRow:function(t){var e=this;return d(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.updateData=!0,e.$refs.modal.show(),e.form.name=t.name,e.form.id=t.id;case 4:case"end":return n.stop()}}),n)})))()},getData:function(){var t=arguments,e=this;return d(regeneratorRuntime.mark((function n(){var r,a,i;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.length>0&&void 0!==t[0]?t[0]:e.url,a=t.length>1&&void 0!==t[1]?t[1]:e.tableProps,n.next=4,l.a.get(r,{params:a});case 4:200===(i=n.sent).status&&(e.issue_types=i.data);case 6:case"end":return n.stop()}}),n)})))()}},created:function(){var t=this;l.a.get("/api/issue_types/create").then((function(e){t.form.originalData=e.data})).catch((function(t){console.log(t)})).then((function(){}))}},p=n(1),h=Object(p.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-right"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",on:{click:function(e){return t.$refs.modal.show()}}},[t._v("\r\n\t\t  "+t._s(t.updateData?"Update":"Create")+"\r\n\t\t")])]),t._v(" "),n("t-modal",{ref:"modal",staticClass:"curdmodel"},[n("form",{staticClass:"bg-white rounded px-8 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.storeOrUpdate(e)},keydown:function(e){return t.form.onKeydown(e)}}},[n("div",{staticClass:"p-3"},[n("h2",{staticClass:"mb-2"},[t._v(t._s(t.updateData?"Update":"Create")+" Issue Type")]),t._v(" "),t._l(t.form.originalData,(function(e,r,a){return n("div",{key:a,staticClass:"my-1"},[n("p",{staticClass:"capitalize font-semibold"},[t._v(" "+t._s(r))]),t._v(" "),n("t-input",{staticClass:"w-full",class:{"is-invalid":t.form.errors.has(r)},model:{value:t.form[r],callback:function(e){t.$set(t.form,r,e)},expression:"form[name]"}}),t._v(" "),n("has-error",{staticClass:"mt-2 text-red-600 text-left font-semibold",attrs:{form:t.form,field:r}})],1)})),t._v(" "),n("div",{staticClass:"mt-3 text-right"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",attrs:{loading:t.form.busy}},[t._v("\r\n                      "+t._s(t.updateData?"Update":"Create")+"\r\n                    ")])])],2)])]),t._v(" "),n("data-table",{attrs:{columns:t.columns,classes:t.classes,data:t.issue_types,url:t.base_url+"/api/issue_types"},on:{loading:function(e){t.isLoading=!0},finishedLoading:function(e){t.isLoading=!1}}}),t._v(" "),n("loading",{attrs:{"is-full-page":!0,active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}})],1)}),[],!1,null,null,null);e.default=h.exports},8:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e,n){},function(t,e,n){"use strict";n.r(e);var r="undefined"!=typeof window?window.HTMLElement:Object,a={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function i(t,e,n,r,a,i,s,o){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},l._ssrRegister=u):a&&(u=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}var s=i({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,o=i({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=i({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=i({name:"vue-loading",mixins:[a],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,r],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:s,Dots:o,Bars:u},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:t.transition}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[n("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),n("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[n(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n,i={programmatic:!0},s=Object.assign({},e,r,i),o=new(t.extend(l))({el:document.createElement("div"),propsData:s}),u=Object.assign({},n,a);return Object.keys(u).map((function(t){o.$slots[t]=u[t]})),o}}};n(0),l.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=c(t,e,n);t.$loading=r,t.prototype.$loading=r},e.default=l}]).default}}]);