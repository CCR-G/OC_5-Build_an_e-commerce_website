import { Basket } from "../classes/basket-storage";
import { getDataElement } from "../user-interfaces/utils/get-data-element";

/**
 * Returns an object corresponding to the item's id passed as argument.
 * Uses the API to fetch the item.
 * Throws an error with error status if the item could not be retrieved.
 *
 * @function setBasketQuantity
 * @param {Basket} basket - Basket storage

 * @returns {void} Only acts on DOM
 */
export function setBasketQuantity(basket) {
    const basket_quantity_in_page = getDataElement("basket-quantity");
    basket_quantity_in_page.textContent = basket.quantity;
    window.addEventListener('storage', () => {
        console.log("TESTEST")
        basket_quantity_in_page.textContent = basket.quantity;
    });
}