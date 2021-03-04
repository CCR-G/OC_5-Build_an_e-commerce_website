import { Furniture } from "../../classes/furniture";
import { getDataElement } from "../common-utils/get-data-element";
import { insertFurnitureDetails } from "../common-utils/insert-furniture-details";

import { handleAddToBasketEvent } from "./utils/handle-furniture-ui-events";

export const FurnitureUserInterface = {

    /**
     * Inserts Furniture's details into the User Interface.
     * @param {Furniture} furniture - A Furniture.
     */
    set furnitureDetails(furniture) {
        insertFurnitureDetails(furniture);
    },

    proposeToAddToBasket() {
        const add_form = getDataElement("basket-add-form");
        add_form.addEventListener("submit", handleAddToBasketEvent);
    },
}
