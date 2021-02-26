/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/command-request.js":
/*!****************************************!*\
  !*** ./src/classes/command-request.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommandRequest\": () => (/* binding */ CommandRequest)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/classes/contact.js\");\n/**\r\n * Describe the CommandRequest object and what it contains.\r\n * @class CommandRequest\r\n */\r\n\r\n\r\n\r\nclass CommandRequest {\r\n    /**\r\n     * @constructs CommandRequest\r\n     * @param {Contact} contact - A Furniture Object\r\n     * @param {string[]} product_ids - Furniture customisation choice\r\n     */\r\n\r\n    constructor(contact, product_ids) {\r\n        this.contact = contact;\r\n        this.products = product_ids;\r\n    }\r\n\r\n    get() {\r\n        return {\r\n            contact: this.contact,\r\n            products: this.products,\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/classes/command-request.js?");

/***/ }),

/***/ "./src/classes/contact.js":
/*!********************************!*\
  !*** ./src/classes/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": () => (/* binding */ Contact)\n/* harmony export */ });\n/**\r\n * Describe the Contact object and what it contains.\r\n * @class Contact\r\n */\r\n\r\nclass Contact {\r\n    constructor(firstname, surname, address, town, email) {\r\n        this.firstName = firstname;\r\n        this.lastName = surname;\r\n        this.address = address;\r\n        this.city = town;\r\n        this.email = email;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/classes/contact.js?");

/***/ }),

/***/ "./src/command/command.js":
/*!********************************!*\
  !*** ./src/command/command.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../router */ \"./src/router.js\");\n/* harmony import */ var _user_interfaces_command_confirm_user_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-interfaces/command-confirm-user-interface */ \"./src/user-interfaces/command-confirm-user-interface.js\");\n\r\n\r\n\r\ngenerateCommandConfirmPage();\r\n\r\nfunction generateCommandConfirmPage() {\r\n    const last_order_json = window.localStorage.getItem(\"last-order\");\r\n    if (!last_order_json) {\r\n        _router__WEBPACK_IMPORTED_MODULE_0__.Router.basket;\r\n    }\r\n\r\n    const last_order = JSON.parse(last_order_json);\r\n\r\n    _user_interfaces_command_confirm_user_interface__WEBPACK_IMPORTED_MODULE_1__.CommandConfirmUserInterface.commandNumber = last_order.order_id;\r\n    _user_interfaces_command_confirm_user_interface__WEBPACK_IMPORTED_MODULE_1__.CommandConfirmUserInterface.commandPrice = last_order.order_price;\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/command/command.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Router\": () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _classes_command_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/command-request */ \"./src/classes/command-request.js\");\n\r\n\r\nconst Router = {\r\n    basket() {\r\n        window.location = \"basket.html\";\r\n    },\r\n\r\n    home() {\r\n        window.location = \"index.html\";\r\n    },\r\n\r\n    command() {\r\n        window.location = \"command.html\";\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/router.js?");

/***/ }),

/***/ "./src/user-interfaces/command-confirm-user-interface.js":
/*!***************************************************************!*\
  !*** ./src/user-interfaces/command-confirm-user-interface.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommandConfirmUserInterface\": () => (/* binding */ CommandConfirmUserInterface)\n/* harmony export */ });\n/* harmony import */ var _utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/get-data-element */ \"./src/user-interfaces/utils/get-data-element.js\");\n\r\n\r\nconst CommandConfirmUserInterface = {\r\n    set commandPrice(command_price) {\r\n        const price_container = (0,_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"command-price\");\r\n        price_container.textContent = command_price;\r\n    },\r\n\r\n    set commandNumber(command_number) {\r\n        const command_number_container = (0,_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"command-number\");\r\n        command_number_container.textContent = command_number;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/command-confirm-user-interface.js?");

/***/ }),

/***/ "./src/user-interfaces/utils/get-data-element.js":
/*!*******************************************************!*\
  !*** ./src/user-interfaces/utils/get-data-element.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataElement\": () => (/* binding */ getDataElement)\n/* harmony export */ });\n/**\r\n * Retrieves the first HTML element corresponding to the data attribute's value passed as argument and throws an error otherwise.\r\n * The search scope can be an HTMLElement or defaults to the entire Document.\r\n *\r\n * @function getDataElement\r\n * @param {string} data_attribute_value - Value given to the data attribute of the element to look for\r\n * @param {HTMLElement} [search_scope=document] - Where to look for the data attribute, defaults to the entire Document\r\n\r\n * @returns {HTMLElement} First element matching the data attribute's value\r\n */\r\n\r\nfunction getDataElement(data_attribute_value, search_scope = document) {\r\n    const element = search_scope.querySelector(`[data='${data_attribute_value}']`);\r\n\r\n    if (!(element instanceof HTMLElement)) {\r\n        throw new Error(`data='${data_attribute_value}' could not be found or is not an HTMLElement`);\r\n    }\r\n\r\n    return element;\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/utils/get-data-element.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/command/command.js");
/******/ 	
/******/ })()
;