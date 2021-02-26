import { BasketItem } from "../../classes/basket-item";
import { Basket } from "../../classes/basket-storage";
import { FurnitureUserInterface } from "../../user-interfaces/furniture-user-interface";

export function setupUserInterface(item) {
    const basket = new Basket;

    FurnitureUserInterface.furnitureDetails = item;
    FurnitureUserInterface.proposeToAddToBasket();

    document.addEventListener("add_to_basket_form_sent", (event) => {
        basket.add(
            new BasketItem(
                item,
                event.detail.customisation,
                event.detail.quantity
            )
        );
    });
}
