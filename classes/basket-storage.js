import { BasketItem } from "./basket-item";

export class BasketStorage {
    basket_storage = {}

    constructor() {
        this.updateBasketStorage();
        window.addEventListener('storage', this.updateBasketStorage); // This will be used when several pages are open
    }

    updateBasketStorage() {
        // retrieves localStorage and updates basket_storage
        // basket_storage is filled from json in localstorage basket key;
        // uses BasketItem to fill basket_storage
        // is asynchronous since it needs to use getFurniture();

        // Maybe create a custom event and use CustomEvent.detail to pass along what changed
        // Maybe this customEvent should be in add and clear methods
        // Should the event bubble?


        const local_storage_basket = window.localStorage.getItem("basket");
        if (local_storage_basket) {
            const simple_basket = JSON.parse(local_storage_basket);
            for (const id in simple_basket) {
                const my_basket_item = new BasketItem(simple_basket[id].furniture, simple_basket[id].customisation, simple_basket[id].quantity);
                this.add(my_basket_item);
            }
        }
    }

    add(basket_item) {
        if (!this.basket_storage[basket_item.furniture.id]) {
            this.basket_storage[basket_item.furniture.id] = basket_item;
        }
        else {
            this.basket_storage[basket_item.furniture.id].addToQuantity(basket_item.quantity);
        }

        this.updateLocalStorage();
    }

    clear() {
        this.basket_storage = {};

        this.updateLocalStorage();
    }

    getItemsNumber() {
        let items_number = 0;
        for (const basket_item_id in this.basket_storage) {
            items_number += this.basket_storage[basket_item_id].quantity;
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

        const my_json = JSON.stringify(this.basket_storage);
        window.localStorage.setItem("basket", my_json);
    }
}