/**
 * Returns an object corresponding to the item's id passed as argument.
 * Uses the API to fetch the item.
 * Throws an error with error status if the item could not be retrieved.
 *
 * @function getFurniture
 * @param {string} item_id - ID of the item queried

 * @returns {Furniture} Furniture object matching the item's id
 */

import { Furniture } from "../classes/furniture";

export async function getFurniture(item_id) {
    const item = await fetch(`http://localhost:3000/api/furniture/${item_id}`);

    if (!item.ok) {
        throw new Error(`Error ${item.status} : Item ${item_id} could not be retrieved.`);
    }

    const json_item = await item.json();
    const product = new Furniture(json_item);

    return product;
}
