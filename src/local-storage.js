export const LOCAL_STORAGE = {
    get basket() {
        const local_storage_basket = window.localStorage.getItem("basket");
        return local_storage_basket ? JSON.parse(local_storage_basket) : null;
    },

    set basket(basket_storage) {
        const json_basket_content = JSON.stringify(basket_storage);
        window.localStorage.setItem("basket", json_basket_content);
    }
}