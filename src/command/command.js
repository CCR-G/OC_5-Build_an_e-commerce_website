import { Router } from "../router";
import { CommandConfirmUserInterface } from "../user-interfaces/command-confirm-user-interface";

generateCommandConfirmPage();

function generateCommandConfirmPage() {
    const last_order_json = window.localStorage.getItem("last-order");
    if (!last_order_json) {
        Router.basket;
    }

    const last_order = JSON.parse(last_order_json);

    CommandConfirmUserInterface.commandNumber = last_order.order_id;
    CommandConfirmUserInterface.commandPrice = last_order.order_price;
}
