import { createBasketItemCard } from "./utils/create-basket-item-card";
import { getDataElement } from "./utils/get-data-element";

export const BasketUserInterface = {
    set content(basket_content) {
        const basket_item_cards_container = getDataElement("basket-items-container")

        for (const basket_item_id in basket_content) {
            const basket_item = basket_content[basket_item_id];
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

function handleClearBasketEvent() {
    document.dispatchEvent(
        new CustomEvent('clear_basket_button_clicked'),
    );
}

function handleCommandEvent(event) {
    event.preventDefault();

    document.dispatchEvent(
        new CustomEvent('command_form_sent', {
            detail: {
                full_name: event.target.full_name.value,
                used_name: event.target.used_name.value,
                address: event.target.address.value,
                town: event.target.town.value,
                email: event.target.email.value,
            }
        }),
    )

    event.target.reset();
}
