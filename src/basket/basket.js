import { Basket } from "../classes/basket-storage";
import { BasketUserInterface } from "../user-interfaces/basket-user-interface";
import { handleCommandFormSentEvent } from "./utils/handle-command-form-sent";

generateBasketPage();

function generateBasketPage() {
    const basket = new Basket;

    BasketUserInterface.content = basket.content;
    BasketUserInterface.totalPrice = basket.totalPrice

    BasketUserInterface.proposeToClearBasket();
    document.addEventListener("clear_basket_button_clicked", () => {
        basket.clear();
        generateBasketPage();
    });

    if (basket.isEmpty) {
        BasketUserInterface.disableCommandRequest();
    }

    BasketUserInterface.proposeToCommandBasketContent();
    document.addEventListener("command_form_sent", handleCommandFormSentEvent)
}
