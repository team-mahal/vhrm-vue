(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{10:function(t,e,r){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={i:n,l:!1,exports:{}};return t[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){},function(t,e,r){"use strict";r.r(e);var n="undefined"!=typeof window?window.HTMLElement:Object,a={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function s(t,e,r,n,a,s,i,o){var l,u="function"==typeof t?t.options:t;if(e&&(u.render=e,u.staticRenderFns=r,u._compiled=!0),n&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),i?(l=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),a&&a.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(i)},u._ssrRegister=l):a&&(l=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),l)if(u.functional){u._injectStyles=l;var c=u.render;u.render=function(t,e){return l.call(e),c(t,e)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,l):[l]}return{exports:t,options:u}}var i=s({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,o=s({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=s({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=s({name:"vue-loading",mixins:[a],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,n],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:i,Dots:o,Bars:l},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("transition",{attrs:{name:t.transition}},[r("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[r("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),r("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[r(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r,s={programmatic:!0},i=Object.assign({},e,n,s),o=new(t.extend(u))({el:document.createElement("div"),propsData:i}),l=Object.assign({},r,a);return Object.keys(l).map((function(t){o.$slots[t]=l[t]})),o}}};r(0),u.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=c(t,e,r);t.$loading=n,t.prototype.$loading=n},e.default=u}]).default},29:function(t,e,r){"use strict";r.r(e);var n=r(10),a=r.n(n),s=r(5),i=r(2),o=r.n(i),l=r(1),u=r.n(l);function c(t,e,r,n,a,s,i){try{var o=t[s](i),l=o.value}catch(t){return void r(t)}o.done?e(l):Promise.resolve(l).then(n,a)}function d(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var s=t.apply(e,r);function i(t){c(s,n,a,i,o,"next",t)}function o(t){c(s,n,a,i,o,"throw",t)}i(void 0)}))}}var f={middleware:"auth",components:{EditButon:s.a,Loading:a.a},data:function(){return{base_url:base_url,url:base_url+"/api/issues",tableProps:{search:"",length:10,column:"id",dir:"asc"},issues:{},updateData:!1,isLoading:!1,form:new o.a({name:"",id:"",client_id:"",project_id:"",department_id:"",issue_type_id:"",desc:""}),clients:[],projects:[],departments:[],issue_types:[],statuses:[],columns:[{label:"ID",name:"id",orderable:!0},{label:"Issue",name:"title",orderable:!0},{label:"Project",name:"project.name",columnName:"project.name",orderable:!0},{label:"Client",name:"client.name",columnName:"client.name",orderable:!0},{label:"Department",name:"department.name",columnName:"department.name",orderable:!0},{label:"Type",name:"issue_type.name",columnName:"issue_type.name",orderable:!0},{label:"Status",name:"status.name",columnName:"status.name",orderable:!0},{label:"Date",name:"created_at",columnName:"created_at",orderable:!0},{label:"",name:"Edit",orderable:!1,classes:{btn:!0,"btn-blue":!0,"bg-blue-500":!0,"hover:bg-blue-700":!0,"py-2":!0,"text-white":!0,"font-bold":!0,"px-4":!0,rounded:!0,"float-right":!0},event:"click",handler:this.displayRow,component:s.a}],classes:{"table-container":{"justify-center":!0,"w-full":!0,flex:!0,"border-gray-200":!0,"inline-block":!0,"min-w-full":!0,"rounded-lg":!0,"overflow-hidden":!0},table:{"text-left":!0,"w-full":!0},"t-body":{"bg-white":!0},"t-head-tr":{"border-b":!0,"border-gray":!0},"t-body-tr":{"stripped-table":!0,"bg-grey-darkest":!0},td:{"py-4":!0,"px-6":!0,"border-b":!0,"border-grey-light":!0,"text-gray-light":!0},th:{"text-gray-dark":!0,"border-gray":!0,"border-b-2":!0,"border-t-2":!0,"border-gray-200":!0,"py-3":!0,"px-4":!0,"bg-gray-100":!0,"text-left":!0,"text-xs":!0,"font-semibold":!0,"text-gray-600":!0,uppercase:!0,"tracking-wider":!0}},column:[]}},methods:{cleanForm:function(){this.$refs.modal.hide(),this.getData(this.url),this.updateData=!1,this.form.name="",this.form.id="",this.form.client_id="",this.errors={}},storeOrUpdate:function(){var t=this;return d(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.updateData){e.next=7;break}return e.next=3,t.form.put("/api/issues/"+t.form.id);case 3:200===(r=e.sent).status&&(t.cleanForm(),showMessage(r.status,"Issue updated successfully")),e.next=11;break;case 7:return e.next=9,t.form.post("/api/issues");case 9:200===(n=e.sent).status&&(t.cleanForm(),showMessage(n.status,"Issue created successfully"));case 11:case"end":return e.stop()}}),e)})))()},fetchClients:function(){var t=this;return d(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/clients/all",{status:1});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data.map((function(t){return{value:t.id,text:t.name}}));case 6:t.clients=e.sent;case 7:case"end":return e.stop()}}),e)})))()},fetchProjects:function(){var t=this;return d(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/projects/all",{status:1});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data.map((function(t){return{value:t.id,text:t.name}}));case 6:t.projects=e.sent;case 7:case"end":return e.stop()}}),e)})))()},fetchDepartments:function(){var t=this;return d(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/departments/all",{status:1});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data.map((function(t){return{value:t.id,text:t.name}}));case 6:t.departments=e.sent;case 7:case"end":return e.stop()}}),e)})))()},fetchIssueTypes:function(){var t=this;return d(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/issue_types/all",{status:1});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data.map((function(t){return{value:t.id,text:t.name}}));case 6:t.issue_types=e.sent;case 7:case"end":return e.stop()}}),e)})))()},fetchStatuses:function(){var t=this;return d(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("/api/statuses/all",{status:1});case 2:if(200!==(r=e.sent).status){e.next=7;break}return e.next=6,r.data.map((function(t){return{value:t.id,text:t.name}}));case 6:t.statuses=e.sent;case 7:case"end":return e.stop()}}),e)})))()},displayRow:function(t){var e=this;return d(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:e.updateData=!0,e.$refs.modal.show(),e.form.title=t.title,e.form.desc=t.desc,e.form.id=t.id,e.form.client_id=t.client_id,e.form.project_id=t.project_id,e.form.department_id=t.department_id,e.form.issue_type_id=t.issue_type_id,e.form.status_id=t.status_id;case 10:case"end":return r.stop()}}),r)})))()},getData:function(){var t=arguments,e=this;return d(regeneratorRuntime.mark((function r(){var n,a,s;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]?t[0]:e.url,a=t.length>1&&void 0!==t[1]?t[1]:e.tableProps,r.next=4,u.a.get(n,{params:a});case 4:200===(s=r.sent).status&&(e.issues=s.data);case 6:case"end":return r.stop()}}),r)})))()}},created:function(){var t=this;u.a.get("/api/issues/create").then((function(e){t.form.originalData=e.data})).catch((function(t){console.log(t)})).then((function(){}))},mounted:function(){this.fetchClients(),this.fetchProjects(),this.fetchDepartments(),this.fetchIssueTypes(),this.fetchStatuses()}},m=r(0),p=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"text-right"},[r("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded",on:{click:function(e){return t.$refs.modal.show()}}},[t._v("\r\n\t\t  Create\r\n\t\t")])]),t._v(" "),r("t-modal",{ref:"modal",staticClass:"curdmodel"},[r("form",{staticClass:"bg-white rounded px-8 pt-6 pb-8 mb-4",on:{submit:function(e){return e.preventDefault(),t.storeOrUpdate(e)},keydown:function(e){return t.form.onKeydown(e)}}},[r("div",{staticClass:"p-3"},[r("h2",{staticClass:"mb-2"},[t._v(t._s(t.updateData?"Update":"Create")+" Issue")]),t._v(" "),t._l(t.form.originalData,(function(e,n,a){return r("div",{key:a,staticClass:"my-1"},["title"===n?r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[t._v("\r\n                            Title\r\n                        ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.form[n],expression:"form[name]"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{type:"text",placeholder:"Issue Title"},domProps:{value:t.form[n]},on:{input:function(e){e.target.composing||t.$set(t.form,n,e.target.value)}}}),t._v(" "),r("has-error",{staticClass:"mt-2 text-red-600 text-left font-semibold",attrs:{form:t.form,field:n}})],1):t._e(),t._v(" "),"desc"===n?r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[t._v("\r\n                            Description\r\n                        ")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form[n],expression:"form[name]"}],staticClass:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",attrs:{rows:"3",placeholder:"Issue Description"},domProps:{value:t.form[n]},on:{input:function(e){e.target.composing||t.$set(t.form,n,e.target.value)}}}),t._v(" "),r("has-error",{staticClass:"mt-2 text-red-600 text-left font-semibold",attrs:{form:t.form,field:n}})],1):t._e(),t._v(" "),"client"===n?r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[t._v("\r\n                            Client\r\n                        ")]),t._v(" "),"client"===n?r("t-select",{staticClass:"w-full",class:{"is-invalid":t.form.errors.has(n)},attrs:{disabled:""!==t.form.project_id&&null!==t.form.project_id,options:t.clients},model:{value:t.form[n+"_id"],callback:function(e){t.$set(t.form,n+"_id",e)},expression:"form[name+'_id']"}}):t._e()],1):t._e(),t._v(" "),"project"===n?r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[t._v("\r\n                            Project\r\n                        ")]),t._v(" "),"project"===n?r("t-select",{staticClass:"w-full",class:{"is-invalid":t.form.errors.has(n)},attrs:{disabled:""!==t.form.client_id&&null!==t.form.client_id,options:t.projects},model:{value:t.form[n+"_id"],callback:function(e){t.$set(t.form,n+"_id",e)},expression:"form[name+'_id']"}}):t._e()],1):t._e(),t._v(" "),"department"===n?r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[t._v("\r\n                            Department\r\n                        ")]),t._v(" "),"department"===n?r("t-select",{staticClass:"w-full",class:{"is-invalid":t.form.errors.has(n)},attrs:{options:t.departments},model:{value:t.form[n+"_id"],callback:function(e){t.$set(t.form,n+"_id",e)},expression:"form[name+'_id']"}}):t._e(),t._v(" "),r("has-error",{staticClass:"mt-2 text-red-600 text-left font-semibold",attrs:{form:t.form,field:"department_id"}})],1):t._e(),t._v(" "),"issue_type"===n?r("div",{staticClass:"mb-4"},[r("label",{staticClass:"block text-gray-700 text-sm font-bold mb-2"},[t._v("\r\n                            Type\r\n                        ")]),t._v(" "),"issue_type"===n?r("t-select",{staticClass:"w-full",class:{"is-invalid":t.form.errors.has(n)},attrs:{options:t.issue_types},model:{value:t.form[n+"_id"],callback:function(e){t.$set(t.form,n+"_id",e)},expression:"form[name+'_id']"}}):t._e(),t._v(" "),r("has-error",{staticClass:"mt-2 text-red-600 text-left font-semibold",attrs:{form:t.form,field:"issue_type_id"}})],1):t._e()])})),t._v(" "),r("div",{staticClass:"mt-3 text-right"},[r("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",attrs:{loading:t.form.busy}},[t._v("\r\n                      "+t._s(t.updateData?"Update":"Create")+"\r\n                    ")])])],2)])]),t._v(" "),r("data-table",{attrs:{columns:t.columns,classes:t.classes,responsive:!0,"responsive-breakpoint":1024,url:t.base_url+"/api/issues",data:t.issues},on:{loading:function(e){t.isLoading=!0},finishedLoading:function(e){t.isLoading=!1}}}),t._v(" "),r("loading",{attrs:{"is-full-page":!0,active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}})],1)}),[],!1,null,null,null);e.default=p.exports},5:function(t,e,r){"use strict";var n={props:{data:{},name:{},click:{type:Function,default:function(){}},classes:{type:Object,default:{btn:!0,"btn-blue":!0,"bg-blue-500":!0,"hover:bg-blue-700":!0,"py-2":!0,"text-white":!0,"font-bold":!0,"px-4":!0,rounded:!0,"float-right":!0}}}},a=r(0),s=Object(a.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{class:t.classes,attrs:{title:"Update"},on:{click:function(e){return t.click(t.data)}}},[t._m(0),t._v("\n    Edit\n")])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-eye",attrs:{"aria-hidden":"true"}})])}],!1,null,null,null);e.a=s.exports}}]);