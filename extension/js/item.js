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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Utils = __webpack_require__(6);

var _Utils2 = _interopRequireDefault(_Utils);

var _DmmDomHandler = __webpack_require__(7);

var _DmmDomHandler2 = _interopRequireDefault(_DmmDomHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var init = function init() {
  var keys = 'dmmItems';

  chrome.storage.local.get(keys, function (items) {
    var newItem = getItemData();
    var updatedItems = updateItems(items, newItem);

    console.log(updatedItems);

    chrome.storage.local.set(updatedItems);
  });
};

var getItemData = function getItemData() {
  var functions = [{
    key: 'href',
    get: _Utils2.default.getHref
  }, {
    key: 'imageUrl',
    get: _DmmDomHandler2.default.getImageUrl
  }, {
    key: 'title',
    get: _DmmDomHandler2.default.getTitle
  }, {
    key: 'categories',
    get: _DmmDomHandler2.default.getCategories
  }, {
    key: 'actresses',
    get: _DmmDomHandler2.default.getActresses
  }, {
    key: 'favoriteCount',
    get: _DmmDomHandler2.default.getFavoriteCount
  }];

  return _Utils2.default.mergeFunctionsReturningData({ functions: functions });
};

var updateItems = function updateItems(items, newItem) {
  var entity = {};
  entity.dmmItems = items.dmmItems || [];
  var index = entity.dmmItems.findIndex(function (obj) {
    return obj.href === newItem.href;
  });

  if (index > -1) {
    entity.dmmItems.splice(index, 1);
  }

  return entity.dmmItems.push(data);
};

init();

/***/ }),
/* 6 */
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
    key: "mergeFunctionsReturningData",
    value: function mergeFunctionsReturningData(_ref) {
      var functions = _ref.functions;

      var data = {};

      functions.forEach(function (fn) {
        data[fn.key] = fn.get();
      });

      return data;
    }
  }, {
    key: "matchKeywords",
    value: function matchKeywords(_ref2) {
      var keywords = _ref2.keywords,
          text = _ref2.text;

      return keywords.filter(function (keyword) {
        return text !== -1;
      }).length === keywords.length;
    }
  }]);

  return Utils;
}();

exports.default = Utils;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _DomHandler = __webpack_require__(8);

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


    /**
     * 商品タイトルを取得
     * @return {string}
     */
    value: function getTitle() {
      return document.querySelectorAll('#title')[0].innerText.trim();
    }

    /**
     * 商品画像のURLを取得
     * @return {string}
     */

  }, {
    key: 'getImageUrl',
    value: function getImageUrl() {
      return document.getElementById('sample-video').querySelectorAll('img')[0].src;
    }

    /**
     * 商品のカテゴリを取得
     * @return {array}
     */

  }, {
    key: 'getCategories',
    value: function getCategories() {
      var element = document.querySelectorAll('.box-rank + table > tbody > tr')[10];
      return _DomHandler2.default.getTexts({
        element: element,
        selectors: 'a'
      });
    }

    /**
     * 出演女優を取得
     * @return {array}
     */

  }, {
    key: 'getActresses',
    value: function getActresses() {
      var element = document.querySelectorAll('.box-rank + table > tbody > tr')[5];
      return _DomHandler2.default.getTexts({
        element: element,
        selectors: 'a'
      });
    }

    /**
     * 商品のお気に入り数を取得
     * @return {number}
     */

  }, {
    key: 'getFavoriteCount',
    value: function getFavoriteCount() {
      return Number(document.querySelectorAll('.box-rank .tx-count > span')[0].innerText.trim());
    }
  }]);

  return DmmDomHandler;
}();

exports.default = DmmDomHandler;

/***/ }),
/* 8 */
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
    key: "getTexts",

    /**
     * セレクタから取得した複数のテキストを配列に格納して返す
     * @param element
     * @param selectors
     * @returns {array}
     */
    value: function getTexts(_ref) {
      var _ref$element = _ref.element,
          element = _ref$element === undefined ? document : _ref$element,
          selectors = _ref.selectors;

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