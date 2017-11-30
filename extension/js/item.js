/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _events = __webpack_require__(1);

var _Utils = __webpack_require__(2);

var _Utils2 = _interopRequireDefault(_Utils);

var _ChromeStorage = __webpack_require__(3);

var _ChromeStorage2 = _interopRequireDefault(_ChromeStorage);

var _DmmDomHandler = __webpack_require__(4);

var _DmmDomHandler2 = _interopRequireDefault(_DmmDomHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var emitter = new _events.EventEmitter();
var keys = 'dmmItems';

emitter.on('gotItems', function (items) {
  var options = [{
    key: 'href',
    get: _Utils2.default.getHref
  }, {
    key: 'title',
    get: _DmmDomHandler2.default.getTitle
  }, {
    key: 'categories',
    get: _DmmDomHandler2.default.getCategories
  }, {
    key: 'favoriteCount',
    get: _DmmDomHandler2.default.getFavoriteCount
  }];
  var data = _Utils2.default.mergeFunctionReturningData({ options: options });
  var entity = {};

  entity.dmmItems = items.dmmItems || [];
  entity.dmmItems.push(data);

  _ChromeStorage2.default.set({
    items: entity
  });
});

_ChromeStorage2.default.get({
  keys: keys,
  callback: function callback(items) {
    emitter.emit('gotItems', items);
  }
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: "getHref",
    value: function getHref() {
      return location.href;
    }
  }, {
    key: "mergeFunctionReturningData",
    value: function mergeFunctionReturningData(_ref) {
      var options = _ref.options;

      var data = {};

      options.forEach(function (option) {
        data[option.key] = option.get();
      });

      return data;
    }
  }]);

  return Utils;
}();

exports.default = Utils;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ChromeStorage = function () {
  function ChromeStorage() {
    _classCallCheck(this, ChromeStorage);
  }

  _createClass(ChromeStorage, null, [{
    key: 'get',
    value: function get(_ref) {
      var _ref$storageArea = _ref.storageArea,
          storageArea = _ref$storageArea === undefined ? 'local' : _ref$storageArea,
          _ref$keys = _ref.keys,
          keys = _ref$keys === undefined ? null : _ref$keys,
          _ref$callback = _ref.callback,
          callback = _ref$callback === undefined ? undefined : _ref$callback;

      chrome.storage[storageArea].get(keys, function (items) {
        if (typeof callback !== 'undefined') {
          callback(items);
        }
      });
    }
  }, {
    key: 'set',
    value: function set(_ref2) {
      var _ref2$storageArea = _ref2.storageArea,
          storageArea = _ref2$storageArea === undefined ? 'local' : _ref2$storageArea,
          items = _ref2.items,
          _ref2$callback = _ref2.callback,
          callback = _ref2$callback === undefined ? undefined : _ref2$callback;

      chrome.storage[storageArea].set(items, function () {
        if (typeof callback !== 'undefined') {
          callback();
        }
      });
    }
  }, {
    key: 'clear',
    value: function clear(_ref3) {
      var _ref3$storageArea = _ref3.storageArea,
          storageArea = _ref3$storageArea === undefined ? 'local' : _ref3$storageArea,
          _ref3$callback = _ref3.callback,
          callback = _ref3$callback === undefined ? undefined : _ref3$callback;

      chrome.storage[storageArea].clear(function () {
        if (typeof callback !== 'undefined') {
          callback();
        }
      });
    }
  }]);

  return ChromeStorage;
}();

exports.default = ChromeStorage;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DomHandler = __webpack_require__(5);

var _DomHandler2 = _interopRequireDefault(_DomHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DMMの商品ページのDOMに対する処理要求に応じるメソッドを提供するクラス
 */
var DmmDomHandler = function () {
  function DmmDomHandler() {
    _classCallCheck(this, DmmDomHandler);
  }

  _createClass(DmmDomHandler, null, [{
    key: 'getTitle',
    value: function getTitle() {
      return _DomHandler2.default.getText({ selectors: '#title' });
    }
  }, {
    key: 'getCategories',
    value: function getCategories() {
      var element = document.querySelectorAll('.box-rank + table > tbody > tr')[10];
      return _DomHandler2.default.getTexts({
        element: element,
        selectors: 'a'
      });
    }
  }, {
    key: 'getActoress',
    value: function getActoress() {}
  }, {
    key: 'getFavoriteCount',
    value: function getFavoriteCount() {
      return Number(_DomHandler2.default.getText({ selectors: '.box-rank .tx-count > span' }));
    }
  }]);

  return DmmDomHandler;
}();

exports.default = DmmDomHandler;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * DOMに対する汎用的な処理要求に応じるメソッドを提供するクラス
 */
var DomHandler = function () {
  function DomHandler() {
    _classCallCheck(this, DomHandler);
  }

  _createClass(DomHandler, null, [{
    key: "getElement",

    /**
     * セレクタから指定したindexのNodeListを返す
     * * @param element
     * @param selectors
     * @param index {Number} 取得したいNodeListのインデックス
     * @returns {NodeList}
     */
    value: function getElement(_ref) {
      var _ref$element = _ref.element,
          element = _ref$element === undefined ? document : _ref$element,
          selectors = _ref.selectors,
          _ref$index = _ref.index,
          index = _ref$index === undefined ? 0 : _ref$index;

      return element.querySelectorAll(selectors)[index];
    }

    /**
     * セレクタから取得したテキストを文字列返す
     * @param element
     * @param selectors
     * @param index {Number} 取得したいNodeListのインデックス
     * @returns {String}
     */

  }, {
    key: "getText",
    value: function getText(_ref2) {
      var _ref2$element = _ref2.element,
          element = _ref2$element === undefined ? document : _ref2$element,
          selectors = _ref2.selectors,
          _ref2$index = _ref2.index,
          index = _ref2$index === undefined ? 0 : _ref2$index;

      return element.querySelectorAll(selectors)[index].innerText.trim();
    }

    /**
     * セレクタから取得した複数のテキストを配列に格納して返す
     * @param element
     * @param selectors
     * @returns {Array}
     */

  }, {
    key: "getTexts",
    value: function getTexts(_ref3) {
      var _ref3$element = _ref3.element,
          element = _ref3$element === undefined ? document : _ref3$element,
          selectors = _ref3.selectors;

      var texts = element.querySelectorAll(selectors);
      var tempTexts = [];

      Array.prototype.forEach.call(texts, function (text) {
        tempTexts.push(text.innerText.trim());
      });

      return tempTexts;
    }
  }]);

  return DomHandler;
}();

exports.default = DomHandler;

/***/ })
/******/ ]);
//# sourceMappingURL=item.js.map