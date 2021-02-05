import { setBasketQuantity } from "./modules/set-basket-quantity";
import { BasketStorage } from "./classes/basket-storage";

generateBasketPage();

function generateBasketPage() {
    let basket_storage = new BasketStorage;
    setBasketQuantity(basket_storage);
}