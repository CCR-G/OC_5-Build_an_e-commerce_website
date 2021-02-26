export const LOCAL_STORAGE = {
    get basket() {
        const local_storage_basket = window.localStorage.getItem("basket");
        return local_storage_basket ? JSON.parse(local_storage_basket) : null;
    },

    set basket(basket_storage) {
        const json_basket_content = JSON.stringify(basket_storage);
        window.localStorage.setItem("basket", json_basket_content);
    },

    get lastOrder() {
        const local_storage_last_order = window.localStorage.getItem("last-order");
        return local_storage_last_order ? JSON.parse(local_storage_last_order) : null;
    },

    set lastOrder(order_summary) {
        const json_last_order = JSON.stringify(order_summary);
        window.localStorage.setItem("last-order", json_last_order);
    },
}