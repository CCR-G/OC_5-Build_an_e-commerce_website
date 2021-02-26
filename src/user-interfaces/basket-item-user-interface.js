import { getDataElement } from "./utils/get-data-element";
import { insertFurnitureDetails } from "./utils/insert-furniture-details";

export const BasketItemUserInterface = {
    set basketItemDetails(basket_item) {
        const basket_item_cards_container = getDataElement("basket-items-container");

        let basket_item_template = getDataElement("basket-item-template");
        let basket_item_clone = document.importNode(basket_item_template.content, true);

        insertFurnitureDetails(basket_item.furniture, basket_item_clone);

        let basket_item_customisation = getDataElement("basket-item-customisation", basket_item_clone);
        basket_item_customisation.textContent = basket_item.customisation;

        basket_item_cards_container.append(basket_item_clone);
    },

    proposeToEditBasketItemQuantity(basket_item) {
        const quantity_input = getDataElement("basket-item-quantity-input");
        quantity_input.value = basket_item.quantity;
        quantity_input.addEventListener("change", (event) => {
            handleEditBasketItemQuantityEvent(event, basket_item)
        });
    },

    proposeToRemoveBasketItem(basket_item) {
        const remove_button = getDataElement("basket-item-remove-button");
        remove_button.addEventListener("click", () => {
            handleRemoveBasketItemEvent(basket_item)
        });
    }
}

function handleEditBasketItemQuantityEvent(event, basket_item) {
    event.preventDefault();

    document.dispatchEvent(
        new CustomEvent('basket_item_quantity_changed', {
            detail: {
                basket_item: basket_item,
                quantity: event.target.quantity.value,
            }
        }),
    )

    event.target.reset();
}

function handleRemoveBasketItemEvent(basket_item) {
    document.dispatchEvent(
        new CustomEvent('basket_item_remove_button_clicked', {
            detail: {
                basket_item: basket_item,
            }
        })
    );
}