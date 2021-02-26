import { Basket } from "../classes/basket-storage";
import { HeaderUserInterface } from "../user-interfaces/header-user-interface";

/**
 * Returns an object corresponding to the item's id passed as argument.
 * Uses the API to fetch the item.
 * Throws an error with error status if the item could not be retrieved.
 *
 * @function setBasketQuantity
 * @param {Basket} basket - Basket storage

 * @returns {void} Only acts on DOM
 */
export function setBasketQuantity() {
    setBasketQuantityInUI();
    window.addEventListener("storage", setBasketQuantityInUI);
}

function setBasketQuantityInUI() {
    const basket = new Basket;
    HeaderUserInterface.showBasketQuantity(basket.quantity);
}
