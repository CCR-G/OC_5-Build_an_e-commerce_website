import { getDataElement } from "./get-data-element";
import { insertFurnitureDetails } from "./insert-furniture-details";

export function createBasketItemCard(basket_item) {
    let basket_item_template = getDataElement("basket-item-template");
    let basket_item_clone = document.importNode(basket_item_template.content, true);

    insertFurnitureDetails(basket_item.furniture, basket_item_clone);

    /*
    let basket_item_quantity = getDataElement("basket-item-quantity-input", basket_item_clone);
    basket_item_quantity.value = basket_item.quantity;
    basket_item_quantity.addEventListener("change", () => {
        let updated_quantity = parseInt(basket_item_quantity.value);
        if (updated_quantity >= 0) {
            basket_item.updateQuantity(updated_quantity);
        }
        else {
            basket_item_quantity.value = basket_item.quantity;
        }
    });
    */

    let basket_item_customisation = getDataElement("basket-item-customisation", basket_item_clone);
    basket_item_customisation.textContent = basket_item.customisation;

    /*
    let basket_item_clear_button = getDataElement("basket-item-remove-button", basket_item_clone);
    basket_item_clear_button.addEventListener("click", () => {
        basket_item.clear();
        basket_item_quantity.value = basket_item.quantity;
    });
    */

    return basket_item_clone;
}