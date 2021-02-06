import { Basket } from "./classes/basket-storage";
import { getDataElement } from "./modules/get-data-element";
import { insertFurnitureInformation } from "./modules/insert_furniture_information";

generateBasketPage();

function generateBasketPage() {
    let basket = new Basket;

    const page_total_price = getDataElement("basket-price");
    page_total_price.textContent = basket.getBasketTotalPrice();
    window.addEventListener('updated_quantity', () => {
        page_total_price.textContent = basket.getBasketTotalPrice();
    });

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

    let basket_item_quantity = getDataElement("basket-item-quantity", basket_item_clone);
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

    let basket_item_customisation = getDataElement("basket-item-customisation", basket_item_clone);
    basket_item_customisation.textContent = basket_item.customisation;

    let basket_item_clear_button = getDataElement("basket-item-clear", basket_item_clone);
    basket_item_clear_button.addEventListener("click", () => {
        basket_item.clear();
        basket_item_quantity.value = basket_item.quantity;
    });

    return basket_item_clone;
}
