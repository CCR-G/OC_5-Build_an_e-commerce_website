import { setBasketQuantity } from "../modules/set-basket-quantity";
import { BasketItem } from "./basket-item";

export class Basket {
    basket_storage = {}

    constructor() {
        this.updateBasket();
        setBasketQuantity(this);

        //window.addEventListener('storage', this.updateBasket); // This will be used when several pages are open

        window.addEventListener('updated_quantity', (event) => {
            this.replaceItem(event.detail.updated_basket_item)
        });
    }

    updateBasket() {
        // retrieves localStorage and updates basket
        // basket is filled from json in localstorage basket key;
        // uses BasketItem to fill basket
        // is asynchronous since it needs to use getFurniture();

        // Maybe create a custom event to dispatch and use CustomEvent.detail to pass along what changed
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

    replaceItem(basket_item) {
        this.basket_storage[basket_item._id] = basket_item;

        if (!this.basket_storage[basket_item._id].quantity) {
            delete this.basket_storage[basket_item._id];
        }

        setBasketQuantity(this);
        this.updateLocalStorage();
    }

    add(basket_item) {
        if (!this.basket_storage[basket_item._id]) {
            this.basket_storage[basket_item._id] = basket_item;
        }
        else {
            this.basket_storage[basket_item._id].addToQuantity(basket_item.quantity);
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

    isEmpty() {
        return this.getItemsNumber() === 0;
    }

    getBasketTotalPrice() {
        let basket_total_price = 0;
        for (const basket_item_id in this.basket_storage) {
            basket_total_price += this.basket_storage[basket_item_id].getBasketItemTotalPrice();
        }
        return basket_total_price;
    }

    getBasketStorage() {
        return this.basket_storage;
    }

    updateLocalStorage() {
        // should only send the id of furniture

        const my_json = JSON.stringify(this.basket_storage);
        window.localStorage.setItem("basket", my_json);
    }
}