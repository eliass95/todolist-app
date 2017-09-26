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


var _TodoApp = __webpack_require__(1);

var _TodoApp2 = _interopRequireDefault(_TodoApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todo = new _TodoApp2.default();
var btnAddItem = document.querySelector('#add-item-btn');
var textAddItem = document.querySelector('#add-item-text');

btnAddItem.addEventListener('click', function () {
  todo.addNewItem(textAddItem);
});

textAddItem.focus();
document.onkeydown = function () {
  if (window.event.keyCode == '13') {
    btnAddItem.focus();
    window.setTimeout(function () {
      textAddItem.focus();
    }, 50);
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoApp = function () {
  function TodoApp() {
    _classCallCheck(this, TodoApp);

    this.itens = document.querySelector('.todo-items');
    this.itensArray;
    this.addEvents();
  }

  _createClass(TodoApp, [{
    key: 'addEvents',
    value: function addEvents() {
      this.itensArray = document.querySelectorAll('.todo-items li');

      for (var i = 0; i < this.itensArray.length; i++) {
        this.itensArray[i].children[0].addEventListener('click', this.checkItem);
      }
    }
  }, {
    key: 'checkItem',
    value: function checkItem(e) {
      if (e.target.checked) {
        console.log('selecionado');
        e.target.parentNode.classList.add("todo-items__done");
      } else {
        e.target.parentNode.classList.remove("todo-items__done");
        console.log('deselecionado!');
      }
    }
  }, {
    key: 'addNewItem',
    value: function addNewItem(textAddItem) {
      if (textAddItem.value != '') {
        var newItem = '<li><input type="checkbox">' + textAddItem.value + '</li>';
        this.itens.innerHTML += newItem;
        textAddItem.value = "";
        this.addEvents();
      }
    }
  }]);

  return TodoApp;
}();

exports.default = TodoApp;

/***/ })
/******/ ]);