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
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382448/cv-img/work/music/music-1.jpg',
        id: 1,
        descrip: [{
            content: 'Based on Netease Music\'s mobile version, this is a simple reproduction of the music play website via jQuery.',
            type: 'text'
        }, {
            // content: './img/work/music/music-1.jpeg',
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382448/cv-img/work/music/music-1.jpg',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>with functionality of listen to songCollection and new song</p>',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382449/cv-img/work/music/music-2.jpg',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>Inside the song collection interface</p>',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382447/cv-img/work/music/music-3.jpg',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>Song play interface, the classic disc rotating sign</p>',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382447/cv-img/work/music/music-4.jpg',
            type: 'img'
        }, {
            content: 'Also has features like search song via name, displaying and scrolling lyrics (only work with supported lyric format that has timestamp), and switch to the previous song and next song.',
            type: 'text'
        }, {
            content: 'The resources and infomation of the songs are managed by a simple jQuery-based CMS, where user can view, upload, edit and delete songs. They are achieved via <a href="https://www.qiniu.com/">qiniu</a> and <a href="https://leancloud.cn/">leanCloud</a> APIs.',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382452/cv-img/work/music/music-5.png',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>dashboard for song collection</p>',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382454/cv-img/work/music/music-6.png',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>add songs into playlist</p>',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535382454/cv-img/work/music/music-7.png',
            type: 'img'
        }],
        tags: ['Web Dev', 'jQuery', 'Dynamic REM'],
        type: 'web'
    }, {
        name: 'Atos OneSource Landing Page',
        link: {
            preview: 'https://sy2729.github.io/atosonesource-market/dist/MARKET.html',
            repo: 'https://github.com/sy2729/atosonesource-market'
        },
        img: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_60/v1535382853/cv-img/work/atos-landing/atos-landing-2.png',
        id: 2,
        descrip: [{
            content: 'This is part of the <a href="http://www.atosonesource.com/">Atos OneSource</a> page. The original page was built using app drag, a drag-and-drop web design and dev product. But to implement some advanced features and make the site more customizable, we chose to write the code.',
            type: 'text'
        }, {
            content: 'It\'s initially built with jQuery, and we\'re reconstructing it with Vue.js',
            type: 'text'
        }, {
            // content: `./img/work/atos-landing/atos-landing-1.png`,
            content: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_60/v1535382860/cv-img/work/atos-landing/atos-landing-1.png',
            type: 'img'
        }],
        tags: ['Web Dev', 'UX Design', 'Atos'],
        type: 'web'
    }, {
        name: 'Atos Digital Dashboard Petal Dev',
        link: {
            preview: 'https://sy2729.github.io/digital-dashboard-demo/',
            repo: 'https://github.com/sy2729/digital-dashboard-demo/'
        },
        // img: './img/work/atos-digital/atos-digital-dashboard-1.png',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383123/cv-img/work/atos-digital/atos-digital-dashboard-1.png',
        id: 3,
        descrip: [{
            content: 'This is the homepage for <a href="www.atosonesourceweb.com/">Atos OneSource Dashboard</a> where clients use to manage their daily KPI. We invisioned a data visualizaed work interface so the idea of the petal representation came into our mind.',
            type: 'text'
        }, {
            content: 'Collaborating with the developers, I provided the front-end support in creating the petal and the flower, and of course, it\'s mobile friendly.',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383123/cv-img/work/atos-digital/atos-digital-dashboard-1.png',
            type: 'img'
        }],
        tags: ['Web Dev', 'UX Design', 'Atos', 'CSS'],
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
            content: 'This is a team project in a class where I collaborate with three other classmates to present the idea of \'insurance education with web technology\'.',
            type: 'text'
        }, {
            content: 'We have many international students who are unfamiliar with the U.S insurance. Thus being able to understand the basic concepts in insurance aftering viewing this website is our goal.',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-1.png',
            type: 'img'
        }, {
            content: 'We use Riot.js as the MVC framework and Google Firebase as the database, according to the course requirement',
            type: 'text'
        }, {
            content: '<p class=\'t-center\'>The user dashboard after login</p>',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383183/cv-img/work/careguru/careguru-2.png',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>Knowledge card</p>',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383181/cv-img/work/careguru/careguru-3.png',
            type: 'img'
        }],
        tags: ['Web Dev', 'Riot.js', 'Firebase'],
        type: 'web'
    }, {
        name: 'Dynamic Drawing',
        link: {
            preview: 'https://sy2729.github.io/dynamic-drawing/',
            repo: 'https://github.com/sy2729/dynamic-drawing'
        },
        // img: './img/work/dynamic-drawing/dynamic-drawing-1.png',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383255/cv-img/work/dynamic-drawing/dynamic-drawing-1.png',
        id: 3,
        descrip: [{
            content: 'A Simple dynamic drawing animation -- shows how the code modification made the visual changes, a great way to demonstrate certain concepts in CSS and shows its margic. This project unveils some valuable educational techniques in web technologies that I might explore in the future.',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383255/cv-img/work/dynamic-drawing/dynamic-drawing-2.png',
            type: 'img'
        }],
        tags: ['Web Dev', 'CSS', 'JavaScript'],
        type: 'web'
    }, {
        name: 'Canvas NoteBook',
        link: {
            preview: 'https://sy2729.github.io/canvas-draw/',
            repo: 'https://github.com/sy2729/canvas-draw'
        },
        // img: './img/work/canvas-draw/canvas-draw-2.png',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383299/cv-img/work/canvas-draw/canvas-draw-2.png',
        id: 3,
        descrip: [{
            content: '<p class="t-center">A simple canvas where user can draw and save the draft to local as an image. It have functions like change stoke width, color with eraser and clear feature.</p>',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383299/cv-img/work/canvas-draw/canvas-draw-1.png',
            type: 'img'
        }],
        tags: ['Web Dev', 'Canvas'],
        type: 'web'
    }, {
        name: 'Teachers College Site Design Assistance',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383418/cv-img/work/tc-site/tc-site-1.png',
        id: 3,
        descrip: [{
            content: 'My main task during working in the Web Office of Teachers College, Columbia Unievrsity was to test the new <a href="tc.edu">Teachers College Official Website</a>,provide feedbacks from a UX standppoint and write some CSS solutions for part of the design',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383425/cv-img/work/tc-site/tc-site-2.png',
            type: 'img'
        }],
        tags: ['UX Design', 'CSS'],
        type: 'design'
    }, {
        name: 'Code Battle',
        // img: './img/work/game-card/game-card-2.png',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383492/cv-img/work/code-battle/game-card-2.png',
        id: 3,
        link: {
            preview: 'https://sy2729.github.io/gameCaard/',
            repo: 'https://github.com/sy2729/gameCaard'
        },
        descrip: [{
            content: 'This is a boardGame that was made in a game design class. We build up this website for both marketing and rule explanation',
            type: 'text'
        }, {
            content: 'http://res.cloudinary.com/shuaiyuan/image/upload/q_49/v1535383509/cv-img/work/code-battle/game-card-1.png',
            type: 'img'
        }],
        tags: ['UX Design', 'Web Dev', 'Riot.js'],
        type: 'web'
    }, {
        name: 'Atos Aviva Server Query User Interface Design',
        // img: './img/work/atos-aviva/atos-aviva-2.png',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383565/cv-img/work/atos-aviva/atos-aviva-2.png',
        id: 3,
        descrip: [{
            content: 'We need to provide a solution for client to query a server and its related properties, while being able to offer functions like query on multiple and complicated properties instead of solely name.',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383565/cv-img/work/atos-aviva/atos-aviva-2.png',
            type: 'img'
        }, {
            content: 'The relation between the server name and app name are \'many to many\' as well as the server name to other properties such as owner and service name it belongs to, which makes it a little bit tricky than normal query dashboard',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383569/cv-img/work/atos-aviva/atos-aviva-4.png',
            type: 'img'
        }, {
            content: 'We spent much time communicate back and forth with our clients to figure out their desired functions and what visual presentation would be appropriate.',
            type: 'text'
        }, {
            content: '<p class=\'t-center\'>the sketch working file screenshot</p>',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383569/cv-img/work/atos-aviva/atos-aviva-3.png',
            type: 'img'
        }],
        tags: ['UX Design', 'Atos'],
        type: 'design'
    }, {
        name: 'Atos Service Delivery Management',
        // img: './img/work/atos-sdm/atos-sdm-1.png',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-1.png',
        id: 3,
        descrip: [{
            content: 'This is an email-look app design for Atos internal employee use, including manager and delivery roles.',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-1.png',
            type: 'img'
        }, {
            content: 'Different from normal email apps, there are 5 states for the message / email / notification, while each update of the state has different visuals on the two sides.',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-3.png',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>Reject or accept and reply to the request</p>',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-4.png',
            type: 'img'
        }, {
            content: '<p class=\'t-center\'>the flowchart of the user interaction</p>',
            type: 'text'
        }, {
            content: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535383644/cv-img/work/atos-sdm/atos-sdm-2.png',
            type: 'img'
        }],
        tags: ['UX Design', 'Atos'],
        type: 'design'
    }, {
        name: 'Where AM I From',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535384138/cv-img/work/where-am-I-from/where-am-I-from.png',
        id: 3,
        youtubeID: '8kWDH6cejB4',
        biliID: '14943823',
        link: {
            youtube: 'https://youtu.be/8kWDH6cejB4',
            bili: 'https://www.bilibili.com/video/av14943823'
        },
        descrip: [{
            content: 'An assignment from a course in Teachers College, Columbia University named Culture, Media and Education. It\'s inspired by the poem of "where AM I From " by George Ella Lyon. She also initialize this activity collecting art piece from the world, narrating about each individual\'s origin and reflection.',
            type: 'text'
        }, {
            content: {
                youtube: '',
                bili: ''
            },
            type: 'video'
        }],
        tags: ['Video', 'Life'],
        type: 'video'
    }, {
        name: 'Media and Life',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535431869/cv-img/work/media-life/media-life.png',
        id: 3,
        youtubeID: 'dmJO491mVao',
        biliID: '',
        link: {
            youtube: 'https://youtu.be/8kWDH6cejB4',
            bili: 'https://www.bilibili.com/video/av14943823'
        },
        descrip: [{
            content: 'A reflection on the overwhelming information from our mobile devices and the essence of life. How the media and technology is shaping us and our society.',
            type: 'text'
        }, {
            content: {
                youtube: '',
                bili: ''
            },
            type: 'video'
        }],
        tags: ['Video', 'Life'],
        type: 'video'
    }, {
        name: 'Environmentalism Trip',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535431905/cv-img/work/Eenvironmentalism-trip/maxresdefault.webp',
        id: 3,
        youtubeID: 'hGptZmEDqkY',
        biliID: '13016424',
        link: {
            youtube: 'https://youtu.be/8kWDH6cejB4',
            bili: 'https://www.bilibili.com/video/av14943823'
        },
        descrip: [{
            content: 'In August 2017, I accompanied with a team of young kids as a photographer to explore the beauty of nature and unveil the mistery of the forest. Leaded by several staffs of the environmental nonprofit conservation and education organization, the goal of this trip is to educate the kids about the environmentally friendly way of living with the nature.',
            type: 'text'
        }, {
            content: {
                youtube: '',
                bili: ''
            },
            type: 'video'
        }],
        tags: ['Video', 'Life'],
        type: 'video'
    }, {
        name: 'Interviewing the Dilligent Chinese Girl in Columbia University',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433480/cv-img/work/interview-columbia/interview-columbia.png',
        id: 3,
        youtubeID: 'ALUSbmb9kP4',
        biliID: '16099951',
        link: {
            youtube: 'https://youtu.be/8kWDH6cejB4',
            bili: 'https://www.bilibili.com/video/av14943823'
        },
        descrip: [{
            content: 'This is my friend\'s course project on interviewing interesting and inspiring people in NYC, listening to their stories, documenting them and learning from them.',
            type: 'text'
        }, {
            content: {
                youtube: '',
                bili: ''
            },
            type: 'video'
        }],
        tags: ['Video', 'Life'],
        type: 'video'
    }, {
        name: 'Bachelor Graduation Ceremony Video in CCNU',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433401/cv-img/work/ccnu-graduation/ccnu-graduation.webp',
        id: 3,
        youtubeID: 'ZdtILGuo6IQ',
        biliID: '11355324',
        link: {
            youtube: 'https://youtu.be/8kWDH6cejB4',
            bili: 'https://www.bilibili.com/video/av14943823'
        },
        descrip: [{
            content: 'Right before I graduate from my undergraduate school, I started to learn photography and videography and then made this video to record the great memories of the four years. I used sliders, photography lights, triapod, DSLR to accomplish this video production.',
            type: 'text'
        }, {
            content: {
                youtube: '',
                bili: ''
            },
            type: 'video'
        }],
        tags: ['Video', 'Life'],
        type: 'video'
    }, {
        name: 'GH5 Unboxing & Sample Shot Vlog',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433653/cv-img/work/gh5-unboxing/gh5-unboxing.png',
        id: 3,
        youtubeID: '-1ZyOfgzbkM',
        biliID: '20628682',
        link: {
            youtube: 'https://youtu.be/8kWDH6cejB4',
            bili: 'https://www.bilibili.com/video/av14943823'
        },
        descrip: [{
            content: 'I got my first GH5, which is a really great video-shooting camera. I shot some great sample videos in V-log mode and color graded them.',
            type: 'text'
        }, {
            content: {
                youtube: '',
                bili: ''
            },
            type: 'video'
        }],
        tags: ['Video', 'Life'],
        type: 'video'
    }, {
        name: 'Columbia University Chinese Spring Festival Celebration Micro Film',
        img: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535433677/cv-img/work/columbia-spring-festival-film/columbia-spring-festival-film.png',
        id: 3,
        youtubeID: 'kJ4Ere29BO0',
        biliID: '',
        link: {
            youtube: 'https://youtu.be/8kWDH6cejB4',
            bili: 'https://www.bilibili.com/video/av14943823'
        },
        descrip: [{
            content: 'Every year, we Chinese International Students celebrate our Spring Festival in our unique way. This time, we shot a short film reflecting on our intensive life and optimistic attitude towards the future. I was responsible for shooting.',
            type: 'text'
        }, {
            content: {
                youtube: '',
                bili: ''
            },
            type: 'video'
        }],
        tags: ['Video', 'Life'],
        type: 'video'
    }]

};

cvData.works.map(function (i, index) {
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
},{"_css_loader":"../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _sideBarInWorkDetail;

var _data = require("./data");

require("./index.scss");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } // import {  } from "./index.scss";


// create component
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
            this.scrollTo(value, 20);
        },
        myCallback: function myCallback() {
            this.$refs.arrow.classList.add('active');
        },
        detectLayerLoading: function detectLayerLoading() {
            var _this = this;

            // detect the layer loading
            var img = document.createElement('img');
            img.setAttribute("src", 'https://res.cloudinary.com/shuaiyuan/image/upload/v1535384915/cv-img/hero-layer.png');
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
    props: ['img', 'name', 'descrip', 'link', 'tags', 'id', 'type', 'youtubeID', 'biliID'],
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

var sideBarInWorkDetail = (_sideBarInWorkDetail = {
    template: "\n        <aside class='sideBar'>\n            <switch-type @switch-type=switchType :types=worktypes></switch-type>\n            <ul>\n                <li v-for='i in filteredWorks' :class=\"{'header-bar': i.id === currentId}\" @click='switchWork(i.id)' :data-id=i.id><span class=\"li-name\">{{i.name}}</span> <span class=\"li-tag\">{{i.type}}</span></li>\n            </ul>\n        </aside>\n    ",
    data: function data() {
        return {
            filteredWorks: [],
            works: []
        };
    },
    props: ['worktypes'],
    methods: {
        switchWork: function switchWork(data) {
            var _this2 = this;

            this.filteredWorks.map(function (i) {
                if (data === i.id) {
                    _this2.$emit('switch-work-detail', i);
                }
            });
        },
        switchType: function switchType(data) {
            console.log(data);
            if (data.toLowerCase() === 'all') {
                this.filteredWorks = this.works;
            } else {
                var results = this.works.filter(function (i) {
                    if (i.type.toLowerCase() === data.toLowerCase()) {
                        return i;
                    }
                });
                this.filteredWorks = results;
            };
        }
    }
}, _defineProperty(_sideBarInWorkDetail, "props", ['allwork', 'currentId', 'worktypes']), _defineProperty(_sideBarInWorkDetail, "beforeMount", function beforeMount() {
    this.works = this.$props.allwork;
    this.filteredWorks = this.works;
}), _defineProperty(_sideBarInWorkDetail, "components", {
    'switch-type': switchType
}), _sideBarInWorkDetail);

var workDetail = {
    template: "\n            <div class='work-detail' ref='detail'>\n                <section class='current-content-wrap'>\n                    <div class='title-wrap'>\n                        <h2 class='title'>{{currentWork.name}}</h2>\n                        <span class='t-color current-work-type'>{{currentWork.type}}</span>\n                        <div class=\"work-link-wrap\" v-if=\"currentWork.type==='web'\">\n                            <a class='link-preview' :href='currentWork.link.preview' title=\"preivew\"><span><i class='fa fa-eye'></i>preview</span></a>\n                            <a :href='currentWork.link.repo' title=\"repo\"><span><i class='fa fa-github'></i>repo</span></a>\n                        </div>\n                        <div class=\"work-link-wrap\" v-if=\"currentWork.type==='video'\">\n                            <a class='link-preview' :href='currentWork.link.youtube' title=\"YouTube - Worldwide Audience\"><span><i class='fa fa-youtube'></i></span></a>\n                            <a :href='currentWork.link.bili' title=\"bilibili - Chinese Audience\"><span><i class='iconfont'>&#xe607;</i></span></a>\n                        </div>\n                        <ul class='tags'>\n                            <li v-for='i in currentWork.tags'>{{i}}</li>\n                        </ul>\n                    </div>\n                    <div class='work-content'>\n                        <div v-for=\"i in currentWork.descrip\" :class=\"[{'each-descrip-img': i.type==='img'},{'work-videoWrapper': i.type==='video'} ]\">\n                            <transition name='show-content'>\n                                <iframe :src=\"i.content.youtube\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen v-if=\"i.type==='video' && currentLanguage === 'en'\"></iframe>\n                                <iframe :src=\"i.content.bili\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen v-if=\"i.type==='video' && currentLanguage === 'zh'\"></iframe>\n                            </transition>\n                            <img :src='i.content' v-if=\"i.type==='img'\">\n                            <p v-html='i.content' v-if=\"i.type==='text'\"></p>\n                        </div>\n\n                        <p class='t-warning' v-if=\"currentWork.type==='video' && currentLanguage === 'zh' && !currentWork.biliID\">!No Bilibili Video Available, please choose other sources</p>\n                        <p class='t-warning' v-if=\"currentWork.type==='video' && currentLanguage === 'en' && !currentWork.youtubeID\">No YouTube Video Available, please choose other sources</p>\n\n                        <div v-if=\"currentWork.type==='video'\" class='video-source-wrap'>\n                            <p>Choose the video source based on your country:</p>\n                            <span @click=\"changeVideo('en')\" :class=\"[{active: currentLanguage === 'en'}, {'no-available': !currentWork.youtubeID}]\">YouTube</span><span @click=\"changeVideo('zh')\" :class=\"[{active: currentLanguage === 'zh'}, {'no-available': !currentWork.biliID}]\" >BiliBili</span>\n                        </div>\n                    </div>\n                </section>\n                <side-bar-in-work-detail :allwork=allwork :currentId=currentWork.id @switch-work-detail=\"switchWork\" :worktypes=worktypes></side-bar-in-work-detail>\n                <div class=\"close\" @click=\"$emit('close-detail')\">\n                    <span><i class=\"fa fa-times\"></i></span>\n                </div>\n            </div>\n    ",
    data: function data() {
        return {
            currentWork: {},
            currentLanguage: ''
        };
    },
    props: ['detail', 'allwork', 'worktypes'],

    components: {
        "side-bar-in-work-detail": sideBarInWorkDetail
    },
    methods: {
        switchWork: function switchWork(data) {
            this.currentWork = data;
            this.$refs.detail.scrollTop = 0;
        },
        judgeSystemLanguage: function judgeSystemLanguage() {
            var type = navigator.appName;
            if (type == "Netscape") {
                var lang = navigator.language; //获取浏览器配置语言，支持非IE浏览器
            } else {
                var lang = navigator.userLanguage; //获取浏览器配置语言，支持IE5+ == navigator.systemLanguage
            };
            var lang = lang.substr(0, 2); //获取浏览器配置语言前两位
            if (lang == "zh") {
                this.currentLanguage = 'zh';
            } else {
                this.currentLanguage = 'en';
            }
        },
        changeVideo: function changeVideo(data) {
            if (data === 'en' && this.currentLanguage !== 'en') {
                this.currentLanguage = 'en';
            } else if (data === 'zh' && this.currentLanguage !== 'zh') {
                this.currentLanguage = 'zh';
            }
        }
    },
    beforeMount: function beforeMount() {
        this.currentWork = this.$props.detail;
        this.judgeSystemLanguage();
    }
};

var workSection = {
    template: "\n        <div class=\"work-section each-section\" :style=\"{background: sectionColor}\">\n            <switch-type :types=worktypes @switch-type=switchType></switch-type>\n             <section-title :order=order :name=sectionName></section-title>\n             <div class='section-content' ref='works'>\n                <each-work v-for='(i, index) in filteredWorks' :key=index v-bind='i' @view-work-detail=viewWorkDetail></each-work>\n             </div>\n             <button :class=\"['next-btn',{end: scrollToEnd}]\" @click=scrollRight><i class='fa fa-angle-right'></i></button>\n             <progress-bar :totalLength=allWorkLength :viewLength=viewLength :scrolledDistance=scrolledDistance></progress-bar>\n        </div>\n    ",

    data: function data() {
        return {
            sectionColor: '#F5F5F5',
            order: '04',
            sectionName: 'Portfolio',
            filteredWorks: [],
            works: [],
            allWorkLength: 0,
            viewLength: 20,
            scrolledDistance: 0,
            scrollToEnd: false
        };
    },
    props: ['worktypes'],
    methods: {
        detectScrollDistance: function detectScrollDistance() {
            var value = this.getScrollDistance();
            this.scrolledDistance = this.initialDistanceBeforeScroll - value;
            this.detectScrollToEnd();
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
            this.detectScrollToEnd();
        },
        detectScrollToEnd: function detectScrollToEnd() {
            if (this.scrolledDistance + this.viewLength >= this.allWorkLength) {
                this.scrollToEnd = true;
            } else {
                this.scrollToEnd = false;
            }
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
            };
        },
        shuffle: function shuffle(arr) {
            var i = arr.length,
                t,
                j;
            while (i) {
                j = Math.floor(Math.random() * i--); //!!!
                t = arr[i];
                arr[i] = arr[j];
                arr[j] = t;
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
        this.shuffle(this.works);
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
        this.detectScrollToEnd();
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
        allWorks: null,
        workTypes: ['all', 'web', 'design', 'video']
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '59557' + '/');
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