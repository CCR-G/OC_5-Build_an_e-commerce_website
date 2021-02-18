import { Basket } from "./classes/basket-storage";
import { CommandRequest } from "./classes/command-request";
import { Contact } from "./classes/contact";
import { getDataElement } from "./modules/get-data-element";
import { insertFurnitureInformation } from "./modules/insert_furniture_information";

generateBasketPage();

function generateBasketPage() {
    let basket = new Basket;

    const basket_item_cards_container = getDataElement("basket-items-container");
    basket_item_cards_container.innerText = "";

    const basket_storage = basket.getBasketStorage();
    for (const basket_item_id in basket_storage) {
        const basket_item = basket_storage[basket_item_id];
        const basket_item_card = createBasketItemCard(basket_item);
        basket_item_cards_container.appendChild(basket_item_card);
    }

    const page_total_price = getDataElement("basket-price");
    page_total_price.textContent = basket.getBasketTotalPrice();
    window.addEventListener('updated_quantity', () => {
        page_total_price.textContent = basket.getBasketTotalPrice();
    });

    const clear_basket_button = getDataElement("basket-clear");
    clear_basket_button.addEventListener("click", () => {
        basket.clear();
        generateBasketPage();
    });

    setupSendCommandForm(basket);
}

function createBasketItemCard(basket_item) {
    let basket_item_template = getDataElement("basket-item-template");
    let basket_item_clone = document.importNode(basket_item_template.content, true);

    insertFurnitureInformation(basket_item.furniture, basket_item_clone);

    let basket_item_quantity = getDataElement("basket-item-quantity", basket_item_clone);
    basket_item_quantity.value = basket_item.quantity;
    basket_item_quantity.addEventListener("change", () => {
        let updated_quantity = parseInt(basket_item_quantity.value);
        if (updated_quantity >= 0) {
            basket_item.updateQuantity(updated_quantity);
        }
        else {
            basket_item_quantity.value = basket_item.quantity;
        }
    });

    let basket_item_customisation = getDataElement("basket-item-customisation", basket_item_clone);
    basket_item_customisation.textContent = basket_item.customisation;

    let basket_item_clear_button = getDataElement("basket-item-clear", basket_item_clone);
    basket_item_clear_button.addEventListener("click", () => {
        basket_item.clear();
        basket_item_quantity.value = basket_item.quantity;
    });

    return basket_item_clone;
}

function setupSendCommandForm(basket) {
    let form = getDataElement("send-command-form");

    let basket_items = basket.getBasketStorage();
    if (basket.isEmpty()) {
        form.submit.disabled = true;
    }

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        let basket_items = basket.getBasketStorage();
        if (basket.isEmpty()) {
            alert("No items in basket, please fill your basket with our fantastic furnitures!");
            return;
        }

        const command_request = createCommandRequest(form, basket_items);

        postCommandOrder(command_request).then((order_id) => {
            const order_summary = { order_id: order_id.orderId, order_price: basket.getBasketTotalPrice() }
            const my_json = JSON.stringify(order_summary);
            window.localStorage.setItem("last-order", my_json);

            form.reset();
            basket.clear();
            generateBasketPage();

            window.location = "command-confirm.html";
        });
    });
}

function createCommandRequest(form, basket_items) {
    let contact = new Contact(
        form.full_name.value,
        form.used_name.value,
        form.address.value,
        form.town.value,
        form.email.value
    );

    let product_ids = [];

    Object.keys(basket_items).forEach((key) => {
        let basket_item = basket_items[key];

        let i = 0;
        while (i < basket_item.quantity) {
            product_ids.push(basket_item.furniture._id);
            i++;
        }
    });

    return new CommandRequest(contact, product_ids);
}

async function postCommandOrder(command_request) {
    const order = await fetch(`http://localhost:3000/api/furniture/order`, {
        method: "POST",
        body: JSON.stringify(command_request.get()),
        headers: { "Content-type": "application/json" }
    });

    if (!order.ok) {
        throw new Error(`Error ${item.status} : There has been a problem.`);
    }

    return order.json();
}
