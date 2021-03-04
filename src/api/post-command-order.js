import { CommandRequest } from "../classes/command-request";
import { Order } from "../classes/order";

/**
 * Asynchronous function posting a command request and returning an order object from the API.
 * This order object contains the Contact object and products array from the command request along with an order ID.
 * @param {CommandRequest} command_request - xxx.
 * @return {Promise<Order>} The order Object returned by the API
 */
export async function postCommandOrder(command_request) {
    const api_response = await fetch(`http://localhost:3000/api/furniture/order`, {
        method: "POST",
        body: JSON.stringify(command_request),
        headers: { "Content-type": "application/json" }
    });

    if (!api_response.ok) {
        throw new Error(`Error ${api_response.status} : There has been a problem with your command request.`);
    }

    const json_order = await api_response.json();
    const order = new Order(json_order);

    return order;
}
