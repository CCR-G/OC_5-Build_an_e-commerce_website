import { getFurniture } from "./modules/get-furniture";
import { getDataElement } from "./modules/get-data-element";
import { BasketItem } from "./classes/basket-item";
import { Basket } from "./classes/basket-storage";
import { setBasketQuantity } from "./modules/set-basket-quantity";
import { insertFurnitureInformation } from "./modules/insert_furniture_information";

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
            insertFurnitureInformation(item);
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
