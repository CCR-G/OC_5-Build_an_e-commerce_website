import { getDataElement } from "./get-data-element";
import { insertFurnitureDetails } from "./insert-furniture-details";

export function createBasketItemCard(basket_item) {
    let basket_item_template = getDataElement("basket-item-template");
    let basket_item_clone = document.importNode(basket_item_template.content, true);

    insertFurnitureDetails(basket_item.furniture, basket_item_clone);

    let basket_item_customisation = getDataElement("basket-item-customisation", basket_item_clone);
    basket_item_customisation.textContent = basket_item.customisation;

    let basket_item_quantity = getDataElement("basket-item-quantity", basket_item_clone);
    basket_item_quantity.textContent = basket_item.quantity;

    return basket_item_clone;
}