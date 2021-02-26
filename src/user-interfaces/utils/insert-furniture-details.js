import { Furniture } from "../../classes/furniture"

/**
 * Insert furniture's data in given HTMLElement scope.
 *
 * @function insertFurnitureDetails
 * @param {Furniture} item - Furniture item
 * @param {HTMLElement} [scope=document] - Where to look for the data attribute, defaults to the entire Document

 * @returns {void} Only acts on DOM
 */

export function insertFurnitureDetails(item, scope = document) {
    const item_name = scope.querySelector(`[data='item-name']`)
    if (item_name) {
        item_name.textContent = item.name
    };

    const item_link = scope.querySelector(`[data='item-link']`)
    if (item_link) {
        item_link.href = `item.html?id=${item._id}`;
        item_link.title = `Naviguer vers la page ${item.name}`;
    }

    const item_price = scope.querySelector(`[data='item-price']`)
    if (item_price) {
        item_price.textContent = item.price;
    }

    const item_description = scope.querySelector(`[data='item-description']`)
    if (item_description) {
        item_description.textContent = item.description;
    }

    const item_image = scope.querySelector(`[data='item-image']`)
    if (item_image) {
        item_image.src = item.imageUrl;
    }

    const item_customisation_options = scope.querySelector(`[data='item-customisation']`)
    if (item_customisation_options) {
        item.varnish.forEach(varnish => {
            const varnish_option = document.createElement("option");
            varnish_option.textContent = varnish;
            item_customisation_options.appendChild(varnish_option);
        });
    }
}