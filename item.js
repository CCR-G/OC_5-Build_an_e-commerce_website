generateItemPage();

function generateItemPage() {
    const item_id = getProductIdFromURL();
    if (!item_id) {
        returnToHomePage();
    }
    getProduct(item_id)
        .catch(() => returnToHomePage())
        .then((item) => insertDataInPage(item));
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

    const add_to_basket_form = getDataElement("basket-add-form");
    add_to_basket_form.id = item.id;
    add_to_basket_form.addEventListener("submit", (event) => {
        event.preventDefault();

        const item_id = event.target.id;
        const quantity = parseInt(event.target.quantity_input.value);
        addToBasket(item_id, quantity);

        updateBasketDisplay();

        add_to_basket_form.reset();
    });
}

function addToBasket(item_id, quantity) {
    let item_stored_quantity = window.localStorage.getItem(item_id);

    if (!item_stored_quantity) {
        window.localStorage.setItem(item_id, quantity);
        return;
    }

    let item_new_quantity = parseInt(item_stored_quantity) + quantity;
    window.localStorage.setItem(item_id, item_new_quantity);
}
