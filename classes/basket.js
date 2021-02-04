class Basket {
    basket_storage = [];

    constructor() {
        const local_storage_basket = window.localStorage.getItem("basket");
        if (local_storage_basket) {
            const simple_basket = JSON.parse(local_storage_basket);
            simple_basket.forEach((item) => {
                const my_basket_item = new BasketItem(item.id, item.quantity);
                this.add(my_basket_item);
            });
        }
    }

    add(basket_item) {
        this.basket_storage.push(basket_item);
        this.updateLocalStorageBasket();
    }

    updateItemQuantity(basket_item) {

        this.updateLocalStorageBasket();
    }

    getBasketQuantity() {
        let total_basket_quantity = 0;
        this.basket_storage.forEach((basket_item) => {
            total_basket_quantity += basket_item.quantity;
        });
        return total_basket_quantity;
    }

    updateLocalStorageBasket() {
        const my_json = JSON.stringify(this.basket_storage, ["furniture", "id", "quantity"]);
        window.localStorage.setItem("basket", my_json);
    }

    getBasketContent() {
        return this.basket_storage;
    }
}