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

/***/ "./src/api/post-command-order.js":
/*!***************************************!*\
  !*** ./src/api/post-command-order.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postCommandOrder\": () => (/* binding */ postCommandOrder)\n/* harmony export */ });\n/* harmony import */ var _classes_command_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/command-request */ \"./src/classes/command-request.js\");\n/* harmony import */ var _classes_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/order */ \"./src/classes/order.js\");\n\r\n\r\n\r\n/**\r\n * Asynchronous function posting a command request and returning an order object from the API.\r\n * This order object contains the Contact object and products array from the command request along with an order ID.\r\n * @param {CommandRequest} command_request - xxx.\r\n * @return {Promise<Order>} The order Object returned by the API\r\n */\r\nasync function postCommandOrder(command_request) {\r\n    const api_response = await fetch(`http://localhost:3000/api/furniture/order`, {\r\n        method: \"POST\",\r\n        body: JSON.stringify(command_request),\r\n        headers: { \"Content-type\": \"application/json\" }\r\n    });\r\n\r\n    if (!api_response.ok) {\r\n        throw new Error(`Error ${api_response.status} : There has been a problem with your command request.`);\r\n    }\r\n\r\n    const json_order = await api_response.json();\r\n    const order = new _classes_order__WEBPACK_IMPORTED_MODULE_1__.Order(json_order);\r\n\r\n    return order;\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/api/post-command-order.js?");

/***/ }),

/***/ "./src/classes/basket-item.js":
/*!************************************!*\
  !*** ./src/classes/basket-item.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BasketItem\": () => (/* binding */ BasketItem)\n/* harmony export */ });\n/* harmony import */ var _furniture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./furniture */ \"./src/classes/furniture.js\");\n\r\n\r\n/** Class representing a basket item (a Furniture put in the basket). */\r\nclass BasketItem {\r\n\r\n    /**\r\n     * @param {Furniture} furniture - A Furniture Object.\r\n     * @param {string} customisation - The Furniture customisation choice.\r\n     * @param {number} quantity - The quantity of this Furniture in basket.\r\n     */\r\n\r\n    constructor(furniture, customisation, quantity) {\r\n        this._id = furniture._id + customisation;\r\n        this.furniture = furniture;\r\n        this.customisation = customisation;\r\n        this.quantity = quantity;\r\n    }\r\n\r\n    get totalPrice() {\r\n        return this.furniture.price * this.quantity;\r\n    }\r\n\r\n    /**\r\n     * @param {number} quantity_to_be_added - The number of items that should be added to this basket item's quantity.\r\n     */\r\n    increaseQuantity(quantity_to_be_added) {\r\n        this.quantity += quantity_to_be_added;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/classes/basket-item.js?");

/***/ }),

/***/ "./src/classes/basket-storage.js":
/*!***************************************!*\
  !*** ./src/classes/basket-storage.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Basket\": () => (/* binding */ Basket)\n/* harmony export */ });\n/* harmony import */ var _basket_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basket-item */ \"./src/classes/basket-item.js\");\n/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/local-storage */ \"./src/utils/local-storage.js\");\n\r\n\r\n\r\n/** Class representing the Basket. */\r\nclass Basket {\r\n\r\n    constructor() {\r\n        this.basket_storage = {};\r\n        this.initiateBasketStorage();\r\n    }\r\n\r\n    initiateBasketStorage() {\r\n        let stored_basket = _utils_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE.basket;\r\n        if (stored_basket) {\r\n            for (const id in stored_basket) {\r\n                this.basket_storage[id] = new _basket_item__WEBPACK_IMPORTED_MODULE_0__.BasketItem(\r\n                    stored_basket[id].furniture,\r\n                    stored_basket[id].customisation,\r\n                    stored_basket[id].quantity\r\n                );\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Adds a basket item to the basket.\r\n     * @param {BasketItem} basket_item - The BasketItem to add to the basket.\r\n     */\r\n    add(basket_item) {\r\n        if (!this.basket_storage[basket_item._id]) {\r\n            this.basket_storage[basket_item._id] = basket_item;\r\n        }\r\n        else {\r\n            this.basket_storage[basket_item._id].increaseQuantity(basket_item.quantity);\r\n        }\r\n\r\n        this.updateLocalStorage();\r\n    }\r\n\r\n    clear() {\r\n        this.basket_storage = {};\r\n\r\n        this.updateLocalStorage();\r\n    }\r\n\r\n    get quantity() {\r\n        let items_number = 0;\r\n        for (const basket_item_id in this.basket_storage) {\r\n            items_number += this.basket_storage[basket_item_id].quantity;\r\n        }\r\n        return items_number;\r\n    }\r\n\r\n    get isEmpty() {\r\n        return this.quantity === 0;\r\n    }\r\n\r\n    get totalPrice() {\r\n        let basket_total_price = 0;\r\n        for (const basket_item_id in this.basket_storage) {\r\n            basket_total_price += this.basket_storage[basket_item_id].totalPrice;\r\n        }\r\n        return basket_total_price;\r\n    }\r\n\r\n    get content() {\r\n        return this.basket_storage;\r\n    }\r\n\r\n    updateLocalStorage() {\r\n        _utils_local_storage__WEBPACK_IMPORTED_MODULE_1__.LOCAL_STORAGE.basket = this.basket_storage;\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/classes/basket-storage.js?");

/***/ }),

/***/ "./src/classes/command-request.js":
/*!****************************************!*\
  !*** ./src/classes/command-request.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CommandRequest\": () => (/* binding */ CommandRequest)\n/* harmony export */ });\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact */ \"./src/classes/contact.js\");\n\r\n\r\n/** Class representing a Command Request. */\r\nclass CommandRequest {\r\n\r\n    /**\r\n     * Create a command request.\r\n     * @param {Contact} contact - A Contact object representing the contact and its details.\r\n     * @param {string[]} furnitures_id - An array containing the ids of all furnitures in basket.\r\n     */\r\n\r\n    constructor(contact, furnitures_id) {\r\n        this.contact = contact;\r\n        this.products = furnitures_id;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/classes/command-request.js?");

/***/ }),

/***/ "./src/classes/contact.js":
/*!********************************!*\
  !*** ./src/classes/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contact\": () => (/* binding */ Contact)\n/* harmony export */ });\n/** Class representing a Contact with its details. */\r\nclass Contact {\r\n\r\n    /**\r\n    * Create a Contact.\r\n    * @param {string} firstname - The contact's first name.\r\n    * @param {string} lastname - The contact's last name.\r\n    * @param {string} address - The contact's address.\r\n    * @param {string} city - The city where the contact lives.\r\n    * @param {string} email - The contact's email address.\r\n    */\r\n\r\n    constructor(firstname, lastname, address, city, email) {\r\n        this.firstName = firstname;\r\n        this.lastName = lastname;\r\n        this.address = address;\r\n        this.city = city;\r\n        this.email = email;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/classes/contact.js?");

/***/ }),

/***/ "./src/classes/furniture.js":
/*!**********************************!*\
  !*** ./src/classes/furniture.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Furniture\": () => (/* binding */ Furniture)\n/* harmony export */ });\n/** Class representing a furniture product. */\r\nclass Furniture {\r\n\r\n    /**\r\n    * Create a furniture.\r\n    * @param {JSON} json_furniture - The JSON representing the furniture product.\r\n    */\r\n\r\n    constructor(json_furniture) {\r\n        this._id = json_furniture._id;\r\n        this.name = json_furniture.name;\r\n        this.price = json_furniture.price;\r\n        this.description = json_furniture.description;\r\n        this.varnish = json_furniture.varnish;\r\n        this.imageUrl = json_furniture.imageUrl;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/classes/furniture.js?");

/***/ }),

/***/ "./src/classes/order.js":
/*!******************************!*\
  !*** ./src/classes/order.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Order\": () => (/* binding */ Order)\n/* harmony export */ });\n/** Class representing an Order sent back by the API. */\r\nclass Order {\r\n\r\n    /**\r\n    * Create a order.\r\n    * @param {JSON} json_order - The JSON representing the order sent back by the API.\r\n    */\r\n\r\n    constructor(json_order) {\r\n        this.orderId = json_order.orderId;\r\n        this.furnituresIds = json_order.products;\r\n        this.contact = json_order.contact;\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/classes/order.js?");

/***/ }),

/***/ "./src/pages-logic/basket/basket.js":
/*!******************************************!*\
  !*** ./src/pages-logic/basket/basket.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/basket-storage */ \"./src/classes/basket-storage.js\");\n/* harmony import */ var _common_set_basket_quantity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/set-basket-quantity */ \"./src/pages-logic/common/set-basket-quantity.js\");\n/* harmony import */ var _user_interfaces_basket_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../user-interfaces/basket-ui */ \"./src/user-interfaces/basket-ui/index.js\");\n/* harmony import */ var _utils_handle_command_form_sent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/handle-command-form-sent */ \"./src/pages-logic/basket/utils/handle-command-form-sent.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\ngenerateBasketPage();\r\n\r\nfunction generateBasketPage() {\r\n    const basket = new _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__.Basket;\r\n\r\n    _user_interfaces_basket_ui__WEBPACK_IMPORTED_MODULE_2__.BasketUserInterface.basketContent = basket.content;\r\n    _user_interfaces_basket_ui__WEBPACK_IMPORTED_MODULE_2__.BasketUserInterface.totalPrice = basket.totalPrice\r\n\r\n    if (basket.isEmpty) {\r\n        _user_interfaces_basket_ui__WEBPACK_IMPORTED_MODULE_2__.BasketUserInterface.disableCommandRequest();\r\n    }\r\n\r\n    _user_interfaces_basket_ui__WEBPACK_IMPORTED_MODULE_2__.BasketUserInterface.proposeToClearBasket();\r\n    document.addEventListener(\"CLEAR_BASKET_BUTTON_CLICKED\", () => {\r\n        basket.clear();\r\n        generateBasketPage();\r\n        (0,_common_set_basket_quantity__WEBPACK_IMPORTED_MODULE_1__.setBasketQuantity)();\r\n    });\r\n\r\n    _user_interfaces_basket_ui__WEBPACK_IMPORTED_MODULE_2__.BasketUserInterface.proposeToCommandBasketContent();\r\n    document.addEventListener(\"COMMAND_FORM_SENT\", _utils_handle_command_form_sent__WEBPACK_IMPORTED_MODULE_3__.handleCommandFormSentEvent)\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/pages-logic/basket/basket.js?");

/***/ }),

/***/ "./src/pages-logic/basket/utils/create-command-request.js":
/*!****************************************************************!*\
  !*** ./src/pages-logic/basket/utils/create-command-request.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCommandRequest\": () => (/* binding */ createCommandRequest)\n/* harmony export */ });\n/* harmony import */ var _classes_command_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../classes/command-request */ \"./src/classes/command-request.js\");\n\r\n\r\nfunction createCommandRequest(contact, basket_items) {\r\n    let furnitures_id = [];\r\n\r\n    Object.keys(basket_items).forEach((key) => {\r\n        let basket_item = basket_items[key];\r\n\r\n        let i = 0;\r\n        while (i < basket_item.quantity) {\r\n            furnitures_id.push(basket_item.furniture._id);\r\n            i++;\r\n        }\r\n    });\r\n\r\n    return new _classes_command_request__WEBPACK_IMPORTED_MODULE_0__.CommandRequest(contact, furnitures_id);\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/pages-logic/basket/utils/create-command-request.js?");

/***/ }),

/***/ "./src/pages-logic/basket/utils/handle-command-form-sent.js":
/*!******************************************************************!*\
  !*** ./src/pages-logic/basket/utils/handle-command-form-sent.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleCommandFormSentEvent\": () => (/* binding */ handleCommandFormSentEvent)\n/* harmony export */ });\n/* harmony import */ var _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../classes/basket-storage */ \"./src/classes/basket-storage.js\");\n/* harmony import */ var _classes_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../classes/contact */ \"./src/classes/contact.js\");\n/* harmony import */ var _api_post_command_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../api/post-command-order */ \"./src/api/post-command-order.js\");\n/* harmony import */ var _utils_local_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/local-storage */ \"./src/utils/local-storage.js\");\n/* harmony import */ var _utils_redirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/redirect */ \"./src/utils/redirect.js\");\n/* harmony import */ var _create_command_request__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-command-request */ \"./src/pages-logic/basket/utils/create-command-request.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction handleCommandFormSentEvent(event) {\r\n    const basket = new _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__.Basket;\r\n\r\n    let basket_items = basket.content;\r\n    if (basket.isEmpty) {\r\n        alert(\"No items in basket, please fill your basket with our fantastic furnitures!\");\r\n        return;\r\n    }\r\n\r\n    let contact = new _classes_contact__WEBPACK_IMPORTED_MODULE_1__.Contact(\r\n        event.detail.first_name,\r\n        event.detail.last_name,\r\n        event.detail.address,\r\n        event.detail.town,\r\n        event.detail.email\r\n    );\r\n\r\n    const command_request = (0,_create_command_request__WEBPACK_IMPORTED_MODULE_5__.createCommandRequest)(contact, basket_items);\r\n\r\n    (0,_api_post_command_order__WEBPACK_IMPORTED_MODULE_2__.postCommandOrder)(command_request)\r\n        .then((order) => { handleCommandOrderPosted(order, basket) })\r\n};\r\n\r\nfunction handleCommandOrderPosted(order, basket) {\r\n    const order_summary = {\r\n        order: order,\r\n        order_price: basket.totalPrice,\r\n    }\r\n    _utils_local_storage__WEBPACK_IMPORTED_MODULE_3__.LOCAL_STORAGE.lastOrder = order_summary;\r\n\r\n    _utils_redirect__WEBPACK_IMPORTED_MODULE_4__.REDIRECT.command();\r\n    basket.clear();\r\n};\r\n\n\n//# sourceURL=webpack://orinoco/./src/pages-logic/basket/utils/handle-command-form-sent.js?");

/***/ }),

/***/ "./src/pages-logic/common/set-basket-quantity.js":
/*!*******************************************************!*\
  !*** ./src/pages-logic/common/set-basket-quantity.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setBasketQuantity\": () => (/* binding */ setBasketQuantity)\n/* harmony export */ });\n/* harmony import */ var _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/basket-storage */ \"./src/classes/basket-storage.js\");\n/* harmony import */ var _user_interfaces_header_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../user-interfaces/header-ui */ \"./src/user-interfaces/header-ui/index.js\");\n\r\n\r\n\r\nfunction setBasketQuantity() {\r\n    setBasketQuantityInUI();\r\n    window.addEventListener(\"storage\", setBasketQuantityInUI);\r\n}\r\n\r\nfunction setBasketQuantityInUI() {\r\n    const basket = new _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__.Basket;\r\n    _user_interfaces_header_ui__WEBPACK_IMPORTED_MODULE_1__.HeaderUserInterface.showBasketQuantity(basket.quantity);\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/pages-logic/common/set-basket-quantity.js?");

/***/ }),

/***/ "./src/user-interfaces/basket-ui/index.js":
/*!************************************************!*\
  !*** ./src/user-interfaces/basket-ui/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BasketUserInterface\": () => (/* binding */ BasketUserInterface)\n/* harmony export */ });\n/* harmony import */ var _common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-utils/get-data-element */ \"./src/user-interfaces/common-utils/get-data-element.js\");\n/* harmony import */ var _utils_create_basket_item_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/create-basket-item-card */ \"./src/user-interfaces/basket-ui/utils/create-basket-item-card.js\");\n/* harmony import */ var _utils_handle_basket_ui_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/handle-basket-ui-events */ \"./src/user-interfaces/basket-ui/utils/handle-basket-ui-events.js\");\n\r\n\r\n\r\n\r\n\r\nconst BasketUserInterface = {\r\n    set basketContent(basket_content) {\r\n        const basket_item_cards_container = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-items-container\");\r\n        basket_item_cards_container.textContent = \"\"; //This is for reseting the card container when clearing basket\r\n\r\n        for (const id in basket_content) {\r\n            const basket_item = basket_content[id];\r\n            const basket_item_card = (0,_utils_create_basket_item_card__WEBPACK_IMPORTED_MODULE_1__.createBasketItemCard)(basket_item);\r\n            basket_item_cards_container.append(basket_item_card);\r\n        }\r\n    },\r\n\r\n    set totalPrice(basket_total_price) {\r\n        const price_container = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-price\");\r\n        price_container.textContent = basket_total_price;\r\n    },\r\n\r\n    proposeToClearBasket() {\r\n        const clear_basket_button = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-clear\");\r\n        clear_basket_button.addEventListener(\"click\", _utils_handle_basket_ui_events__WEBPACK_IMPORTED_MODULE_2__.handleClearBasketEvent);\r\n    },\r\n\r\n    proposeToCommandBasketContent() {\r\n        const command_form = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"command-form\");\r\n        command_form.addEventListener(\"submit\", _utils_handle_basket_ui_events__WEBPACK_IMPORTED_MODULE_2__.handleCommandEvent);\r\n    },\r\n\r\n    disableCommandRequest() {\r\n        const command_form = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"command-form\");\r\n        command_form.submit.disabled = true;\r\n    },\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/basket-ui/index.js?");

/***/ }),

/***/ "./src/user-interfaces/basket-ui/utils/create-basket-item-card.js":
/*!************************************************************************!*\
  !*** ./src/user-interfaces/basket-ui/utils/create-basket-item-card.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBasketItemCard\": () => (/* binding */ createBasketItemCard)\n/* harmony export */ });\n/* harmony import */ var _common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common-utils/get-data-element */ \"./src/user-interfaces/common-utils/get-data-element.js\");\n/* harmony import */ var _common_utils_insert_furniture_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common-utils/insert-furniture-details */ \"./src/user-interfaces/common-utils/insert-furniture-details.js\");\n\r\n\r\n\r\nfunction createBasketItemCard(basket_item) {\r\n    let basket_item_template = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-item-template\");\r\n    let basket_item_card = document.importNode(basket_item_template.content, true);\r\n\r\n    (0,_common_utils_insert_furniture_details__WEBPACK_IMPORTED_MODULE_1__.insertFurnitureDetails)(basket_item.furniture, basket_item_card);\r\n\r\n    let basket_item_customisation = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-item-customisation\", basket_item_card);\r\n    basket_item_customisation.textContent = basket_item.customisation;\r\n\r\n    let basket_item_quantity = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-item-quantity\", basket_item_card);\r\n    basket_item_quantity.textContent = basket_item.quantity;\r\n\r\n    return basket_item_card;\r\n}\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/basket-ui/utils/create-basket-item-card.js?");

/***/ }),

/***/ "./src/user-interfaces/basket-ui/utils/handle-basket-ui-events.js":
/*!************************************************************************!*\
  !*** ./src/user-interfaces/basket-ui/utils/handle-basket-ui-events.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleClearBasketEvent\": () => (/* binding */ handleClearBasketEvent),\n/* harmony export */   \"handleCommandEvent\": () => (/* binding */ handleCommandEvent)\n/* harmony export */ });\nfunction handleClearBasketEvent() {\r\n    document.dispatchEvent(\r\n        new CustomEvent('CLEAR_BASKET_BUTTON_CLICKED'),\r\n    );\r\n}\r\n\r\nfunction handleCommandEvent(event) {\r\n    event.preventDefault();\r\n\r\n    document.dispatchEvent(\r\n        new CustomEvent('COMMAND_FORM_SENT', {\r\n            detail: {\r\n                first_name: event.target.first_name.value,\r\n                last_name: event.target.last_name.value,\r\n                address: event.target.address.value,\r\n                town: event.target.town.value,\r\n                email: event.target.email.value,\r\n            }\r\n        }),\r\n    )\r\n\r\n    event.target.reset();\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/basket-ui/utils/handle-basket-ui-events.js?");

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

/***/ "./src/user-interfaces/header-ui/index.js":
/*!************************************************!*\
  !*** ./src/user-interfaces/header-ui/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HeaderUserInterface\": () => (/* binding */ HeaderUserInterface)\n/* harmony export */ });\n/* harmony import */ var _common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-utils/get-data-element */ \"./src/user-interfaces/common-utils/get-data-element.js\");\n\r\n\r\nconst HeaderUserInterface = {\r\n    showBasketQuantity(basket_quantity) {\r\n        const quantity_container = (0,_common_utils_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-quantity\");\r\n        quantity_container.textContent = basket_quantity;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/header-ui/index.js?");

/***/ }),

/***/ "./src/utils/local-storage.js":
/*!************************************!*\
  !*** ./src/utils/local-storage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOCAL_STORAGE\": () => (/* binding */ LOCAL_STORAGE)\n/* harmony export */ });\nconst LOCAL_STORAGE = {\r\n    get basket() {\r\n        const local_storage_basket = window.localStorage.getItem(\"basket\");\r\n        return local_storage_basket ? JSON.parse(local_storage_basket) : null;\r\n    },\r\n\r\n    set basket(basket_storage) {\r\n        const json_basket_content = JSON.stringify(basket_storage);\r\n        window.localStorage.setItem(\"basket\", json_basket_content);\r\n    },\r\n\r\n    get lastOrder() {\r\n        const local_storage_last_order = window.localStorage.getItem(\"last-order\");\r\n        return local_storage_last_order ? JSON.parse(local_storage_last_order) : null;\r\n    },\r\n\r\n    set lastOrder(order_summary) {\r\n        const json_last_order = JSON.stringify(order_summary);\r\n        window.localStorage.setItem(\"last-order\", json_last_order);\r\n    },\r\n}\n\n//# sourceURL=webpack://orinoco/./src/utils/local-storage.js?");

/***/ }),

/***/ "./src/utils/redirect.js":
/*!*******************************!*\
  !*** ./src/utils/redirect.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"REDIRECT\": () => (/* binding */ REDIRECT)\n/* harmony export */ });\nconst REDIRECT = {\r\n\r\n    basket() {\r\n        window.location = \"basket.html\";\r\n    },\r\n\r\n    home() {\r\n        window.location = \"index.html\";\r\n    },\r\n\r\n    command() {\r\n        window.location = \"command.html\";\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/utils/redirect.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/pages-logic/basket/basket.js");
/******/ 	
/******/ })()
;