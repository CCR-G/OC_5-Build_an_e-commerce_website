generateBasketPage();

function generateBasketPage() {
    emptyBasketItemsContainer();

    const basket = new Basket;
    insertBasketItemCardsInPage(basket.getBasketContent());
    insertTotalPriceInPage(basket.getBasketContent());
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
        createBasketItemCard(basket_item).then((basket_item_card) => {
            basket_item_cards_container.appendChild(basket_item_card);
        });
    });
}

async function createBasketItemCard(basket_item) {
    let basket_item_template = getDataElement("basket-item-template");

    let basket_item_clone = document.importNode(basket_item_template.content, true);

    let item_quantity = getDataElement("item-quantity", basket_item_clone);
    item_quantity.textContent = basket_item.quantity;

    const furniture = await getProduct(basket_item.id);

    let item_name = getDataElement("item-name", basket_item_clone);
    item_name.textContent = furniture.name;

    let item_price = getDataElement("item-price", basket_item_clone);
    item_price.textContent = furniture.price;

    return basket_item_clone;
}

function insertTotalPriceInPage(basket_storage) {
    const page_total_price = getDataElement("basket-price");
    page_total_price.textContent = getBasketTotalPrice(basket_storage);
}

function getBasketTotalPrice(basket_storage) {
    let basket_total_price = 0;

    basket_storage.forEach(basket_item => {
        getProduct(basket_item.id).then((product) => {
            basket_total_price += basket_item.quantity * product.price;
        });
    });

    return basket_total_price;
}
