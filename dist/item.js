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

/***/ "./src/api/get-furniture.js":
/*!**********************************!*\
  !*** ./src/api/get-furniture.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFurniture\": () => (/* binding */ getFurniture)\n/* harmony export */ });\n/* harmony import */ var _classes_furniture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/furniture */ \"./src/classes/furniture.js\");\n\r\n\r\n/**\r\n * Returns an object corresponding to the item's id passed as argument.\r\n * Uses the API to fetch the item.\r\n * Throws an error with error status if the item could not be retrieved.\r\n *\r\n * @function getFurniture\r\n * @param {string} item_id - ID of the item queried\r\n\r\n * @returns {Furniture} Furniture object matching the item's id\r\n */\r\nasync function getFurniture(item_id) {\r\n    const item = await fetch(`http://localhost:3000/api/furniture/${item_id}`);\r\n\r\n    if (!item.ok) {\r\n        throw new Error(`Error ${item.status} : Item ${item_id} could not be retrieved.`);\r\n    }\r\n\r\n    const json_item = await item.json();\r\n    const product = new _classes_furniture__WEBPACK_IMPORTED_MODULE_0__.Furniture(json_item);\r\n\r\n    return product;\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/api/get-furniture.js?");

/***/ }),

/***/ "./src/classes/basket-item.js":
/*!************************************!*\
  !*** ./src/classes/basket-item.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BasketItem\": () => (/* binding */ BasketItem)\n/* harmony export */ });\n/* harmony import */ var _furniture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./furniture */ \"./src/classes/furniture.js\");\n\r\n\r\n/**\r\n * Describe the BasketItem object and what it contains.\r\n * @class BasketItem\r\n */\r\n\r\nclass BasketItem {\r\n\r\n    /**\r\n     * @constructs BasketItem\r\n     * @param {Furniture} furniture - A Furniture Object\r\n     * @param {string} customisation - Furniture customisation choice\r\n     * @param {number} quantity - The quantity of this Furniture in basket\r\n     */\r\n\r\n    constructor(furniture, customisation, quantity) {\r\n        this._id = furniture._id + customisation;\r\n        this.furniture = furniture;\r\n        this.customisation = customisation;\r\n        this.quantity = quantity;\r\n    }\r\n\r\n    get totalPrice() {\r\n        return this.furniture.price * this.quantity;\r\n    }\r\n\r\n    addToQuantity(quantity_to_be_added) {\r\n        this.quantity += quantity_to_be_added;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/classes/basket-item.js?");

/***/ }),

/***/ "./src/classes/basket-storage.js":
/*!***************************************!*\
  !*** ./src/classes/basket-storage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Basket\": () => (/* binding */ Basket)\n/* harmony export */ });\n/* harmony import */ var _basket_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket-item */ \"./src/classes/basket-item.js\");\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../local-storage */ \"./src/local-storage.js\");\n\r\n\r\n\r\nclass Basket {\r\n    constructor() {\r\n        this.basket_storage = {};\r\n        this.updateBasket();\r\n    }\r\n\r\n    updateBasket() {\r\n        let stored_basket = _local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE.basket;\r\n        if (stored_basket) {\r\n            for (const id in stored_basket) {\r\n                this.add(new _basket_item__WEBPACK_IMPORTED_MODULE_0__.BasketItem(\r\n                    stored_basket[id].furniture,\r\n                    stored_basket[id].customisation,\r\n                    stored_basket[id].quantity\r\n                ));\r\n            }\r\n        }\r\n    }\r\n\r\n    add(basket_item) {\r\n        if (!this.basket_storage[basket_item._id]) {\r\n            this.basket_storage[basket_item._id] = basket_item;\r\n        }\r\n        else {\r\n            this.basket_storage[basket_item._id].addToQuantity(basket_item.quantity);\r\n        }\r\n\r\n        this.updateLocalStorage();\r\n    }\r\n\r\n    clear() {\r\n        this.basket_storage = {};\r\n\r\n        this.updateLocalStorage();\r\n    }\r\n\r\n    get quantity() {\r\n        let items_number = 0;\r\n        for (const basket_item_id in this.basket_storage) {\r\n            items_number += this.basket_storage[basket_item_id].quantity;\r\n        }\r\n        return items_number;\r\n    }\r\n\r\n    get isEmpty() {\r\n        return this.quantity === 0;\r\n    }\r\n\r\n    get totalPrice() {\r\n        let basket_total_price = 0;\r\n        for (const basket_item_id in this.basket_storage) {\r\n            basket_total_price += this.basket_storage[basket_item_id].totalPrice;\r\n        }\r\n        return basket_total_price;\r\n    }\r\n\r\n    get content() {\r\n        return this.basket_storage;\r\n    }\r\n\r\n    updateLocalStorage() {\r\n        _local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE.basket = this.basket_storage;\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/classes/basket-storage.js?");

/***/ }),

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

/***/ "./src/classes/furniture.js":
/*!**********************************!*\
  !*** ./src/classes/furniture.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Furniture\": () => (/* binding */ Furniture)\n/* harmony export */ });\n/**\r\n * Describe the Furniture object and what it contains.\r\n * @class Furniture\r\n */\r\n\r\nclass Furniture {\r\n\r\n    /**\r\n     * @constructs Furniture\r\n     * @param {JSON} json_item - JSON representing the product\r\n     */\r\n\r\n    constructor(json_item) {\r\n        this._id = json_item._id;\r\n        this.name = json_item.name;\r\n        this.price = json_item.price;\r\n        this.description = json_item.description;\r\n        this.varnish = json_item.varnish;\r\n        this.imageUrl = json_item.imageUrl;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/classes/furniture.js?");

/***/ }),

/***/ "./src/common/set-basket-quantity.js":
/*!*******************************************!*\
  !*** ./src/common/set-basket-quantity.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setBasketQuantity\": () => (/* binding */ setBasketQuantity)\n/* harmony export */ });\n/* harmony import */ var _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/basket-storage */ \"./src/classes/basket-storage.js\");\n/* harmony import */ var _user_interfaces_header_ui_header_user_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-interfaces/header-ui/header-user-interface */ \"./src/user-interfaces/header-ui/header-user-interface.js\");\n\r\n\r\n\r\n/**\r\n * Returns an object corresponding to the item's id passed as argument.\r\n * Uses the API to fetch the item.\r\n * Throws an error with error status if the item could not be retrieved.\r\n *\r\n * @function setBasketQuantity\r\n * @param {Basket} basket - Basket storage\r\n\r\n * @returns {void} Only acts on DOM\r\n */\r\nfunction setBasketQuantity() {\r\n    setBasketQuantityInUI();\r\n    window.addEventListener(\"storage\", setBasketQuantityInUI);\r\n}\r\n\r\nfunction setBasketQuantityInUI() {\r\n    const basket = new _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__.Basket;\r\n    _user_interfaces_header_ui_header_user_interface__WEBPACK_IMPORTED_MODULE_1__.HeaderUserInterface.showBasketQuantity(basket.quantity);\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/common/set-basket-quantity.js?");

/***/ }),

/***/ "./src/item/item.js":
/*!**************************!*\
  !*** ./src/item/item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_get_furniture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/get-furniture */ \"./src/api/get-furniture.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../router */ \"./src/router.js\");\n/* harmony import */ var _utils_get_furniture_id_from_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/get-furniture-id-from-url */ \"./src/item/utils/get-furniture-id-from-url.js\");\n/* harmony import */ var _utils_setup_user_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/setup-user-interface */ \"./src/item/utils/setup-user-interface.js\");\n\r\n\r\n\r\n\r\n\r\ngenerateItemPage();\r\n\r\nfunction generateItemPage() {\r\n    const item_id = (0,_utils_get_furniture_id_from_url__WEBPACK_IMPORTED_MODULE_2__.getFurnitureIdFromURL)();\r\n    if (!item_id) {\r\n        _router__WEBPACK_IMPORTED_MODULE_1__.Router.home();\r\n        return;\r\n    }\r\n\r\n    (0,_api_get_furniture__WEBPACK_IMPORTED_MODULE_0__.getFurniture)(item_id)\r\n        .catch(() => {\r\n            _router__WEBPACK_IMPORTED_MODULE_1__.Router.home();\r\n            return;\r\n        })\r\n        .then(_utils_setup_user_interface__WEBPACK_IMPORTED_MODULE_3__.setupUserInterface);\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/item/item.js?");

/***/ }),

/***/ "./src/item/utils/get-furniture-id-from-url.js":
/*!*****************************************************!*\
  !*** ./src/item/utils/get-furniture-id-from-url.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFurnitureIdFromURL\": () => (/* binding */ getFurnitureIdFromURL)\n/* harmony export */ });\nfunction getFurnitureIdFromURL() {\r\n    const search_params = document.location.search;\r\n    const url_param = new URLSearchParams(search_params);\r\n    const item_id = url_param.get(\"id\");\r\n\r\n    return item_id ? item_id : null;\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/item/utils/get-furniture-id-from-url.js?");

/***/ }),

/***/ "./src/item/utils/setup-user-interface.js":
/*!************************************************!*\
  !*** ./src/item/utils/setup-user-interface.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setupUserInterface\": () => (/* binding */ setupUserInterface)\n/* harmony export */ });\n/* harmony import */ var _classes_basket_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/basket-item */ \"./src/classes/basket-item.js\");\n/* harmony import */ var _classes_basket_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/basket-storage */ \"./src/classes/basket-storage.js\");\n/* harmony import */ var _common_set_basket_quantity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/set-basket-quantity */ \"./src/common/set-basket-quantity.js\");\n/* harmony import */ var _user_interfaces_furniture_ui_furniture_user_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../user-interfaces/furniture-ui/furniture-user-interface */ \"./src/user-interfaces/furniture-ui/furniture-user-interface.js\");\n\r\n\r\n\r\n\r\n\r\nfunction setupUserInterface(item) {\r\n    _user_interfaces_furniture_ui_furniture_user_interface__WEBPACK_IMPORTED_MODULE_3__.FurnitureUserInterface.furnitureDetails = item;\r\n\r\n    _user_interfaces_furniture_ui_furniture_user_interface__WEBPACK_IMPORTED_MODULE_3__.FurnitureUserInterface.proposeToAddToBasket();\r\n    document.addEventListener(\"ADD_TO_BASKET_FORM_SENT\", (event) => {\r\n        addFurnitureToBasket(event, item)\r\n    });\r\n}\r\n\r\nfunction addFurnitureToBasket(event, item) {\r\n    const basket = new _classes_basket_storage__WEBPACK_IMPORTED_MODULE_1__.Basket;\r\n    basket.add(\r\n        new _classes_basket_item__WEBPACK_IMPORTED_MODULE_0__.BasketItem(\r\n            item,\r\n            event.detail.customisation,\r\n            event.detail.quantity\r\n        )\r\n    );\r\n\r\n    (0,_common_set_basket_quantity__WEBPACK_IMPORTED_MODULE_2__.setBasketQuantity)();\r\n};\r\n\n\n//# sourceURL=webpack://orinoco/./src/item/utils/setup-user-interface.js?");

/***/ }),

/***/ "./src/local-storage.js":
/*!******************************!*\
  !*** ./src/local-storage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOCAL_STORAGE\": () => (/* binding */ LOCAL_STORAGE)\n/* harmony export */ });\nconst LOCAL_STORAGE = {\r\n    get basket() {\r\n        const local_storage_basket = window.localStorage.getItem(\"basket\");\r\n        return local_storage_basket ? JSON.parse(local_storage_basket) : null;\r\n    },\r\n\r\n    set basket(basket_storage) {\r\n        const json_basket_content = JSON.stringify(basket_storage);\r\n        window.localStorage.setItem(\"basket\", json_basket_content);\r\n    },\r\n\r\n    get lastOrder() {\r\n        const local_storage_last_order = window.localStorage.getItem(\"last-order\");\r\n        return local_storage_last_order ? JSON.parse(local_storage_last_order) : null;\r\n    },\r\n\r\n    set lastOrder(order_summary) {\r\n        const json_last_order = JSON.stringify(order_summary);\r\n        window.localStorage.setItem(\"last-order\", json_last_order);\r\n    },\r\n}\n\n//# sourceURL=webpack://orinoco/./src/local-storage.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Router\": () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _classes_command_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/command-request */ \"./src/classes/command-request.js\");\n\r\n\r\nconst Router = {\r\n    basket() {\r\n        window.location = \"basket.html\";\r\n    },\r\n\r\n    home() {\r\n        window.location = \"index.html\";\r\n    },\r\n\r\n    command() {\r\n        window.location = \"command.html\";\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/router.js?");

/***/ }),

/***/ "./src/user-interfaces/common-utils/get-data-element.js":
/*!**************************************************************!*\
  !*** ./src/user-interfaces/common-utils/get-data-element.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataElement\": () => (/* binding */ getDataElement)\n/* harmony export */ });\n/**\r\n * Retrieves the first HTML element corresponding to the data attribute's value passed as argument and throws an error otherwise.\r\n * The search scope can be an HTMLElement or defaults to the entire Document.\r\n *\r\n * @function getDataElement\r\n * @param {string} data_attribute_value - Value given to the data attribute of the element to look for\r\n * @param {HTMLElement} [search_scope=document] - Where to look for the data attribute, defaults to the entire Document\r\n\r\n * @returns {HTMLElement} First element matching the data attribute's value\r\n */\r\n\r\nfunction getDataElement(data_attribute_value, search_scope = document) {\r\n    const element = search_scope.querySelector(`[data='${data_attribute_value}']`);\r\n\r\n    if (!(element instanceof HTMLElement)) {\r\n        throw new Error(`data='${data_attribute_value}' could not be found or is not an HTMLElement`);\r\n    }\r\n\r\n    return element;\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/common-utils/get-data-element.js?");

/***/ }),

/***/ "./src/user-interfaces/common-utils/insert-furniture-details.js":
/*!**********************************************************************!*\
  !*** ./src/user-interfaces/common-utils/insert-furniture-details.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertFurnitureDetails\": () => (/* binding */ insertFurnitureDetails)\n/* harmony export */ });\n/* harmony import */ var _classes_furniture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/furniture */ \"./src/classes/furniture.js\");\n\r\n\r\n/**\r\n * Insert furniture's data in given HTMLElement scope.\r\n *\r\n * @function insertFurnitureDetails\r\n * @param {Furniture} item - Furniture item\r\n * @param {HTMLElement} [scope=document] - Where to look for the data attribute, defaults to the entire Document\r\n\r\n * @returns {void} Only acts on DOM\r\n */\r\n\r\nfunction insertFurnitureDetails(item, scope = document) {\r\n    const item_name = scope.querySelector(`[data='item-name']`)\r\n    if (item_name) {\r\n        item_name.textContent = item.name\r\n    };\r\n\r\n    const item_link = scope.querySelector(`[data='item-link']`)\r\n    if (item_link) {\r\n        item_link.href = `item.html?id=${item._id}`;\r\n        item_link.title = `Naviguer vers la page ${item.name}`;\r\n    }\r\n\r\n    const item_price = scope.querySelector(`[data='item-price']`)\r\n    if (item_price) {\r\n        item_price.textContent = item.price;\r\n    }\r\n\r\n    const item_description = scope.querySelector(`[data='item-description']`)\r\n    if (item_description) {\r\n        item_description.textContent = item.description;\r\n    }\r\n\r\n    const item_image = scope.querySelector(`[data='item-image']`)\r\n    if (item_image) {\r\n        item_image.src = item.imageUrl;\r\n    }\r\n\r\n    const item_customisation_options = scope.querySelector(`[data='item-customisation']`)\r\n    if (item_customisation_options) {\r\n        item.varnish.forEach(varnish => {\r\n            const varnish_option = document.createElement(\"option\");\r\n            varnish_option.textContent = varnish;\r\n            item_customisation_options.appendChild(varnish_option);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/common-utils/insert-furniture-details.js?");

/***/ }),

/***/ "./src/user-interfaces/furniture-ui/furniture-user-interface.js":
/*!**********************************************************************!*\
  !*** ./src/user-interfaces/furniture-ui/furniture-user-interface.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FurnitureUserInterface\": () => (/* binding */ FurnitureUserInterface)\n/* harmony export */ });\n/* harmony import */ var _common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-utils/get-data-element */ \"./src/user-interfaces/common-utils/get-data-element.js\");\n/* harmony import */ var _common_utils_insert_furniture_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-utils/insert-furniture-details */ \"./src/user-interfaces/common-utils/insert-furniture-details.js\");\n/* harmony import */ var _utils_handle_furniture_ui_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/handle-furniture-ui-events */ \"./src/user-interfaces/furniture-ui/utils/handle-furniture-ui-events.js\");\n\r\n\r\n\r\n\r\n\r\nconst FurnitureUserInterface = {\r\n    set furnitureDetails(furniture) {\r\n        (0,_common_utils_insert_furniture_details__WEBPACK_IMPORTED_MODULE_1__.insertFurnitureDetails)(furniture);\r\n    },\r\n\r\n    proposeToAddToBasket() {\r\n        const add_form = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-add-form\");\r\n        add_form.addEventListener(\"submit\", _utils_handle_furniture_ui_events__WEBPACK_IMPORTED_MODULE_2__.handleAddToBasketEvent);\r\n    },\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/furniture-ui/furniture-user-interface.js?");

/***/ }),

/***/ "./src/user-interfaces/furniture-ui/utils/handle-furniture-ui-events.js":
/*!******************************************************************************!*\
  !*** ./src/user-interfaces/furniture-ui/utils/handle-furniture-ui-events.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleAddToBasketEvent\": () => (/* binding */ handleAddToBasketEvent)\n/* harmony export */ });\nfunction handleAddToBasketEvent(event) {\r\n    event.preventDefault();\r\n\r\n    document.dispatchEvent(\r\n        new CustomEvent('ADD_TO_BASKET_FORM_SENT', {\r\n            detail: {\r\n                quantity: parseInt(event.target.quantity_input.value),\r\n                customisation: event.target.customisation_select.value,\r\n            }\r\n        }),\r\n    );\r\n\r\n    event.target.reset();\r\n}\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/furniture-ui/utils/handle-furniture-ui-events.js?");

/***/ }),

/***/ "./src/user-interfaces/header-ui/header-user-interface.js":
/*!****************************************************************!*\
  !*** ./src/user-interfaces/header-ui/header-user-interface.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderUserInterface\": () => (/* binding */ HeaderUserInterface)\n/* harmony export */ });\n/* harmony import */ var _common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-utils/get-data-element */ \"./src/user-interfaces/common-utils/get-data-element.js\");\n\r\n\r\nconst HeaderUserInterface = {\r\n    showBasketQuantity(basket_quantity) {\r\n        const quantity_container = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-quantity\");\r\n        quantity_container.textContent = basket_quantity;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/header-ui/header-user-interface.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/item/item.js");
/******/ 	
/******/ })()
;