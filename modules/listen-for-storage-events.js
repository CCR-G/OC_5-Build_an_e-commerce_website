updateBasketDisplay();
listenForStorageEvents();

function listenForStorageEvents() {
    window.addEventListener('storage', () => {
        updateBasketDisplay();
        generateBasketPage();
    });
}

function updateBasketDisplay() {
    const my_basket = new Basket;
    const basket_quantity = getDataElement("basket-quantity");
    basket_quantity.textContent = my_basket.getBasketQuantity();
}
