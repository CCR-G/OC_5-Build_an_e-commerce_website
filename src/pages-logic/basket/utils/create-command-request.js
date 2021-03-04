import { CommandRequest } from "../../../classes/command-request";

export function createCommandRequest(contact, basket_items) {
    let furnitures_id = [];

    Object.keys(basket_items).forEach((key) => {
        let basket_item = basket_items[key];

        let i = 0;
        while (i < basket_item.quantity) {
            furnitures_id.push(basket_item.furniture._id);
            i++;
        }
    });

    return new CommandRequest(contact, furnitures_id);
}
