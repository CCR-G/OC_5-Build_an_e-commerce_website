import { getDataElement } from "../common-utils/get-data-element";
import { createFurnitureCard } from "../common-utils/create-furniture-card";

export const FurnituresListUserInterface = {
    set content(furnitures_list) {
        const cards_container = getDataElement("item-cards-container");
        furnitures_list.forEach((furniture) => {
            let furniture_card = createFurnitureCard(furniture);
            cards_container.appendChild(furniture_card);
        });
    }
}
