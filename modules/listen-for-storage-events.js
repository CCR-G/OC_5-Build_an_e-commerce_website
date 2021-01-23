updateBasketDisplay();
listenForStorageEvents();

function listenForStorageEvents() {
    window.addEventListener('storage', () => {
        updateBasketDisplay()
    });
}

function updateBasketDisplay() {
    const basket_quantity = getDataElement("basket-quantity");
    basket_quantity.textContent = getBasketQuantity();
}

function getBasketQuantity() {
    let total_basket_quantity = 0;
    for (let i = 0; i < window.localStorage.length; i++) {
        const item_id = window.localStorage.key(i);
        const item_quantity = window.localStorage.getItem(item_id);

        total_basket_quantity += parseInt(item_quantity);
    }
    return total_basket_quantity;
}
