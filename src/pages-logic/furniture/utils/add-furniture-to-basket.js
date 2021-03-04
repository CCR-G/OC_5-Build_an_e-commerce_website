import { BasketItem } from "../../../classes/basket-item";
import { Basket } from "../../../classes/basket-storage";
import { Furniture } from "../../../classes/furniture";

import { setBasketQuantity } from "../../common/set-basket-quantity";

/**
* Is in charge of adding a furniture to the basket.
*
* @param {Event} event - The "ADD_TO_BASKET_FORM_SENT" event containing the necessary details for creating a BasketItem.
* @param {Furniture} furniture - A Furniture Object.
*/

export function addFurnitureToBasket(event, furniture) {
    const basket = new Basket;
    basket.add(
        new BasketItem(
            furniture,
            event.detail.customisation,
            event.detail.quantity
        )
    );

    setBasketQuantity();
};
