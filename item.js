generateItemPage();

function generateItemPage() {
    const item_id = getProductIdFromURL();
    if (!item_id) {
        returnToHomePage();
    }
    getProduct(item_id)
        .catch(returnToHomePage)
        .then((item) => {
            insertDataInPage(item);
            setupAddToBasketButton(item);
        });
}

function getProductIdFromURL() {
    const search_params = document.location.search;
    const url_param = new URLSearchParams(search_params);
    const item_id = url_param.get("id");

    return item_id ? item_id : null;
}

function returnToHomePage() {
    window.location = "index.html";
}

function insertDataInPage(item) {
    const item_name = getDataElement("item-name");
    item_name.textContent = item.name;

    const item_price = getDataElement("item-price");
    item_price.textContent = item.price;

    const item_description = getDataElement("item-description");
    item_description.textContent = item.description;

    const item_image = getDataElement("item-image");
    item_image.src = item.imageUrl;

    const item_customisation_options = getDataElement("item-customisation");
    item.varnish.forEach(varnish => {
        const varnish_option = document.createElement("option");
        varnish_option.textContent = varnish;
        item_customisation_options.appendChild(varnish_option);
    });
}

function setupAddToBasketButton(item) {
    const my_basket = new Basket;

    const add_to_basket_form = getDataElement("basket-add-form");
    add_to_basket_form.addEventListener("submit", (event) => {
        event.preventDefault();

        const quantity = parseInt(event.target.quantity_input.value);
        my_basket_item = new BasketItem(item.id, quantity);
        my_basket.add(my_basket_item);

        add_to_basket_form.reset();
    });
}
