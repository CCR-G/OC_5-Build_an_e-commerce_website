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
    item_name = getDataElement("item-name");
    item_name.textContent = item.name;

    item_price = getDataElement("item-price");
    item_price.textContent = item.price;

    item_description = getDataElement("item-description");
    item_description.textContent = item.description;

    item_customisation_options = getDataElement("item-customisation");
    item.varnish.forEach(varnish => {
        const varnish_option = document.createElement("option");
        varnish_option.textContent = varnish;
        item_customisation_options.appendChild(varnish_option);
    });
}
