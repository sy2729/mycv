// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"data.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var cvData = {
    experiences: [{
        logo: './img/experience/tc.jpg',
        role: 'Course Assistant - JavaScript Programming',
        company: 'Teachers College, Columbia University',
        beginDate: '2018.09',
        endDate: 'present',
        activeState: true,
        detail: {
            descrip: ['Assist the Instructor in scheduling and operating the class, and grading the work', 'Assist the students with debugging, clarify some coding concepts, especially in JavaScript', 'Creating demo projects in demonstrating concepts being taught in class and as intro to more advanced implementation in JavaScript and interactive web page coding']
        }
    }, {
        logo: './img/experience/atos.png',
        role: 'UX Designer',
        company: 'Atos',
        beginDate: '2018.05',
        endDate: 'present',
        activeState: true,
        detail: {
            descrip: ['Collaborate with other designers and design web & mobile products from concept to hi-fi prototypes ', 'Work with developers and support delivering / QA new features', 'Design marketing materials including marketing website, brochures, videos', 'Support user research and gather feedback from users to improve product design']
        }
    }, {
        logo: './img/experience/tc.jpg',
        role: 'Web Developer',
        company: 'Teachers College, Columbia University',
        beginDate: '2018.03',
        endDate: '2018.05',
        activeState: false,
        detail: {
            descrip: ["Assist the TC office of the Web in refreshing the college's website, assist the External Affairs Web Office in transferring current websites to the new site template in T4 content management system", 'Help with quality assurance testing, and other content migration tasks', 'Help with site style debugging and user experience improvement with CSS solutions']
        }
    }],
    skills: [{
        name: 'HTML & CSS & JavaSCript',
        extent: '70'
    }, {
        name: 'UX / UI Design',
        extent: '60'
    }, {
        name: 'Videography',
        extent: '60'
    }, {
        name: 'Vue / Riot / Firebase / MVC ...',
        extent: '70'
    }],
    works: [{
        name: 'Netease Music Redev (Mobile)',
        link: {
            preview: 'https://sy2729.github.io/music-app/',
            repo: 'https://github.com/sy2729/music-app'
        },
        img: './img/work/music/music-1.jpeg',
        id: 1,
        descrip: [{
            content: 'Based on Netease Music\'s mobile version, this is a simple reproduction of the music play website via jQuery.',
            type: 'text'
        }, {
            content: './img/work/music/music-1.jpeg',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>with functionality of listen to songCollection and new song</p>',
            type: 'text'
        }, {
            content: './img/work/music/music-2.jpeg',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>Inside the song collection interface</p>',
            type: 'text'
        }, {
            content: './img/work/music/music-3.jpeg',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>Song play interface, the classic disc rotating sign</p>',
            type: 'text'
        }, {
            content: './img/work/music/music-4.jpeg',
            type: 'img'
        }, {
            content: 'Also has features like search song via name, displaying and scrolling lyrics (only work with supported lyric format that has timestamp), and switch to the previous song and next song.',
            type: 'text'
        }, {
            content: 'The resources and infomation of the songs are managed by a simple jQuery-based CMS, where user can view, upload, edit and delete songs. They are achieved via <a href="https://www.qiniu.com/">qiniu</a> and <a href="https://leancloud.cn/">leanCloud</a> APIs.',
            type: 'text'
        }, {
            content: './img/work/music/music-5.png',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>dashboard for song collection</p>',
            type: 'text'
        }, {
            content: './img/work/music/music-6.png',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>add songs into playlist</p>',
            type: 'text'
        }, {
            content: './img/work/music/music-7.png',
            type: 'img'
        }],
        tags: ['Web Dev', 'jQuery'],
        type: 'web'
    }, {
        name: 'Work 2',
        link: 'https://sy2729.github.io/style-guide-atos/style-guide.html',
        img: 'https://z1.muscache.cn/im/pictures/fd5fb67e-9cdc-4111-b8e6-373727c75669.jpg?aki_policy=large',
        id: 2,
        descrip: 'xxxxxxxx',
        tags: ['Web Dev', 'UX Design', 'UI Design'],
        type: 'video'
    }, {
        name: 'work 3',
        link: 'https://sy2729.github.io/style-guide-atos/style-guide.html',
        img: 'https://z1.muscache.cn/im/pictures/d254f055-afbf-466f-ad24-28e1f678671d.jpg?aki_policy=x_large',
        id: 3,
        descrip: 'xxxxxxxx',
        tags: ['Web Dev', 'UX Design', 'UI Design'],
        type: 'design'
    }]

};

exports.cvData = cvData;
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"index.scss":[function(require,module,exports) {

var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./img/hero.jpg":[["hero.6a250d95.jpg","img/hero.jpg"],"img/hero.jpg"],"./img/hero-layer.png":[["hero-layer.ef1d76d4.png","img/hero-layer.png"],"img/hero-layer.png"],"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _data = require("./data");

require("./index.scss");

// create component
// import {  } from "./index.scss";
var nav = {
    template: "\n        <nav>\n            <img :src=logoImg>\n            <ul class='nav-options'>\n                <li v-for='i in navList' @click='chooseToView(i.name)'>{{i.name}}</li>\n            </ul>\n        </nav>\n    ",

    data: function data() {
        return {
            logoImg: './img/logo.png',
            navList: [{
                name: 'Web'
            }, {
                name: 'Video'
            }, {
                name: 'Design'
            }, {
                name: 'Blog'
            }]
        };
    },
    methods: {
        chooseToView: function chooseToView(data) {
            if (data.toLowerCase() !== 'blog') {
                this.$emit('choose-to-view', data.toLowerCase());
            } else {
                console.log('choose blog');
            }
        }
    }
};

var header = {
    template: "\n        <div class=\"header\">\n            <div class=\"header-layer\" ref='overlay'></div>\n            <cv-nav @choose-to-view='headerSelect'></cv-nav>\n\n            <div class=\"title-wrap\" ref='titleWrap'>\n                <h4 class=\"subtitle\">Hello, I'm</h4>\n                <h1 class=\"title\">Shuai Yuan</h1>\n                <div class='arrow-wrap' @click=arrowScroll ref='arrow'><i class=\"fa fa-arrow-down\"></i></div>\n            </div>\n        </div>\n    ",
    data: function data() {
        return {};
    },

    methods: {
        scrollTo: function scrollTo(position, timeout) {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop,
                direction = position - scrollTop > 0 ? 1 : -1,
                distance = Math.abs(position - scrollTop),
                split = distance / 50,
                _timeout;

            if (position !== scrollTop) {
                timeout = timeout || 1000;
                split *= direction;

                _timeout = setInterval(function () {
                    scrollTop += split;
                    distance -= Math.abs(split);
                    if (0 >= distance) {
                        window.scrollTo(0, position);
                        clearInterval(_timeout);
                        _timeout = null;
                    } else {
                        window.scrollTo(0, scrollTop);
                    }
                }, timeout / 100);
            }
        },
        arrowScroll: function arrowScroll() {
            var value = document.querySelector('.skill-section').offsetTop;
            this.scrollTo(value, 500);
        },
        myCallback: function myCallback() {
            this.$refs.arrow.classList.add('active');
        },
        detectLayerLoading: function detectLayerLoading() {
            var _this = this;

            // detect the layer loading
            var img = document.createElement('img');
            img.setAttribute("src", './img/hero-layer.png');
            img.onload = function () {
                img = null;
                _this.loadText();
            };
        },
        loadText: function loadText() {
            this.$refs.titleWrap.classList.add('active');
        },
        headerSelect: function headerSelect(data) {
            var value = document.querySelector('.work-section').offsetTop;
            this.scrollTo(value, 500);
        }
    },

    components: {
        'cv-nav': nav
    },

    mounted: function mounted() {
        ScrollReveal().reveal('.arrow-wrap', { afterReveal: this.myCallback });
        this.detectLayerLoading();
    }
};

var sectionTitle = {
    template: "\n    <div class='section-title-wrap'>\n        <div class='section-title'>\n            <p class=\"order\">{{order}}.</p>\n            <p class=\"section-name\">{{name}}</p>\n        </div>\n    </div>\n    ",
    data: function data() {
        return {};
    },
    props: ['order', 'name']
};

var skillSection = {
    template: "\n        <div class=\"skill-section each-section\" :style=\"{background: sectionColor}\">\n            <section-title :order=order :name=sectionName></section-title>\n            <div class='section-content'>\n                <p class=\"content-description\">{{description}}</p>\n                <div :class=\"['skill-wrap', {active: skillBarShort}]\">\n                    <div class=\"each-skill\" v-for='i in skills'>\n                        <div class=\"bar-info-wrap\">\n                            <p class='skill-name'>{{i.name}}</p>\n                            <p class=\"skill-extent\">{{i.extent}}%</p>\n                        </div>\n                        <div class=\"bar-outter\">\n                            <div class=\"bar-inner\" :style=\"{width: i.extent + '%'}\"></div>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    ",
    data: function data() {
        return {
            order: '01',
            sectionName: 'Skills',
            description: "I\u2019m passionate about Web Development and User Interface design, with close observation of the latest trends in those design fields. I have solid skills in creating design prototype through front-end development and proficiency of using design software. With my pursuit of aesthetic details, I am able to precisely communicate my idea and design thoughts with my clients and partners.",
            sectionColor: '#C93639',
            skillBarShort: true,
            skills: []
        };
    },

    components: {
        'section-title': sectionTitle
    },

    methods: {
        removeActive: function removeActive() {
            this.skillBarShort = false;
        }
    },
    beforeMount: function beforeMount() {
        this.skills = _data.cvData.skills;
    },
    mounted: function mounted() {
        ScrollReveal().reveal('.skill-wrap', { afterReveal: this.removeActive });
    }
};

var eachExperience = {
    template: "\n        <div :class=\"['each-experience', 'each-clickable',{active: activeState, viewDetail: viewDetailState}]\" @click=viewEach>\n             <transition name='show-content'>\n                <div class=\"summary-wrap\" v-if=!viewDetailState>\n                    <div class='experience-logo-wrap'>\n                        <img :src=logo class='experience-logo'>\n                    </div>\n                    <div class=\"experience-info-wrap\">\n                        <div class=\"experience-info\">\n                            <p class='company'>{{company}}</p>\n                            <p class='role'>{{role}}</p>\n                        </div>\n\n                        <p class='experience-date'>\n                            <span>{{beginDate}}</span>\n                                -\n                            <span>{{endDate}}</span>\n                        </p>   \n                    </div>\n                </div>\n             </transition>\n\n            <transition name='show-content'>\n                <div class='experience-detail' v-if=viewDetailState>\n                    <ul>\n                        <li v-for='i in detail.descrip'>{{i}}</li>\n                    </ul>\n                </div>\n            </transition>\n\n            <div class='change-state view-summary' v-if=viewDetailState>Back</div>\n        </div>\n    ",
    props: ['logo', 'role', 'company', 'beginDate', 'endDate', 'activeState', 'detail'],
    data: function data() {
        return {
            viewDetailState: false

        };
    },
    methods: {
        viewEach: function viewEach() {
            this.viewDetailState = !this.viewDetailState;
        }
    }
};

var experienceSection = {
    template: "\n        <div class=\"experience-section each-section\" :style=\"{background: sectionColor}\">\n             <section-title :order=order :name=sectionName></section-title>\n             <div class='section-content'>\n                <each-experience v-for='(i, index) in experiences' :key=index v-bind='i'></each-experience>\n             </div>\n        </div>\n    ",
    data: function data() {
        return {
            sectionColor: '#FFFFFF',
            order: '02',
            sectionName: 'Experience',
            experiences: []
        };
    },
    components: {
        'section-title': sectionTitle,
        'each-experience': eachExperience
    },
    beforeMount: function beforeMount() {
        this.experiences = _data.cvData.experiences;
    }
};

// education component
var eachEducation = {
    template: "\n        <div :class=\"['each-education', {active: activeState}]\">\n            <div class=\"school-info-wrap\">\n                <div class=\"school-info-sub-wrap\">\n                    <p class=\"school\">{{school}}</p>\n                    <p class=\"major\">{{major}}</p>\n                </div>\n                <p class=\"degree\">{{degree}}</p>\n            </div>\n            <p class=\"education-date\">\n                <span>{{startDate}}</span>\n                    -\n                <span>{{endDate}}</span>\n            </p>\n        </div>\n    ",
    props: ['school', 'degree', 'major', 'startDate', 'endDate', 'activeState']
};

var educationSection = {
    template: "\n        <div class=\"education-section each-section\" :style=\"{background: sectionColor}\">\n             <section-title :order=order :name=sectionName></section-title>\n             <div class='section-content'>\n                <each-education v-for='(i, index) in educations' :key=index v-bind='i'></each-education>\n             </div>\n        </div>\n    ",
    data: function data() {
        return {
            sectionColor: '#fff',
            order: '03',
            sectionName: 'Education',
            educations: [{
                school: 'Teachers College, Columbia University',
                degree: 'Master',
                major: 'Instructional Technology and Media',
                startDate: '2017.09',
                endDate: '2019.05',
                activeState: true
            }, {
                school: 'Central China Normal University',
                degree: 'Bachelor',
                major: 'Chinese International Education',
                startDate: '2013.09',
                endDate: '2017.06'
            }, {
                school: 'University of California, Berkeley',
                degree: 'Exchange',
                major: 'General Study',
                startDate: '2016.01',
                endDate: '2016.06'
            }]
        };
    },
    components: {
        'section-title': sectionTitle,
        'each-education': eachEducation
    }
};

var eachWork = {
    template: "\n        <div class=\"each-work\" :style=\"{ 'background-image': 'url(' + img + ')'}\" @click=viewEachWork>\n            <div class='work-cover'>\n                <div class=\"work-info-wrap\">\n                    <h3 class='work-name'>{{name}}</h3>\n                    <span class='current-type'><i :class=\"typeIconCode[type]\"></i></span>\n                </div>\n            </div>\n        </div>\n    ",
    props: ['img', 'name', 'descrip', 'link', 'tags', 'id', 'type'],
    data: function data() {
        return {
            typeIconCode: {
                'web': 'fa fa-code',
                'video': 'fa fa-play-circle',
                'design': 'fa fa-paint-brush'
            }
        };
    },
    methods: {
        viewEachWork: function viewEachWork() {
            var data = JSON.parse(JSON.stringify(this.$props));
            this.$emit('view-work-detail', data);
        }
    }

};

var progressBar = {
    template: "\n        <div class='progress-out' ref='progressBar'>\n            <div class=\"progress-in\" :style=\"{width: (viewLength/totalLength) * 100 + '%', left: (scrolledDistance / totalLength) * 100 + '%'}\"></div>\n        </div>\n    ",
    props: ['totalLength', 'viewLength', 'scrolledDistance'],
    data: function data() {
        return {
            progressBarLength: 0
        };
    },
    computed: {
        calcScrollDistance: function calcScrollDistance() {}
    },
    mounted: function mounted() {
        var width = this.$refs.progressBar.getBoundingClientRect().width;
        this.progressBarLength = width;
    }
};

var sideBarInWorkDetail = {
    template: "\n        <aside class='sideBar'>\n            <ul>\n                <li v-for='i in allwork' :class=\"{'header-bar': i.id === currentId}\" @click='switchWork(i.id)' :data-id=i.id>{{i.name}}</li>\n            </ul>\n        </aside>\n    ",
    data: function data() {
        return {};
    },
    methods: {
        switchWork: function switchWork(data) {
            var _this2 = this;

            this.$props.allwork.map(function (i) {
                if (data === i.id) {
                    _this2.$emit('switch-work-detail', i);
                }
            });
        }
    },
    props: ['allwork', 'currentId'],
    mounted: function mounted() {}
};

var workDetail = {
    template: "\n            <div class='work-detail'>\n                <section class='current-content-wrap'>\n                    <div class='title-wrap'>\n                        <h2 class='title'>{{currentWork.name}}</h2>\n                        <span class='t-color current-work-type'>{{currentWork.type}}</span>\n                        <div class=\"work-link-wrap\" v-if=\"currentWork.type==='web'\">\n                            <a class='link-preview' :href='currentWork.link.preview' title=\"preivew\"><span><i class='fa fa-eye'></i>preview</span></a>\n                            <a :href='currentWork.link.repo' title=\"repo\"><span><i class='fa fa-github'></i>repo</span></a>\n                        </div>\n                        <div class=\"work-link-wrap\" v-if=\"currentWork.type==='video'\">\n                            <a class='link-preview' :href='currentWork.link.preview' title=\"YouTube\"><span><i class='fa fa-youtube'></i>preview</span></a>\n                            <a :href='currentWork.link.repo' title=\"repo\"><span><i class='fa fa-github'></i>repo</span></a>\n                        </div>\n                        <ul class='tags'>\n                            <li v-for='i in currentWork.tags'>{{i}}</li>\n                        </ul>\n                    </div>\n                    <div class='work-content'>\n                        <div v-for=\"i in currentWork.descrip\" :class=\"{'each-descrip-img': i.type==='img'}\">\n                            <img :src='i.content' v-if=\"i.type==='img'\">\n                            <p v-html='i.content' v-if=\"i.type==='text'\"></p>\n                        </div>\n                    </div>\n                </section>\n                <side-bar-in-work-detail :allwork=allwork :currentId=currentWork.id @switch-work-detail=\"switchWork\"></side-bar-in-work-detail>\n                <div class=\"close\" @click=\"$emit('close-detail')\">\n                    <span><i class=\"fa fa-times\"></i></span>\n                </div>\n            </div>\n    ",
    data: function data() {
        return {
            currentWork: {}
        };
    },
    props: ['detail', 'allwork'],

    components: {
        "side-bar-in-work-detail": sideBarInWorkDetail
    },
    methods: {
        switchWork: function switchWork(data) {
            this.currentWork = data;
        }
    },
    beforeMount: function beforeMount() {
        this.currentWork = this.$props.detail;
    }
};

var switchType = {
    template: "\n        <div class='switch-type clearfix'>\n            <ul class='type-wrap'>\n                <li :class=\"{'active': i === typeChosen}\" v-for='(i, index) in types' @click='switchType(i)'>{{i}}<span v-if='index !== types.length - 1' class='type-divide'> /</span></li>\n            </ul>\n        </div>\n    ",
    data: function data() {
        return {
            typeChosen: 'all'
        };
    },
    methods: {
        switchType: function switchType(data) {
            this.typeChosen = data;
            this.$emit('switch-type', data);
        }
    },
    props: ['types']
};

var workSection = {
    template: "\n        <div class=\"work-section each-section\" :style=\"{background: sectionColor}\">\n            <switch-type :types=workTypes @switch-type=switchType></switch-type>\n             <section-title :order=order :name=sectionName></section-title>\n             <div class='section-content' ref='works'>\n                <each-work v-for='(i, index) in filteredWorks' :key=index v-bind='i' @view-work-detail=viewWorkDetail></each-work>\n             </div>\n             <button class='next-btn' @click=scrollRight><i class='fa fa-angle-right'></i></button>\n             <progress-bar :totalLength=allWorkLength :viewLength=viewLength :scrolledDistance=scrolledDistance></progress-bar>\n        </div>\n    ",

    data: function data() {
        return {
            sectionColor: '#F5F5F5',
            order: '04',
            sectionName: 'Portfolio',
            workTypes: ['all', 'web', 'design', 'video'],
            filteredWorks: [],
            works: [],
            allWorkLength: 0,
            viewLength: 20,
            scrolledDistance: 0
        };
    },
    methods: {
        detectScrollDistance: function detectScrollDistance() {
            var value = this.getScrollDistance();
            this.scrolledDistance = this.initialDistanceBeforeScroll - value;
        },
        getScrollDistance: function getScrollDistance() {
            return document.querySelectorAll('.each-work')[0].getBoundingClientRect().left;
        },
        getInitialScrollDistance: function getInitialScrollDistance() {
            return document.querySelector('.section-content').getBoundingClientRect().left;
        },
        getBarStyle: function getBarStyle() {
            var allLength = this.$refs.works.scrollWidth;
            var viewLength = this.$refs.works.getBoundingClientRect().width;
            this.viewLength = viewLength;
            this.allWorkLength = allLength;
        },
        scrollRight: function scrollRight() {
            this.scrollHorizontal(this.$refs.works, this.$refs.works.scrollLeft + 280, 500);
            // this.$refs.works.scrollLeft = this.$refs.works.scrollLeft + 280;
        },
        viewWorkDetail: function viewWorkDetail(data) {
            this.$emit('view-work-detail', data);
        },
        scrollHorizontal: function scrollHorizontal(node, position, timeout) {
            var scrollLeft = node.scrollLeft,
                direction = position - scrollLeft > 0 ? 1 : -1,
                distance = Math.abs(position - scrollLeft),
                split = distance / 50,
                _timeout;

            if (position !== scrollLeft) {
                timeout = timeout || 1000;
                split *= direction;

                _timeout = setInterval(function () {
                    scrollLeft += split;
                    distance -= Math.abs(split);
                    if (0 >= distance) {
                        node.scrollLeft = position;
                        clearInterval(_timeout);
                        _timeout = null;
                    } else {
                        node.scrollLeft = scrollLeft;
                    }
                }, timeout / 100);
            }
        },
        switchType: function switchType(data) {
            if (data.toLowerCase() === 'all') {
                this.filteredWorks = this.works;
            } else {
                var results = this.works.filter(function (i) {
                    if (i.type.toLowerCase() === data.toLowerCase()) {
                        return i;
                    }
                });
                this.filteredWorks = results;
            }
        }
    },
    components: {
        'section-title': sectionTitle,
        'each-work': eachWork,
        'progress-bar': progressBar,
        'switch-type': switchType
    },
    beforeMount: function beforeMount() {
        this.works = _data.cvData.works;
        // use all works by default
        this.filteredWorks = this.works;
    },
    mounted: function mounted() {
        var _this3 = this;

        // get alllength and view length of the work
        this.getBarStyle();

        // watch the work scroll
        this.$refs.works.onscroll = this.detectScrollDistance;
        // get the initial left value to calculate how long scrolled
        this.initialDistanceBeforeScroll = this.getInitialScrollDistance();

        // watch the browser resize to recalculate the initial left value
        window.addEventListener('resize', function () {
            _this3.getBarStyle();
            _this3.initialDistanceBeforeScroll = _this3.getInitialScrollDistance();
        });

        // pass all work data to root
        this.$emit('all-work', this.works);
    },
    updated: function updated() {
        // update the scrollbar visual everytime change the work content
        this.getBarStyle();
    }
};

var creditWidget = {
    template: "\n        <div class='credit-wrap'>\n            <p>Credit to XXXXX's Design on Dribbble</p>\n            <div class='close' @click=\"$emit('closeWidget')\">X</div>\n        </div>\n    "

};

var footer = {
    template: "\n        <footer :style=\"{background: sectionColor}\">\n            <div class=\"footer-content\">\n                <p>Get in touch with me!<a :href=\"'mailto:' + email\">Click Here</a></p>\n            </div>\n            <div class=\"footer-footer\">\n                <ul class=\"social-media\">\n                    <li v-for='i in media'><a :href='i.link'>{{i.name}}</a></li>\n                </ul>\n\n                <img :src=logoImg>\n\n                <p class='creat-stamp'>&copy 2018 Made in China</p>\n\n                <div class=\"credit-sign\" @click='openCredit'>?</div>\n                <transition name='jump'>\n                    <credit-widget v-if=\"creditOpened\" @closeWidget=closeWidget></credit-widget>\n                </transition>\n\n            </div>\n        </footer>\n    ",
    data: function data() {
        return {
            sectionColor: '#202020',
            email: 'sy2729@tc.columbia.edu',
            logoImg: './img/logo.png',
            media: [{
                name: 'Blog',
                link: 'https://sy2729.github.io/'
            }, {
                name: 'Github',
                link: 'https://github.com/sy2729'
            }],
            creditOpened: false
        };
    },
    methods: {
        openCredit: function openCredit() {
            this.creditOpened = true;
        },
        closeWidget: function closeWidget() {
            this.creditOpened = false;
        }
    },

    components: {
        'credit-widget': creditWidget
    }

    // initialize Vue
};new Vue({
    el: "#app",
    data: {
        workDetail: {},
        workDetailOpened: false,
        allWorks: null
    },

    methods: {
        viewWorkDetail: function viewWorkDetail(data) {
            this.workDetail = data;
            this.workDetailOpened = true;
            document.body.style.overflow = 'hidden';
        },
        closeDetail: function closeDetail() {
            this.workDetailOpened = false;
            document.body.style.overflow = 'unset';
        },
        getAllWork: function getAllWork(data) {
            this.allWorks = data;
        }
    },

    computed: {},

    components: {
        'header-section': header,
        'skill-section': skillSection,
        'experience-section': experienceSection,
        'education-section': educationSection,
        'work-section': workSection,
        'footer-section': footer,
        'work-detail': workDetail
    }
});
},{"./data":"data.js","./index.scss":"index.scss"}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '62170' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/cv-practice-1.dd048d93.map