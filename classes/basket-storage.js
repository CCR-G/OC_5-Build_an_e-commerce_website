import { BasketItem } from "./basket-item";

export class BasketStorage {
    basket_storage = {}

    constructor() {
        this.updateBasketStorage();
        window.addEventListener('storage', this.updateBasketStorage);
    }

    updateBasketStorage() {
        // retrieves localStorage and updates basket_storage
        // basket_storage is filled from json in localstorage basket key;
        // uses BasketItem to fill basket_storage
        // is asynchronous since it needs to use getFurniture();
    }

    add(basket_item) {
        // function

        this.updateLocalStorage();
    }

    clear() {
        this.basket_storage = {};

        this.updateLocalStorage();
    }

    getItemsNumber() {
        const items_number = 0;
        for (const basket_item in this.basket_storage) {
            items_number += basket_item.quantity;
        }
        return items_number;
    }

    getBasketTotalPrice() {
        const basket_total_price = 0;
        for (const basket_item in this.basket_storage) {
            total_price += basket_item.getBasketItemTotalPrice();
        }
        return basket_total_price;
    }

    updateLocalStorage() {
        // turn basket_storage into a json and sets basket key in local storage to that json
        // should only send the id of furniture
    }
}