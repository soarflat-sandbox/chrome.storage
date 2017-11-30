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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ChromeStorage = __webpack_require__(0);

var _ChromeStorage2 = _interopRequireDefault(_ChromeStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var keys = 'dmmItems';

_ChromeStorage2.default.get({
  keys: keys,
  callback: function callback(items) {
    console.log(items);
  }
});

/***/ })

/******/ });
//# sourceMappingURL=settings.js.map