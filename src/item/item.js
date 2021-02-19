import { getFurniture } from "../modules/get-furniture";
import { Basket } from "../classes/basket-storage";
import { getDataElement } from "../modules/get-data-element";
import { BasketItem } from "../classes/basket-item";
import { insertFurnitureInformation } from "../modules/insert_furniture_information";

import "../styles/styles.css";

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
        });
}

function getFurnitureIdFromURL() {
    const search_params = document.location.search;
    const url_param = new URLSearchParams(search_params);
    const item_id = url_param.get("id");

    return item_id ? item_id : null;
}

function returnToHomePage() {
    window.location = "index.html";
}

function setupAddToBasketButton(basket, item) {
    const add_to_basket_form = getDataElement("basket-add-form");
    add_to_basket_form.addEventListener("submit", (event) => {
        event.preventDefault();

        const quantity = parseInt(add_to_basket_form.quantity_input.value);
        const customisation = add_to_basket_form.customisation_select.value;

        const basket_item = new BasketItem(item, customisation, quantity);
        basket.add(basket_item);

        add_to_basket_form.reset();
    });
}
