(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e91b9bd","chunk-2d225253"],{"0e78":function(t,e,s){},"25e4":function(t,e,s){"use strict";var i=s("0e78"),r=s.n(i);r.a},"32df":function(t,e,s){},4060:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{class:["work-section","each-section",{full:"full"===t.mode}],style:{background:t.sectionColor}},[s("switch-type",{attrs:{types:t.worktypes},on:{"switch-type":t.switchType}}),s("section-title",{attrs:{order:t.order,name:t.works.sectionName}},[s("div",{staticClass:"expand-btn circle-btn flex justify-center align-center sticky",on:{click:t.changeMode}},[s("i",{class:["fa",{"fa-angle-down":"full"!==t.mode},{"fa-angle-up":"full"===t.mode}]})])]),s("div",{ref:"works",staticClass:"section-content"},t._l(t.filteredWorks.allWorks,function(e){return s("router-link",{key:e.id,attrs:{to:"/work?id="+e.id}},[s("vue-lazy-component",{attrs:{direction:"horizontal"}},[(e.display,s("each-work",t._b({},"each-work",e,!1))),s("work-skeleton",{attrs:{slot:"skeleton"},slot:"skeleton"})],1)],1)}),1),"full"!==t.mode?s("button",{class:["next-btn","flex","absolute","justify-center","align-center","circle-btn",{deactive:t.scrollToEnd}],on:{click:t.scrollRight}},[s("i",{staticClass:"fa fa-angle-right"})]):t._e(),"full"!==t.mode?s("progress-bar",{attrs:{totalLength:t.allWorkLength,viewLength:t.viewLength,scrolledDistance:t.scrolledDistance}}):t._e()],1)},r=[],l=s("e2c3"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"each-work",style:{"background-image":"url("+t.presentImg+")"},on:{click:t.viewEachWork}},[s("div",{staticClass:"work-cover"},[t.star?s("div",{staticClass:"banner absolute full"},[s("img",{attrs:{src:t.banner,alt:""}})]):t._e(),s("div",{staticClass:"work-info-wrap"},[s("h3",{staticClass:"work-name"},[t._v(t._s(t.name))]),s("span",{staticClass:"current-type"},[s("i",{class:t.typeIconCode[t.type]})])]),s("div",{staticClass:"work-tag absolute flex flex-wrap"},t._l(t.tags.slice(0,4),function(e,i){return s("p",{key:i},[t._v(t._s(e))])}),0)])])},o=[],n=s("9611"),c={name:"eachWork",props:["img","name","descrip","link","tags","id","type","youtubeID","biliID","star"],data:function(){return{typeIconCode:{web:"fa fa-code",video:"fa fa-play-circle",design:"fa fa-paint-brush"},presentImg:null,banner:"./img/banner.png"}},methods:{viewEachWork(){let t=JSON.parse(JSON.stringify(this.$props));this.$emit("view-work-detail",t)},usePlaceholder(t){this.presentImg=t},imgLoaded(){this.presentImg=this.img}},mixins:[n["a"]],beforeMount(){this.run(void 0,this.img,"presentImg")}},h=c,d=s("2877"),u=Object(d["a"])(h,a,o,!1,null,"f68cc3ac",null),f=u.exports,p=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{ref:"progressBar",staticClass:"progress-out"},[s("div",{staticClass:"progress-in",style:{width:t.viewLength/t.totalLength*100+"%",left:t.scrolledDistance/t.totalLength*100+"%"}})])},w=[],g={name:"progressBar",props:["totalLength","viewLength","scrolledDistance"],data:function(){return{progressBarLength:0}},computed:{calcScrollDistance(){}},mounted(){let t=this.$refs.progressBar.getBoundingClientRect().width;this.progressBarLength=t}},k=g,v=(s("7b63"),Object(d["a"])(k,p,w,!1,null,"42f56c53",null)),m=v.exports,y=s("f8cf"),b=s("d577"),C=s("49ab"),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},S=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"work-skeleton flex flex-column"},[s("div",{staticClass:"flex-auto flex justify-center align-center"},[s("div",{staticClass:"big-box"})]),s("div",{staticClass:"small-wrap flex"},[s("div",{staticClass:"small-box m-r-1"}),s("div",{staticClass:"small-box m-r-1"}),s("div",{staticClass:"small-box"})])])}],D=(s("d784"),{}),L=Object(d["a"])(D,_,S,!1,null,"60dcb7d5",null),x=L.exports,W={name:"workSection",data:function(){return{initWorkType:"web",sectionColor:"#F5F5F5",order:"04",sectionName:"Portfolio",filteredWorks:[],works:[],allWorkLength:0,viewLength:20,scrolledDistance:0,scrollToEnd:!1,mode:"full"}},props:["worktypes","workData"],methods:{detectScrollDistance(){let t=this.getScrollDistance();this.scrolledDistance=this.initialDistanceBeforeScroll-t,this.detectScrollToEnd()},getScrollDistance(){return document.querySelectorAll(".each-work")[0].getBoundingClientRect().left},getInitialScrollDistance(){return document.querySelector(".section-content").getBoundingClientRect().left},getBarStyle(){let t=this.$refs.works.scrollWidth,e=this.$refs.works.getBoundingClientRect().width;this.viewLength=e,this.allWorkLength=t},scrollRight(){this.scrollHorizontal(this.$refs.works,this.$refs.works.scrollLeft+280,500),this.detectScrollToEnd()},detectScrollToEnd(){this.scrolledDistance+this.viewLength>=this.allWorkLength?this.scrollToEnd=!0:this.scrollToEnd=!1},viewWorkDetail(t){this.$emit("view-work-detail",t)},scrollHorizontal(t,e,s){var i,r=t.scrollLeft,l=e-r>0?1:-1,a=Math.abs(e-r),o=a/50;e!==r&&(s=s||1e3,o*=l,i=setInterval(function(){r+=o,a-=Math.abs(o),0>=a?(t.scrollLeft=e,clearInterval(i),i=null):t.scrollLeft=r},s/100))},switchType(t){if("all"===t.toLowerCase())this.filteredWorks=JSON.parse(JSON.stringify(this.works));else{let e=this.works.allWorks.filter(e=>{if(e.type.toLowerCase()===t.toLowerCase())return e});this.filteredWorks.allWorks=Object(b["a"])(e)}},shuffle(t){var e,s,i=t.length;while(i)s=Math.floor(Math.random()*i--),//!!!
e=t[i],t[i]=t[s],t[s]=e},loadData(){this.filteredWorks=JSON.parse(JSON.stringify(this.works)),this.switchType(this.initWorkType)},changeMode(){this.mode="full"===this.mode?"horizontal":"full"},recalculateBar(){this.getBarStyle(),this.initialDistanceBeforeScroll=this.getInitialScrollDistance()}},components:{sectionTitle:l["a"],eachWork:f,progressBar:m,switchType:y["a"],"vue-lazy-component":C["component"],workSkeleton:x},mounted(){this.$props.workData&&(this.works=this.$props.workData),this.getBarStyle(),this.$refs.works.onscroll=this.detectScrollDistance,this.initialDistanceBeforeScroll=this.getInitialScrollDistance(),window.addEventListener("resize",this.recalculateBar),ScrollReveal().reveal(".work-section",{afterReveal:this.loadData}),window.innerWidth<500&&this.changeMode()},beforeDestroy(){window.removeEventListener("resize",this.recalculateBar),ScrollReveal().destroy()},updated(){this.getBarStyle(),this.detectScrollToEnd()},watch:{workData:function(){this.works=this.$props.workData,this.shuffle(this.works.allWorks),this.loadData()}}},B=W,$=(s("25e4"),Object(d["a"])(B,i,r,!1,null,null,null));e["default"]=$.exports},"7b63":function(t,e,s){"use strict";var i=s("32df"),r=s.n(i);r.a},d577:function(t,e,s){"use strict";s.d(e,"a",function(){return i});const i=t=>{let e=[],s=[];for(let i=0;i<t.length;i++)t[i].star?e.push(t[i]):s.push(t[i]);return e.concat(s)}},d784:function(t,e,s){"use strict";var i=s("fca8"),r=s.n(i);r.a},e2c3:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section-title-wrap"},[s("div",{staticClass:"section-title"},[s("p",{staticClass:"order"},[t._v(t._s(t.order)+".")]),s("p",{staticClass:"section-name"},[t._v(t._s(t.name))])]),t._t("default")],2)},r=[],l={name:"sectionTitle",props:["order","name"]},a=l,o=s("2877"),n=Object(o["a"])(a,i,r,!1,null,"32b1efd5",null);e["a"]=n.exports},f8cf:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"switch-type clearfix"},[s("ul",{staticClass:"type-wrap"},t._l(t.types,function(e,i){return s("li",{key:i,class:{active:e===t.typeChosen},on:{click:function(s){return t.switchType(e)}}},[t._v(t._s(e)),i!==t.types.length-1?s("span",{staticClass:"type-divide"},[t._v(" /")]):t._e()])}),0)])},r=[],l={name:"switchType",data:function(){return{typeChosen:"web"}},methods:{switchType(t){this.typeChosen=t,this.$emit("switch-type",t)}},props:["types"]},a=l,o=s("2877"),n=Object(o["a"])(a,i,r,!1,null,"6b80ebe4",null);e["a"]=n.exports},fca8:function(t,e,s){}}]);
//# sourceMappingURL=chunk-4e91b9bd.a0c73d65.js.map