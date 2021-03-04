import { Furniture } from "../../classes/furniture"

/**
 * Insert furniture's data in given HTMLElement scope.
 *
 * @function insertFurnitureDetails
 * @param {Furniture} furniture - Furniture product.
 * @param {HTMLElement} [scope=document] - Where to look for the data attribute, defaults to the entire Document

 * @returns {void} Only acts on DOM
 */

export function insertFurnitureDetails(furniture, scope = document) {
    const furniture_name = scope.querySelector(`[data='furniture-name']`)
    if (furniture_name) {
        furniture_name.textContent = furniture.name
    };

    const furniture_link = scope.querySelector(`[data='furniture-link']`)
    if (furniture_link) {
        furniture_link.href = `item.html?id=${furniture._id}`;
        furniture_link.title = `Naviguer vers la page ${furniture.name}`;
    }

    const furniture_price = scope.querySelector(`[data='furniture-price']`)
    if (furniture_price) {
        furniture_price.textContent = furniture.price;
    }

    const furniture_description = scope.querySelector(`[data='furniture-description']`)
    if (furniture_description) {
        furniture_description.textContent = furniture.description;
    }

    const furniture_image = scope.querySelector(`[data='furniture-image']`)
    if (furniture_image) {
        furniture_image.src = furniture.imageUrl;
    }

    const furniture_customisation_options = scope.querySelector(`[data='furniture-customisation']`)
    if (furniture_customisation_options) {
        furniture.varnish.forEach(varnish => {
            const varnish_option = document.createElement("option");
            varnish_option.textContent = varnish;
            furniture_customisation_options.appendChild(varnish_option);
        });
    }
}