import { getFurniture } from "./modules/get-furniture";
import { getDataElement } from "./modules/get-data-element";
import { BasketItem } from "./classes/basket-item";
import { Basket } from "./classes/basket-storage";
import { setBasketQuantity } from "./modules/set-basket-quantity";

generateItemPage();

function generateItemPage() {
    const basket = new Basket;

    const item_id = getFurnitureIdFromURL();
    if (!item_id) {
        returnToHomePage();
    }

    getFurniture(item_id)
        .catch(returnToHomePage)
        .then((item) => {
            insertDataInPage(item);
            setupAddToBasketButton(basket, item);
            setBasketQuantity(basket);
        });
}

function getFurnitureIdFromURL() {
    const search_params = document.location.search;
    const url_param = new URLSearchParams(search_params);
    const item_id = url_param.get("id");

    return item_id ? item_id : null;
}

function returnToHomePage() {
    //window.location = "index.html";
}

function insertDataInPage(item) {
    const item_name = getDataElement("item-name");
    item_name.textContent = item.name;

    const item_price = getDataElement("item-price");
    item_price.textContent = item.price;

    const item_description = getDataElement("item-description");
    item_description.textContent = item.description;

    const item_image = getDataElement("item-image");
    item_image.src = item.imageUrl;

    const item_customisation_options = getDataElement("item-customisation");
    item.varnish.forEach(varnish => {
        const varnish_option = document.createElement("option");
        varnish_option.textContent = varnish;
        item_customisation_options.appendChild(varnish_option);
    });
}

function setupAddToBasketButton(basket, item) {
    const add_to_basket_form = getDataElement("basket-add-form");
    add_to_basket_form.addEventListener("submit", (event) => {
        event.preventDefault();

        const quantity = parseInt(event.target.quantity_input.value);
        const customisation = event.target.customisation_select;

        const basket_item = new BasketItem(item, customisation, quantity);
        basket.add(basket_item);

        add_to_basket_form.reset();

        setBasketQuantity(basket);
    });
}
