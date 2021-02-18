/**
 * Describe the CommandRequest object and what it contains.
 * @class CommandRequest
 */

import { Contact } from "./contact";

export class CommandRequest {

    contact = {};
    products = [];

    /**
     * @constructs CommandRequest
     * @param {Contact} contact - A Furniture Object
     * @param {string[]} product_ids - Furniture customisation choice
     */

    constructor(contact, product_ids) {
        this.contact = contact;
        this.products = product_ids;
    }

    get() {
        return {
            contact: this.contact,
            products: this.products,
        }
    }
}
