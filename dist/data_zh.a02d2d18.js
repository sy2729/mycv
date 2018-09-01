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
})({"data_zh.js":[function(require,module,exports) {
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var cvData = {
    header: {
        greeting: '你好，我是',
        name: '袁帅'
    },
    experiences: {
        sectionName: '工作经验',
        allExperiences: [{
            logo: './img/experience/tc.jpg',
            role: '课程助教 - JavaScript 编程',
            company: '哥伦比亚大学教育学院',
            beginDate: '2018.09',
            endDate: '现在',
            activeState: true,
            detail: {
                descrip: ['协助教师组织教学和课堂，并批改课程作业。', '帮助学生解决bug，阐述并帮其理解基本的编程思维，尤其是在JavaScript的实际运用上。', '创建用于课堂讲解的展示项目，以辅助课堂教学，帮助传递编程概念和作为JavaScript和交互式网页编程高阶进阶的初览。']
            }
        }, {
            logo: './img/experience/atos.png',
            role: '用户体验设计实习生（UX Design Intern）',
            company: '源讯科技（Atos）- 美国',
            beginDate: '2018.05',
            endDate: '现在',
            activeState: true,
            detail: {
                descrip: ['和其他设计师协作并提供PC客户端和移动端从概念图到高保真原型图等一系列设计。', '和开发团队协作并提供用户需求和问题方面的支持。', '设计包括宣传手册，宣传网站，以及视频等一系列宣传材料。', '协助用户调研，收集用户回馈以提升产品设计和体验。']
            }
        }, {
            logo: './img/experience/tc.jpg',
            role: '网络开发实习',
            company: '哥伦比亚大学教育学院',
            beginDate: '2018.03',
            endDate: '2018.05',
            activeState: false,
            detail: {
                descrip: ["协助教育学院网络办公室更新官网网站，通过T4内容管理系统完成从旧网站到新网站模版内容的迁移。", '协助进行质量测试和内容管理测试。', '进行网站样式测试和用户体验提升，提供相关CSS解决方案。']
            }
        }]
    },
    skills: {
        sectionName: '技能栈',
        description: '我是一个网页开发和用户界面设计的狂热爱好者，时刻关注设计和网页开发领域的最新趋势。我在原型设计和前端开发方面积累了一些经验，对相应软件和编程语言的较为熟练。时刻保持对审美的高度追求和严苛标准，我始终要求自己能够在和团队和客户的协作中准确地表达自己的想法。',
        allSkills: [{
            name: 'HTML & CSS & JavaSCript',
            extent: '70'
        }, {
            name: 'UX / UI Design - 用户体验和用户界面设计',
            extent: '60'
        }, {
            name: 'Videography - 视频拍摄剪辑',
            extent: '60'
        }, {
            name: 'Vue / Riot / Firebase / MVC ...',
            extent: '70'
        }]
    },
    educations: {
        sectionName: '教育经历',
        allEducations: [{
            school: '哥伦比亚大学教育学院',
            degree: '硕士',
            major: '教育技术与媒体',
            startDate: '2017.09',
            endDate: '2019.05',
            activeState: true
        }, {
            school: '华中师范大学',
            degree: '学士',
            major: '汉语国际教育',
            startDate: '2013.09',
            endDate: '2017.06'
        }, {
            school: '加州大学伯克利分校',
            degree: '交换生',
            major: '通识学科',
            startDate: '2016.01',
            endDate: '2016.06'
        }]
    },
    works: {
        sectionName: '作品集',
        allWorks: [{
            name: '仿网易云音乐（移动端）',
            link: {
                preview: 'https://sy2729.github.io/music-app/',
                repo: 'https://github.com/sy2729/music-app'
            },
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382448/cv-img/work/music/music-1.jpg',
            id: 1,
            descrip: [{
                content: '\u53C2\u7167\u7F51\u6613\u4E91\u97F3\u4E50\u7684\u79FB\u52A8\u7248\u672C\uFF0C\u8FD9\u662F\u4E00\u4E2A\u4F7F\u7528jQuery\u5B9E\u73B0\u7684\u7B80\u5355\u590D\u523B\u3002',
                type: 'text'
            }, {
                // content: './img/work/music/music-1.jpeg',
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382448/cv-img/work/music/music-1.jpg',
                type: 'img'
            }, {
                content: '<p class=\'t-center\'>\u5B9E\u73B0\u67E5\u770B\u6B4C\u5355\u5217\u8868\u548C\u6700\u65B0\u6B4C\u66F2\u529F\u80FD</p>',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382449/cv-img/work/music/music-2.jpg',
                type: 'img'
            }, {
                content: '<p class=\'t-center\'>\u6B4C\u5355\u754C\u9762\u5C55\u793A</p>',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382447/cv-img/work/music/music-3.jpg',
                type: 'img'
            }, {
                content: '<p class=\'t-center\'>\u6B4C\u66F2\u64AD\u653E\u754C\u9762\u5C55\u793A\uFF0C\u6700\u7ECF\u5178\u7684\u2014\u2014\u8F6C\u52A8\u7684\u9ED2\u8272\u5531\u7247</p>',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382447/cv-img/work/music/music-4.jpg',
                type: 'img'
            }, {
                content: '也有歌曲搜索，展示歌词，自动滚动歌词（仅支持带有时间轴格式的歌词），切换前一首／后一首等功能。',
                type: 'text'
            }, {
                content: '歌曲资源和数据通过一个jQuery构建的简单内容管理后台界面管理。用户可以进行增删查改歌曲的数据。这些功能通过<a href="https://www.qiniu.com/">七牛云服务</a> and <a href="https://leancloud.cn/">leanCloud服务</a>实现。',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382452/cv-img/work/music/music-5.png',
                type: 'img'
            }, {
                content: '<p class=\'t-center\'>\u6B4C\u5355\u7BA1\u7406\u9762\u677F\u754C\u9762</p>',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382454/cv-img/work/music/music-6.png',
                type: 'img'
            }, {
                content: '<p class=\'t-center\'>\u5C06\u6B4C\u66F2\u6DFB\u52A0\u5230\u6B4C\u5355</p>',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382454/cv-img/work/music/music-7.png',
                type: 'img'
            }],
            tags: ['网页开发', 'jQuery', '动态REM'],
            type: 'web'
        }, {
            name: 'Atos OneSource 起飞页',
            link: {
                preview: 'https://sy2729.github.io/atosonesource-market/dist/MARKET.html',
                repo: 'https://github.com/sy2729/atosonesource-market'
            },
            img: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_60/v1535382853/cv-img/work/atos-landing/atos-landing-2.png',
            id: 2,
            descrip: [{
                content: '\u8FD9\u662F<a href="http://www.atosonesource.com/">Atos OneSource</a> \u4EA7\u54C1\u8D77\u98DE\u9875\u7684\u4E00\u90E8\u5206. \u539F\u7F51\u9875\u901A\u8FC7\u81EA\u52A9\u5EFA\u7AD9\u5DE5\u5177AppDrag\u642D\u5EFA\uFF0C\u4F46\u662F\u4E3A\u4E86\u5B9E\u73B0\u4E00\u4E9B\u66F4\u9AD8\u7EA7\u3001\u53EF\u81EA\u5B9A\u4E49\u7684\u529F\u80FD\u548C\u66F4\u4F73\u7684\u89C6\u89C9\u6548\u679C\uFF0C\u6211\u4EEC\u51B3\u5B9A\u91C7\u53D6\u4EE3\u7801\u5F00\u53D1\u3002',
                type: 'text'
            }, {
                content: '\u6700\u521D\u7531jQuery\u642D\u5EFA\uFF0C\u8FD1\u671F\u6B63\u5728\u4F7F\u7528Vue\u91CD\u6784\u3002',
                type: 'text'
            }, {
                // content: `./img/work/atos-landing/atos-landing-1.png`,
                content: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_60/v1535382860/cv-img/work/atos-landing/atos-landing-1.png',
                type: 'img'
            }],
            tags: ['网页开发', '用户体验设计', 'Atos'],
            type: 'web'
        }, {
            name: 'Atos Digital花瓣面板开发',
            link: {
                preview: 'https://sy2729.github.io/digital-dashboard-demo/',
                repo: 'https://github.com/sy2729/digital-dashboard-demo/'
            },
            // img: './img/work/atos-digital/atos-digital-dashboard-1.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383123/cv-img/work/atos-digital/atos-digital-dashboard-1.png',
            id: 3,
            descrip: [{
                content: '\u8FD9\u662F<a href="www.atosonesourceweb.com/">Atos OneSource Dashboard</a>\u7528\u6237\u7CFB\u7EDF\u7684\u9996\u9875\u3002\u5BA2\u6237\u53EF\u4EE5\u5728\u6B64\u7F51\u7AD9\u7BA1\u7406\u67E5\u770B\u65E5\u5E38\u7684KPI\u3002\u6211\u4EEC\u7684\u8BBE\u60F3\u662F\u5B9E\u73B0\u4E00\u4E2A\u53EF\u89C6\u5316\u7684\u6570\u636E\u7BA1\u7406\u754C\u9762\uFF0C\u540C\u65F6\u51FA\u4E8E\u7528\u6237\u53CB\u597D\u5EA6\u7684\u8003\u8651\uFF0C\u6240\u4EE5\u6700\u7EC8\u9009\u62E9\u4E86\u82B1\u74E3\u610F\u8C61\u6765\u4EE3\u8868\u7BA1\u7406\u9762\u677F\u3002',
                type: 'text'
            }, {
                content: '\u548C\u5F00\u53D1\u56E2\u961F\u534F\u4F5C\uFF0C\u7531\u6211\u63D0\u4F9B\u524D\u7AEF\u89C6\u89C9\u754C\u9762\u7684\u652F\u6301\uFF0C\u5E76\u5B9E\u73B0\u79FB\u52A8\u7AEF\u7684\u81EA\u9002\u5E94\u3002',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383123/cv-img/work/atos-digital/atos-digital-dashboard-1.png',
                type: 'img'
            }],
            tags: ['网页开发', '用户体验设计', 'Atos', 'CSS'],
            type: 'web'
        }, {
            name: 'Care Guru',
            link: {
                preview: 'https://sy2729.github.io/careGuru/',
                repo: 'https://github.com/sy2729/careGuru'
            },
            // img: './img/work/careguru/careguru-1.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-1.png',
            id: 3,
            descrip: [{
                content: '\u8FD9\u662F\u4E00\u4E2A\u5C0F\u7EC4\u534F\u4F5C\u7684\u8BFE\u7A0B\u4F5C\u4E1A\u3002\u6211\u4EEC\u6240\u8981\u5448\u73B0\u7684\u60F3\u6CD5\u662F\u201C\u7F51\u7EDC\u6280\u672F\u6240\u80FD\u5B9E\u73B0\u7684\u4FDD\u9669\u77E5\u8BC6\u6559\u80B2\u201D\u3002',
                type: 'text'
            }, {
                content: '\u6211\u4EEC\u4E4B\u4E2D\u6709\u8BB8\u591A\u5BF9\u7F8E\u56FD\u4FDD\u9669\u5236\u5EA6\u975E\u5E38\u964C\u751F\u7684\u540C\u5B66\uFF08\u5305\u62EC\u6211\u81EA\u5DF1\uFF09\uFF0C\u800C\u5728\u9047\u5230\u5371\u6025\u60C5\u51B5\u65F6\uFF0C\u5BF9\u4FDD\u9669\u7684\u591A\u4E00\u4E9B\u4E86\u89E3\u53EF\u80FD\u4F1A\u8BA9\u4F60\u5C11\u5F88\u591A\u9EBB\u70E6\u3002\u80FD\u591F\u8BA9\u4F7F\u7528\u8005\u5BF9\u4FDD\u9669\u4E2D\u7684\u57FA\u672C\u5E38\u8BC6\u6709\u6240\u4E86\u89E3\u662F\u6211\u4EEC\u80FD\u7F51\u7AD9\u7684\u76EE\u7684\u3002',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-1.png',
                type: 'img'
            }, {
                content: '\u6839\u636E\u8BFE\u7A0B\u8981\u6C42\uFF0C\u6211\u4EEC\u4F7F\u7528Riot\u4F5C\u4E3A\u524D\u7AEFMVC\u6846\u67B6\uFF0CGoogle Firebase\u4F5C\u4E3A\u540E\u53F0\u6570\u636E\u5E93\u3002',
                type: 'text'
            }, {
                content: '<p class=\'t-center\'>\u7528\u6237\u767B\u9646\u540E\u7684\u754C\u9762</p>',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383183/cv-img/work/careguru/careguru-2.png',
                type: 'img'
            }, {
                content: '<p class=\'t-center\'>\u77E5\u8BC6\u5361\u7247</p>',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-3.png',
                type: 'img'
            }],
            tags: ['网页开发', 'Riot.js', 'Firebase'],
            type: 'web'
        }, {
            name: '动态作画',
            link: {
                preview: 'https://sy2729.github.io/dynamic-drawing/',
                repo: 'https://github.com/sy2729/dynamic-drawing'
            },
            // img: './img/work/dynamic-drawing/dynamic-drawing-1.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383255/cv-img/work/dynamic-drawing/dynamic-drawing-1.png',
            id: 3,
            descrip: [{
                content: '\u4E00\u4E2A\u7B80\u5355\u7684\u52A8\u6001\u4F5C\u753B\u52A8\u6548 -- \u5C55\u793A\u4E86\u4EE3\u7801\u4FEE\u6539\u5E26\u6765\u89C6\u89C9\u53D8\u5316\u7684\u8FC7\u7A0B\uFF0C\u4E5F\u662F\u65E5\u5E38\u521B\u4F5CCSS\u7684\u8FC7\u7A0B\u3002\u8FD9\u662F\u4E00\u4E2A\u5C55\u793ACSS\u53CA\u5176\u9B45\u529B\u7684\u4E00\u4E2A\u5F88\u597D\u7684\u65B9\u5F0F\u3002\u8FD9\u4E2A\u9879\u76EE\u8BA9\u6211\u611F\u89C9\u5230\u7F51\u7EDC\u6280\u672F\u4E2D\u4E00\u4E9B\u72EC\u7279\u7684\u6559\u80B2\u6280\u5DE7\uFF0C\u7528\u4E8E\u5C55\u793A\u62BD\u8C61\u60F3\u6CD5\u4EE5\u53CA\u751F\u52A8\u7684\u7F16\u7A0B\u4EA4\u4E92\u3002',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383255/cv-img/work/dynamic-drawing/dynamic-drawing-2.png',
                type: 'img'
            }],
            tags: ['网页开发', 'CSS', 'JavaScript'],
            type: 'web'
        }, {
            name: 'Canvas画板',
            link: {
                preview: 'https://sy2729.github.io/canvas-draw/',
                repo: 'https://github.com/sy2729/canvas-draw'
            },
            // img: './img/work/canvas-draw/canvas-draw-2.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383299/cv-img/work/canvas-draw/canvas-draw-2.png',
            id: 3,
            descrip: [{
                content: '<p class="t-center">\u4E00\u4E2A\u7528\u6237\u53EF\u4EE5\u4F5C\u753B\u5E76\u4E14\u4FDD\u5B58\u8349\u7A3F\u5230\u672C\u5730\u56FE\u7247\u7684\u7B80\u5355\u5728\u7EBF\u753B\u677F\u3002\u5177\u6709\u8C03\u6574\u7B14\u753B\u7C97\u7EC6\uFF0C\u989C\u8272\u4EE5\u53CA\u6A61\u76AE\u64E6\u548C\u5168\u90E8\u6E05\u9664\u7B49\u529F\u80FD\u3002\u4F7F\u7528\u539F\u751FCanvas API\u5B8C\u6210\u3002</p>',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383299/cv-img/work/canvas-draw/canvas-draw-1.png',
                type: 'img'
            }],
            tags: ['网页开发', 'Canvas'],
            type: 'web'
        }, {
            name: '哥大教育学院官网辅助设计',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383418/cv-img/work/tc-site/tc-site-1.png',
            id: 3,
            descrip: [{
                content: '\u6211\u5728\u54E5\u5927\u6559\u80B2\u5B66\u9662\u7F51\u7EDC\u529E\u516C\u5BA4\u7684\u4E3B\u8981\u4EFB\u52A1\u662F\u8FDB\u884C\u5185\u5BB9\u8FC1\u79FB\uFF0C\u6D4B\u8BD5<a href="tc.edu">\u6559\u80B2\u5B66\u9662\u65B0\u5B98\u7F51</a>,\u4ECE\u7528\u6237\u4F53\u9A8C\u89D2\u5EA6\u63D0\u4F9B\u53CD\u9988\u5E76\u4E14\u63D0\u4F9B\u4E00\u4E9B\u8BBE\u8BA1\u65B9\u9762\u7684CSS\u89E3\u51B3\u65B9\u6848\u3002',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383425/cv-img/work/tc-site/tc-site-2.png',
                type: 'img'
            }],
            tags: ['用户体验设计', 'CSS'],
            type: 'design'
        }, {
            name: 'Code Battle卡片桌游',
            // img: './img/work/game-card/game-card-2.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383492/cv-img/work/code-battle/game-card-2.png',
            id: 3,
            link: {
                preview: 'https://sy2729.github.io/gameCaard/',
                repo: 'https://github.com/sy2729/gameCaard'
            },
            descrip: [{
                content: '\u8FD9\u662F\u6E38\u620F\u8BBE\u8BA1\u8BFE\u4E0A\u7531\u6211\u548C\u53E6\u5916\u4E24\u540D\u540C\u5B66\u8054\u5408\u8BBE\u8BA1\u7684\u5361\u7247\u684C\u6E38\u3002\u6211\u4EEC\u642D\u5EFA\u6B64\u7F51\u7AD9\u4F5C\u4E3A\u5BA3\u4F20\u9875\u548C\u6E38\u620F\u89C4\u5219\u624B\u518C\u3002',
                type: 'text'
            }, {
                content: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_49/v1535383509/cv-img/work/code-battle/game-card-1.png',
                type: 'img'
            }],
            tags: ['用户体验设计', '网页开发', 'Riot.js'],
            type: 'web'
        }, {
            name: 'Atos Aviva 服务器信息查询用户界面设计',
            // img: './img/work/atos-aviva/atos-aviva-2.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383565/cv-img/work/atos-aviva/atos-aviva-2.png',
            id: 3,
            descrip: [{
                content: '\u6211\u4EEC\u9700\u8981\u4E3A\u5BA2\u6237\u63D0\u4F9B\u670D\u52A1\u5668\u4FE1\u606F\u53CA\u76F8\u5173\u4FE1\u606F\u7D22\u5F15\u7684\u9875\u9762\u3002\u9664\u4E86\u540D\u79F0\u7D22\u5F15\u4E4B\u5916\uFF0C\u8FD8\u9700\u8981\u63D0\u4F9B\u591A\u6761\u4EF6\u590D\u6742\u7D22\u5F15\u7684\u529F\u80FD\u3002',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383565/cv-img/work/atos-aviva/atos-aviva-2.png',
                type: 'img'
            }, {
                content: '\u670D\u52A1\u5668\u7684\u540D\u79F0\u548C\u8F6F\u4EF6\u7684\u540D\u79F0\u662F\u591A\u5BF9\u591A\u7684\u6620\u5C04\u5173\u7CFB\uFF0C\u548C\u5176\u4ED6\u76F8\u5173\u5C5E\u6027\uFF0C\u4F8B\u5982\u62E5\u6709\u8005\u548C\u670D\u52A1\u540D\u79F0\u7684\u5173\u7CFB\u4E00\u6837\uFF0C\u5BFC\u81F4\u4E86\u8BBE\u8BA1\u7D22\u5F15\u9762\u677F\u65F6\u76F8\u8F83\u4E8E\u5E38\u89C4\u641C\u7D22\u9875\u9762\u7684\u8BBE\u7F6E\u7A0D\u4E3A\u590D\u6742\u4E00\u4E9B\u3002',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383569/cv-img/work/atos-aviva/atos-aviva-4.png',
                type: 'img'
            }, {
                content: '\u6211\u4EEC\u82B1\u8D39\u4E86\u5F88\u591A\u65F6\u95F4\u548C\u5BA2\u6237\u4EA4\u6D41\uFF0C\u4EE5\u5F04\u6E05\u4ED6\u4EEC\u60F3\u8981\u4EE5\u53CA\u4ED6\u4EEC\u771F\u6B63\u9700\u8981\u7684\u529F\u80FD\uFF0C\u548C\u600E\u6837\u7684\u89C6\u89C9\u8868\u8FBE\u548C\u7ED3\u6784\u6700\u9002\u5408\u8FD9\u6837\u7684\u529F\u80FD\u9700\u6C42\u3002',
                type: 'text'
            }, {
                content: '<p class=\'t-center\'>the sketch working file screenshot</p>',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383569/cv-img/work/atos-aviva/atos-aviva-3.png',
                type: 'img'
            }],
            tags: ['用户体验设计', 'Atos'],
            type: 'design'
        }, {
            name: 'Atos 任务状态管理（Service Delivery Management）界面',
            // img: './img/work/atos-sdm/atos-sdm-1.png',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-1.png',
            id: 3,
            descrip: [{
                content: '\u8FD9\u662F\u4E00\u4E2A\u7C7B\u4F3C\u4E8E\u7535\u5B50\u90AE\u7BB1\u754C\u9762\u7684\u8BBE\u8BA1\u3002\u76EE\u6807\u7528\u6237\u4E3AAtos\u5185\u90E8\u96C7\u5458\u3002\u7528\u6237\u89D2\u8272\u5305\u542B\u7BA1\u7406\u8005\u548C\u6267\u884C\u8005\u4E24\u65B9\u3002',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-1.png',
                type: 'img'
            }, {
                content: '有别于通常的邮箱应用，这款应用针对信息（也称邮件／通知）设计了5种状态，在两种用户角色的客户端都有不同的视觉呈现。',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-3.png',
                type: 'img'
            }, {
                content: '<p class=\'t-center\'>\u62D2\u7EDD\u6216\u8005\u63A5\u6536\u5E76\u56DE\u590D\u6765\u81EA\u7BA1\u7406\u8005\u7684\u8BF7\u6C42\u3002</p>',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-4.png',
                type: 'img'
            }, {
                content: '<p class=\'t-center\'>\u7528\u6237\u4EA4\u4E92\u6D41\u7A0B\u56FE</p>',
                type: 'text'
            }, {
                content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-2.png',
                type: 'img'
            }],
            tags: ['用户体验设计', 'Atos'],
            type: 'design'
        }, {
            name: '我来自何方',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535384138/cv-img/work/where-am-I-from/where-am-I-from.png',
            id: 3,
            youtubeID: '8kWDH6cejB4',
            biliID: '14943823',
            link: {
                youtube: 'https://youtu.be/8kWDH6cejB4',
                bili: 'https://www.bilibili.com/video/av14943823'
            },
            descrip: [{
                content: '\u54E5\u5927\u6559\u80B2\u5B66\u9662\u6587\u5316\u3001\u5A92\u4F53\u548C\u6559\u80B2\u8BFE\u5802\u4E0A\u4E00\u4E2A\u8BFE\u7A0B\u4F5C\u4E1A\u3002\u4F9D\u636E\u8BD7\u4EBAGeorge Ella Lyon\u521B\u4F5C\u7684\u8BD7\u2018\u6211\u6765\u81EA\u5DF1\u4F55\u65B9\u2019\uFF08Where Am I From\uFF09\u8FDB\u884C\u5A92\u4F53\u521B\u4F5C\u3002\u5979\u53D1\u8D77\u4E86\u5728\u5168\u4E16\u754C\u8303\u56F4\u5185\u641C\u96C6\u56F4\u7ED5\u8FD9\u4E00\u4E3B\u9898\u8FDB\u884C\u7684\u6587\u827A\u521B\u4F5C\u7684\u6D3B\u52A8\uFF0C\u63A2\u8BA8\u6BCF\u4E00\u72EC\u7ACB\u4E2A\u4F53\u7684\u8D77\u6E90\u548C\u5185\u7701\u3002',
                type: 'text'
            }, {
                content: {
                    youtube: '',
                    bili: ''
                },
                type: 'video'
            }],
            tags: ['视频', '生活'],
            type: 'video'
        }, {
            name: '媒体和生活',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535431869/cv-img/work/media-life/media-life.png',
            id: 3,
            youtubeID: 'dmJO491mVao',
            biliID: '',
            link: {
                youtube: 'https://youtu.be/8kWDH6cejB4',
                bili: 'https://www.bilibili.com/video/av14943823'
            },
            descrip: [{
                content: '\u54E5\u5927\u6559\u80B2\u5B66\u9662\u6587\u5316\u3001\u5A92\u4F53\u548C\u6559\u80B2\u8BFE\u5802\u4E0A\u4E00\u4E2A\u8BFE\u7A0B\u4F5C\u4E1A\u3002\u4E00\u4E2A\u5173\u4E8E\u6765\u81EA\u79FB\u52A8\u8BBE\u5907\u7684\u7206\u70B8\u4FE1\u606F\u548C\u751F\u6D3B\u672C\u8D28\u7684\u601D\u8003\u3002\u5A92\u4F53\u662F\u600E\u6837\u5851\u9020\u6211\u4EEC\u548C\u6211\u4EEC\u793E\u4F1A\u7684\u751F\u6D3B\u4E60\u60EF\u3002',
                type: 'text'
            }, {
                content: {
                    youtube: '',
                    bili: ''
                },
                type: 'video'
            }],
            tags: ['视频', '生活'],
            type: 'video'
        }, {
            name: '环保之旅',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535431905/cv-img/work/Eenvironmentalism-trip/maxresdefault.webp',
            id: 3,
            youtubeID: 'hGptZmEDqkY',
            biliID: '13016424',
            link: {
                youtube: 'https://youtu.be/8kWDH6cejB4',
                bili: 'https://www.bilibili.com/video/av14943823'
            },
            descrip: [{
                content: '2017\u5E748\u6708\uFF0C\u6211\u7531\u670B\u53CB\u4ECB\u7ECD\uFF0C\u4EE5\u968F\u884C\u6444\u5F71\u5E08\u7684\u8EAB\u4EFD\u968F\u4E00\u652F\u7531\u5C0F\u5B66\u751F\u7EC4\u6210\u7684\u961F\u4F0D\u6DF1\u5165\u978D\u5B50\u6CB3\u81EA\u7136\u4FDD\u62A4\u533A\u53BB\u63A2\u7D22\u81EA\u7136\u7684\u5965\u79D8\u548C\u7F8E\u4E3D\u3002\u8FD9\u6B21\u65C5\u884C\u5B9E\u5219\u662F\u4E00\u6B21\u81EA\u7136\u73AF\u4FDD\u6559\u80B2\uFF0C\u7531\u978D\u5B50\u6CB3\u81EA\u7136\u4FDD\u62A4\u533A\u7684\u5DE5\u4F5C\u4EBA\u5458\u4E5F\u662F\u8D1F\u8D23\u4FDD\u62A4\u533A\u6559\u80B2\u6D3B\u52A8\u7EC4\u7EC7\u7684\u6885\u5B50\u5E26\u9886\u3002\u6D3B\u52A8\u7684\u53D1\u8D77\u8005\u662F\u73AF\u5883\u975E\u76C8\u5229\u4FDD\u62A4\u6559\u80B2\u673A\u6784\u53D1\u8D77\u3002\u65C5\u884C\u7684\u76EE\u7684\u5728\u4E8E\u4EE5\u4E00\u79CD\u65C5\u884C\u7684\u65B9\u5F0F\u6559\u80B2\u5B69\u5B50\u5982\u4F55\u53CB\u597D\u5730\uFF0C\u73AF\u4FDD\u5730\u4E0E\u81EA\u7136\u76F8\u5904\u3002',
                type: 'text'
            }, {
                content: {
                    youtube: '',
                    bili: ''
                },
                type: 'video'
            }],
            tags: ['视频', '环保'],
            type: 'video'
        }, {
            name: '采访——哥大女孩',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433480/cv-img/work/interview-columbia/interview-columbia.png',
            id: 3,
            youtubeID: 'ALUSbmb9kP4',
            biliID: '16099951',
            link: {
                youtube: 'https://youtu.be/8kWDH6cejB4',
                bili: 'https://www.bilibili.com/video/av14943823'
            },
            descrip: [{
                content: '\u8FD9\u662F\u6211\u4F5C\u4E3A\u6444\u5F71\u5E08\u548C\u526A\u8F91\u5E08\u53C2\u4E0E\u7684\u540C\u5B66\u7684\u4E00\u4E2A\u8BFE\u7A0B\u9879\u76EE\u2014\u2014\u91C7\u8BBF\u7EBD\u7EA6\u57CE\u4E2D\u6709\u8DA3\u800C\u52B1\u5FD7\u7684\u4EBA\uFF0C\u8BB0\u5F55\u548C\u8046\u542C\u4ED6\u4EEC\u7684\u6545\u4E8B\u3002\u540E\u7531\u4E8E\u65F6\u95F4\u95EE\u9898\uFF0C\u53EA\u8FDB\u884C\u4E86\u4E00\u671F\u534A\u3002',
                type: 'text'
            }, {
                content: {
                    youtube: '',
                    bili: ''
                },
                type: 'video'
            }],
            tags: ['视频', '采访'],
            type: 'video'
        }, {
            name: '华中师范大学本科毕业视频',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433401/cv-img/work/ccnu-graduation/ccnu-graduation.webp',
            id: 3,
            youtubeID: 'ZdtILGuo6IQ',
            biliID: '11355324',
            link: {
                youtube: 'https://youtu.be/8kWDH6cejB4',
                bili: 'https://www.bilibili.com/video/av14943823'
            },
            descrip: [{
                content: '\u5728\u6211\u672C\u79D1\u5373\u5C06\u6BD5\u4E1A\u4E4B\u65F6\uFF0C\u6211\u5F00\u59CB\u5B66\u4E60\u6444\u5F71\u548C\u89C6\u9891\u62CD\u6444\uFF0C\u6B63\u597D\u62CD\u6444\u4E86\u6BD5\u4E1A\u8FD9\u6BB5\u65F6\u5149\u7559\u4F5C\u7EAA\u5FF5\u3002\u89C6\u9891\u62CD\u6444\u4F7F\u7528\u4E86\u6ED1\u8F68\uFF0C\u6444\u5F71\u706F\u4EE5\u53CA\u5FAE\u5355\u3002',
                type: 'text'
            }, {
                content: {
                    youtube: '',
                    bili: ''
                },
                type: 'video'
            }],
            tags: ['视频', '生活'],
            type: 'video'
        }, {
            name: 'GH5开箱及样片Vlog',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433653/cv-img/work/gh5-unboxing/gh5-unboxing.png',
            id: 3,
            youtubeID: '-1ZyOfgzbkM',
            biliID: '20628682',
            link: {
                youtube: 'https://youtu.be/8kWDH6cejB4',
                bili: 'https://www.bilibili.com/video/av14943823'
            },
            descrip: [{
                content: '\u62FF\u5230\u4E86\u6211\u7684\u7B2C\u4E00\u53F0\u9AD8\u7AEF\u5FAE\u5355\uFF0CGH5\uFF0C\u89C6\u9891\u62CD\u6444\u65B9\u9762\u975E\u5E38\u51FA\u8272\u7684\u4E00\u53F0\u673A\u5668\u3002\u672C\u7247\u4F7F\u7528Vlog\u6A21\u5F0F\u62CD\u6444\u5E76\u8FDB\u884C\u540E\u671F\u8C03\u8272\u3002',
                type: 'text'
            }, {
                content: {
                    youtube: '',
                    bili: ''
                },
                type: 'video'
            }],
            tags: ['视频', '生活'],
            type: 'video'
        }, {
            name: '哥伦比亚大学春晚微电影',
            img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433677/cv-img/work/columbia-spring-festival-film/columbia-spring-festival-film.png',
            id: 3,
            youtubeID: 'kJ4Ere29BO0',
            biliID: '',
            link: {
                youtube: 'https://youtu.be/8kWDH6cejB4',
                bili: 'https://www.bilibili.com/video/av14943823'
            },
            descrip: [{
                content: '\u6BCF\u4E00\u5E74\uFF0C\u6211\u4EEC\u4E2D\u56FD\u7559\u5B66\u751F\u90FD\u4F1A\u4EE5\u72EC\u7279\u7684\u65B9\u5F0F\u5E86\u795D\u81EA\u5DF1\u7684\u6625\u8282\u3002\u8FD9\u4E00\u6B21\uFF0C\u6211\u4EEC\u62CD\u6444\u4E86\u4E00\u90E8\u53CD\u6620\u6211\u4EEC\u81EA\u5DF1\u9AD8\u5F3A\u5EA6\u751F\u6D3B\u548C\u5BF9\u672A\u6765\u4E50\u89C2\u751F\u6D3B\u6001\u5EA6\u7684\u7535\u5F71\u3002\u6211\u8D1F\u8D23\u62CD\u6444\u638C\u955C\u3002',
                type: 'text'
            }, {
                content: {
                    youtube: '',
                    bili: ''
                },
                type: 'video'
            }],
            tags: ['视频', '生活'],
            type: 'video'
        }]
    }

};

cvData.works.allWorks.map(function (i, index) {
    i.id = index + 1;
    i.type = i.type.toLowerCase();

    if (i.type === 'video') {
        i.link.youtube = 'https://youtu.be/' + i.youtubeID;
        i.link.bili = 'https://www.bilibili.com/video/av' + i.biliID;
        var descript = i.descrip;
        descript.map(function (j) {
            if (j.type === 'video') {
                j.content.youtube = 'https://www.youtube.com/embed/' + i.youtubeID;
                j.content.bili = '//player.bilibili.com/player.html?aid=' + i.biliID;
            }
        });
    }
});

exports.cvData = cvData;
},{}],"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '50295' + '/');
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
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","data_zh.js"], null)
//# sourceMappingURL=/data_zh.a02d2d18.map