// import { Furniture } from "./furniture";

/**
 * Describe the BasketItem object and what it contains.
 * @class BasketItem
 */

class BasketItem {

    /**
     * @constructs BasketItem
     * @param {Furniture.id} id - A Furniture's id
     * @param {number} quantity - The quantity of this Furniture in basket
     */

    constructor(furniture_id, quantity) {
        this.id = furniture_id;
        this.quantity = quantity;
    }
}
