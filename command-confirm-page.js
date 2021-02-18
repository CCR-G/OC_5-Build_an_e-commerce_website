import { getDataElement } from "./modules/get-data-element";

generateCommandConfirmPage();

function generateCommandConfirmPage() {

    const last_order_json = window.localStorage.getItem("last-order");
    if (!last_order_json) {
        window.location = "basket.html";
    }

    const last_order = JSON.parse(last_order_json);

    const page_order_price = getDataElement("command-price");
    const page_order_id = getDataElement("command-number")

    page_order_price.textContent = last_order.order_price;
    page_order_id.textContent = last_order.order_id;
}
