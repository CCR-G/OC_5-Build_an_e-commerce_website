import { getFurniture } from "../modules/get-furniture";
import { Basket } from "../classes/basket-storage";
import { BasketItem } from "../classes/basket-item";

import { FurnitureUserInterface } from "../user-interfaces/furniture-user-interface"
import { Router } from "../router";

generateItemPage();

function generateItemPage() {
    const basket = new Basket;

    const item_id = getFurnitureIdFromURL();
    if (!item_id) {
        //Router.home;
        returnToHomePage();
        return;
    }

    getFurniture(item_id)
        .catch(() => {
            returnToHomePage();
            return;
        })
        .then((item) => {
            FurnitureUserInterface.furnitureDetails = item;
            FurnitureUserInterface.proposeToAddToBasket();

            document.addEventListener("add_to_basket_form_sent", (event) => {
                basket.add(new BasketItem(
                    item,
                    event.detail.customisation,
                    event.detail.quantity
                ));
            });
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
