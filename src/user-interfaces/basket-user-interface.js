import { getDataElement } from "./utils/get-data-element";
import { createBasketItemCard } from "./utils/create-basket-item-card";
import { BasketItemUserInterface } from "./basket-item-user-interface";

export const BasketUserInterface = {
    set content(basket_content) {
        for (const basket_item_id in basket_content) {
            const basket_item = basket_content[basket_item_id];

            BasketItemUserInterface.basketItemDetails = basket_item;

            BasketItemUserInterface.proposeToEditBasketItemQuantity(basket_item);

            BasketItemUserInterface.proposeToRemoveBasketItem(basket_item);
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
