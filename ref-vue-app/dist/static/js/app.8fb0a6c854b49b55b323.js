webpackJsonp([0],{"6p1d":function(n,t){},NHnr:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=i("7+uW"),s={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-link",{attrs:{to:{name:"Main"},links:this.links}},[this._v("Main")]),this._v(" "),t("router-link",{attrs:{to:"/landing"}},[this._v("Landing")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var o=i("VU/8")({name:"App",components:{},data:function(){return{links:[{link:"Spartans",count:0},{link:"Wolverines",count:0},{link:"Green Wave",count:0}]}}},s,!1,function(n){i("f/mt")},null,null).exports,a=i("/ocq"),l={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"form"},[i("label",[n._v("Add a Link")]),n._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:n.link,expression:"link"}],attrs:{type:"text"},domProps:{value:n.link},on:{input:function(t){t.target.composing||(n.link=t.target.value)}}}),n._v(" "),i("button",{on:{click:n.sendForm}},[n._v("Add")])])},staticRenderFns:[]};var r=i("VU/8")({data:function(){return{link:""}},components:{},methods:{sendForm:function(){if(this.link.length>0){var n=this.link;this.$emit("createLink",{link:n,count:0}),this.link=""}}}},l,!1,function(n){i("Y8py")},null,null).exports,u={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("li",{staticClass:"ref-link"},[n.isEditing?n._e():i("p",{on:{click:function(t){n.updateInfo(n.link)}}},[i("span",[n._v(n._s(n.link.link))])]),n._v(" "),n.isEditing?i("input",{directives:[{name:"model",rawName:"v-model",value:n.link.link,expression:"link.link"}],attrs:{type:"text"},domProps:{value:n.link.link},on:{input:function(t){t.target.composing||n.$set(n.link,"link",t.target.value)}}}):n._e(),n._v(" "),i("span",{on:{click:function(t){n.link.count++}}},[n._v(n._s(n.link.count))]),n._v(" "),n.isEditing?n._e():i("button",{on:{click:n.showForm}},[n._v("Edit")]),n._v(" "),n.isEditing?i("button",{on:{click:n.hideForm}},[n._v("Save")]):n._e(),n._v(" "),i("button",{on:{click:function(t){n.deleteLink(n.link)}}},[n._v("Delete")])])},staticRenderFns:[]};var c={props:["links"],data:function(){return{}},components:{RefLink:i("VU/8")({props:["link"],data:function(){return{isEditing:!1}},components:{},methods:{showForm:function(){this.isEditing=!0},hideForm:function(){this.isEditing=!1},deleteLink:function(n){this.$emit("deleteLink",n)},updateInfo:function(n){this.$emit("updateInfo",n)}}},u,!1,function(n){i("YV+j")},null,null).exports},methods:{deleteLink:function(n){var t=this.links.indexOf(n);this.links.splice(t,1)},updateInfo:function(n){var t=this.links.indexOf(n);this.links[t].count=n.count,this.updateMain(this.links)},updateMain:function(n){this.$emit("updateMain",n)}}},d={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"ref-list"},[i("ul",n._l(n.links,function(t){return i("RefLink",{attrs:{link:t},on:{deleteLink:n.deleteLink,updateInfo:function(i){n.updateInfo(t)},"update:link":function(n){t=n}}})}))])},staticRenderFns:[]};var p={components:{RefList:i("VU/8")(c,d,!1,function(n){i("6p1d")},null,null).exports,Form:r},data:function(){return{links:[{link:"Spartans",count:0},{link:"Wolverines",count:0},{link:"Green Wave",count:0}]}},props:["mainLinks"],methods:{createLink:function(n){this.links.push(n)},updateMain:function(n){this.links=n,console.log(this.links)}}},k={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"main"},[i("h1",[n._v("Grow the Web with Refferals!")]),n._v(" "),i("Form",{on:{createLink:n.createLink}}),n._v(" "),i("RefList",{attrs:{links:n.links},on:{updateMain:function(t){n.updateMain(n.links)}}})],1)},staticRenderFns:[]};var f=i("VU/8")(p,k,!1,function(n){i("w69O")},null,null).exports,v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"landing"},[t("p",[this._v("This is the Landing page")])])}]};var m=i("VU/8")({data:function(){return{}},components:{}},v,!1,function(n){i("QRkn")},null,null).exports;e.a.use(a.a);var h=new a.a({routes:[{path:"/",name:"Main",component:f},{path:"/landing",name:"Landing",component:m}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:h,components:{App:o},template:"<App/>"})},QRkn:function(n,t){},Y8py:function(n,t){},"YV+j":function(n,t){},"f/mt":function(n,t){},w69O:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.8fb0a6c854b49b55b323.js.map