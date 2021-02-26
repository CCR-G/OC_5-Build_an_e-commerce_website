import { LOCAL_STORAGE } from "../../local-storage";
import { Router } from "../../router";
import { CommandConfirmUserInterface } from "../../user-interfaces/command-ui";

generateCommandConfirmPage();

function generateCommandConfirmPage() {
    let last_order = LOCAL_STORAGE.lastOrder;
    if (!last_order) {
        Router.basket();
        return;
    }

    CommandConfirmUserInterface.commandNumber = last_order.order_id;
    CommandConfirmUserInterface.commandPrice = last_order.order_price;
}
