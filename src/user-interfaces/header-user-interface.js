export class HeaderUserInterface {
    showBasketQuantity(basket_quantity) {
        const quantity_container = getDataElement("basket-quantity");
        quantity_container.textContent = basket_quantity;
    }
}

//SEE modules/set-basket-quantity