import { LOCAL_STORAGE } from "../../local-storage";
import { Redirect } from "../../redirect";

import { CommandConfirmUserInterface } from "../../user-interfaces/command-ui";

generateCommandConfirmPage();

function generateCommandConfirmPage() {
    let last_order = LOCAL_STORAGE.lastOrder;
    if (!last_order) {
        Redirect.basket();
        return;
    }

    CommandConfirmUserInterface.commandNumber = last_order.order.orderId;
    CommandConfirmUserInterface.commandPrice = last_order.order_price;
}
