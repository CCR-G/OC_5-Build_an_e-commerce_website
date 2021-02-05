import { setBasketQuantity } from "./modules/set-basket-quantity";
import { Basket } from "./classes/basket-storage";
import { getDataElement } from "./modules/get-data-element";

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

    let item_name = getDataElement("item-name", basket_item_clone);
    item_name.textContent = basket_item.furniture.name;

    let item_link = getDataElement("item-link", basket_item_clone);
    item_link.href = `item.html?id=${basket_item._id}`;
    item_link.title = `Naviguer vers la page ${basket_item.name}`;

    let item_price = getDataElement("item-price", basket_item_clone);
    item_price.textContent = basket_item.furniture.price;

    let item_quantity = getDataElement("item-quantity", basket_item_clone);
    item_quantity.textContent = basket_item.quantity;

    return basket_item_clone;
}