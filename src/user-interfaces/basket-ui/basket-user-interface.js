import { getDataElement } from "../common-utils/get-data-element";

import { createBasketItemCard } from "./utils/create-basket-item-card";
import { handleClearBasketEvent, handleCommandEvent } from "./utils/handle-basket-ui-events";

export const BasketUserInterface = {
    set basketContent(basket_content) {
        const basket_item_cards_container = getDataElement("basket-items-container");
        basket_item_cards_container.textContent = ""; //This is for reseting the card container when clearing basket

        for (const id in basket_content) {
            const basket_item = basket_content[id];
            const basket_item_card = createBasketItemCard(basket_item);
            basket_item_cards_container.append(basket_item_card);
        }
    },

    set totalPrice(basket_total_price) {
        const price_container = getDataElement("basket-price");
        price_container.textContent = basket_total_price;
    },

    proposeToClearBasket() {
        const clear_basket_button = getDataElement("basket-clear");
        clear_basket_button.addEventListener("click", handleClearBasketEvent);
    },

    proposeToCommandBasketContent() {
        const command_form = getDataElement("command-form");
        command_form.addEventListener("submit", handleCommandEvent);
    },

    disableCommandRequest() {
        const command_form = getDataElement("command-form");
        command_form.submit.disabled = true;
    },
}
