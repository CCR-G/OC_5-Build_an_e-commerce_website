import { getDataElement } from "../common-utils/get-data-element";
import { createFurnitureCard } from "./utils/create-furniture-card";
import { Furniture } from "../../classes/furniture";

export const FurnituresListUserInterface = {

    /**
     * Inserts Furnitures into the User Interface.
     * @param {Furniture[]} furnitures_list - An array of Furniture.
     */
    set content(furnitures_list) {
        const cards_container = getDataElement("furniture-cards-container");
        furnitures_list.forEach((furniture) => {
            let furniture_card = createFurnitureCard(furniture);
            cards_container.appendChild(furniture_card);
        });
    }
}
