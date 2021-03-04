import { LOCAL_STORAGE } from "../../utils/local-storage";
import { REDIRECT } from "../../utils/redirect";

import { CommandConfirmUserInterface } from "../../user-interfaces/command-ui";

generateCommandConfirmPage();

function generateCommandConfirmPage() {
    let last_order = LOCAL_STORAGE.lastOrder;
    if (!last_order) {
        REDIRECT.basket();
        return;
    }

    CommandConfirmUserInterface.commandNumber = last_order.order.orderId;
    CommandConfirmUserInterface.commandPrice = last_order.order_price;
}
