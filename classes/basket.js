class Basket {
    basket_storage = [];

    add(basket_item) {
        this.basket_storage.push(basket_item);
    }

    getTotalPrice() {
        let total_price = 0;
        this.basket_storage.forEach((basket_item) => {
            total_price += basket_item.furniture.price * basket_item.quantity;
        });
        return total_price;
    }

    getProductsNumber() {
        return this.basket_storage.length;
    }

    getBasketContent() {
        return this.basket_storage;
    }
}