import { postCommandOrder } from "../../api/post-command-order";
import { Basket } from "../../classes/basket-storage";
import { Contact } from "../../classes/contact";
import { Router } from "../../router";
import { createCommandRequest } from "./create-command-request";

export function handleCommandFormSentEvent(event) {
    const basket = new Basket;

    let basket_items = basket.content;
    if (basket.isEmpty) {
        alert("No items in basket, please fill your basket with our fantastic furnitures!");
        return;
    }

    let contact = new Contact(
        event.detail.full_name,
        event.detail.used_name,
        event.detail.address,
        event.detail.town,
        event.detail.email
    );

    const command_request = createCommandRequest(contact, basket_items);

    postCommandOrder(command_request)
        .then((order_id) => { handleCommandOrderPosted(order_id, basket) })
};

function handleCommandOrderPosted(order_id, basket) {
    const order_summary = {
        order_id: order_id.orderId,
        order_price: basket.totalPrice,
    }
    const my_json = JSON.stringify(order_summary);
    window.localStorage.setItem("last-order", my_json);

    Router.command();
    basket.clear();
};
