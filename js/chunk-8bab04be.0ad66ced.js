(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8bab04be","chunk-332cb3f6"],{2679:function(t,e,s){"use strict";var a=s("b8f7"),l=s.n(a);l.a},"667c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"skill-section each-section",style:{background:t.sectionColor}},[s("section-title",{attrs:{order:t.order,name:t.skills.sectionName}}),s("div",{staticClass:"section-content"},[s("div",{class:["skill-wrap",{active:t.skillBarShort}]},t._l(t.skills,function(e,a){return s("div",{key:a,staticClass:"each-skill w-100"},[s("div",{staticClass:"bar-info-wrap flex justify-space-between align-center"},[s("p",{staticClass:"skill-name"},[t._v(t._s(e.name))]),s("time-num-updater",{staticClass:"skill-extent",attrs:{scale:e.scale}})],1),s("div",{staticClass:"bar-outter w-100 relative"},[s("div",{staticClass:"bar-inner absolute top left h-100",style:{width:e.scale+"%"}})])])}),0)])],1)},l=[],i=s("e2c3"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(t._s(t.scaleNum)+"%")])},n=[],r={props:["scale"],data(){return{scaleNum:0}},created(){},mounted(){let t,e=30,s=e=>{t=setTimeout(()=>{let e=10+this.scaleNum*(this.scaleNum/45);this.scaleNum=this.scaleNum+1,this.scaleNum>=this.scale?clearInterval(t):s(e)},e)};s(e)}},o=r,u=s("2877"),f=Object(u["a"])(o,c,n,!1,null,"afa7d264",null),d=f.exports,h=s("365c"),v={name:"skillSection",props:["skillData","currentLanguage"],data:function(){return{order:"01",sectionName:"Skills",sectionColor:"#C93639",skillBarShort:!0,skills:[]}},methods:{removeActive(){this.skillBarShort=!1},fetchSkill(){Object(h["e"])(this.currentLanguage).then(t=>{this.skills=t})}},watch:{currentLanguage:function(){this.fetchSkill()}},created(){this.fetchSkill()},mounted(){ScrollReveal().reveal(".skill-wrap",{afterReveal:this.removeActive}),this.$props.skillData&&(this.skills=this.$props.skillData)},components:{sectionTitle:i["a"],timeNumUpdater:d}},m=v,p=(s("69ff"),Object(u["a"])(m,a,l,!1,null,"9fc6c33c",null));e["default"]=p.exports},"69ff":function(t,e,s){"use strict";var a=s("8d29"),l=s.n(a);l.a},"8d29":function(t,e,s){},b8f7:function(t,e,s){},e2c3:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section-title-wrap"},[s("div",{staticClass:"section-title relative"},[s("div",{staticClass:"title-bg absolute"}),s("p",{staticClass:"order"},[t._v(t._s(t.order)+".")]),s("p",{staticClass:"section-name"},[t._v(t._s(t.name))])]),t._t("default")],2)},l=[],i={name:"sectionTitle",props:["order","name"]},c=i,n=(s("2679"),s("2877")),r=Object(n["a"])(c,a,l,!1,null,"39ffc224",null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-8bab04be.0ad66ced.js.map