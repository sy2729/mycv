(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"3c09":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._v("\n    404 / not found\n    "),r("router-link",{attrs:{to:"/"}},[t._v("Go back to the Home Page")])],1)},i=[],n=r("2877"),s={},o=Object(n["a"])(s,a,i,!1,null,null,null);o.options.__file="notFound.vue";e["default"]=o.exports},4919:function(t,e,r){"use strict";var a=r("cbdd"),i=r.n(a);i.a},5231:function(t,e,r){"use strict";var a=r("d804"),i=r.n(a);i.a},"54af":function(t,e,r){"use strict";var a=r("faf0"),i=r.n(a);i.a},"54f2":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("cv-button",{attrs:{"current-language":t.currentLanguage,"cv-path":t.cvData.cvPath}}),r("v-header",{attrs:{"header-data":t.cvData.header,"current-language":t.currentLanguage}}),r("skill-section",{attrs:{"skill-data":t.cvData.skills}}),r("badge-band"),r("experience-section",{attrs:{"experience-data":t.cvData.experiences}}),r("education-section",{attrs:{"education-data":t.cvData.educations}}),r("work-section",{attrs:{l:"",worktypes:t.workTypes,"work-data":t.cvData.works}}),r("v-footer")],1)},i=[],n=r("cebc"),s=(r("cadf"),r("551c"),r("f751"),r("097d"),r("11d5"),r("1dfe")),o=r("667c"),c=r("c0a2"),l=r("f562"),u=r("402c"),d=r("4060"),k=r("1d65"),f=r("9ea6"),p=r("2f62"),v={name:"home",data:function(){return{}},methods:{},computed:Object(n["a"])({},Object(p["b"])(["cvData","currentLanguage","workTypes"])),components:{vHeader:s["a"],skillSection:o["a"],badgeBand:c["a"],experienceSection:l["a"],educationSection:u["a"],workSection:d["a"],vFooter:k["a"],cvButton:f["a"]},created:function(){this.$route.path;void 0===this.cvData.works&&this.$store.dispatch("judgeSystemLanguage",this.$route.path)}},h=v,g=(r("54af"),r("2877")),w=Object(g["a"])(h,a,i,!1,null,"759a21fb",null);w.options.__file="PM.vue";e["default"]=w.exports},"77af":function(t,e,r){"use strict";r.r(e);var a,i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"detail",staticClass:"work-detail flex relative",on:{click:t.clearFocus}},[t.focusedImage?r("div",{staticClass:"bg-cover fixed"},[r("div",{staticClass:"focused-content"},[r("img",{attrs:{src:t.focusedImage,alt:t.focusedImage}})])]):t._e(),r("section",{staticClass:"current-content-wrap"},[r("div",{staticClass:"title-wrap relative"},[r("h2",{staticClass:"title"},[t._v(t._s(t.currentWork.name))]),r("span",{staticClass:"t-color current-work-type absolute"},[t._v(t._s(t.currentWork.type))]),"web"===t.currentWork.type?r("div",{staticClass:"work-link-wrap"},[r("a",{class:["link-preview",{disabled:""===t.currentWork.link.preview}],attrs:{target:"_blank",href:t.currentWork.link.preview?t.currentWork.link.preview:"javascript:;",title:"preivew"}},[t._m(0)]),r("a",{class:[{disabled:""===t.currentWork.link.repo}],attrs:{target:"_blank",href:t.currentWork.link.repo?t.currentWork.link.repo:"javascript:;",title:"repo"}},[t._m(1)])]):t._e(),"video"===t.currentWork.type?r("div",{staticClass:"work-link-wrap"},[r("a",{class:["link-preview",{disabled:""===t.currentWork.youtubeID}],attrs:{target:"_blank",href:t.currentWork.youtubeID?t.currentWork.link.youtube:"javascript:;",title:"YouTube - Worldwide Audience"}},[t._m(2)]),r("a",{class:[{disabled:""===t.currentWork.biliID}],attrs:{target:"_blank",href:t.currentWork.biliID?t.currentWork.link.bili:"javascript:;",title:"bilibili - Chinese Audience"}},[t._m(3)])]):t._e(),r("ul",{staticClass:"tags flex flex-wrap"},t._l(t.currentWork.tags,function(e,a){return r("li",{key:a},[t._v(t._s(e))])}))]),r("div",{staticClass:"work-content"},[t._l(t.currentWork.descrip,function(e){return r("div",{key:e.content,class:[{"each-descrip-img":"img"===e.type},{"work-videoWrapper":"video"===e.type}]},[r("transition",{attrs:{name:"show-content"}},["video"===e.type&&"en"===t.currentLanguage&&""!==t.currentWork.youtubeID?r("iframe",{attrs:{src:e.content.youtube,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}):t._e(),"video"===e.type&&"zh"===t.currentLanguage&&""!==t.currentWork.biliID?r("iframe",{attrs:{src:e.content.bili,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}):t._e()]),"img"===e.type?r("img-loader",{attrs:{img:e.content},nativeOn:{click:function(r){r.stopPropagation(),t.viewLargePicture(e)}}}):t._e(),"text"===e.type?r("p",{domProps:{innerHTML:t._s(e.content)}}):t._e()],1)}),"video"!==t.currentWork.type||"zh"!==t.currentLanguage||t.currentWork.biliID?t._e():r("p",{staticClass:"t-warning"},[t._v("!No Bilibili Video Available, please choose other sources")]),"video"!==t.currentWork.type||"en"!==t.currentLanguage||t.currentWork.youtubeID?t._e():r("p",{staticClass:"t-warning"},[t._v("No YouTube Video Available, please choose other sources")]),"video"===t.currentWork.type?r("div",{staticClass:"video-source-wrap"},[r("p",[t._v("Choose the video source based on your country:")]),r("span",{class:[{active:"en"===t.currentLanguage},{"no-available":!t.currentWork.youtubeID}],on:{click:function(e){t.changeVideo("en")}}},[t._v("YouTube")]),r("span",{class:[{active:"zh"===t.currentLanguage},{"no-available":!t.currentWork.biliID}],on:{click:function(e){t.changeVideo("zh")}}},[t._v("BiliBili")])]):t._e()],2)]),r("side-bar-in-work-detail",{attrs:{allwork:t.allWorks,currentId:t.currentWork.id,worktypes:t.workTypes},on:{"switch-work-detail":t.switchWork}}),r("router-link",{attrs:{to:"/"}},[r("div",{staticClass:"close"},[r("span",[r("i",{staticClass:"fa fa-times"})])])])],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("i",{staticClass:"fa fa-eye"}),t._v("preview")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("i",{staticClass:"fa fa-github"}),t._v("repo")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("i",{staticClass:"fa fa-youtube"})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("i",{staticClass:"iconfont"},[t._v("")])])}],s=r("cebc"),o=(r("cadf"),r("551c"),r("f751"),r("097d"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",{staticClass:"sideBar"},[r("switch-type",{attrs:{types:t.worktypes},on:{"switch-type":t.switchType}}),r("ul",t._l(t.filteredWorks,function(e){return r("router-link",{key:e.id,staticClass:"sidebar-list-link",attrs:{to:"/work?id="+e.id}},[r("li",{class:{"header-bar":e.id===t.currentId},attrs:{"data-id":e.id},on:{click:function(r){t.switchWork(e.id)}}},[r("span",{staticClass:"li-name"},[t._v(t._s(e.name))]),r("span",{staticClass:"li-tag"},[t._v(t._s(e.type))])])])}))],1)}),c=[],l=r("bd86"),u=r("f8cf"),d=(a={name:"sideBarInWorkDetail",data:function(){return{initWorkType:"web",filteredWorks:[],works:[]}},props:["worktypes","allwork"],methods:{switchWork:function(t){var e=this;this.filteredWorks.map(function(r){t===r.id&&e.$emit("switch-work-detail",r)})},switchType:function(t){if("all"===t.toLowerCase())this.filteredWorks=this.works;else{var e=this.works.filter(function(e){if(e.type.toLowerCase()===t.toLowerCase())return e});this.filteredWorks=e}}}},Object(l["a"])(a,"props",["allwork","currentId","worktypes"]),Object(l["a"])(a,"beforeMount",function(){this.works=this.$props.allwork,this.filteredWorks=this.works,this.switchType(this.initWorkType)}),Object(l["a"])(a,"watch",{allwork:function(t){this.works=this.$props.allwork,this.filteredWorks=this.works}}),Object(l["a"])(a,"components",{switchType:u["a"]}),a),k=d,f=(r("5231"),r("2877")),p=Object(f["a"])(k,o,c,!1,null,null,null);p.options.__file="side-bar-in-work-detail.vue";var v=p.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"image-loader"},[r("img",{attrs:{src:t.placeholder,alt:"Descriptive Image"}}),t.loading?r("p",{staticClass:"loading-text"},[t._v("image loading...")]):t._e()])},g=[],w={props:{img:{type:String,required:!0}},data:function(){return{placeholder:"https://res.cloudinary.com/shuaiyuan/image/upload/v1548391627/cv-img/logo-animation.gif",loading:!0}},beforeMount:function(){var t=this,e=document.createElement("img");e.src=this.img,e.onload=function(){t.placeholder=t.img,t.loading=!1}}},b=w,_=(r("4919"),Object(f["a"])(b,h,g,!1,null,"36e67432",null));_.options.__file="img-loader.vue";var m=_.exports,W=r("2f62"),y={name:"workDetail",data:function(){return{currentWork:{},allWorks:[],currentWorkId:void 0,focusedImage:void 0}},computed:Object(s["a"])({},Object(W["b"])(["cvData","workTypes"]),{currentLanguage:{set:function(t){this.$store.state.currentLanguage=t},get:function(t){return this.$store.state.currentLanguage}}}),watch:{cvData:function(t){this.allWorks=this.$store.getters.cvData.works.allWorks,this.currentWork=this.$store.getters.cvData.works.allWorks[this.currentWorkId]},$route:function(t,e){var r=this;this.getId();var a=this.$store.getters.cvData.works.allWorks;a=a.filter(function(t){return t.id===r.currentWorkId-0}),this.currentWork=a[0]}},components:{"side-bar-in-work-detail":v,imgLoader:m},methods:{switchWork:function(t){this.currentWork=t,window.scrollTo(0,0)},changeVideo:function(t){"en"===t&&"en"!==this.currentLanguage?this.currentLanguage="en":"zh"===t&&"zh"!==this.currentLanguage&&(this.currentLanguage="zh")},getId:function(){this.currentWorkId=this.$route.query.id},viewLargePicture:function(t){this.focusedImage=t.content},clearFocus:function(){this.focusedImage=void 0}},beforeMount:function(){var t=this;this.getId();var e="dev";if(void 0===this.cvData.works)this.$store.dispatch("judgeSystemLanguage",e);else{this.allWorks=this.cvData.works.allWorks;var r=this.allWorks.filter(function(e){return e.id===t.currentWorkId-0});this.currentWork=r[0]}}},C=y,I=(r("b86e"),Object(f["a"])(C,i,n,!1,null,"1d603fe8",null));I.options.__file="work-detail.vue";e["default"]=I.exports},b86e:function(t,e,r){"use strict";var a=r("d0fe"),i=r.n(a);i.a},cbdd:function(t,e,r){},d0fe:function(t,e,r){},d804:function(t,e,r){},faf0:function(t,e,r){}}]);
//# sourceMappingURL=about.547d4a17.js.map