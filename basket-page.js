import { setBasketQuantity } from "./modules/set-basket-quantity";
import { Basket } from "./classes/basket-storage";
import { getDataElement } from "./modules/get-data-element";
import { insertFurnitureInformation } from "./modules/insert_furniture_information";

generateBasketPage();

function generateBasketPage() {
    let basket = new Basket;
    setBasketQuantity(basket);

    const page_total_price = getDataElement("basket-price");
    page_total_price.textContent = basket.getBasketTotalPrice();

    const clear_basket_button = getDataElement("basket-clear");
    clear_basket_button.addEventListener("click", () => {
        basket.clear();
        generateBasketPage();
    });

    const basket_item_cards_container = getDataElement("basket-items-container");
    const basket_storage = basket.getBasketStorage();
    for (const basket_item_id in basket_storage) {
        basket_item_cards_container.appendChild(createBasketItemCard(basket_storage[basket_item_id]))
    }
}

function createBasketItemCard(basket_item) {
    let basket_item_template = getDataElement("basket-item-template");
    let basket_item_clone = document.importNode(basket_item_template.content, true);

    insertFurnitureInformation(basket_item.furniture, basket_item_clone);

    let item_quantity = getDataElement("item-quantity", basket_item_clone);
    item_quantity.textContent = basket_item.quantity;

    return basket_item_clone;
}
