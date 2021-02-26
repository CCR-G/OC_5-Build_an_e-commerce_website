import { BasketItem } from "../../classes/basket-item";
import { Basket } from "../../classes/basket-storage";
import { setBasketQuantity } from "../../common/set-basket-quantity";
import { FurnitureUserInterface } from "../../user-interfaces/furniture-ui";

export function setupUserInterface(item) {
    FurnitureUserInterface.furnitureDetails = item;

    FurnitureUserInterface.proposeToAddToBasket();
    document.addEventListener("ADD_TO_BASKET_FORM_SENT", (event) => {
        addFurnitureToBasket(event, item)
    });
}

function addFurnitureToBasket(event, item) {
    const basket = new Basket;
    basket.add(
        new BasketItem(
            item,
            event.detail.customisation,
            event.detail.quantity
        )
    );

    setBasketQuantity();
};
