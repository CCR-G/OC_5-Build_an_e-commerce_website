import { Furniture } from "../../../classes/furniture";
import { FurnitureUserInterface } from "../../../user-interfaces/furniture-ui";

import { addFurnitureToBasket } from "./add-furniture-to-basket";

/**
* Handles the call to the User Interface.
* Passes it the necessary information.
* Handles the events the UI sends.
*
* @param {Furniture} furniture - A Furniture Object.
*/

export function handleUserInterface(furniture) {
    FurnitureUserInterface.furnitureDetails = furniture;

    FurnitureUserInterface.proposeToAddToBasket();
    document.addEventListener("ADD_TO_BASKET_FORM_SENT", (event) => {
        addFurnitureToBasket(event, furniture)
    });
}
