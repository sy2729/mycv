(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0b64":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-100"},[a("ImgLoader",{attrs:{loading:t.placeholder,img:"/img/design/design-1.png"}}),a("ImgLoader",{attrs:{loading:t.placeholder,img:"/img/design/design-2.png"}}),a("ImgLoader",{attrs:{loading:t.placeholder,img:"/img/design/design-3.png"}}),a("ImgLoader",{attrs:{loading:t.placeholder,img:"/img/design/design-4.png"}}),a("ImgLoader",{attrs:{loading:t.placeholder,img:"/img/design/design-5.png"}}),a("ImgLoader",{attrs:{loading:t.placeholder,img:"/img/design/design-6.png"}}),a("ImgLoader",{attrs:{loading:t.placeholder,img:"/img/design/design-7.png"}}),a("router-link",{attrs:{to:"/"}},[a("button",{staticClass:"btn fixed top left-1 top-1 bold"},[t._v("到主页, 查看更多信息")])])],1)},s=[],i=a("452b"),n={data(){return{placeholder:"/img/loading2.gif"}},components:{ImgLoader:i["a"]}},o=n,c=(a("d24e"),a("2877")),l=Object(c["a"])(o,r,s,!1,null,"5717f169",null);e["default"]=l.exports},"11d7":function(t,e,a){},"32bb":function(t,e,a){},"3c09":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"t-center vh-100 w-100 flex justify-center align-center flex-column"},[t._m(0),a("router-link",{staticClass:"underline p-1",attrs:{to:"/"}},[t._v("Go back to the Home Page")]),a("p",{staticClass:"gray"},[t._v("Will auto redirect in "),a("span",{staticClass:"t-color"},[t._v(t._s(t.second))]),t._v(" second")])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"404-img-wrap "},[a("img",{attrs:{src:"/img/404.png",alt:"",width:"300"}})])}],i=a("1469"),n={data(){return{second:6,timerId:null}},mounted(){this.timerId=setInterval(()=>{if(this.second=this.second-1,this.second<=0){window.clearInterval(this.timerId);let t=i["a"].getLocalStore("path")||"dev";this.$router.push({name:t})}},1e3)}},o=n,c=a("2877"),l=Object(c["a"])(o,r,s,!1,null,null,null);e["default"]=l.exports},"402c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"education-section each-section",style:{background:t.sectionColor}},[a("section-title",{attrs:{order:t.order,name:t.educations.sectionName}}),a("div",{staticClass:"section-content"},t._l(t.educations.allEducations,function(e,r){return a("each-education",t._b({key:r},"each-education",e,!1))}),1)],1)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["each-education",{active:t.activeState}]},[a("div",{staticClass:"school-info-wrap"},[a("div",{staticClass:"school-info-sub-wrap"},[a("p",{staticClass:"school"},[t._v(t._s(t.school))]),a("p",{staticClass:"major"},[t._v(t._s(t.major))])]),a("p",{staticClass:"degree"},[t._v(t._s(t.degree))])]),a("p",{staticClass:"education-date"},[a("span",[t._v(t._s(t.startDate))]),t._v("\n                -\n            "),a("span",[t._v(t._s(t.endDate))])])])},n=[],o={name:"eachEducation",props:["school","degree","major","startDate","endDate","activeState"]},c=o,l=a("2877"),u=Object(l["a"])(c,i,n,!1,null,"f0711470",null),d=u.exports,p=a("e2c3"),h={name:"educationSection",data:function(){return{sectionColor:"#fff",order:"03",sectionName:"Education",educations:[]}},props:["educationData"],components:{sectionTitle:p["a"],eachEducation:d},watch:{educationData:function(){this.educations=this.$props.educationData}},beforeMount(){this.$props.educationData&&(this.educations=this.$props.educationData)}},g=h,v=(a("5b48"),Object(l["a"])(g,r,s,!1,null,null,null));e["default"]=v.exports},"452b":function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"image-loader"},[a("img",{ref:"imgEl",attrs:{src:t.placeholder,alt:"Descriptive Image"}}),t.loadingState?a("p",{staticClass:"loading-text"},[t._v("image loading...")]):t._e()])},s=[],i={props:{img:{type:String,required:!0},loading:{type:String,default:"https://res.cloudinary.com/shuaiyuan/image/upload/v1548391627/cv-img/logo-animation.gif"}},data(){return{placeholder:"",loadingState:!0}},methods:{replaceImg(t){this.placeholder=this.img,this.loadingState=!1,t.removeEventListener("transitionend",this.replaceImg),t.classList.remove("hide")}},beforeMount(){this.placeholder=this.$props.loading;let t=document.createElement("img");t.src=this.img,t.onload=(()=>{this.$refs.imgEl.classList.add("hide"),this.$refs.imgEl.addEventListener("transitionend",()=>{this.replaceImg(this.$refs.imgEl)})})}},n=i,o=(a("d5b7"),a("2877")),c=Object(o["a"])(n,r,s,!1,null,"d550d594",null);e["a"]=c.exports},5231:function(t,e,a){"use strict";var r=a("7b0e"),s=a.n(r);s.a},"54f2":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("cv-button",{attrs:{"current-language":t.currentLanguage,"cv-path":t.cvData.cvPath}}),a("v-header",{attrs:{"header-data":t.cvData.header,"current-language":t.currentLanguage}}),a("skill-section",{attrs:{"skill-data":t.cvData.skills}}),a("badge-band"),a("experience-section",{attrs:{"experience-data":t.cvData.experiences}}),a("education-section",{attrs:{"education-data":t.cvData.educations}}),a("work-section",{attrs:{l:"",worktypes:t.workTypes,"work-data":t.cvData.works}}),a("v-footer")],1)},s=[],i=(a("11d5"),a("1dfe")),n=a("667c"),o=a("c0a2"),c=a("f562"),l=a("402c"),u=a("4060"),d=a("1d65"),p=a("9ea6"),h=a("2f62"),g=a("1469"),v={name:"home",data(){return{}},methods:{},computed:{...Object(h["b"])(["cvData","currentLanguage","workTypes"])},components:{vHeader:i["a"],skillSection:n["default"],badgeBand:o["a"],experienceSection:c["default"],educationSection:l["default"],workSection:u["default"],vFooter:d["default"],cvButton:p["a"]},created(){this.$route.path;void 0===this.cvData.works&&this.$store.dispatch("judgeSystemLanguage",this.$route.path),g["a"].setLocalStore("path","pm")}},k=v,f=(a("d740"),a("2877")),m=Object(f["a"])(k,r,s,!1,null,"49ea5b8e",null);e["default"]=m.exports},"5b48":function(t,e,a){"use strict";var r=a("11d7"),s=a.n(r);s.a},"667c":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"skill-section each-section",style:{background:t.sectionColor}},[a("section-title",{attrs:{order:t.order,name:t.skills.sectionName}}),a("div",{staticClass:"section-content"},[a("p",{staticClass:"content-description",domProps:{innerHTML:t._s(t.skills.description)}}),a("div",{class:["skill-wrap",{active:t.skillBarShort}]},t._l(t.skills.allSkills,function(e,r){return a("div",{key:r,staticClass:"each-skill w-100"},[a("div",{staticClass:"bar-info-wrap flex justify-space-between align-center"},[a("p",{staticClass:"skill-name"},[t._v(t._s(e.name))]),a("p",{staticClass:"skill-extent"},[t._v(t._s(e.extent)+"%")])]),a("div",{staticClass:"bar-outter w-100 relative"},[a("div",{staticClass:"bar-inner absolute top left h-100",style:{width:e.extent+"%"}})])])}),0)])],1)},s=[],i=a("e2c3"),n={name:"skillSection",props:["skillData"],data:function(){return{order:"01",sectionName:"Skills",sectionColor:"#C93639",skillBarShort:!0,skills:[]}},methods:{removeActive(){this.skillBarShort=!1}},watch:{skillData:function(){this.skills=this.$props.skillData}},mounted(){ScrollReveal().reveal(".skill-wrap",{afterReveal:this.removeActive}),this.$props.skillData&&(this.skills=this.$props.skillData)},components:{sectionTitle:i["a"]}},o=n,c=(a("d9fc"),a("2877")),l=Object(c["a"])(o,r,s,!1,null,"c92097f8",null);e["default"]=l.exports},"77af":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"detail",staticClass:"work-detail flex relative",on:{click:t.clearFocus}},[t.focusedImage?a("div",{staticClass:"bg-cover fixed"},[a("div",{staticClass:"focused-content"},[a("img",{attrs:{src:t.focusedImage,alt:t.focusedImage}})])]):t._e(),a("section",{staticClass:"current-content-wrap"},[a("div",{staticClass:"title-wrap relative"},[a("h2",{staticClass:"title"},[t._v(t._s(t.currentWork.name))]),a("span",{staticClass:"t-color current-work-type absolute"},[t._v(t._s(t.currentWork.type))]),"web"===t.currentWork.type?a("div",{staticClass:"work-link-wrap"},[a("a",{class:["link-preview",{disabled:""===t.currentWork.link.preview}],attrs:{target:"_blank",href:t.currentWork.link.preview?t.currentWork.link.preview:"javascript:;",title:"preivew"}},[t._m(0)]),a("a",{class:[{disabled:""===t.currentWork.link.repo}],attrs:{target:"_blank",href:t.currentWork.link.repo?t.currentWork.link.repo:"javascript:;",title:"repo"}},[t._m(1)])]):t._e(),"video"===t.currentWork.type?a("div",{staticClass:"work-link-wrap"},[a("a",{class:["link-preview",{disabled:""===t.currentWork.youtubeID}],attrs:{target:"_blank",href:t.currentWork.youtubeID?t.currentWork.link.youtube:"javascript:;",title:"YouTube - Worldwide Audience"}},[t._m(2)]),a("a",{class:[{disabled:""===t.currentWork.biliID}],attrs:{target:"_blank",href:t.currentWork.biliID?t.currentWork.link.bili:"javascript:;",title:"bilibili - Chinese Audience"}},[t._m(3)])]):t._e(),a("ul",{staticClass:"tags flex flex-wrap"},t._l(t.currentWork.tags,function(e,r){return a("li",{key:r},[t._v(t._s(e))])}),0)]),a("div",{staticClass:"work-content"},[t._l(t.currentWork.descrip,function(e){return a("div",{key:e.content,class:[{"each-descrip-img":"img"===e.type},{"work-videoWrapper":"video"===e.type}]},[a("transition",{attrs:{name:"show-content"}},["video"===e.type&&"en"===t.currentLanguage&&""!==t.currentWork.youtubeID?a("iframe",{attrs:{src:e.content.youtube,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}):t._e(),"video"===e.type&&"zh"===t.currentLanguage&&""!==t.currentWork.biliID?a("iframe",{attrs:{src:e.content.bili,frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}):t._e()]),"img"===e.type?a("img-loader",{attrs:{img:e.content},nativeOn:{click:function(a){return a.stopPropagation(),t.viewLargePicture(e)}}}):t._e(),"text"===e.type?a("p",{domProps:{innerHTML:t._s(e.content)}}):t._e()],1)}),"video"!==t.currentWork.type||"zh"!==t.currentLanguage||t.currentWork.biliID?t._e():a("p",{staticClass:"t-warning"},[t._v("!No Bilibili Video Available, please choose other sources")]),"video"!==t.currentWork.type||"en"!==t.currentLanguage||t.currentWork.youtubeID?t._e():a("p",{staticClass:"t-warning"},[t._v("No YouTube Video Available, please choose other sources")]),"video"===t.currentWork.type?a("div",{staticClass:"video-source-wrap"},[a("p",[t._v("Choose the video source based on your country:")]),a("span",{class:[{active:"en"===t.currentLanguage},{"no-available":!t.currentWork.youtubeID}],on:{click:function(e){return t.changeVideo("en")}}},[t._v("YouTube")]),a("span",{class:[{active:"zh"===t.currentLanguage},{"no-available":!t.currentWork.biliID}],on:{click:function(e){return t.changeVideo("zh")}}},[t._v("BiliBili")])]):t._e()],2)]),a("side-bar-in-work-detail",{attrs:{allwork:t.allWorks,currentId:t.currentWork.id,worktypes:t.workTypes},on:{"switch-work-detail":t.switchWork}}),a("router-link",{attrs:{to:"/"}},[a("div",{staticClass:"close"},[a("span",[a("i",{staticClass:"fa fa-times"})])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fa fa-eye"}),t._v("preview")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fab fa-github"}),t._v("repo")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"fa fa-youtube"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",[a("i",{staticClass:"iconfont"},[t._v("")])])}],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("aside",{staticClass:"sideBar"},[a("switch-type",{attrs:{types:t.worktypes},on:{"switch-type":t.switchType}}),a("ul",t._l(t.filteredWorks,function(e){return a("router-link",{key:e.id,staticClass:"sidebar-list-link",attrs:{to:"/work?id="+e.id}},[a("li",{class:{"header-bar":e.id===t.currentId},attrs:{"data-id":e.id},on:{click:function(a){return t.switchWork(e.id)}}},[a("span",{staticClass:"li-name"},[t._v(t._s(e.name))]),a("span",{class:"li-tag "+(e.star?"star":"")},[t._v(t._s(e.type))])])])}),1)],1)},n=[],o=a("f8cf"),c=a("d577"),l={name:"sideBarInWorkDetail",data:function(){return{initWorkType:"web",filteredWorks:[],works:[]}},props:["worktypes","allwork"],methods:{switchWork(t){this.filteredWorks.map(e=>{t===e.id&&this.$emit("switch-work-detail",e)})},switchType(t){if("all"===t.toLowerCase())this.filteredWorks=this.works;else{let e=this.works.filter(e=>{if(e.type.toLowerCase()===t.toLowerCase())return e});this.filteredWorks=Object(c["a"])(e)}}},props:["allwork","currentId","worktypes"],beforeMount(){this.works=this.$props.allwork,this.filteredWorks=this.works,this.switchType(this.initWorkType)},watch:{allwork:function(t){this.works=this.$props.allwork,this.filteredWorks=Object(c["a"])(this.works)}},components:{switchType:o["a"]}},u=l,d=(a("5231"),a("2877")),p=Object(d["a"])(u,i,n,!1,null,null,null),h=p.exports,g=a("452b"),v=a("2f62"),k={name:"workDetail",data:function(){return{currentWork:{},allWorks:[],currentWorkId:void 0,focusedImage:void 0}},computed:{...Object(v["b"])(["cvData","workTypes"]),currentLanguage:{set:function(t){this.$store.state.currentLanguage=t},get:function(t){return this.$store.state.currentLanguage}}},watch:{cvData(t){this.allWorks=this.$store.getters.cvData.works.allWorks,this.currentWork=this.$store.getters.cvData.works.allWorks[this.currentWorkId]},$route(t,e){this.getId();var a=this.$store.getters.cvData.works.allWorks;a=a.filter(t=>{return t.id===this.currentWorkId-0}),this.currentWork=a[0]}},components:{"side-bar-in-work-detail":h,imgLoader:g["a"]},methods:{switchWork(t){this.currentWork=t,window.scrollTo(0,0)},changeVideo(t){"en"===t&&"en"!==this.currentLanguage?this.currentLanguage="en":"zh"===t&&"zh"!==this.currentLanguage&&(this.currentLanguage="zh")},getId(){this.currentWorkId=this.$route.query.id},viewLargePicture(t){this.focusedImage=t.content},clearFocus(){this.focusedImage=void 0}},beforeMount(){this.getId();let t="dev";if(void 0===this.cvData.works)this.$store.dispatch("judgeSystemLanguage",t);else{this.allWorks=this.cvData.works.allWorks;var e=this.allWorks.filter(t=>{return t.id===this.currentWorkId-0});this.currentWork=e[0]}}},f=k,m=(a("de5a"),Object(d["a"])(f,r,s,!1,null,null,null));e["default"]=m.exports},"7b0e":function(t,e,a){},"86f9":function(t,e,a){},9787:function(t,e,a){},c7c6:function(t,e,a){},d24e:function(t,e,a){"use strict";var r=a("9787"),s=a.n(r);s.a},d5b7:function(t,e,a){"use strict";var r=a("c7c6"),s=a.n(r);s.a},d740:function(t,e,a){"use strict";var r=a("e20c"),s=a.n(r);s.a},d9fc:function(t,e,a){"use strict";var r=a("86f9"),s=a.n(r);s.a},de5a:function(t,e,a){"use strict";var r=a("32bb"),s=a.n(r);s.a},e20c:function(t,e,a){}}]);
//# sourceMappingURL=about.8ea75203.js.map