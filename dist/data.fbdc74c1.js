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
},{}]},{},["../../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","data.js"], null)
//# sourceMappingURL=/data.fbdc74c1.map