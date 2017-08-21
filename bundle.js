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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Name__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_Name___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_Name__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Price__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Price___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Price__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Type__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Type___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_Type__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Product__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_Product___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_Product__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_Service__ = __webpack_require__(5);






let nameIns = new __WEBPACK_IMPORTED_MODULE_0__components_Name___default.a();
let priceIns = new __WEBPACK_IMPORTED_MODULE_1__components_Price___default.a();
let typeIns = new __WEBPACK_IMPORTED_MODULE_2__components_Type___default.a();
let service  =  new __WEBPACK_IMPORTED_MODULE_4__services_Service__["a" /* default */]();



let $select = document.querySelector("#dish_type");
let $addProduct = document.querySelector("#addProduct");
$addProduct.addEventListener("click", getNewProduct.bind(this));

function getNewProduct() {
	nameIns.setName(document.querySelector("#menu_name").value);
	priceIns.setPrice(document.querySelector("#dish_price").value);
	typeIns.setType($select.options[$select.selectedIndex].innerText);
	let pr = new __WEBPACK_IMPORTED_MODULE_3__components_Product___default.a(nameIns.getName(), priceIns.getPrice(), typeIns.getType());

	let products = service.getFromLocalStorage() || [];
	products.push(pr);
	console.log("Array ", products);
	service.sendToLocalStorage(products);
	console.log(service.getFromLocalStorage());
}



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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Product = (function () {
    function Product(name, price, type) {
        this._name = name;
        this._price = price;
        this._type = type;
    }
    Product.prototype.getName = function () {
        return this._name;
    };
    Product.prototype.getPrice = function () {
        return this._price;
    };
    return Product;
}());
exports.default = Product;
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let data = "products";

class ProductsService {
	sendToLocalStorage(products) {
		return localStorage.setItem(data, JSON.stringify(products));
	}

	getFromLocalStorage() {
		return JSON.parse(localStorage.getItem(data));
	}

	clearStorage() {
		localStorage.clear();
	}
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ProductsService;




/***/ })
/******/ ]);