generateBasketPage();

function generateBasketPage() {
    getBasketStorage()
        .then((basket_storage) => {
            emptyBasketItemsContainer();
            insertBasketItemCardsInPage(basket_storage.getBasketContent());
            insertTotalPriceInPage(basket_storage.getTotalPrice());
        });
}

async function getBasketStorage() {
    let basket = new Basket;

    for (let i = 0; i < window.localStorage.length; i++) {
        const item_id = window.localStorage.key(i);

        const item_quantity = parseInt(window.localStorage.getItem(item_id), 10);
        const item = await getProduct(item_id);

        const basket_item = new BasketItem(item, item_quantity);
        basket.add(basket_item);
    }
    return basket;
}

function emptyBasketItemsContainer() {
    const basket_item_container = getDataElement("basket-items-container");
    while (basket_item_container.firstChild) {
        basket_item_container.removeChild(basket_item_container.firstChild)
    }
}

function insertBasketItemCardsInPage(basket_storage) {
    const basket_item_cards_container = getDataElement("basket-items-container");
    basket_storage.forEach(basket_item => {
        basket_item_cards_container.appendChild(createBasketItemCard(basket_item));
    });
}

function createBasketItemCard(basket_item) {
    let basket_item_template = getDataElement("basket-item-template");

    let basket_item_clone = document.importNode(basket_item_template.content, true);

    let item_name = getDataElement("item-name", basket_item_clone);
    item_name.textContent = basket_item.furniture.name;

    let item_price = getDataElement("item-price", basket_item_clone);
    item_price.textContent = basket_item.furniture.price;

    let item_quantity = getDataElement("item-quantity", basket_item_clone);
    item_quantity.textContent = basket_item.quantity;

    return basket_item_clone;
}

function insertTotalPriceInPage(basket_price) {
    const page_total_price = getDataElement("basket-price");
    page_total_price.textContent = basket_price;
}

function getBasketTotalPrice(basket_storage) {
    let basket_total_price = 0;

    basket_storage.forEach((basket_item) => {
        basket_total_price += basket_item.furniture.price * basket_item.quantity;
    });

    return basket_total_price;
}