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

/***/ "./src/api/get-furniture-list.js":
/*!***************************************!*\
  !*** ./src/api/get-furniture-list.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFurnituresList\": () => (/* binding */ getFurnituresList)\n/* harmony export */ });\n/* harmony import */ var _classes_furniture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/furniture */ \"./src/classes/furniture.js\");\n\r\n\r\n/**\r\n * Asynchronous function retrieving and returning the furnitures complete list from the API.\r\n * @return {Promise<Furniture[]>} An array of Furniture.\r\n */\r\nasync function getFurnituresList() {\r\n    const api_response = await fetch(`http://localhost:3000/api/furniture`);\r\n\r\n    if (!api_response.ok) {\r\n        throw new Error(`Error ${api_response.status} : List of furnitures could not be retrieved.`);\r\n    }\r\n\r\n    let furnitures_list = [];\r\n\r\n    const json_furnitures_list = await api_response.json();\r\n    json_furnitures_list.forEach((json_furniture) => {\r\n        furnitures_list.push(\r\n            new _classes_furniture__WEBPACK_IMPORTED_MODULE_0__.Furniture(json_furniture)\r\n        );\r\n    });\r\n\r\n    return furnitures_list;\r\n}\n\n//# sourceURL=webpack://orinoco/./src/api/get-furniture-list.js?");

/***/ }),

/***/ "./src/classes/furniture.js":
/*!**********************************!*\
  !*** ./src/classes/furniture.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Furniture\": () => (/* binding */ Furniture)\n/* harmony export */ });\n/** Class representing a furniture product. */\r\nclass Furniture {\r\n\r\n    /**\r\n    * Create a furniture.\r\n    * @param {JSON} json_furniture - The JSON representing the furniture product.\r\n    */\r\n\r\n    constructor(json_furniture) {\r\n        this._id = json_furniture._id;\r\n        this.name = json_furniture.name;\r\n        this.price = json_furniture.price;\r\n        this.description = json_furniture.description;\r\n        this.varnish = json_furniture.varnish;\r\n        this.imageUrl = json_furniture.imageUrl;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/classes/furniture.js?");

/***/ }),

/***/ "./src/pages-logic/index/index.js":
/*!****************************************!*\
  !*** ./src/pages-logic/index/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _user_interfaces_furnitures_list_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../user-interfaces/furnitures-list-ui */ \"./src/user-interfaces/furnitures-list-ui/index.js\");\n/* harmony import */ var _api_get_furniture_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../api/get-furniture-list */ \"./src/api/get-furniture-list.js\");\n\r\n\r\n\r\n(0,_api_get_furniture_list__WEBPACK_IMPORTED_MODULE_1__.getFurnituresList)()\r\n    .catch((error) => {\r\n        throw new Error(error.message);\r\n    })\r\n    .then((furnitures_list) => {\r\n        _user_interfaces_furnitures_list_ui__WEBPACK_IMPORTED_MODULE_0__.FurnituresListUserInterface.content = furnitures_list;\r\n    });\r\n\r\n\n\n//# sourceURL=webpack://orinoco/./src/pages-logic/index/index.js?");

/***/ }),

/***/ "./src/user-interfaces/common-utils/get-data-element.js":
/*!**************************************************************!*\
  !*** ./src/user-interfaces/common-utils/get-data-element.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataElement\": () => (/* binding */ getDataElement)\n/* harmony export */ });\n/**\r\n * Retrieves the first HTML element corresponding to the data attribute's value passed as argument and throws an error otherwise.\r\n * The search scope can be an HTMLElement or defaults to the entire Document.\r\n *\r\n * @param {string} data_attribute_value - Value given to the data attribute of the element to look for\r\n * @param {HTMLElement} [search_scope=document] - Where to look for the data attribute, defaults to the entire Document\r\n\r\n * @returns {HTMLElement} First element matching the data attribute's value\r\n */\r\n\r\nfunction getDataElement(data_attribute_value, search_scope = document) {\r\n    const element = search_scope.querySelector(`[data='${data_attribute_value}']`);\r\n\r\n    if (!(element instanceof HTMLElement)) {\r\n        throw new Error(`data='${data_attribute_value}' could not be found or is not an HTMLElement`);\r\n    }\r\n\r\n    return element;\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/common-utils/get-data-element.js?");

/***/ }),

/***/ "./src/user-interfaces/common-utils/insert-furniture-details.js":
/*!**********************************************************************!*\
  !*** ./src/user-interfaces/common-utils/insert-furniture-details.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertFurnitureDetails\": () => (/* binding */ insertFurnitureDetails)\n/* harmony export */ });\n/* harmony import */ var _classes_furniture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/furniture */ \"./src/classes/furniture.js\");\n\r\n\r\n/**\r\n * Insert furniture's data in given HTMLElement scope.\r\n *\r\n * @function insertFurnitureDetails\r\n * @param {Furniture} furniture - Furniture product.\r\n * @param {HTMLElement} [scope=document] - Where to look for the data attribute, defaults to the entire Document\r\n\r\n * @returns {void} Only acts on DOM\r\n */\r\n\r\nfunction insertFurnitureDetails(furniture, scope = document) {\r\n    const furniture_name = scope.querySelector(`[data='furniture-name']`)\r\n    if (furniture_name) {\r\n        furniture_name.textContent = furniture.name\r\n    };\r\n\r\n    const furniture_link = scope.querySelector(`[data='furniture-link']`)\r\n    if (furniture_link) {\r\n        furniture_link.href = `furniture.html?id=${furniture._id}`;\r\n        furniture_link.title = `Naviguer vers la page ${furniture.name}`;\r\n    }\r\n\r\n    const furniture_price = scope.querySelector(`[data='furniture-price']`)\r\n    if (furniture_price) {\r\n        furniture_price.textContent = furniture.price;\r\n    }\r\n\r\n    const furniture_description = scope.querySelector(`[data='furniture-description']`)\r\n    if (furniture_description) {\r\n        furniture_description.textContent = furniture.description;\r\n    }\r\n\r\n    const furniture_image = scope.querySelector(`[data='furniture-image']`)\r\n    if (furniture_image) {\r\n        furniture_image.src = furniture.imageUrl;\r\n    }\r\n\r\n    const furniture_customisation_options = scope.querySelector(`[data='furniture-customisation']`)\r\n    if (furniture_customisation_options) {\r\n        furniture.varnish.forEach(varnish => {\r\n            const varnish_option = document.createElement(\"option\");\r\n            varnish_option.textContent = varnish;\r\n            furniture_customisation_options.appendChild(varnish_option);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/common-utils/insert-furniture-details.js?");

/***/ }),

/***/ "./src/user-interfaces/furnitures-list-ui/index.js":
/*!*********************************************************!*\
  !*** ./src/user-interfaces/furnitures-list-ui/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FurnituresListUserInterface\": () => (/* binding */ FurnituresListUserInterface)\n/* harmony export */ });\n/* harmony import */ var _common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-utils/get-data-element */ \"./src/user-interfaces/common-utils/get-data-element.js\");\n/* harmony import */ var _utils_create_furniture_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create-furniture-card */ \"./src/user-interfaces/furnitures-list-ui/utils/create-furniture-card.js\");\n/* harmony import */ var _classes_furniture__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/furniture */ \"./src/classes/furniture.js\");\n\r\n\r\n\r\n\r\nconst FurnituresListUserInterface = {\r\n\r\n    /**\r\n     * Inserts Furnitures into the User Interface.\r\n     * @param {Furniture[]} furnitures_list - An array of Furniture.\r\n     */\r\n    set content(furnitures_list) {\r\n        const cards_container = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"furniture-cards-container\");\r\n        furnitures_list.forEach((furniture) => {\r\n            let furniture_card = (0,_utils_create_furniture_card__WEBPACK_IMPORTED_MODULE_1__.createFurnitureCard)(furniture);\r\n            cards_container.appendChild(furniture_card);\r\n        });\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/furnitures-list-ui/index.js?");

/***/ }),

/***/ "./src/user-interfaces/furnitures-list-ui/utils/create-furniture-card.js":
/*!*******************************************************************************!*\
  !*** ./src/user-interfaces/furnitures-list-ui/utils/create-furniture-card.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createFurnitureCard\": () => (/* binding */ createFurnitureCard)\n/* harmony export */ });\n/* harmony import */ var _common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common-utils/get-data-element */ \"./src/user-interfaces/common-utils/get-data-element.js\");\n/* harmony import */ var _common_utils_insert_furniture_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-utils/insert-furniture-details */ \"./src/user-interfaces/common-utils/insert-furniture-details.js\");\n\r\n\r\n\r\nfunction createFurnitureCard(furniture) {\r\n    let card_template = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"furniture-card-template\");\r\n    let furniture_card = document.importNode(card_template.content, true);\r\n\r\n    (0,_common_utils_insert_furniture_details__WEBPACK_IMPORTED_MODULE_1__.insertFurnitureDetails)(furniture, furniture_card);\r\n\r\n    return furniture_card;\r\n}\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/furnitures-list-ui/utils/create-furniture-card.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages-logic/index/index.js");
/******/ 	
/******/ })()
;