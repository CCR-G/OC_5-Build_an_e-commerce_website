import { Basket } from "../classes/basket-storage";
import { HeaderUserInterface } from "../user-interfaces/header-ui";

export function setBasketQuantity() {
    setBasketQuantityInUI();
    window.addEventListener("storage", setBasketQuantityInUI);
}

function setBasketQuantityInUI() {
    const basket = new Basket;
    HeaderUserInterface.showBasketQuantity(basket.quantity);
}
