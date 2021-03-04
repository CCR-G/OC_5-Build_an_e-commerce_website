import { Furniture } from "./furniture";

/** Class representing a basket item (a Furniture put in the basket). */
export class BasketItem {

    /**
     * @param {Furniture} furniture - A Furniture Object.
     * @param {string} customisation - The Furniture customisation choice.
     * @param {number} quantity - The quantity of this Furniture in basket.
     */

    constructor(furniture, customisation, quantity) {
        this._id = furniture._id + customisation;
        this.furniture = furniture;
        this.customisation = customisation;
        this.quantity = quantity;
    }

    get totalPrice() {
        return this.furniture.price * this.quantity;
    }

    /**
     * @param {number} quantity_to_be_added - The number of items that should be added to this basket item's quantity.
     */
    increaseQuantity(quantity_to_be_added) {
        this.quantity += quantity_to_be_added;
    }
}
