import { getDataElement } from "../common-utils/get-data-element";
import { insertFurnitureDetails } from "../common-utils/insert-furniture-details";

import { handleAddToBasketEvent } from "./utils/handle-furniture-ui-events";

export const FurnitureUserInterface = {
    set furnitureDetails(furniture) {
        insertFurnitureDetails(furniture);
    },

    proposeToAddToBasket() {
        const add_form = getDataElement("basket-add-form");
        add_form.addEventListener("submit", handleAddToBasketEvent);
    },
}
