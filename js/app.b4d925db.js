(function(t){function e(e){for(var a,i,c=e[0],r=e[1],l=e[2],u=0,d=[];u<c.length;u++)i=c[u],s[i]&&d.push(s[i][0]),s[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);f&&f(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s={app:0},o=[];function c(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d70f9602","chunk-2d0a3933":"a93c578c","chunk-2d0b653b":"924ce54c","chunk-2d0b90a2":"e65c8269","chunk-2d0ba09c":"a0a55415","chunk-2d0e523a":"0956c2f2","chunk-2d215c82":"ea1e022e","chunk-2d216245":"b7056ec5","chunk-2d2291e3":"a29d6ca9","chunk-2d2371df":"ccba8cbc","chunk-5c70ff9c":"36d90652","chunk-6b9e0f29":"9771243a","chunk-6e65ebcb":"636c39f5"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.e=function(t){var e=[],n={about:1};i[t]?e.push(i[t]):0!==i[t]&&n[t]&&e.push(i[t]=new Promise(function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"eb2e093e","chunk-2d0a3933":"31d6cfe0","chunk-2d0b653b":"31d6cfe0","chunk-2d0b90a2":"31d6cfe0","chunk-2d0ba09c":"31d6cfe0","chunk-2d0e523a":"31d6cfe0","chunk-2d215c82":"31d6cfe0","chunk-2d216245":"31d6cfe0","chunk-2d2291e3":"31d6cfe0","chunk-2d2371df":"31d6cfe0","chunk-5c70ff9c":"31d6cfe0","chunk-6b9e0f29":"31d6cfe0","chunk-6e65ebcb":"31d6cfe0"}[t]+".css",i=r.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var c=s[o],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===i))return e()}var u=document.getElementsByTagName("style");for(o=0;o<u.length;o++){c=u[o],l=c.getAttribute("data-href");if(l===a||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");s.request=a,n(s)},d.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){i[t]=0}));var a=s[t];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,n){a=s[t]=[e,n]});e.push(a[2]=o);var l,u=document.getElementsByTagName("head")[0],d=document.createElement("script");d.charset="utf-8",d.timeout=120,r.nc&&d.setAttribute("nonce",r.nc),d.src=c(t),l=function(e){d.onerror=d.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,o=new Error("Loading chunk "+t+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}s[t]=void 0}};var f=setTimeout(function(){l({type:"timeout",target:d})},12e4);d.onerror=d.onload=l,u.appendChild(d)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0011":function(t,e,n){},"0d8b":function(t,e,n){"use strict";var a=n("7a59"),i=n.n(a);i.a},"11d5":function(t,e,n){},1469:function(t,e,n){"use strict";n("cadf"),n("551c"),n("f751"),n("097d");var a=function(t,e){return window.localStorage.setItem(t,e)},i=function(t){return window.localStorage[t]};e["a"]={setLocalStore:a,getLocalStore:i}},"1d65":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{style:{background:t.sectionColor}},[n("div",{staticClass:"footer-content"},[n("p",[t._v("Get in touch with me!"),n("a",{attrs:{href:"mailto:"+t.email}},[t._v("Click Here")])])]),n("div",{staticClass:"footer-footer"},[n("ul",{staticClass:"social-media"},t._l(t.media,function(e,a){return n("li",{key:a},[n("a",{attrs:{target:"_blank",href:e.link}},[t._v(t._s(e.name))])])})),n("img",{attrs:{src:t.logoImg}}),n("p",{staticClass:"creat-stamp"},[t._v("© 2018 Made in China")]),n("div",{staticClass:"credit-sign",on:{click:t.openCredit}},[t._v("?")]),n("transition",{attrs:{name:"jump"}},[t.creditOpened?n("credit-widget",{on:{closeWidget:t.closeWidget}}):t._e()],1)],1)])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"credit-wrap"},[t._m(0),n("div",{staticClass:"close",on:{click:function(e){t.$emit("closeWidget")}}},[t._v("X")])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Credit to "),n("a",{attrs:{target:"_blank",href:"https://dribbble.com/shots/3569588-Personal-CV"}},[t._v(" Jenia Stratila's")]),t._v(" Design on "),n("a",{attrs:{target:"_blank",href:"https://dribbble.com"}},[t._v("Dribbble")])])}],c={name:"creditWidget"},r=c,l=(n("5632"),n("2877")),u=Object(l["a"])(r,s,o,!1,null,"789c3704",null);u.options.__file="credit-widget.vue";var d=u.exports,f={name:"vFooter",data:function(){return{sectionColor:"#202020",email:"sy2729@tc.columbia.edu",logoImg:"./img/logo.png",media:[{name:"Blog",link:"https://sy2729.github.io/"},{name:"Github",link:"https://github.com/sy2729"}],creditOpened:!1}},methods:{openCredit:function(){this.creditOpened=!0},closeWidget:function(){this.creditOpened=!1}},components:{creditWidget:d}},h=f,p=(n("7000"),Object(l["a"])(h,a,i,!1,null,"3ff64c94",null));p.options.__file="v-footer.vue";e["a"]=p.exports},"1dfe":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header",style:{backgroundImage:"url("+t.bgUrl+")"}},[n("div",{ref:"titleWrap",staticClass:"title-wrap"},[t.header.target?n("h4",{staticClass:"subtitle"},[t._v("\n                尊敬的"),n("span",{staticClass:"subtitle subtitle-target"},[t._v(t._s(t.header.target))]),t._v("面试官您好，我是\n            ")]):n("h4",{staticClass:"subtitle"},[t._v(t._s(t.header.greeting||"nihao"))]),n("h1",{staticClass:"title"},[t._v(t._s(t.header.name||"Wait Please"))]),n("div",{ref:"arrow",staticClass:"arrow-wrap",on:{click:t.arrowScroll}},[n("i",{staticClass:"fa fa-arrow-down"})])])])},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("img",{attrs:{src:t.logoImg}}),n("ul",{staticClass:"nav-options"},t._l(t.navList,function(e){return n("li",{key:e.name,on:{click:function(n){t.chooseToView(e.name)}}},[t._v(t._s(e.name))])}))])},o=[],c={data:function(){return{logoImg:"./img/logo.png",navList:[{name:"Web"},{name:"Video"},{name:"Design"},{name:"Blog"}]}},methods:{chooseToView:function(t){this.$emit(t)}}},r=c,l=(n("ccb91"),n("2877")),u=Object(l["a"])(r,s,o,!1,null,"f1f87e90",null);u.options.__file="v-nav.vue";var d=u.exports,f=n("9611"),h={data:function(){return{bgUrl:"./img/bg-blur.jpg",bgUrlClear:"./img/bg-clear.jpg",header:{}}},props:["currentLanguage","headerData"],methods:{scrollTo:function(t,e){var n,a=document.documentElement.scrollTop||document.body.scrollTop,i=t-a>0?1:-1,s=Math.abs(t-a),o=s/50;t!==a&&(e=e||1e3,o*=i,n=setInterval(function(){a+=o,s-=Math.abs(o),0>=s?(window.scrollTo(0,t),clearInterval(n),n=null):window.scrollTo(0,a)},e/100))},arrowScroll:function(){var t=document.querySelector(".skill-section").offsetTop;this.scrollTo(t,20)},myCallback:function(){this.$refs.arrow.classList.add("active")},loadText:function(){this.$refs.titleWrap.classList.add("active")},headerSelect:function(t){var e=document.querySelector(".work-section").offsetTop;this.scrollTo(e,500)}},components:{cvNav:d},mounted:function(){ScrollReveal().reveal(".arrow-wrap",{afterReveal:this.myCallback}),this.loadText(),this.$props.headerData&&(this.header=this.$props.headerData)},watch:{headerData:function(){this.header=this.$props.headerData}},mixins:[f["a"]],created:function(){this.run(this.bgUrl,this.bgUrlClear,"bgUrl")}},p=h,v=(n("41f5"),Object(l["a"])(p,a,i,!1,null,"58d6b396",null));v.options.__file="v-header.vue";e["a"]=v.exports},"1ff6":function(t,e,n){},"24ee":function(t,e,n){},"25e4":function(t,e,n){"use strict";var a=n("d66f"),i=n.n(a);i.a},"2ecd":function(t,e,n){var a={"./data_base_en.js":["3f91","chunk-5c70ff9c"],"./data_base_zh.js":["6763","chunk-6b9e0f29"],"./data_en.js":["c0ce","chunk-2d216245"],"./data_pm_aiqiyi_zh.js":["3603","chunk-2d0ba09c"],"./data_pm_bilibili_zh.js":["fa6d","chunk-2d2371df"],"./data_pm_byteDance_zh.js":["dba0","chunk-2d2291e3"],"./data_pm_chaoyouai_zh.js":["92e0","chunk-2d0e523a"],"./data_pm_en.js":["1cb6","chunk-6e65ebcb"],"./data_pm_mafengwo_en.js":["1d4f","chunk-2d0b653b"],"./data_pm_mafengwo_zh.js":["30f5","chunk-2d0b90a2"],"./data_pm_zh.js":["c054","chunk-2d215c82"],"./data_zh.js":["0382","chunk-2d0a3933"]};function i(t){var e=a[t];return e?n.e(e[1]).then(function(){var t=e[0];return n(t)}):Promise.resolve().then(function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e})}i.keys=function(){return Object.keys(a)},i.id="2ecd",t.exports=i},"402c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"education-section each-section",style:{background:t.sectionColor}},[n("section-title",{attrs:{order:t.order,name:t.educations.sectionName}}),n("div",{staticClass:"section-content"},t._l(t.educations.allEducations,function(e,a){return n("each-education",t._b({key:a},"each-education",e,!1))}))],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["each-education",{active:t.activeState}]},[n("div",{staticClass:"school-info-wrap"},[n("div",{staticClass:"school-info-sub-wrap"},[n("p",{staticClass:"school"},[t._v(t._s(t.school))]),n("p",{staticClass:"major"},[t._v(t._s(t.major))])]),n("p",{staticClass:"degree"},[t._v(t._s(t.degree))])]),n("p",{staticClass:"education-date"},[n("span",[t._v(t._s(t.startDate))]),t._v("\n                -\n            "),n("span",[t._v(t._s(t.endDate))])])])},o=[],c={name:"eachEducation",props:["school","degree","major","startDate","endDate","activeState"]},r=c,l=(n("ceb2"),n("2877")),u=Object(l["a"])(r,s,o,!1,null,"f0711470",null);u.options.__file="each-education.vue";var d=u.exports,f=n("e2c3"),h={name:"educationSection",data:function(){return{sectionColor:"#fff",order:"03",sectionName:"Education",educations:[]}},props:["educationData"],components:{sectionTitle:f["a"],eachEducation:d},watch:{educationData:function(){this.educations=this.$props.educationData}},beforeMount:function(){this.$props.educationData&&(this.educations=this.$props.educationData)}},p=h,v=(n("5b48"),Object(l["a"])(p,a,i,!1,null,null,null));v.options.__file="education-section.vue";e["a"]=v.exports},4060:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["work-section","each-section",{full:"full"===t.mode}],style:{background:t.sectionColor}},[n("switch-type",{attrs:{types:t.worktypes},on:{"switch-type":t.switchType}}),n("section-title",{attrs:{order:t.order,name:t.works.sectionName}},[n("div",{staticClass:"expand-btn circle-btn flex justify-center align-center sticky",on:{click:t.changeMode}},[n("i",{class:["fa",{"fa-angle-down":"full"!==t.mode},{"fa-angle-up":"full"===t.mode}]})])]),n("div",{ref:"works",staticClass:"section-content"},t._l(t.filteredWorks.allWorks,function(e){return n("router-link",{key:e.id,attrs:{to:"/work?id="+e.id}},[(e.display,n("each-work",t._b({},"each-work",e,!1)))],1)})),"full"!==t.mode?n("button",{class:["next-btn","flex","absolute","justify-center","align-center","circle-btn",{deactive:t.scrollToEnd}],on:{click:t.scrollRight}},[n("i",{staticClass:"fa fa-angle-right"})]):t._e(),"full"!==t.mode?n("progress-bar",{attrs:{totalLength:t.allWorkLength,viewLength:t.viewLength,scrolledDistance:t.scrolledDistance}}):t._e()],1)},i=[],s=n("f499"),o=n.n(s),c=(n("cadf"),n("551c"),n("f751"),n("097d"),n("e2c3")),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"each-work",style:{"background-image":"url("+t.presentImg+")"},on:{click:t.viewEachWork}},[n("div",{staticClass:"work-cover"},[t.star?n("div",{staticClass:"banner absolute full"},[n("img",{attrs:{src:t.banner,alt:""}})]):t._e(),n("div",{staticClass:"work-info-wrap"},[n("h3",{staticClass:"work-name"},[t._v(t._s(t.name))]),n("span",{staticClass:"current-type"},[n("i",{class:t.typeIconCode[t.type]})])]),n("div",{staticClass:"work-tag absolute flex flex-wrap"},t._l(t.tags.slice(0,4),function(e,a){return n("p",{key:a},[t._v(t._s(e))])}))])])},l=[],u=n("9611"),d={name:"eachWork",props:["img","name","descrip","link","tags","id","type","youtubeID","biliID","star"],data:function(){return{typeIconCode:{web:"fa fa-code",video:"fa fa-play-circle",design:"fa fa-paint-brush"},presentImg:null,banner:"./img/banner.png"}},methods:{viewEachWork:function(){var t=JSON.parse(o()(this.$props));this.$emit("view-work-detail",t)},usePlaceholder:function(t){this.presentImg=t},imgLoaded:function(){this.presentImg=this.img}},mixins:[u["a"]],beforeMount:function(){this.run(void 0,this.img,"presentImg")}},f=d,h=(n("6d99"),n("2877")),p=Object(h["a"])(f,r,l,!1,null,"f68cc3ac",null);p.options.__file="each-work.vue";var v=p.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"progressBar",staticClass:"progress-out"},[n("div",{staticClass:"progress-in",style:{width:t.viewLength/t.totalLength*100+"%",left:t.scrolledDistance/t.totalLength*100+"%"}})])},g=[],b={name:"progressBar",props:["totalLength","viewLength","scrolledDistance"],data:function(){return{progressBarLength:0}},computed:{calcScrollDistance:function(){}},mounted:function(){var t=this.$refs.progressBar.getBoundingClientRect().width;this.progressBarLength=t}},_=b,w=(n("7b63"),Object(h["a"])(_,m,g,!1,null,"42f56c53",null));w.options.__file="progress-bar.vue";var k=w.exports,y=n("f8cf"),C=n("d577"),D={name:"workSection",data:function(){return{initWorkType:"web",sectionColor:"#F5F5F5",order:"04",sectionName:"Portfolio",filteredWorks:[],works:[],allWorkLength:0,viewLength:20,scrolledDistance:0,scrollToEnd:!1,mode:"full"}},props:["worktypes","workData"],methods:{detectScrollDistance:function(){var t=this.getScrollDistance();this.scrolledDistance=this.initialDistanceBeforeScroll-t,this.detectScrollToEnd()},getScrollDistance:function(){return document.querySelectorAll(".each-work")[0].getBoundingClientRect().left},getInitialScrollDistance:function(){return document.querySelector(".section-content").getBoundingClientRect().left},getBarStyle:function(){var t=this.$refs.works.scrollWidth,e=this.$refs.works.getBoundingClientRect().width;this.viewLength=e,this.allWorkLength=t},scrollRight:function(){this.scrollHorizontal(this.$refs.works,this.$refs.works.scrollLeft+280,500),this.detectScrollToEnd()},detectScrollToEnd:function(){this.scrolledDistance+this.viewLength>=this.allWorkLength?this.scrollToEnd=!0:this.scrollToEnd=!1},viewWorkDetail:function(t){this.$emit("view-work-detail",t)},scrollHorizontal:function(t,e,n){var a,i=t.scrollLeft,s=e-i>0?1:-1,o=Math.abs(e-i),c=o/50;e!==i&&(n=n||1e3,c*=s,a=setInterval(function(){i+=c,o-=Math.abs(c),0>=o?(t.scrollLeft=e,clearInterval(a),a=null):t.scrollLeft=i},n/100))},switchType:function(t){if("all"===t.toLowerCase())this.filteredWorks=JSON.parse(o()(this.works));else{var e=this.works.allWorks.filter(function(e){if(e.type.toLowerCase()===t.toLowerCase())return e});this.filteredWorks.allWorks=Object(C["a"])(e)}},shuffle:function(t){var e,n,a=t.length;while(a)n=Math.floor(Math.random()*a--),//!!!
e=t[a],t[a]=t[n],t[n]=e},loadData:function(){this.filteredWorks=JSON.parse(o()(this.works)),this.switchType(this.initWorkType)},changeMode:function(){this.mode="full"===this.mode?"horizontal":"full"}},components:{sectionTitle:c["a"],eachWork:v,progressBar:k,switchType:y["a"]},mounted:function(){var t=this;this.$props.workData&&(this.works=this.$props.workData),this.getBarStyle(),this.$refs.works.onscroll=this.detectScrollDistance,this.initialDistanceBeforeScroll=this.getInitialScrollDistance(),window.addEventListener("resize",function(){t.getBarStyle(),t.initialDistanceBeforeScroll=t.getInitialScrollDistance()}),ScrollReveal().reveal(".work-section",{afterReveal:this.loadData})},updated:function(){this.getBarStyle(),this.detectScrollToEnd()},watch:{workData:function(){this.works=this.$props.workData,this.shuffle(this.works.allWorks),this.loadData()}}},S=D,x=(n("25e4"),Object(h["a"])(S,a,i,!1,null,null,null));x.options.__file="work-section.vue";e["a"]=x.exports},"41f5":function(t,e,n){"use strict";var a=n("d47c"),i=n.n(a);i.a},"44f3":function(t,e,n){"use strict";var a=n("d6f1"),i=n.n(a);i.a},4520:function(t,e,n){},4592:function(t,e,n){"use strict";var a=n("649c"),i=n.n(a);i.a},5632:function(t,e,n){"use strict";var a=n("6b3b"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],o={},c=o,r=(n("5c0b"),n("2877")),l=Object(r["a"])(c,i,s,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,d=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[t.showCVBtn?n("cv-button",{attrs:{"current-language":t.currentLanguage,"cv-path":t.cvData.cvPath}}):t._e(),n("v-header",{attrs:{"header-data":t.cvData.header,"current-language":t.currentLanguage}}),n("skill-section",{attrs:{"skill-data":t.cvData.skills}}),n("work-section",{attrs:{l:"",worktypes:t.workTypes,"work-data":t.cvData.works}}),n("experience-section",{attrs:{"experience-data":t.cvData.experiences}}),n("education-section",{attrs:{"education-data":t.cvData.educations}}),n("v-footer")],1)},h=[],p=n("cebc"),v=(n("11d5"),n("1dfe")),m=n("667c"),g=n("c0a2"),b=n("f562"),_=n("402c"),w=n("4060"),k=n("1d65"),y=n("9ea6"),C=n("2f62"),D=n("bc3a"),S=n.n(D),x="https://mycv-backend.herokuapp.com/api",L={baseUrl:x};S.a.defaults.baseURL=L.baseUrl;var j=function(){return S.a.get("/cv-btn").then(function(t){return t.data})},$={name:"home",data:function(){return{showCVBtn:!1}},methods:{},computed:Object(p["a"])({},Object(C["b"])(["cvData","currentLanguage","workTypes"])),components:{vHeader:v["a"],skillSection:m["a"],badgeBand:g["a"],experienceSection:b["a"],educationSection:_["a"],workSection:w["a"],vFooter:k["a"],cvButton:y["a"]},created:function(){var t=this;void 0===this.cvData.works&&this.$store.dispatch("judgeSystemLanguage","dev"),j().then(function(e){t.showCVBtn=e.cvBtnShow})}},E=$,T=(n("9e10"),Object(r["a"])(E,f,h,!1,null,"610a2502",null));T.options.__file="Home.vue";var O=T.exports,B=n("e37d");a["a"].use(d["a"]),a["a"].use(B["a"]);var z=new d["a"]({routes:[{path:"/",name:"dev",component:O},{path:"/work",name:"work",component:function(){return n.e("about").then(n.bind(null,"77af"))}},{path:"/pm",name:"pm",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"/pm/mafengwo",name:"pm/mafengwo",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"/pm/aiqiyi",name:"pm/aiqiyi",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"/pm/byteDance",name:"pm/byteDance",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"/pm/bilibili",name:"pm/bilibili",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"/pm/chaoyouai",name:"pm/chaoyouai",component:function(){return n.e("about").then(n.bind(null,"54f2"))}},{path:"*",name:"not-found",component:function(){return n.e("about").then(n.bind(null,"3c09"))}}]}),I=(n("ac6a"),n("28a5"),n("5176")),W=n.n(I),P=n("1469");a["a"].use(C["a"]);var N=new C["a"].Store({state:{workTypes:["web","design","video"],files:{dev:{zh:"data_zh",en:"data_en"},pm:{zh:"data_pm_zh",en:"data_pm_en",mafengwo:{zh:"data_pm_mafengwo_zh",en:"data_pm_mafengwo_en"},aiqiyi:{zh:"data_pm_aiqiyi_zh"},byteDance:{zh:"data_pm_byteDance_zh"},bilibili:{zh:"data_pm_bilibili_zh"},chaoyouai:{zh:"data_pm_chaoyouai_zh"}}},cvData:{},currentLanguage:void 0},getters:{cvData:function(t){return t.cvData}},mutations:{importData:function(t,e){var a=this;this.loopDataIn=function(t,e){return W()(t.base,e.cvData)},"en"===this.state.currentLanguage?e.en?n("2ecd")("./".concat(e["en"],".js")).then(function(t){n.e("chunk-5c70ff9c").then(n.bind(null,"3f91")).then(function(e){a.state.cvData=a.loopDataIn(e,t)})}):(this.state.currentLanguage="zh",n("2ecd")("./".concat(e["zh"],".js")).then(function(t){n.e("chunk-6b9e0f29").then(n.bind(null,"6763")).then(function(e){a.state.cvData=a.loopDataIn(e,t)})})):e.zh?n("2ecd")("./".concat(e["zh"],".js")).then(function(t){n.e("chunk-6b9e0f29").then(n.bind(null,"6763")).then(function(e){a.state.cvData=a.loopDataIn(e,t)})}):(this.state.currentLanguage="en",n("2ecd")("./".concat(e["en"],".js")).then(function(t){n.e("chunk-5c70ff9c").then(n.bind(null,"3f91")).then(function(e){a.state.cvData=a.loopDataIn(t,e)})}))},analyseRoute:function(t,e){var n,a=e.split("/");a.length<=1?n=this.state.files[a[0]]:(a.shift(),n=this.state.files,a.forEach(function(t){n=n[t]})),this.state.fileContent=n}},actions:{judgeSystemLanguage:function(t,e){var n=P["a"].getLocalStore("lang");if(n)this.state.currentLanguage=n;else{var a=navigator.appName;n="Netscape"==a?navigator.language:navigator.userLanguage,n=n.substr(0,2),this.state.currentLanguage="zh"==n?"zh":"en"}t.commit("analyseRoute",e),t.commit("importData",this.state.fileContent)},switchLanguage:function(t,e){var n=e.language,a=e.route_name;this.state.currentLanguage=n,t.commit("analyseRoute",a),t.commit("importData",this.state.fileContent)}}});a["a"].config.productionTip=!1,new a["a"]({router:z,store:N,render:function(t){return t(u)}}).$mount("#app")},5889:function(t,e,n){"use strict";var a=n("70e7"),i=n.n(a);i.a},"5b48":function(t,e,n){"use strict";var a=n("7fcf"),i=n.n(a);i.a},"5c0b":function(t,e,n){"use strict";var a=n("c81e"),i=n.n(a);i.a},"5ed8":function(t,e,n){},"649c":function(t,e,n){},"667c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"skill-section each-section",style:{background:t.sectionColor}},[n("section-title",{attrs:{order:t.order,name:t.skills.sectionName}}),n("div",{staticClass:"section-content"},[n("p",{staticClass:"content-description",domProps:{innerHTML:t._s(t.skills.description)}}),n("div",{class:["skill-wrap",{active:t.skillBarShort}]},t._l(t.skills.allSkills,function(e,a){return n("div",{key:a,staticClass:"each-skill"},[n("div",{staticClass:"bar-info-wrap"},[n("p",{staticClass:"skill-name"},[t._v(t._s(e.name))]),n("p",{staticClass:"skill-extent"},[t._v(t._s(e.extent)+"%")])]),n("div",{staticClass:"bar-outter"},[n("div",{staticClass:"bar-inner",style:{width:e.extent+"%"}})])])}))])],1)},i=[],s=n("e2c3"),o={name:"skillSection",props:["skillData"],data:function(){return{order:"01",sectionName:"Skills",sectionColor:"#C93639",skillBarShort:!0,skills:[]}},methods:{removeActive:function(){this.skillBarShort=!1}},watch:{skillData:function(){this.skills=this.$props.skillData}},mounted:function(){ScrollReveal().reveal(".skill-wrap",{afterReveal:this.removeActive}),this.$props.skillData&&(this.skills=this.$props.skillData)},components:{sectionTitle:s["a"]}},c=o,r=(n("f77e"),n("2877")),l=Object(r["a"])(c,a,i,!1,null,"d791ece0",null);l.options.__file="skill-section.vue";e["a"]=l.exports},"69d0":function(t,e,n){},"6b3b":function(t,e,n){},"6d99":function(t,e,n){"use strict";var a=n("4520"),i=n.n(a);i.a},7000:function(t,e,n){"use strict";var a=n("c473"),i=n.n(a);i.a},"701d":function(t,e,n){},"70e7":function(t,e,n){},"7a59":function(t,e,n){},"7b63":function(t,e,n){"use strict";var a=n("cc5d"),i=n.n(a);i.a},"7fcf":function(t,e,n){},"93f6":function(t,e,n){"use strict";var a=n("0011"),i=n.n(a);i.a},9611:function(t,e,n){"use strict";var a={data:function(){return{placeholder:"https://res.cloudinary.com/shuaiyuan/image/upload/v1548391627/cv-img/logo-animation.gif"}},methods:{run:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.placeholder,n=arguments.length>1?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"presentImg";this[a]=e;var i=document.createElement("img");i.src=n,i.onload=function(){t[a]=n}}}};e["a"]=a},"9e10":function(t,e,n){"use strict";var a=n("1ff6"),i=n.n(a);i.a},"9ea6":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.buttonWrapClass,on:{mousemove:t.moveIn,mouseleave:t.moveOut}},[t.hoverState||t.initialLoad?[n("div",{class:t.buttonBGClass}),n("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"切换到中文模式",expression:"'切换到中文模式'",modifiers:{"top-center":!0}}],class:["inner-wrap","button-on","relative",{active:"zh"===t.buttonState}],on:{click:function(e){t.switchLan("zh")}}},[n("span",[t._v("中")])]),n("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:t.msg,expression:"msg",modifiers:{"top-center":!0}}],class:["inner-wrap","button-download","relative"]},[n("div",{staticClass:"icon-wrap flex align-center justify-center"},[n("a",{attrs:{href:t.cvFileLocation,target:"_blank"}},[n("i",{staticClass:"iconfont"},[t._v("")])])])]),n("div",{directives:[{name:"tooltip",rawName:"v-tooltip.top-center",value:"Switch to English",expression:"'Switch to English'",modifiers:{"top-center":!0}}],class:["inner-wrap","button-on","relative",{active:"en"===t.buttonState}],on:{click:function(e){t.switchLan("en")}}},[n("span",[t._v("EN")])])]:[t._m(0)]],2)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"button-layer absolute full flex align-center justify-center"},[n("i",{staticClass:"iconfont"},[t._v("")])])}],s=(n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d"),n("1469")),o={props:["currentLanguage","cvPath"],data:function(){return{buttonState:null,hoverState:!1,initialLoad:!0,cvPathData:null,cvFileLocation:void 0}},computed:{buttonWrapClass:function(){var t=this.hoverState||this.initialLoad?"":"fold";return"cv-button outter-wrap flex relative justify-space-between align-center ".concat(t)},buttonBGClass:function(){var t="en"===this.buttonState?"right":"left";return"btn-bg absolute ".concat(t)},msg:function(){return"en"===this.buttonState?"Download my Resume":"下载我的简历"}},methods:{switchLan:function(t){this.buttonState=t;var e=this.$route.path;e=e.length<=1?this.$route.name:this.$route.path,"en"===t&&"en"!==this.$props.currentLanguage?this.$store.dispatch("switchLanguage",{route_name:e,language:t}):"zh"===t&&"zh"!==this.$props.currentLanguage&&this.$store.dispatch("switchLanguage",{route_name:e,language:t}),this.cvFileLocation=this.switchCv(t),s["a"].setLocalStore("lang",t)},moveIn:function(){this.hoverState=!0,this.initialLoad=!1},moveOut:function(){this.hoverState=!1},switchCv:function(t){var e=this.cvPathData?this.cvPathData:this.$props.cvPath;return e&&e[t]}},mounted:function(){this.buttonState=this.$props.currentLanguage,this.cvFileLocation=this.switchCv(this.$props.currentLanguage)},watch:{cvPath:function(){this.cvPathData=this.$props.cvPath,this.cvFileLocation=this.switchCv(this.$props.currentLanguage)}},created:function(){var t=this;this.timeId=setTimeout(function(){t.initialLoad=!1,window.clearTimeout(t.timeId)},3e3)}},c=o,r=(n("93f6"),n("2877")),l=Object(r["a"])(c,a,i,!1,null,"cd2aadf4",null);l.options.__file="cv-button.vue";e["a"]=l.exports},a71c:function(t,e,n){},c0a2:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("swiper",{staticClass:"each-section badge-band",attrs:{options:t.swiperOption}},t._l(t.badges,function(t,e){return n("swiper-slide",{key:e},[n("each-badge",{attrs:{"bg-url":t.url}})],1)}))},i=[],s=(n("ac6a"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"badge-wrap"},[n("div",{staticClass:"badge-bg",style:{backgroundImage:"url("+t.bgUrl+")"}})])}),o=[],c={name:"eachBadge",props:["bgUrl"]},r=c,l=(n("eef0"),n("2877")),u=Object(l["a"])(r,s,o,!1,null,"26403bd6",null);u.options.__file="each-badge.vue";var d=u.exports,f=(n("dfa4"),n("7212")),h={name:"badgeBand",computed:{swiper:function(){return this.$refs.mySwiper.swiper}},data:function(){return{swiperOption:{reeMode:!0,speed:4e3,autoplay:{delay:0,disableOnInteraction:!1},lazy:{loadPrevNext:!0,loadPrevNextAmount:9},slidesPerView:"auto",spaceBetween:50,loop:!0,loopFillGroupWithBlank:!0},badges:[{name:"vue",url:"vuejs"},{name:"js",url:"js"},{name:"css",url:"css"},{name:"sass",url:"sass"},{name:"react",url:"reactjs"},{name:"html",url:"html"},{name:"wechat mini program",url:"wechat-mini"},{name:"firebase",url:"firebase"},{name:"webpack",url:"webpack"}]}},components:{eachBadge:d,swiper:f["swiper"],swiperSlide:f["swiperSlide"]},created:function(){this.badges.forEach(function(t){t.url="./img/"+t.url+".png"})},watch:{}},p=h,v=(n("44f3"),Object(l["a"])(p,a,i,!1,null,null,null));v.options.__file="badge-band.vue";e["a"]=v.exports},c473:function(t,e,n){},c81e:function(t,e,n){},cc5d:function(t,e,n){},ccb91:function(t,e,n){"use strict";var a=n("701d"),i=n.n(a);i.a},ceb2:function(t,e,n){"use strict";var a=n("5ed8"),i=n.n(a);i.a},d47c:function(t,e,n){},d577:function(t,e,n){"use strict";n.d(e,"a",function(){return a});var a=function(t){for(var e=[],n=[],a=0;a<t.length;a++)t[a].star?e.push(t[a]):n.push(t[a]);return e.concat(n)}},d66f:function(t,e,n){},d6f1:function(t,e,n){},e2c3:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-title-wrap"},[n("div",{staticClass:"section-title"},[n("p",{staticClass:"order"},[t._v(t._s(t.order)+".")]),n("p",{staticClass:"section-name"},[t._v(t._s(t.name))])]),t._t("default")],2)},i=[],s={name:"sectionTitle",props:["order","name"]},o=s,c=(n("5889"),n("2877")),r=Object(c["a"])(o,a,i,!1,null,"32b1efd5",null);r.options.__file="section-title.vue";e["a"]=r.exports},eef0:function(t,e,n){"use strict";var a=n("a71c"),i=n.n(a);i.a},f562:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"experience-section each-section",style:{background:t.sectionColor}},[n("section-title",{attrs:{order:t.order,name:t.experiences.sectionName}}),n("div",{staticClass:"section-content"},t._l(t.experiences.allExperiences,function(e,a){return n("each-experience",t._b({key:a},"each-experience",e,!1))}))],1)},i=[],s=n("e2c3"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["each-experience","each-clickable",{active:t.activeState,viewDetail:t.viewDetailState}],on:{click:t.viewEach}},[n("transition",{attrs:{name:"show-content"}},[t.viewDetailState?t._e():n("div",{staticClass:"summary-wrap"},[n("div",{staticClass:"experience-logo-wrap"},[n("img",{staticClass:"experience-logo",attrs:{src:t.logo}})]),n("div",{staticClass:"experience-info-wrap"},[n("div",{staticClass:"experience-info"},[n("p",{staticClass:"company"},[t._v(t._s(t.company))]),n("p",{staticClass:"role"},[t._v(t._s(t.role))])]),n("p",{staticClass:"experience-date"},[n("span",[t._v(t._s(t.beginDate))]),t._v("\n                            -\n                        "),n("span",[t._v(t._s(t.endDate))])])])])]),n("transition",{attrs:{name:"show-content"}},[t.viewDetailState?n("div",{staticClass:"experience-detail"},[n("div",{staticClass:"experience-abstract-info flex justify-space-between"},[n("div",{staticClass:"experience-info"},[n("p",{staticClass:"company"},[t._v(t._s(t.company))]),n("p",{staticClass:"role"},[t._v(t._s(t.role))])]),n("p",{staticClass:"experience-date"},[n("span",[t._v(t._s(t.beginDate))]),t._v("\n                            -\n                        "),n("span",[t._v(t._s(t.endDate))])])]),n("ul",t._l(t.detail&&t.detail.descrip,function(e,a){return n("li",{key:a},[t._v(t._s(e))])}))]):t._e()]),t.viewDetailState?n("div",{staticClass:"change-state view-summary"},[t._v("Back")]):t._e()],1)},c=[],r={name:"eachExperience",props:["logo","role","company","beginDate","endDate","activeState","detail"],data:function(){return{viewDetailState:!0}},methods:{viewEach:function(){this.viewDetailState=!this.viewDetailState}}},l=r,u=(n("fca5"),n("2877")),d=Object(u["a"])(l,o,c,!1,null,"6c572762",null);d.options.__file="each-experience.vue";var f=d.exports,h={name:"experienceSection",data:function(){return{sectionColor:"#FFFFFF",order:"02",experiences:[]}},components:{sectionTitle:s["a"],eachExperience:f},props:["experienceData"],watch:{experienceData:function(){this.experiences=this.$props.experienceData}},beforeMount:function(){this.$props.experienceData&&(this.experiences=this.$props.experienceData)}},p=h,v=(n("0d8b"),Object(u["a"])(p,a,i,!1,null,"74eadb8b",null));v.options.__file="experience-section.vue";e["a"]=v.exports},f77e:function(t,e,n){"use strict";var a=n("69d0"),i=n.n(a);i.a},f8cf:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"switch-type clearfix"},[n("ul",{staticClass:"type-wrap"},t._l(t.types,function(e,a){return n("li",{key:a,class:{active:e===t.typeChosen},on:{click:function(n){t.switchType(e)}}},[t._v(t._s(e)),a!==t.types.length-1?n("span",{staticClass:"type-divide"},[t._v(" /")]):t._e()])}))])},i=[],s={name:"switchType",data:function(){return{typeChosen:"web"}},methods:{switchType:function(t){this.typeChosen=t,this.$emit("switch-type",t)}},props:["types"]},o=s,c=(n("4592"),n("2877")),r=Object(c["a"])(o,a,i,!1,null,"6b80ebe4",null);r.options.__file="switch-type.vue";e["a"]=r.exports},fca5:function(t,e,n){"use strict";var a=n("24ee"),i=n.n(a);i.a}});
//# sourceMappingURL=app.b4d925db.js.map