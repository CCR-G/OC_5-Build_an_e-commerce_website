// import { Furniture } from "./furniture";

/**
 * Describe the BasketItem object and what it contains.
 * @class BasketItem
 */

class BasketItem {

    /**
     * @constructs BasketItem
     * @param {Furniture} furniture - A Furniture Object
     * @param {number} quantity - The quantity of this Furniture in basket
     */

    constructor(furniture, quantity) {
        this.furniture = furniture;
        this.quantity = quantity;
    }
}
