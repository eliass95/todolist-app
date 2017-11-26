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


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _TodoList = __webpack_require__(1);

var _TodoList2 = _interopRequireDefault(_TodoList);

var _TodoItem = __webpack_require__(2);

var _TodoItem2 = _interopRequireDefault(_TodoItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoController = function () {
    function TodoController() {
        _classCallCheck(this, TodoController);

        this.itemText = document.querySelector('#add-item-text');
        this.formSubmit = document.querySelector('#add-item-form');
        this.todoList = new _TodoList2.default(document.querySelector('#todo-list'));
        this.events();
    }

    _createClass(TodoController, [{
        key: 'events',
        value: function events() {
            var _this = this;

            this.formSubmit.addEventListener('submit', function (event) {
                event.preventDefault();
                _this.addItem();
            });
        }
    }, {
        key: 'addItem',
        value: function addItem() {
            var item = new _TodoItem2.default(this.itemText.value);
            this.todoList.add(item);
            this.itemText.value = '';
            console.log(item);
        }
    }]);

    return TodoController;
}();

var controller = new TodoController();
console.log(controller.todoList);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoList = function () {
    function TodoList(element) {
        _classCallCheck(this, TodoList);

        this.todolist = [];
        this.todolistView = element;
    }

    _createClass(TodoList, [{
        key: "add",
        value: function add(todo) {
            this.todolist.unshift(todo);
            this.render();
        }
    }, {
        key: "render",
        value: function render() {
            var _this = this;

            this.todolist.forEach(function (item) {
                _this.todolistView.append(item.element);
            });
        }
    }]);

    return TodoList;
}();

exports.default = TodoList;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoItem = function () {
    function TodoItem(text) {
        _classCallCheck(this, TodoItem);

        this.text = text;
        this.done = false;
        this.createdAt = new Date();
        this.finishTime = null;
        this.element = document.createElement("li");
        this.updateElement();
        this.events();
    }

    _createClass(TodoItem, [{
        key: 'updateElement',
        value: function updateElement() {
            this.element.innerHTML = '<input type="checkbox">' + this.text;
        }
    }, {
        key: 'finishTask',
        value: function finishTask() {
            this.done = true;
            this.finishTime = new Date();
        }
    }, {
        key: 'unfinishTask',
        value: function unfinishTask() {
            this.done = false;
        }
    }, {
        key: 'events',
        value: function events() {
            var _this = this;

            this.element.addEventListener('click', function (e) {
                if (e.target.nodeName === 'INPUT') {
                    if (e.target.checked) {
                        _this.finishTask();
                        e.target.parentNode.classList.add("todo-items__done");
                        console.log(_this);
                    } else {
                        _this.unfinishTask();
                        e.target.parentNode.classList.remove("todo-items__done");
                        console.log(_this);
                    }
                }
            });
        }
    }]);

    return TodoItem;
}();

exports.default = TodoItem;

/***/ })
/******/ ]);