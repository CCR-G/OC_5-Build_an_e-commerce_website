import { Basket } from "../../../classes/basket-storage";
import { Contact } from "../../../classes/contact";

import { postCommandOrder } from "../../../api/post-command-order";
import { LOCAL_STORAGE } from "../../../utils/local-storage";
import { Redirect } from "../../../utils/redirect";

import { createCommandRequest } from "./create-command-request";

export function handleCommandFormSentEvent(event) {
    const basket = new Basket;

    let basket_items = basket.content;
    if (basket.isEmpty) {
        alert("No items in basket, please fill your basket with our fantastic furnitures!");
        return;
    }

    let contact = new Contact(
        event.detail.first_name,
        event.detail.last_name,
        event.detail.address,
        event.detail.town,
        event.detail.email
    );

    const command_request = createCommandRequest(contact, basket_items);

    postCommandOrder(command_request)
        .then((order) => { handleCommandOrderPosted(order, basket) })
};

function handleCommandOrderPosted(order, basket) {
    const order_summary = {
        order: order,
        order_price: basket.totalPrice,
    }
    LOCAL_STORAGE.lastOrder = order_summary;

    Redirect.command();
    basket.clear();
};
