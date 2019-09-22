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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./baseHuman.js":
/*!**********************!*\
  !*** ./baseHuman.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*  Method -1-\r\n// other JS file can reach BaseHuman class with this module.exports anymore.\r\nmodule.exports = class BaseHuman {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.type = 'HumanBase';\r\n        console.log(\"Base Constructor\");\r\n    }\r\n}\r\n*/\r\n//  Method 2 (Common)\r\n/*\r\nclass BaseHuman {\r\n    constructor(name) {\r\n        this.name = name;\r\n        this.type = 'HumanBase';\r\n        console.log(\"Base Constructor\");\r\n    }\r\n}\r\nclass Saphiens extends BaseHuman{\r\n    constructor(name){\r\n        super(name);\r\n        this.type = \"Saphien\";\r\n        console.log(\"Saphien Constructor\");\r\n    }\r\n    walk(){\r\n        console.log(\"Saphien Walk\");\r\n    }\r\n}\r\nmodule.exports = {\r\n    BaseHuman,\r\n    Saphiens\r\n}*/\r\n\r\nmodule.exports = class BaseHuman {\r\n    constructor(name){\r\n        this.name = name;\r\n        this.type = 'HumanBase';\r\n    }\r\n    walk(){\r\n        console.log(\"Base Walk\");\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./baseHuman.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\r\n Method -1-\r\nvar Saphiens = require(\"./saphiens\");\r\n\r\nvar x = new Saphiens(\"Emre\");\r\nconsole.log(\"test\");\r\nx.walk();\r\n*/\r\n\r\n// Method 2 (Common)\r\n/*\r\nvar library = require(\"./baseHuman\");\r\n\r\nvar x = new library.Saphiens(\"Emre\");\r\n\r\nvar webpack = require(\"webpack\");\r\n\r\nx.walk();\r\n\r\n// we need to write  ' npm init ' on Terminal to start npm\r\n// after than we need to write ' npm i --save weboack ' to start local webpack.\r\n// node_mudules is add by that code.\r\n\r\n*/\r\n\r\nvar Saphiens =__webpack_require__(/*! ./saphiens */ \"./saphiens.js\");\r\n\r\n\r\nvar x = new Saphiens(\"Emrah Öz\");\r\n \r\nwindow.x = x;\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./saphiens.js":
/*!*********************!*\
  !*** ./saphiens.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var BaseHuman = __webpack_require__(/*! ./baseHuman */ \"./baseHuman.js\"); // we can call baseHuman class from another js file with this code. \r\n//It can be only used by New Browser.\r\n//Variable name should be same with calling class\r\n/*\r\nmodule.exports = class Saphiens extends BaseHuman {\r\n   \r\n    constructor(name) {\r\n        super(name)  \r\n        this.type = \"Saphien\";\r\n        console.log(\"Saphien Constructor\");\r\n    }\r\n    walk() {\r\n        //super.walk();\r\n        console.log(\"Saphien Walk\");\r\n    }\r\n}*/\r\nvar BaseHuman = __webpack_require__(/*! ./baseHuman */ \"./baseHuman.js\");\r\n\r\n\r\nmodule.exports = class Saphiens extends BaseHuman\r\n        {\r\n            constructor(name){\r\n                super(name); \r\n            }\r\n            walk(){\r\n                super.walk();\r\n                console.log(\"Saphien Walk\");\r\n            }\r\n\r\n        }\n\n//# sourceURL=webpack:///./saphiens.js?");

/***/ })

/******/ });