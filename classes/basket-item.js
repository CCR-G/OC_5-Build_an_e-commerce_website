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

        // Could we use the following ? Is it readable ? It allows to prevents modification of furniture and customisation of BasketItem
        /*Object.defineProperties(this, 'furniture', furniture);
        Object.defineProperties(this, 'customisation', customisation);
        Object.defineProperties(this, {
            'quantityToBeAdded' : { set: quantity_to_be_added => {this.quantity += quantity_to_be_added}}
        });*/
    }

    getBasketItemTotalPrice() {
        return this.furniture.price * this.quantity;
    }

    addToQuantity(quantity_to_be_added) {
        this.quantity += quantity_to_be_added
    }

    removeFromQuantity(quantity_to_be_removed) {
        this.quantity = quantity_to_be_removed ? quantity_to_be_removed : 0;
    }
}
