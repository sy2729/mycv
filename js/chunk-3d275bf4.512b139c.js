(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d275bf4","chunk-332cb3f6"],{"138b":function(t,e,a){},2679:function(t,e,a){"use strict";var s=a("b8f7"),i=a.n(s);i.a},"47cd":function(t,e,a){"use strict";var s=a("5545"),i=a.n(s);i.a},5545:function(t,e,a){},a48b:function(t,e,a){"use strict";var s=a("138b"),i=a.n(s);i.a},b8f7:function(t,e,a){},c100:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"each-section blog-section"},[a("section-title",{attrs:{order:t.order,name:"My blogs"}}),a("div",{staticClass:"section-content flex flex-wrap"},[t._l(t.blogData,function(t,e){return a("each-blog",{key:t._id||e,attrs:{"blog-data":t}})}),a("div",{staticClass:"w-100 t-center m-2"},[3!==t.page?a("button",{staticClass:"load-more pointer uppercase",on:{click:t.loadMore}},[t._v(t._s(t.loading?"...":"load more"))]):a("button",{staticClass:"load-more pointer uppercase",on:{click:function(e){return t.window.open("http://sy2729.github.io/")}}},[t._v("View Blog Site")])])],2)],1)},i=[],l=a("e2c3"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"each-blog p-2 m-r-1 m-t-1 ov-hide"},[a("h3",{staticClass:"p-b-1"},[t._v(t._s(t.blogData.title))]),a("p",{staticClass:"date m-b-1"},[t._v(t._s(t.convertDate(t.blogData.date)))]),a("p",{staticClass:"abstract m-b-1"},[t._v(t._s(t.introDisplay(t.blogData.intro)))]),a("a",{staticClass:"uppercase read-more relative",attrs:{target:"_blank",href:t.blogData.url||"http://sy2729.github.io/"+t.calculateUrl(t.blogData.title,t.blogData.date)}},[t._v(" Read More")])])},n=[],r=a("c1df"),c=a.n(r),u={props:{blogData:{type:Object,required:!0,default:{title:"blog title",intro:"preview of the blog",cover:"/img/404.png",view:0,up:0}}},methods:{calculateUrl(t,e){if(!e)return;let a=c()(new Date(e)).format("YYYY/MM/DD").split("/");return e.toLowerCase().includes("eastern")&&(a[a.length-1]=a[a.length-1]-0+1),a=a.join("/"),`${a}/${t}`},introDisplay(t){if(t)return t.length>50&&(t=t.substr(0,50)+"......"),t},convertDate(t){return c()(new Date(t)).format("YYYY/MM/DD")}}},b=u,d=(a("47cd"),a("2877")),p=Object(d["a"])(b,o,n,!1,null,"9b834312",null),g=p.exports,f=a("365c"),v={data(){return{order:"05",blogData:[{title:"title1",abstract:"test abstract 1",view:1,up:1},{title:"title2",abstract:"test abstract 2",view:1,up:1}],loading:!1,page:0,window:window}},components:{sectionTitle:l["a"],eachBlog:g},methods:{loadMore(){this.loading=!0,this.page++,this.blogData=this.allBlogData.slice(0,3*(this.page+1)),this.loading=!1}},created(){Object(f["a"])().then(t=>{this.allBlogData=t,this.blogData=t.slice(0,3)})}},h=v,_=(a("a48b"),Object(d["a"])(h,s,i,!1,null,"6f7cf4d0",null));e["default"]=_.exports},e2c3:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section-title-wrap"},[a("div",{staticClass:"section-title relative"},[a("div",{staticClass:"title-bg absolute"}),a("p",{staticClass:"order"},[t._v(t._s(t.order)+".")]),a("p",{staticClass:"section-name"},[t._v(t._s(t.name))])]),t._t("default")],2)},i=[],l={name:"sectionTitle",props:["order","name"]},o=l,n=(a("2679"),a("2877")),r=Object(n["a"])(o,s,i,!1,null,"39ffc224",null);e["a"]=r.exports}}]);
//# sourceMappingURL=chunk-3d275bf4.512b139c.js.map