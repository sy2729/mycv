(function(e){function t(t){for(var a,i,r=t[0],c=t[1],l=t[2],u=0,d=[];u<r.length;u++)i=r[u],s[i]&&d.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var r=n[i];0!==s[r]&&(a=!1)}a&&(o.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},s={app:0},o=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fe63fe8e","chunk-075cbd9a":"317f8a89","chunk-2d0a3933":"ee701844","chunk-2d0b653b":"0b971359","chunk-2d0b90a2":"88a96bed","chunk-2d0ba09c":"43ac2c74","chunk-2d0e523a":"82efaed2","chunk-2d216245":"73ac6fe0","chunk-2d2291e3":"97eeb671","chunk-2d2371df":"4fd61882","chunk-5c70ff9c":"a4be7eb5","chunk-6b9e0f29":"382afd44","chunk-6e65ebcb":"5eaa6622"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={about:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var a="css/"+({about:"about"}[e]||e)+"."+{about:"b42997f9","chunk-075cbd9a":"31d6cfe0","chunk-2d0a3933":"31d6cfe0","chunk-2d0b653b":"31d6cfe0","chunk-2d0b90a2":"31d6cfe0","chunk-2d0ba09c":"31d6cfe0","chunk-2d0e523a":"31d6cfe0","chunk-2d216245":"31d6cfe0","chunk-2d2291e3":"31d6cfe0","chunk-2d2371df":"31d6cfe0","chunk-5c70ff9c":"31d6cfe0","chunk-6b9e0f29":"31d6cfe0","chunk-6e65ebcb":"31d6cfe0"}[e]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var r=s[o],l=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(l===a||l===i))return t()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){r=u[o],l=r.getAttribute("data-href");if(l===a||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.request=a,n(s)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){i[e]=0}));var a=s[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=s[e]=[t,n]});t.push(a[2]=o);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=r(e),l=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}s[e]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0592":function(e,t,n){"use strict";var a=n("24de"),i=n.n(a);i.a},"0d8b":function(e,t,n){"use strict";var a=n("7a59"),i=n.n(a);i.a},"11d5":function(e,t,n){},"1d65":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{style:{background:e.sectionColor}},[n("div",{staticClass:"footer-content"},[n("p",[e._v("Get in touch with me!"),n("a",{attrs:{href:"mailto:"+e.email}},[e._v("Click Here")])])]),n("div",{staticClass:"footer-footer"},[n("ul",{staticClass:"social-media"},e._l(e.media,function(t,a){return n("li",{key:a},[n("a",{attrs:{target:"_blank",href:t.link}},[e._v(e._s(t.name))])])})),n("img",{attrs:{src:e.logoImg}}),n("p",{staticClass:"creat-stamp"},[e._v("© 2018 Made in China")]),n("div",{staticClass:"credit-sign",on:{click:e.openCredit}},[e._v("?")]),n("transition",{attrs:{name:"jump"}},[e.creditOpened?n("credit-widget",{on:{closeWidget:e.closeWidget}}):e._e()],1)],1)])},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"credit-wrap"},[e._m(0),n("div",{staticClass:"close",on:{click:function(t){e.$emit("closeWidget")}}},[e._v("X")])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",[e._v("Credit to "),n("a",{attrs:{target:"_blank",href:"https://dribbble.com/shots/3569588-Personal-CV"}},[e._v(" Jenia Stratila's")]),e._v(" Design on "),n("a",{attrs:{target:"_blank",href:"https://dribbble.com"}},[e._v("Dribbble")])])}],r={name:"creditWidget"},c=r,l=(n("5466"),n("2877")),u=Object(l["a"])(c,s,o,!1,null,"37d2b0be",null);u.options.__file="credit-widget.vue";var d=u.exports,f={name:"vFooter",data:function(){return{sectionColor:"#202020",email:"sy2729@tc.columbia.edu",logoImg:"./img/logo.png",media:[{name:"Blog",link:"https://sy2729.github.io/"},{name:"Github",link:"https://github.com/sy2729"}],creditOpened:!1}},methods:{openCredit:function(){this.creditOpened=!0},closeWidget:function(){this.creditOpened=!1}},components:{creditWidget:d}},h=f,p=(n("7000"),Object(l["a"])(h,a,i,!1,null,"3ff64c94",null));p.options.__file="v-footer.vue";t["a"]=p.exports},"1dfe":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header",style:{backgroundImage:"url("+e.bgUrl+")"}},[n("cv-nav",{on:{"choose-to-view":e.headerSelect}}),n("div",{ref:"titleWrap",staticClass:"title-wrap"},[e.header.target?n("h4",{staticClass:"subtitle"},[e._v("\n                尊敬的"),n("span",{staticClass:"subtitle subtitle-target"},[e._v(e._s(e.header.target))]),e._v("面试官您好，我是\n            ")]):n("h4",{staticClass:"subtitle"},[e._v(e._s(e.header.greeting||"nihao"))]),n("h1",{staticClass:"title"},[e._v(e._s(e.header.name||"Wait Please"))]),n("div",{ref:"arrow",staticClass:"arrow-wrap",on:{click:e.arrowScroll}},[n("i",{staticClass:"fa fa-arrow-down"})])]),n("div",{staticClass:"language-switch"},[n("span",{class:["option",{active:"en"===e.currentLanguage}],on:{click:function(t){e.switchLang("en")}}},[e._v("En")]),n("span",[e._v("／")]),n("span",{class:["option",{active:"zh"===e.currentLanguage}],on:{click:function(t){e.switchLang("zh")}}},[e._v("中")])])],1)},i=[],s=(n("7f7f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("img",{attrs:{src:e.logoImg}}),n("ul",{staticClass:"nav-options"},e._l(e.navList,function(t){return n("li",{key:t.name,on:{click:function(n){e.chooseToView(t.name)}}},[e._v(e._s(t.name))])}))])}),o=[],r={data:function(){return{logoImg:"./img/logo.png",navList:[{name:"Web"},{name:"Video"},{name:"Design"},{name:"Blog"}]}},methods:{chooseToView:function(e){this.$emit(e)}}},c=r,l=(n("ccb9"),n("2877")),u=Object(l["a"])(c,s,o,!1,null,"f1f87e90",null);u.options.__file="v-nav.vue";var d=u.exports,f=n("9611"),h={data:function(){return{bgUrl:"./img/bg-blur.jpg",bgUrlClear:"./img/bg-clear.jpg",header:{}}},props:["currentLanguage","headerData"],methods:{scrollTo:function(e,t){var n,a=document.documentElement.scrollTop||document.body.scrollTop,i=e-a>0?1:-1,s=Math.abs(e-a),o=s/50;e!==a&&(t=t||1e3,o*=i,n=setInterval(function(){a+=o,s-=Math.abs(o),0>=s?(window.scrollTo(0,e),clearInterval(n),n=null):window.scrollTo(0,a)},t/100))},arrowScroll:function(){var e=document.querySelector(".skill-section").offsetTop;this.scrollTo(e,20)},myCallback:function(){this.$refs.arrow.classList.add("active")},loadText:function(){this.$refs.titleWrap.classList.add("active")},headerSelect:function(e){var t=document.querySelector(".work-section").offsetTop;this.scrollTo(t,500)},switchLang:function(e){var t=this.$route.path;t=t.length<=1?this.$route.name:this.$route.path,"en"===e&&"en"!==this.$props.currentLanguage?this.$store.dispatch("switchLanguage",{route_name:t,language:e}):"zh"===e&&"zh"!==this.$props.currentLanguage&&this.$store.dispatch("switchLanguage",{route_name:t,language:e})}},components:{cvNav:d},mounted:function(){ScrollReveal().reveal(".arrow-wrap",{afterReveal:this.myCallback}),this.loadText(),this.$props.headerData&&(this.header=this.$props.headerData)},watch:{headerData:function(){this.header=this.$props.headerData}},mixins:[f["a"]],created:function(){this.run(this.bgUrl,this.bgUrlClear,"bgUrl")}},p=h,v=(n("8641"),Object(l["a"])(p,a,i,!1,null,"3056fe9f",null));v.options.__file="v-header.vue";t["a"]=v.exports},"24de":function(e,t,n){},"25e4":function(e,t,n){"use strict";var a=n("d66f"),i=n.n(a);i.a},"2ecd":function(e,t,n){var a={"./data_base_en.js":["3f91","chunk-5c70ff9c"],"./data_base_zh.js":["6763","chunk-6b9e0f29"],"./data_en.js":["c0ce","chunk-2d216245"],"./data_pm_aiqiyi_zh.js":["3603","chunk-2d0ba09c"],"./data_pm_bilibili_zh.js":["fa6d","chunk-2d2371df"],"./data_pm_byteDance_zh.js":["dba0","chunk-2d2291e3"],"./data_pm_chaoyouai_zh.js":["92e0","chunk-2d0e523a"],"./data_pm_en.js":["1cb6","chunk-6e65ebcb"],"./data_pm_mafengwo_en.js":["1d4f","chunk-2d0b653b"],"./data_pm_mafengwo_zh.js":["30f5","chunk-2d0b90a2"],"./data_pm_zh.js":["c054","chunk-075cbd9a"],"./data_zh.js":["0382","chunk-2d0a3933"]};function i(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}i.keys=function(){return Object.keys(a)},i.id="2ecd",e.exports=i},"402c":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"education-section each-section",style:{background:e.sectionColor}},[n("section-title",{attrs:{order:e.order,name:e.educations.sectionName}}),n("div",{staticClass:"section-content"},e._l(e.educations.allEducations,function(t,a){return n("each-education",e._b({key:a},"each-education",t,!1))}))],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["each-education",{active:e.activeState}]},[n("div",{staticClass:"school-info-wrap"},[n("div",{staticClass:"school-info-sub-wrap"},[n("p",{staticClass:"school"},[e._v(e._s(e.school))]),n("p",{staticClass:"major"},[e._v(e._s(e.major))])]),n("p",{staticClass:"degree"},[e._v(e._s(e.degree))])]),n("p",{staticClass:"education-date"},[n("span",[e._v(e._s(e.startDate))]),e._v("\n                -\n            "),n("span",[e._v(e._s(e.endDate))])])])},o=[],r={name:"eachEducation",props:["school","degree","major","startDate","endDate","activeState"]},c=r,l=(n("ceb2"),n("2877")),u=Object(l["a"])(c,s,o,!1,null,"f0711470",null);u.options.__file="each-education.vue";var d=u.exports,f=n("e2c3"),h={name:"educationSection",data:function(){return{sectionColor:"#fff",order:"03",sectionName:"Education",educations:[]}},props:["educationData"],components:{sectionTitle:f["a"],eachEducation:d},watch:{educationData:function(){this.educations=this.$props.educationData}},beforeMount:function(){this.$props.educationData&&(this.educations=this.$props.educationData)}},p=h,v=(n("5b48"),Object(l["a"])(p,a,i,!1,null,null,null));v.options.__file="education-section.vue";t["a"]=v.exports},4060:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["work-section","each-section",{full:"full"===e.mode}],style:{background:e.sectionColor}},[n("switch-type",{attrs:{types:e.worktypes},on:{"switch-type":e.switchType}}),n("section-title",{attrs:{order:e.order,name:e.works.sectionName}},[n("div",{staticClass:"expand-btn circle-btn flex justify-center align-center sticky",on:{click:e.changeMode}},[n("i",{class:["fa",{"fa-angle-down":"full"!==e.mode},{"fa-angle-up":"full"===e.mode}]})])]),n("div",{ref:"works",staticClass:"section-content"},e._l(e.filteredWorks.allWorks,function(t){return n("router-link",{key:t.id,attrs:{to:"/work?id="+t.id}},[n("each-work",e._b({},"each-work",t,!1))],1)})),"full"!==e.mode?n("button",{class:["next-btn","flex","absolute","justify-center","align-center","circle-btn",{deactive:e.scrollToEnd}],on:{click:e.scrollRight}},[n("i",{staticClass:"fa fa-angle-right"})]):e._e(),"full"!==e.mode?n("progress-bar",{attrs:{totalLength:e.allWorkLength,viewLength:e.viewLength,scrolledDistance:e.scrolledDistance}}):e._e()],1)},i=[],s=n("e2c3"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"each-work",style:{"background-image":"url("+e.presentImg+")"},on:{click:e.viewEachWork}},[n("div",{staticClass:"work-cover"},[n("div",{staticClass:"work-info-wrap"},[n("h3",{staticClass:"work-name"},[e._v(e._s(e.name))]),n("span",{staticClass:"current-type"},[n("i",{class:e.typeIconCode[e.type]})])])])])},r=[],c=n("9611"),l={name:"eachWork",props:["img","name","descrip","link","tags","id","type","youtubeID","biliID"],data:function(){return{typeIconCode:{web:"fa fa-code",video:"fa fa-play-circle",design:"fa fa-paint-brush"},presentImg:null}},methods:{viewEachWork:function(){var e=JSON.parse(JSON.stringify(this.$props));this.$emit("view-work-detail",e)},usePlaceholder:function(e){this.presentImg=e},imgLoaded:function(){this.presentImg=this.img}},mixins:[c["a"]],beforeMount:function(){this.run(void 0,this.img,"presentImg")}},u=l,d=(n("f9b5"),n("2877")),f=Object(d["a"])(u,o,r,!1,null,"6155686c",null);f.options.__file="each-work.vue";var h=f.exports,p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"progressBar",staticClass:"progress-out"},[n("div",{staticClass:"progress-in",style:{width:e.viewLength/e.totalLength*100+"%",left:e.scrolledDistance/e.totalLength*100+"%"}})])},v=[],m={name:"progressBar",props:["totalLength","viewLength","scrolledDistance"],data:function(){return{progressBarLength:0}},computed:{calcScrollDistance:function(){}},mounted:function(){var e=this.$refs.progressBar.getBoundingClientRect().width;this.progressBarLength=e}},g=m,b=(n("0592"),Object(d["a"])(g,p,v,!1,null,"27f6aa7b",null));b.options.__file="progress-bar.vue";var _=b.exports,k=n("f8cf"),w={name:"workSection",data:function(){return{initWorkType:"web",sectionColor:"#F5F5F5",order:"04",sectionName:"Portfolio",filteredWorks:[],works:[],allWorkLength:0,viewLength:20,scrolledDistance:0,scrollToEnd:!1,mode:"full"}},props:["worktypes","workData"],methods:{detectScrollDistance:function(){var e=this.getScrollDistance();this.scrolledDistance=this.initialDistanceBeforeScroll-e,this.detectScrollToEnd()},getScrollDistance:function(){return document.querySelectorAll(".each-work")[0].getBoundingClientRect().left},getInitialScrollDistance:function(){return document.querySelector(".section-content").getBoundingClientRect().left},getBarStyle:function(){var e=this.$refs.works.scrollWidth,t=this.$refs.works.getBoundingClientRect().width;this.viewLength=t,this.allWorkLength=e},scrollRight:function(){this.scrollHorizontal(this.$refs.works,this.$refs.works.scrollLeft+280,500),this.detectScrollToEnd()},detectScrollToEnd:function(){this.scrolledDistance+this.viewLength>=this.allWorkLength?this.scrollToEnd=!0:this.scrollToEnd=!1},viewWorkDetail:function(e){this.$emit("view-work-detail",e)},scrollHorizontal:function(e,t,n){var a,i=e.scrollLeft,s=t-i>0?1:-1,o=Math.abs(t-i),r=o/50;t!==i&&(n=n||1e3,r*=s,a=setInterval(function(){i+=r,o-=Math.abs(r),0>=o?(e.scrollLeft=t,clearInterval(a),a=null):e.scrollLeft=i},n/100))},switchType:function(e){if("all"===e.toLowerCase())this.filteredWorks=JSON.parse(JSON.stringify(this.works));else{var t=this.works.allWorks.filter(function(t){if(t.type.toLowerCase()===e.toLowerCase())return t});this.filteredWorks.allWorks=t}},shuffle:function(e){var t,n,a=e.length;while(a)n=Math.floor(Math.random()*a--),//!!!
t=e[a],e[a]=e[n],e[n]=t},loadData:function(){this.filteredWorks=JSON.parse(JSON.stringify(this.works)),this.switchType(this.initWorkType)},changeMode:function(){this.mode="full"===this.mode?"horizontal":"full"}},components:{sectionTitle:s["a"],eachWork:h,progressBar:_,switchType:k["a"]},mounted:function(){var e=this;this.$props.workData&&(this.works=this.$props.workData),this.getBarStyle(),this.$refs.works.onscroll=this.detectScrollDistance,this.initialDistanceBeforeScroll=this.getInitialScrollDistance(),window.addEventListener("resize",function(){e.getBarStyle(),e.initialDistanceBeforeScroll=e.getInitialScrollDistance()}),ScrollReveal().reveal(".work-section",{afterReveal:this.loadData})},updated:function(){this.getBarStyle(),this.detectScrollToEnd()},watch:{workData:function(){this.works=this.$props.workData,this.shuffle(this.works.allWorks),this.loadData()}}},y=w,C=(n("25e4"),Object(d["a"])(y,a,i,!1,null,null,null));C.options.__file="work-section.vue";t["a"]=C.exports},"44f3":function(e,t,n){"use strict";var a=n("d6f1"),i=n.n(a);i.a},4592:function(e,t,n){"use strict";var a=n("649c"),i=n.n(a);i.a},5466:function(e,t,n){"use strict";var a=n("a332"),i=n.n(a);i.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o={},r=o,c=(n("5c0b"),n("2877")),l=Object(c["a"])(r,i,s,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("v-header",{attrs:{"header-data":e.cvData.header,"current-language":e.currentLanguage}}),n("skill-section",{attrs:{"skill-data":e.cvData.skills}}),n("badge-band"),n("experience-section",{attrs:{"experience-data":e.cvData.experiences}}),n("education-section",{attrs:{"education-data":e.cvData.educations}}),n("work-section",{attrs:{l:"",worktypes:e.workTypes,"work-data":e.cvData.works}}),n("v-footer")],1)},h=[],p=n("c93e"),v=(n("11d5"),n("1dfe")),m=n("667c"),g=n("c0a2"),b=n("f562"),_=n("402c"),k=n("4060"),w=n("1d65"),y=n("2f62"),C={name:"home",data:function(){return{}},methods:{},computed:Object(p["a"])({},Object(y["b"])(["cvData","currentLanguage","workTypes"])),components:{vHeader:v["a"],skillSection:m["a"],badgeBand:g["a"],experienceSection:b["a"],educationSection:_["a"],workSection:k["a"],vFooter:w["a"]},created:function(){void 0===this.cvData.works&&this.$store.dispatch("judgeSystemLanguage","dev")}},D=C,S=Object(c["a"])(D,f,h,!1,null,null,null);S.options.__file="Home.vue";var x=S.exports;a["a"].use(d["a"]);var j=new d["a"]({routes:[{path:"/",name:"dev",component:x},{path:"/work",name:"work",component:function(){return n.e("about").then(n.bind(null,"77af"))}},{path:"/pm",name:"pm",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"/pm/mafengwo",name:"pm/mafengwo",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"/pm/aiqiyi",name:"pm/aiqiyi",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"/pm/byteDance",name:"pm/byteDance",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"/pm/bilibili",name:"pm/bilibili",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"/pm/chaoyouai",name:"pm/chaoyouai",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"*",name:"not-found",component:function(){return n.e("about").then(n.bind(null,"3c09"))}}]});n("ac6a"),n("28a5");a["a"].use(y["a"]);var $=new y["a"].Store({state:{workTypes:["web","design","video"],files:{dev:{zh:"data_zh",en:"data_en"},pm:{zh:"data_pm_zh",en:"data_pm_en",mafengwo:{zh:"data_pm_mafengwo_zh",en:"data_pm_mafengwo_en"},aiqiyi:{zh:"data_pm_aiqiyi_zh"},byteDance:{zh:"data_pm_byteDance_zh"},bilibili:{zh:"data_pm_bilibili_zh"},chaoyouai:{zh:"data_pm_chaoyouai_zh"}}},cvData:{},currentLanguage:void 0},getters:{cvData:function(e){return e.cvData}},mutations:{importData:function(e,t){var a=this;this.loopDataIn=function(e,t){for(var n in t.base)e.cvData[n]||(e.cvData[n]=t.base[n]);return e.cvData},"en"===this.state.currentLanguage?t.en?n("2ecd")("./".concat(t["en"],".js")).then(function(e){n.e("chunk-5c70ff9c").then(n.bind(null,"3f91")).then(function(t){a.state.cvData=a.loopDataIn(e,t)})}):(this.state.currentLanguage="zh",n("2ecd")("./".concat(t["zh"],".js")).then(function(e){n.e("chunk-6b9e0f29").then(n.bind(null,"6763")).then(function(t){a.state.cvData=a.loopDataIn(e,t)})})):t.zh?n("2ecd")("./".concat(t["zh"],".js")).then(function(e){n.e("chunk-6b9e0f29").then(n.bind(null,"6763")).then(function(t){a.state.cvData=a.loopDataIn(e,t)})}):(this.state.currentLanguage="en",n("2ecd")("./".concat(t["en"],".js")).then(function(e){n.e("chunk-5c70ff9c").then(n.bind(null,"3f91")).then(function(t){a.state.cvData=a.loopDataIn(e,t)})}))},analyseRoute:function(e,t){var n,a=t.split("/");a.length<=1?n=this.state.files[a[0]]:(a.shift(),n=this.state.files,a.forEach(function(e){n=n[e]})),this.state.fileContent=n}},actions:{judgeSystemLanguage:function(e,t){var n=navigator.appName;if("Netscape"==n)var a=navigator.language;else a=navigator.userLanguage;a=a.substr(0,2);this.state.currentLanguage="zh"==a?"zh":"en",e.commit("analyseRoute",t),e.commit("importData",this.state.fileContent)},switchLanguage:function(e,t){var n=t.language,a=t.route_name;this.state.currentLanguage=n,e.commit("analyseRoute",a),e.commit("importData",this.state.fileContent)}}});a["a"].config.productionTip=!1,new a["a"]({router:j,store:$,render:function(e){return e(u)}}).$mount("#app")},5889:function(e,t,n){"use strict";var a=n("70e7"),i=n.n(a);i.a},"5b48":function(e,t,n){"use strict";var a=n("7fcf"),i=n.n(a);i.a},"5c0b":function(e,t,n){"use strict";var a=n("c81e"),i=n.n(a);i.a},"5ed8":function(e,t,n){},"649c":function(e,t,n){},"667c":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"skill-section each-section",style:{background:e.sectionColor}},[n("section-title",{attrs:{order:e.order,name:e.skills.sectionName}}),n("div",{staticClass:"section-content"},[n("p",{staticClass:"content-description",domProps:{innerHTML:e._s(e.skills.description)}}),n("div",{class:["skill-wrap",{active:e.skillBarShort}]},e._l(e.skills.allSkills,function(t,a){return n("div",{key:a,staticClass:"each-skill"},[n("div",{staticClass:"bar-info-wrap"},[n("p",{staticClass:"skill-name"},[e._v(e._s(t.name))]),n("p",{staticClass:"skill-extent"},[e._v(e._s(t.extent)+"%")])]),n("div",{staticClass:"bar-outter"},[n("div",{staticClass:"bar-inner",style:{width:t.extent+"%"}})])])}))])],1)},i=[],s=n("e2c3"),o={name:"skillSection",props:["skillData"],data:function(){return{order:"01",sectionName:"Skills",sectionColor:"#C93639",skillBarShort:!0,skills:[]}},methods:{removeActive:function(){this.skillBarShort=!1}},watch:{skillData:function(){this.skills=this.$props.skillData}},mounted:function(){ScrollReveal().reveal(".skill-wrap",{afterReveal:this.removeActive}),this.$props.skillData&&(this.skills=this.$props.skillData)},components:{sectionTitle:s["a"]}},r=o,c=(n("f77e"),n("2877")),l=Object(c["a"])(r,a,i,!1,null,"d791ece0",null);l.options.__file="skill-section.vue";t["a"]=l.exports},"69d0":function(e,t,n){},7000:function(e,t,n){"use strict";var a=n("c473"),i=n.n(a);i.a},"701d":function(e,t,n){},"70e7":function(e,t,n){},"7a59":function(e,t,n){},"7fcf":function(e,t,n){},8641:function(e,t,n){"use strict";var a=n("be17"),i=n.n(a);i.a},9611:function(e,t,n){"use strict";var a={data:function(){return{placeholder:"https://res.cloudinary.com/shuaiyuan/image/upload/v1548391627/cv-img/logo-animation.gif"}},methods:{run:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.placeholder,n=arguments.length>1?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"presentImg";this[a]=t;var i=document.createElement("img");i.src=n,i.onload=function(){e[a]=n}}}};t["a"]=a},a332:function(e,t,n){},a71c:function(e,t,n){},be17:function(e,t,n){},c0a2:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("swiper",{staticClass:"each-section badge-band",attrs:{options:e.swiperOption}},e._l(e.badges,function(e,t){return n("swiper-slide",{key:t},[n("each-badge",{attrs:{"bg-url":e.url}})],1)}))},i=[],s=(n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"badge-wrap"},[n("div",{staticClass:"badge-bg",style:{backgroundImage:"url("+e.bgUrl+")"}})])}),o=[],r={name:"eachBadge",props:["bgUrl"]},c=r,l=(n("eef0"),n("2877")),u=Object(l["a"])(c,s,o,!1,null,"26403bd6",null);u.options.__file="each-badge.vue";var d=u.exports,f=(n("dfa4"),n("7212")),h={name:"badgeBand",computed:{swiper:function(){return this.$refs.mySwiper.swiper}},data:function(){return{swiperOption:{reeMode:!0,speed:4e3,autoplay:{delay:0,disableOnInteraction:!1},lazy:{loadPrevNext:!0,loadPrevNextAmount:9},slidesPerView:"auto",spaceBetween:50,loop:!0,loopFillGroupWithBlank:!0},badges:[{name:"vue",url:"vuejs"},{name:"js",url:"js"},{name:"css",url:"css"},{name:"sass",url:"sass"},{name:"react",url:"reactjs"},{name:"html",url:"html"},{name:"wechat mini program",url:"wechat-mini"},{name:"firebase",url:"firebase"},{name:"webpack",url:"webpack"}]}},components:{eachBadge:d,swiper:f["swiper"],swiperSlide:f["swiperSlide"]},created:function(){this.badges.forEach(function(e){e.url="./img/"+e.url+".png"})},watch:{}},p=h,v=(n("44f3"),Object(l["a"])(p,a,i,!1,null,null,null));v.options.__file="badge-band.vue";t["a"]=v.exports},c473:function(e,t,n){},c81e:function(e,t,n){},cab1:function(e,t,n){},ccb9:function(e,t,n){"use strict";var a=n("701d"),i=n.n(a);i.a},ceb2:function(e,t,n){"use strict";var a=n("5ed8"),i=n.n(a);i.a},d66f:function(e,t,n){},d6f1:function(e,t,n){},da70:function(e,t,n){},e2c3:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section-title-wrap"},[n("div",{staticClass:"section-title"},[n("p",{staticClass:"order"},[e._v(e._s(e.order)+".")]),n("p",{staticClass:"section-name"},[e._v(e._s(e.name))])]),e._t("default")],2)},i=[],s={name:"sectionTitle",props:["order","name"]},o=s,r=(n("5889"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,"32b1efd5",null);c.options.__file="section-title.vue";t["a"]=c.exports},eef0:function(e,t,n){"use strict";var a=n("a71c"),i=n.n(a);i.a},f562:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"experience-section each-section",style:{background:e.sectionColor}},[n("section-title",{attrs:{order:e.order,name:e.experiences.sectionName}}),n("div",{staticClass:"section-content"},e._l(e.experiences.allExperiences,function(t,a){return n("each-experience",e._b({key:a},"each-experience",t,!1))}))],1)},i=[],s=n("e2c3"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["each-experience","each-clickable",{active:e.activeState,viewDetail:e.viewDetailState}],on:{click:e.viewEach}},[n("transition",{attrs:{name:"show-content"}},[e.viewDetailState?e._e():n("div",{staticClass:"summary-wrap"},[n("div",{staticClass:"experience-logo-wrap"},[n("img",{staticClass:"experience-logo",attrs:{src:e.logo}})]),n("div",{staticClass:"experience-info-wrap"},[n("div",{staticClass:"experience-info"},[n("p",{staticClass:"company"},[e._v(e._s(e.company))]),n("p",{staticClass:"role"},[e._v(e._s(e.role))])]),n("p",{staticClass:"experience-date"},[n("span",[e._v(e._s(e.beginDate))]),e._v("\n                            -\n                        "),n("span",[e._v(e._s(e.endDate))])])])])]),n("transition",{attrs:{name:"show-content"}},[e.viewDetailState?n("div",{staticClass:"experience-detail"},[n("ul",e._l(e.detail.descrip,function(t,a){return n("li",{key:a},[e._v(e._s(t))])}))]):e._e()]),e.viewDetailState?n("div",{staticClass:"change-state view-summary"},[e._v("Back")]):e._e()],1)},r=[],c={name:"eachExperience",props:["logo","role","company","beginDate","endDate","activeState","detail"],data:function(){return{viewDetailState:!1}},methods:{viewEach:function(){this.viewDetailState=!this.viewDetailState}}},l=c,u=(n("f6b7"),n("2877")),d=Object(u["a"])(l,o,r,!1,null,"499f6ba8",null);d.options.__file="each-experience.vue";var f=d.exports,h={name:"experienceSection",data:function(){return{sectionColor:"#FFFFFF",order:"02",experiences:[]}},components:{sectionTitle:s["a"],eachExperience:f},props:["experienceData"],watch:{experienceData:function(){this.experiences=this.$props.experienceData}},beforeMount:function(){this.$props.experienceData&&(this.experiences=this.$props.experienceData)}},p=h,v=(n("0d8b"),Object(u["a"])(p,a,i,!1,null,"74eadb8b",null));v.options.__file="experience-section.vue";t["a"]=v.exports},f6b7:function(e,t,n){"use strict";var a=n("cab1"),i=n.n(a);i.a},f77e:function(e,t,n){"use strict";var a=n("69d0"),i=n.n(a);i.a},f8cf:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"switch-type clearfix"},[n("ul",{staticClass:"type-wrap"},e._l(e.types,function(t,a){return n("li",{key:a,class:{active:t===e.typeChosen},on:{click:function(n){e.switchType(t)}}},[e._v(e._s(t)),a!==e.types.length-1?n("span",{staticClass:"type-divide"},[e._v(" /")]):e._e()])}))])},i=[],s={name:"switchType",data:function(){return{typeChosen:"web"}},methods:{switchType:function(e){this.typeChosen=e,this.$emit("switch-type",e)}},props:["types"]},o=s,r=(n("4592"),n("2877")),c=Object(r["a"])(o,a,i,!1,null,"6b80ebe4",null);c.options.__file="switch-type.vue";t["a"]=c.exports},f9b5:function(e,t,n){"use strict";var a=n("da70"),i=n.n(a);i.a}});
//# sourceMappingURL=app.80f65f4a.js.map