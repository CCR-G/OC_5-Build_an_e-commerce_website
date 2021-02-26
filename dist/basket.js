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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"postCommandOrder\": () => (/* binding */ postCommandOrder)\n/* harmony export */ });\nasync function postCommandOrder(command_request) {\r\n    const order = await fetch(`http://localhost:3000/api/furniture/order`, {\r\n        method: \"POST\",\r\n        body: JSON.stringify(command_request.get()),\r\n        headers: { \"Content-type\": \"application/json\" }\r\n    });\r\n\r\n    if (!order.ok) {\r\n        throw new Error(`Error ${item.status} : There has been a problem.`);\r\n    }\r\n\r\n    return order.json();\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/api/post-command-order.js?");

/***/ }),

/***/ "./src/basket/basket.js":
/*!******************************!*\
  !*** ./src/basket/basket.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/basket-storage */ \"./src/classes/basket-storage.js\");\n/* harmony import */ var _user_interfaces_basket_user_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-interfaces/basket-user-interface */ \"./src/user-interfaces/basket-user-interface.js\");\n/* harmony import */ var _utils_handle_command_form_sent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/handle-command-form-sent */ \"./src/basket/utils/handle-command-form-sent.js\");\n\r\n\r\n\r\n\r\ngenerateBasketPage();\r\n\r\nfunction generateBasketPage() {\r\n    const basket = new _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__.Basket;\r\n\r\n    _user_interfaces_basket_user_interface__WEBPACK_IMPORTED_MODULE_1__.BasketUserInterface.content = basket.content;\r\n    _user_interfaces_basket_user_interface__WEBPACK_IMPORTED_MODULE_1__.BasketUserInterface.totalPrice = basket.totalPrice\r\n\r\n    _user_interfaces_basket_user_interface__WEBPACK_IMPORTED_MODULE_1__.BasketUserInterface.proposeToClearBasket();\r\n    document.addEventListener(\"clear_basket_button_clicked\", () => {\r\n        basket.clear();\r\n        generateBasketPage();\r\n    });\r\n\r\n    if (basket.isEmpty) {\r\n        _user_interfaces_basket_user_interface__WEBPACK_IMPORTED_MODULE_1__.BasketUserInterface.disableCommandRequest();\r\n    }\r\n\r\n    _user_interfaces_basket_user_interface__WEBPACK_IMPORTED_MODULE_1__.BasketUserInterface.proposeToCommandBasketContent();\r\n    document.addEventListener(\"command_form_sent\", _utils_handle_command_form_sent__WEBPACK_IMPORTED_MODULE_2__.handleCommandFormSentEvent)\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/basket/basket.js?");

/***/ }),

/***/ "./src/basket/utils/create-command-request.js":
/*!****************************************************!*\
  !*** ./src/basket/utils/create-command-request.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createCommandRequest\": () => (/* binding */ createCommandRequest)\n/* harmony export */ });\n/* harmony import */ var _classes_command_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/command-request */ \"./src/classes/command-request.js\");\n\r\n\r\nfunction createCommandRequest(contact, basket_items) {\r\n    let product_ids = [];\r\n\r\n    Object.keys(basket_items).forEach((key) => {\r\n        let basket_item = basket_items[key];\r\n\r\n        let i = 0;\r\n        while (i < basket_item.quantity) {\r\n            product_ids.push(basket_item.furniture._id);\r\n            i++;\r\n        }\r\n    });\r\n\r\n    return new _classes_command_request__WEBPACK_IMPORTED_MODULE_0__.CommandRequest(contact, product_ids);\r\n}\n\n//# sourceURL=webpack://orinoco/./src/basket/utils/create-command-request.js?");

/***/ }),

/***/ "./src/basket/utils/handle-command-form-sent.js":
/*!******************************************************!*\
  !*** ./src/basket/utils/handle-command-form-sent.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleCommandFormSentEvent\": () => (/* binding */ handleCommandFormSentEvent)\n/* harmony export */ });\n/* harmony import */ var _api_post_command_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api/post-command-order */ \"./src/api/post-command-order.js\");\n/* harmony import */ var _classes_basket_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../classes/basket-storage */ \"./src/classes/basket-storage.js\");\n/* harmony import */ var _classes_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../classes/contact */ \"./src/classes/contact.js\");\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../router */ \"./src/router.js\");\n/* harmony import */ var _create_command_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-command-request */ \"./src/basket/utils/create-command-request.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nfunction handleCommandFormSentEvent(event) {\r\n    const basket = new _classes_basket_storage__WEBPACK_IMPORTED_MODULE_1__.Basket;\r\n\r\n    let basket_items = basket.content;\r\n    if (basket.isEmpty) {\r\n        alert(\"No items in basket, please fill your basket with our fantastic furnitures!\");\r\n        return;\r\n    }\r\n\r\n    let contact = new _classes_contact__WEBPACK_IMPORTED_MODULE_2__.Contact(\r\n        event.detail.full_name,\r\n        event.detail.used_name,\r\n        event.detail.address,\r\n        event.detail.town,\r\n        event.detail.email\r\n    );\r\n\r\n    const command_request = (0,_create_command_request__WEBPACK_IMPORTED_MODULE_4__.createCommandRequest)(contact, basket_items);\r\n\r\n    (0,_api_post_command_order__WEBPACK_IMPORTED_MODULE_0__.postCommandOrder)(command_request)\r\n        .then((order_id) => { handleCommandOrderPosted(order_id, basket) })\r\n};\r\n\r\nfunction handleCommandOrderPosted(order_id, basket) {\r\n    const order_summary = {\r\n        order_id: order_id.orderId,\r\n        order_price: basket.totalPrice,\r\n    }\r\n    const my_json = JSON.stringify(order_summary);\r\n    window.localStorage.setItem(\"last-order\", my_json);\r\n\r\n    _router__WEBPACK_IMPORTED_MODULE_3__.Router.command();\r\n    basket.clear();\r\n};\r\n\n\n//# sourceURL=webpack://orinoco/./src/basket/utils/handle-command-form-sent.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Basket\": () => (/* binding */ Basket)\n/* harmony export */ });\n/* harmony import */ var _modules_set_basket_quantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/set-basket-quantity */ \"./src/modules/set-basket-quantity.js\");\n/* harmony import */ var _basket_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basket-item */ \"./src/classes/basket-item.js\");\n/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-storage */ \"./src/classes/local-storage.js\");\n\r\n\r\n\r\n\r\nclass Basket {\r\n    constructor() {\r\n        this.basket_storage = {};\r\n\r\n        this.updateBasket();\r\n        (0,_modules_set_basket_quantity__WEBPACK_IMPORTED_MODULE_0__.setBasketQuantity)(this);\r\n    }\r\n\r\n    updateBasket() {\r\n        let stored_basket = _local_storage__WEBPACK_IMPORTED_MODULE_2__.LOCAL_STORAGE.basket;\r\n        if (stored_basket) {\r\n            for (const id in stored_basket) {\r\n                this.add(new _basket_item__WEBPACK_IMPORTED_MODULE_1__.BasketItem(\r\n                    stored_basket[id].furniture,\r\n                    stored_basket[id].customisation,\r\n                    stored_basket[id].quantity\r\n                ));\r\n            }\r\n        }\r\n    }\r\n\r\n    add(basket_item) {\r\n        if (!this.basket_storage[basket_item._id]) {\r\n            this.basket_storage[basket_item._id] = basket_item;\r\n        }\r\n        else {\r\n            this.basket_storage[basket_item._id].addToQuantity(basket_item.quantity);\r\n        }\r\n\r\n        this.updateLocalStorage();\r\n    }\r\n\r\n    clear() {\r\n        this.basket_storage = {};\r\n\r\n        this.updateLocalStorage();\r\n    }\r\n\r\n    get quantity() {\r\n        let items_number = 0;\r\n        for (const basket_item_id in this.basket_storage) {\r\n            items_number += this.basket_storage[basket_item_id].quantity;\r\n        }\r\n        return items_number;\r\n    }\r\n\r\n    get isEmpty() {\r\n        return this.quantity === 0;\r\n    }\r\n\r\n    get totalPrice() {\r\n        let basket_total_price = 0;\r\n        for (const basket_item_id in this.basket_storage) {\r\n            basket_total_price += this.basket_storage[basket_item_id].totalPrice;\r\n        }\r\n        return basket_total_price;\r\n    }\r\n\r\n    get content() {\r\n        return this.basket_storage;\r\n    }\r\n\r\n    updateLocalStorage() {\r\n        _local_storage__WEBPACK_IMPORTED_MODULE_2__.LOCAL_STORAGE.basket = this.basket_storage;\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/classes/basket-storage.js?");

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

/***/ "./src/classes/local-storage.js":
/*!**************************************!*\
  !*** ./src/classes/local-storage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"LOCAL_STORAGE\": () => (/* binding */ LOCAL_STORAGE)\n/* harmony export */ });\nconst LOCAL_STORAGE = {\r\n    get basket() {\r\n        const local_storage_basket = window.localStorage.getItem(\"basket\");\r\n        return local_storage_basket ? JSON.parse(local_storage_basket) : null;\r\n    },\r\n\r\n    set basket(basket_storage) {\r\n        const json_basket_content = JSON.stringify(basket_storage);\r\n        window.localStorage.setItem(\"basket\", json_basket_content);\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/classes/local-storage.js?");

/***/ }),

/***/ "./src/modules/set-basket-quantity.js":
/*!********************************************!*\
  !*** ./src/modules/set-basket-quantity.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"setBasketQuantity\": () => (/* binding */ setBasketQuantity)\n/* harmony export */ });\n/* harmony import */ var _classes_basket_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/basket-storage */ \"./src/classes/basket-storage.js\");\n/* harmony import */ var _user_interfaces_utils_get_data_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-interfaces/utils/get-data-element */ \"./src/user-interfaces/utils/get-data-element.js\");\n\r\n\r\n\r\n/**\r\n * Returns an object corresponding to the item's id passed as argument.\r\n * Uses the API to fetch the item.\r\n * Throws an error with error status if the item could not be retrieved.\r\n *\r\n * @function setBasketQuantity\r\n * @param {Basket} basket - Basket storage\r\n\r\n * @returns {void} Only acts on DOM\r\n */\r\nfunction setBasketQuantity(basket) {\r\n    const basket_quantity_in_page = (0,_user_interfaces_utils_get_data_element__WEBPACK_IMPORTED_MODULE_1__.getDataElement)(\"basket-quantity\");\r\n    basket_quantity_in_page.textContent = basket.quantity;\r\n    window.addEventListener('storage', () => {\r\n        console.log(\"TESTEST\")\r\n        basket_quantity_in_page.textContent = basket.quantity;\r\n    });\r\n}\n\n//# sourceURL=webpack://orinoco/./src/modules/set-basket-quantity.js?");

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Router\": () => (/* binding */ Router)\n/* harmony export */ });\n/* harmony import */ var _classes_command_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/command-request */ \"./src/classes/command-request.js\");\n\r\n\r\nconst Router = {\r\n    basket() {\r\n        window.location = \"basket.html\";\r\n    },\r\n\r\n    home() {\r\n        window.location = \"index.html\";\r\n    },\r\n\r\n    command() {\r\n        window.location = \"command.html\";\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/router.js?");

/***/ }),

/***/ "./src/user-interfaces/basket-user-interface.js":
/*!******************************************************!*\
  !*** ./src/user-interfaces/basket-user-interface.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BasketUserInterface\": () => (/* binding */ BasketUserInterface)\n/* harmony export */ });\n/* harmony import */ var _utils_create_basket_item_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/create-basket-item-card */ \"./src/user-interfaces/utils/create-basket-item-card.js\");\n/* harmony import */ var _utils_get_data_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/get-data-element */ \"./src/user-interfaces/utils/get-data-element.js\");\n\r\n\r\n\r\nconst BasketUserInterface = {\r\n    set content(basket_content) {\r\n        const basket_item_cards_container = (0,_utils_get_data_element__WEBPACK_IMPORTED_MODULE_1__.getDataElement)(\"basket-items-container\")\r\n\r\n        for (const basket_item_id in basket_content) {\r\n            const basket_item = basket_content[basket_item_id];\r\n            const basket_item_card = (0,_utils_create_basket_item_card__WEBPACK_IMPORTED_MODULE_0__.createBasketItemCard)(basket_item);\r\n            basket_item_cards_container.append(basket_item_card);\r\n        }\r\n    },\r\n\r\n    set totalPrice(basket_total_price) {\r\n        const price_container = (0,_utils_get_data_element__WEBPACK_IMPORTED_MODULE_1__.getDataElement)(\"basket-price\");\r\n        price_container.textContent = basket_total_price;\r\n    },\r\n\r\n    proposeToClearBasket() {\r\n        const clear_basket_button = (0,_utils_get_data_element__WEBPACK_IMPORTED_MODULE_1__.getDataElement)(\"basket-clear\");\r\n        clear_basket_button.addEventListener(\"click\", handleClearBasketEvent);\r\n    },\r\n\r\n    proposeToCommandBasketContent() {\r\n        const command_form = (0,_utils_get_data_element__WEBPACK_IMPORTED_MODULE_1__.getDataElement)(\"command-form\");\r\n        command_form.addEventListener(\"submit\", handleCommandEvent);\r\n    },\r\n\r\n    disableCommandRequest() {\r\n        const command_form = (0,_utils_get_data_element__WEBPACK_IMPORTED_MODULE_1__.getDataElement)(\"command-form\");\r\n        command_form.submit.disabled = true;\r\n    },\r\n}\r\n\r\nfunction handleClearBasketEvent() {\r\n    document.dispatchEvent(\r\n        new CustomEvent('clear_basket_button_clicked'),\r\n    );\r\n}\r\n\r\nfunction handleCommandEvent(event) {\r\n    event.preventDefault();\r\n\r\n    document.dispatchEvent(\r\n        new CustomEvent('command_form_sent', {\r\n            detail: {\r\n                full_name: event.target.full_name.value,\r\n                used_name: event.target.used_name.value,\r\n                address: event.target.address.value,\r\n                town: event.target.town.value,\r\n                email: event.target.email.value,\r\n            }\r\n        }),\r\n    )\r\n\r\n    event.target.reset();\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/basket-user-interface.js?");

/***/ }),

/***/ "./src/user-interfaces/utils/create-basket-item-card.js":
/*!**************************************************************!*\
  !*** ./src/user-interfaces/utils/create-basket-item-card.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createBasketItemCard\": () => (/* binding */ createBasketItemCard)\n/* harmony export */ });\n/* harmony import */ var _get_data_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get-data-element */ \"./src/user-interfaces/utils/get-data-element.js\");\n/* harmony import */ var _insert_furniture_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./insert-furniture-details */ \"./src/user-interfaces/utils/insert-furniture-details.js\");\n\r\n\r\n\r\nfunction createBasketItemCard(basket_item) {\r\n    let basket_item_template = (0,_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-item-template\");\r\n    let basket_item_clone = document.importNode(basket_item_template.content, true);\r\n\r\n    (0,_insert_furniture_details__WEBPACK_IMPORTED_MODULE_1__.insertFurnitureDetails)(basket_item.furniture, basket_item_clone);\r\n\r\n    let basket_item_customisation = (0,_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-item-customisation\", basket_item_clone);\r\n    basket_item_customisation.textContent = basket_item.customisation;\r\n\r\n    let basket_item_quantity = (0,_get_data_element__WEBPACK_IMPORTED_MODULE_0__.getDataElement)(\"basket-item-quantity\", basket_item_clone);\r\n    basket_item_quantity.textContent = basket_item.quantity;\r\n\r\n    return basket_item_clone;\r\n}\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/utils/create-basket-item-card.js?");

/***/ }),

/***/ "./src/user-interfaces/utils/get-data-element.js":
/*!*******************************************************!*\
  !*** ./src/user-interfaces/utils/get-data-element.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDataElement\": () => (/* binding */ getDataElement)\n/* harmony export */ });\n/**\r\n * Retrieves the first HTML element corresponding to the data attribute's value passed as argument and throws an error otherwise.\r\n * The search scope can be an HTMLElement or defaults to the entire Document.\r\n *\r\n * @function getDataElement\r\n * @param {string} data_attribute_value - Value given to the data attribute of the element to look for\r\n * @param {HTMLElement} [search_scope=document] - Where to look for the data attribute, defaults to the entire Document\r\n\r\n * @returns {HTMLElement} First element matching the data attribute's value\r\n */\r\n\r\nfunction getDataElement(data_attribute_value, search_scope = document) {\r\n    const element = search_scope.querySelector(`[data='${data_attribute_value}']`);\r\n\r\n    if (!(element instanceof HTMLElement)) {\r\n        throw new Error(`data='${data_attribute_value}' could not be found or is not an HTMLElement`);\r\n    }\r\n\r\n    return element;\r\n}\r\n\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/utils/get-data-element.js?");

/***/ }),

/***/ "./src/user-interfaces/utils/insert-furniture-details.js":
/*!***************************************************************!*\
  !*** ./src/user-interfaces/utils/insert-furniture-details.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"insertFurnitureDetails\": () => (/* binding */ insertFurnitureDetails)\n/* harmony export */ });\n/* harmony import */ var _classes_furniture__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../classes/furniture */ \"./src/classes/furniture.js\");\n\r\n\r\n/**\r\n * Insert furniture's data in given HTMLElement scope.\r\n *\r\n * @function insertFurnitureDetails\r\n * @param {Furniture} item - Furniture item\r\n * @param {HTMLElement} [scope=document] - Where to look for the data attribute, defaults to the entire Document\r\n\r\n * @returns {void} Only acts on DOM\r\n */\r\n\r\nfunction insertFurnitureDetails(item, scope = document) {\r\n    const item_name = scope.querySelector(`[data='item-name']`)\r\n    if (item_name) {\r\n        item_name.textContent = item.name\r\n    };\r\n\r\n    const item_link = scope.querySelector(`[data='item-link']`)\r\n    if (item_link) {\r\n        item_link.href = `item.html?id=${item._id}`;\r\n        item_link.title = `Naviguer vers la page ${item.name}`;\r\n    }\r\n\r\n    const item_price = scope.querySelector(`[data='item-price']`)\r\n    if (item_price) {\r\n        item_price.textContent = item.price;\r\n    }\r\n\r\n    const item_description = scope.querySelector(`[data='item-description']`)\r\n    if (item_description) {\r\n        item_description.textContent = item.description;\r\n    }\r\n\r\n    const item_image = scope.querySelector(`[data='item-image']`)\r\n    if (item_image) {\r\n        item_image.src = item.imageUrl;\r\n    }\r\n\r\n    const item_customisation_options = scope.querySelector(`[data='item-customisation']`)\r\n    if (item_customisation_options) {\r\n        item.varnish.forEach(varnish => {\r\n            const varnish_option = document.createElement(\"option\");\r\n            varnish_option.textContent = varnish;\r\n            item_customisation_options.appendChild(varnish_option);\r\n        });\r\n    }\r\n}\n\n//# sourceURL=webpack://orinoco/./src/user-interfaces/utils/insert-furniture-details.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/basket/basket.js");
/******/ 	
/******/ })()
;