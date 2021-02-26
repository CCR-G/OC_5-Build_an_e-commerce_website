import { getDataElement } from "./utils/get-data-element";
import { insertFurnitureDetails } from "./utils/insert-furniture-details";

export const FurnitureUserInterface = {
    set furnitureDetails(furniture) {
        insertFurnitureDetails(furniture);
    },

    proposeToAddToBasket() {
        const add_form = getDataElement("basket-add-form");
        add_form.addEventListener("submit", handleAddToBasketEvent);
    },
}

function handleAddToBasketEvent(event) {
    event.preventDefault();

    document.dispatchEvent(
        new CustomEvent('add_to_basket_form_sent', {
            detail: {
                quantity: parseInt(event.target.quantity_input.value),
                customisation: event.target.customisation_select.value,
            }
        }),
    );

    event.target.reset();
}