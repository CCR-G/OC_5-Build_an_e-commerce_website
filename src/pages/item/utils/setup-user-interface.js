import { BasketItem } from "../../../classes/basket-item";
import { Basket } from "../../../classes/basket-storage";

import { setBasketQuantity } from "../../../common/set-basket-quantity";

import { FurnitureUserInterface } from "../../../user-interfaces/furniture-ui";

export function setupUserInterface(furniture) {
    FurnitureUserInterface.furnitureDetails = furniture;

    FurnitureUserInterface.proposeToAddToBasket();
    document.addEventListener("ADD_TO_BASKET_FORM_SENT", (event) => {
        addFurnitureToBasket(event, furniture)
    });
}

function addFurnitureToBasket(event, furniture) {
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
