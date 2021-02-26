import { getDataElement } from "./utils/get-data-element";

export const HeaderUserInterface = {
    showBasketQuantity(basket_quantity) {
        const quantity_container = getDataElement("basket-quantity");
        quantity_container.textContent = basket_quantity;
    }
}
