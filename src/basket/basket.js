import { Basket } from "../classes/basket-storage";
import { setBasketQuantity } from "../common/set-basket-quantity";
import { BasketUserInterface } from "../user-interfaces/basket-user-interface";
import { handleCommandFormSentEvent } from "./utils/handle-command-form-sent";

generateBasketPage();

function generateBasketPage() {
    const basket = new Basket;

    BasketUserInterface.basketContent = basket.content;
    BasketUserInterface.totalPrice = basket.totalPrice

    if (basket.isEmpty) {
        BasketUserInterface.disableCommandRequest();
    }

    BasketUserInterface.proposeToClearBasket();
    document.addEventListener("CLEAR_BASKET_BUTTON_CLICKED", () => {
        basket.clear();
        generateBasketPage();
        setBasketQuantity();
    });

    BasketUserInterface.proposeToCommandBasketContent();
    document.addEventListener("COMMAND_FORM_SENT", handleCommandFormSentEvent)
}
