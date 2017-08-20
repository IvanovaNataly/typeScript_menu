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

Object.defineProperty(exports, "__esModule", { value: true });
var Name_1 = __webpack_require__(1);
var Price_1 = __webpack_require__(2);
var Type_1 = __webpack_require__(3);
var name = new Name_1.default();
var price = new Price_1.default();
var type = new Type_1.default();
var Product = (function () {
    function Product(name, price, type) {
    }
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.setPrice = function (newPrice) {
        this.price = newPrice;
        return this;
    };
    Product.prototype.saveProduct = function () {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                return resolve(true);
            }, 1500);
        });
    };
    return Product;
}());
exports.default = Product;
var $select = document.querySelector("#dish_type");
var $addProduct = document.querySelector("#addProduct");
$addProduct.addEventListener("click", getNewProduct.bind(this));
function getNewProduct() {
    name.setName(document.querySelector("#menu_name").value);
    price.setPrice(document.querySelector("#dish_price").value);
    type.setType($select.options[$select.selectedIndex].innerText);
    var pr = new Product(name.getName(), price.getPrice(), type.getType());
    console.log(pr);
}
// // class Person {
// //     name: string;
// //     age: number;
// //     constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age;
// //     }
// //
// //     greet() {
// //         console.log("Hi, I am " + this.name)
// //     }
// // }
// //
// // var person = new Person("Jack", 29);
// //
// // person.greet();
//
// 


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Name = (function () {
    function Name() {
    }
    Name.prototype.getName = function () {
        return this._name;
    };
    Name.prototype.setName = function (newName) {
        this._name = newName;
    };
    return Name;
}());
exports.default = Name;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Price = (function () {
    function Price() {
    }
    Price.prototype.getPrice = function () {
        return this._price;
    };
    Price.prototype.setPrice = function (newPrice) {
        (newPrice > 0) ? this._price = newPrice : this._price = 1;
    };
    return Price;
}());
exports.default = Price;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Type = (function () {
    function Type() {
    }
    Type.prototype.getType = function () {
        return this._type;
    };
    Type.prototype.setType = function (newType) {
        this._type = newType;
    };
    return Type;
}());
exports.default = Type;


/***/ })
/******/ ]);