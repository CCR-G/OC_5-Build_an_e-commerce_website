import { BasketItem } from "./basket-item";
import { LOCAL_STORAGE } from "../local-storage";

export class Basket {
    constructor() {
        this.basket_storage = {};
        this.updateBasket();
    }

    updateBasket() {
        let stored_basket = LOCAL_STORAGE.basket;
        if (stored_basket) {
            for (const id in stored_basket) {
                this.add(new BasketItem(
                    stored_basket[id].furniture,
                    stored_basket[id].customisation,
                    stored_basket[id].quantity
                ));
            }
        }
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

    get quantity() {
        let items_number = 0;
        for (const basket_item_id in this.basket_storage) {
            items_number += this.basket_storage[basket_item_id].quantity;
        }
        return items_number;
    }

    get isEmpty() {
        return this.quantity === 0;
    }

    get totalPrice() {
        let basket_total_price = 0;
        for (const basket_item_id in this.basket_storage) {
            basket_total_price += this.basket_storage[basket_item_id].totalPrice;
        }
        return basket_total_price;
    }

    get content() {
        return this.basket_storage;
    }

    updateLocalStorage() {
        LOCAL_STORAGE.basket = this.basket_storage;
    }
}