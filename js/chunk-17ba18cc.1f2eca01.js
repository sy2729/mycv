(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17ba18cc"],{"4d6c":function(t,e,n){},8825:function(t,e,n){var a={"./en.json":["e312","chunk-2d225005"],"./zh.json":["799d","chunk-2d0d7ea3"]};function o(t){var e=a[t];return e?n.e(e[1]).then(function(){var t=e[0];return n.t(t,3)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}o.keys=function(){return Object.keys(a)},o.id="8825",t.exports=o},"961b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"component-wrap p-t-3 p-b-3"},[n("div",{staticClass:"comment-wrap"},[n("h2",[t._v(t._s(t.langSet.commentBoard))]),0===t.comments.length?n("div",{staticClass:"loadng relative"},[t._v("\n      loading...\n    ")]):n("div",{staticClass:"comments"},[n("ul",[t._l(t.comments,function(e){return n("li",{key:e._id,staticClass:"each-comment relative m-1 p-1"},[n("p",[n("span",{staticClass:"m-r-1 name"},[t._v(t._s(e.name))])]),n("p",{staticClass:"time"},[t._v(t._s(t.timeConvert(e.created)))]),n("p",{staticClass:"m-t-1"},[t._v("\n            "+t._s(e.content)+"\n          ")])])}),n("li",{class:["each-comment","relative","m-1","p-1","pointer","loadMsgPrompt",{time:t.langSet.loadMoreMsg===t.langSet.loadMoreMsgEnd}],on:{click:t.loadMore}},[t._v("\n          "+t._s(t.langSet.loadMoreMsg)+"\n        ")])],2)]),t.formShow?t._e():n("button",{staticClass:"reveal-button m-t-1 m-b-3",on:{click:t.showForm}},[t._v(t._s(t.langSet.commentPromptButton))]),t.formShow?n("form",{ref:"form",staticClass:"comment-form m-t-3",on:{submit:t.submitComment}},[n("div",[n("label",{attrs:{for:"name"}},[n("input",{staticClass:"m-r-1 m-t-1",attrs:{name:"name",type:"text",placeholder:t.langSet.namePlaceholder}})]),n("label",{attrs:{for:"email"}},[n("input",{staticClass:"m-t-1",attrs:{name:"email",type:"text",placeholder:t.langSet.emailPlaceholder}})])]),n("div",[n("textarea",{staticClass:"m-t-1",attrs:{name:"content",id:"",cols:"30",rows:"10",placeholder:t.langSet.contentPlaceholder}})]),n("div",{staticClass:"flex flex-wrap"},[n("input",{staticClass:"m-r-1 m-t-1",attrs:{type:"text",name:"code",placeholder:t.langSet.codePlaceholder}}),n("div",{staticClass:"code pointer m-t-1",domProps:{innerHTML:t._s(t.code)},on:{click:t.fillCode}})]),n("input",{staticClass:"m-t-1",attrs:{type:"submit"},domProps:{value:t.langSet.submit}})]):t._e(),t._m(0)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"white "},[n("p",{staticClass:"relative comment-bottom-mark p-t-1"},[t._v("(Partially) Designed and Coded by Shuai Yuan with 💗")])])}],s=n("365c"),r=n("c1df"),l=n.n(r),i=(n("d3bf"),{data(){return{formShow:!1,limit:7,currentPage:0,comments:[],code:null,langSet:{}}},props:["currentLanguage"],watch:{currentLanguage(t,e){console.log(t),this.importLangSet(t)}},created(){Object(s["d"])({from:this.currentPage,num:this.limit}).then(t=>{this.comments=t}),this.importLangSet(this.$props.currentLanguage)},methods:{timeConvert(t){return l()(new Date(t)).format("MMMM Do YYYY, h:mm:ss a")},submitComment(t){t.preventDefault();let e=this.$refs.form,n=e.content.value,a=e.name.value,o=e.email.value,r=e.code.value;n&&a&&o&&r&&Object(s["f"])({name:a,email:o,content:n,code:r}).then(t=>{0===t.code?(this.fillCode(),this.$notify({group:"foo",type:"error",title:"Error",text:t.msg})):(this.comments.push(t),this.clearForm())}).catch(t=>{console.log("error"),console.log(t)})},clearForm(){let t=this.$refs.form;t.content.value="",t.name.value="",t.email.value="",this.formShow=!1},showForm(){this.formShow=!0,this.fillCode()},fillCode(){Object(s["c"])().then(t=>{this.code=t})},loadMore(){this.currentPage+=1*this.limit,Object(s["d"])({from:this.currentPage,num:this.limit}).then(t=>{t.length>0?t.forEach(t=>{this.comments.push(t)}):this.langSet.loadMoreMsg=this.langSet.loadMoreMsgEnd}).catch(t=>{this.$notify({group:"foo",type:"error",title:"Error",text:"something wrong happened"})})},importLangSet(t){n("8825")(`./${t}.json`).then(t=>{this.langSet=Object.assign({},this.langSet,t)})}}}),c=i,m=(n("c620"),n("2877")),d=Object(m["a"])(c,a,o,!1,null,"76c46f08",null);e["default"]=d.exports},c620:function(t,e,n){"use strict";var a=n("4d6c"),o=n.n(a);o.a},d3bf:function(t,e,n){}}]);
//# sourceMappingURL=chunk-17ba18cc.1f2eca01.js.map