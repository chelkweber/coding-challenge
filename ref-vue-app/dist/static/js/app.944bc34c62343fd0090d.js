webpackJsonp([0],{"6t6s":function(n,t){},NHnr:function(n,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=i("7+uW"),s={name:"App",components:{},data:function(){return{linkName:""}},methods:{sendToLandingPage:function(n){this.linkName=n,console.log(this.linkName)}}},a={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-link",{attrs:{to:{name:"Main"}}},[this._v("Main")]),this._v(" "),t("router-link",{attrs:{to:"/landing"}},[this._v("Landing")]),this._v(" "),t("router-view",{attrs:{linkName:this.linkName},on:{sendToLandingPage:this.sendToLandingPage}})],1)},staticRenderFns:[]};var o=i("VU/8")(s,a,!1,function(n){i("OP9d")},null,null).exports,l=i("/ocq"),r={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"form"},[i("label",[n._v("Add a Link")]),n._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:n.link,expression:"link"}],attrs:{type:"text"},domProps:{value:n.link},on:{input:function(t){t.target.composing||(n.link=t.target.value)}}}),n._v(" "),i("button",{on:{click:n.sendForm}},[n._v("Add")])])},staticRenderFns:[]};var c=i("VU/8")({data:function(){return{link:""}},components:{},methods:{sendForm:function(){if(this.link.length>0){var n=this.link;this.$emit("createLink",{link:n,count:0}),this.link=""}}}},r,!1,function(n){i("Y8py")},null,null).exports,u={props:["link"],data:function(){return{isEditing:!1}},components:{},methods:{showForm:function(){this.isEditing=!0},hideForm:function(){this.isEditing=!1},deleteLink:function(n){this.$emit("deleteLink",n)},sendToLandingPage:function(n){this.$emit("sendToLandingPage",n),console.log(n)}}},d={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("li",{staticClass:"ref-link"},[n.isEditing?n._e():i("p",{on:{click:function(t){n.sendToLandingPage(n.link.link),n.link.count++}}},[i("router-link",{attrs:{to:"/landing",target:"_blank"},on:{click:function(t){n.link.count++}}},[n._v(n._s(n.link.link))])],1),n._v(" "),n.isEditing?i("input",{directives:[{name:"model",rawName:"v-model",value:n.link.link,expression:"link.link"}],attrs:{type:"text"},domProps:{value:n.link.link},on:{input:function(t){t.target.composing||n.$set(n.link,"link",t.target.value)}}}):n._e(),n._v(" "),i("span",[n._v(n._s(n.link.count))]),n._v(" "),n.isEditing?n._e():i("button",{on:{click:n.showForm}},[n._v("Edit")]),n._v(" "),n.isEditing?i("button",{on:{click:n.hideForm}},[n._v("Save")]):n._e(),n._v(" "),i("button",{on:{click:function(t){n.deleteLink(n.link)}}},[n._v("Delete")])])},staticRenderFns:[]};var k={props:["links"],data:function(){return{}},components:{RefLink:i("VU/8")(u,d,!1,function(n){i("u9u8")},null,null).exports},methods:{deleteLink:function(n){var t=this.links.indexOf(n);this.links.splice(t,1)},updateInfo:function(n){var t=this.links.indexOf(n);this.links[t].count=n.count,this.updateMain(this.links)},sendToLandingPage:function(n){this.$emit("sendToLandingPage",n)}}},v={render:function(){var n=this,t=n.$createElement,i=n._self._c||t;return i("div",{staticClass:"ref-list"},[n._m(0),n._v(" "),i("ul",n._l(n.links,function(t){return i("RefLink",{attrs:{link:t},on:{deleteLink:n.deleteLink,sendToLandingPage:n.sendToLandingPage,"update:link":function(n){t=n}}})}))])},staticRenderFns:[function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"labels"},[t("p",{staticClass:"title"},[this._v("Link Title")]),this._v(" "),t("p",{staticClass:"clicks"},[this._v("Clicks")]),this._v(" "),t("p",{staticClass:"edit"},[this._v("Edit")]),this._v(" "),t("p",{staticClass:"delete"},[this._v("Delete")])])}]};var h={components:{RefList:i("VU/8")(k,v,!1,function(n){i("X4eN")},null,null).exports,Form:c},data:function(){return{links:[{link:"Spartans",count:0},{link:"Wolverines",count:0},{link:"Green Wave",count:0}]}},props:["mainLinks"],methods:{createLink:function(n){this.links.push(n)},sendToLandingPage:function(n){console.log(n+"main"),this.$emit("sendToLandingPage",n)}}},p={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"main"},[t("h1",[this._v("Grow the Web with Refferals!")]),this._v(" "),t("Form",{on:{createLink:this.createLink}}),this._v(" "),t("RefList",{attrs:{links:this.links},on:{sendToLandingPage:this.sendToLandingPage}})],1)},staticRenderFns:[]};var f=i("VU/8")(h,p,!1,function(n){i("6t6s")},null,null).exports,m={render:function(){var n=this.$createElement,t=this._self._c||n;return t("div",{staticClass:"landing"},[t("p",[this._v("Welcome "+this._s(this.linkName))])])},staticRenderFns:[]};var _=i("VU/8")({props:["linkName"],data:function(){return{}},components:{}},m,!1,function(n){i("rnZw")},null,null).exports;e.a.use(l.a);var g=new l.a({routes:[{path:"/",name:"Main",component:f},{path:"/landing",name:"Landing",component:_}]});e.a.config.productionTip=!1,new e.a({el:"#app",router:g,components:{App:o},template:"<App/>"})},OP9d:function(n,t){},X4eN:function(n,t){},Y8py:function(n,t){},rnZw:function(n,t){},u9u8:function(n,t){}},["NHnr"]);
//# sourceMappingURL=app.944bc34c62343fd0090d.js.map