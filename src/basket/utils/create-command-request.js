import { CommandRequest } from "../../classes/command-request";

export function createCommandRequest(contact, basket_items) {
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