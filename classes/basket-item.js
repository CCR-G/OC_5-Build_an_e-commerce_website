import { Furniture } from "./furniture";

/**
 * Describe the BasketItem object and what it contains.
 * @class BasketItem
 */

export class BasketItem {

    /**
     * @constructs BasketItem
     * @param {Furniture} furniture - A Furniture Object
     * @param {string} customisation - Furniture customisation choice
     * @param {number} quantity - The quantity of this Furniture in basket
     */

    constructor(furniture, customisation, quantity) {
        this.furniture = furniture;
        this.customisation = customisation;
        this.quantity = quantity;
    }
}
