import { Basket } from "../classes/basket-storage";
import { CommandRequest } from "../classes/command-request";
import { Contact } from "../classes/contact";
import { BasketUserInterface } from "../user-interfaces/basket-user-interface";

generateBasketPage();

function generateBasketPage() {
    const basket = new Basket;

    //basket_item_cards_container.innerText = "";
    BasketUserInterface.content = basket.content;

    BasketUserInterface.totalPrice = basket.totalPrice
    window.addEventListener('updated_quantity', () => {
        BasketUserInterface.totalPrice = basket.totalPrice
    });

    BasketUserInterface.proposeToClearBasket();
    document.addEventListener("clear_basket_button_clicked", () => {
        basket.clear();
        generateBasketPage();
    });

    if (basket.isEmpty) {
        BasketUserInterface.disableCommandRequest();
    }

    BasketUserInterface.proposeToCommandBasketContent();
    document.addEventListener("command_form_sent", (event) => {
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

        postCommandOrder(command_request).then((order_id) => {
            const order_summary = {
                order_id: order_id.orderId,
                order_price: basket.totalPrice,
            }
            const my_json = JSON.stringify(order_summary);
            window.localStorage.setItem("last-order", my_json);

            basket.clear();
            generateBasketPage();
            window.location = "command.html";
        });
    });

    document.addEventListener("basket_item_quantity_changed", (event) => {

    });

    document.addEventListener("basket_item_remove_button_clicked", (event) => {
        console.log(event.detail.basket_item);
        event.detail.basket_item.clear();
    });
}

function createCommandRequest(contact, basket_items) {
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
