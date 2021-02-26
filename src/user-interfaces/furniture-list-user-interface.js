import { getDataElement } from "./utils/get-data-element";
import { createFurnitureCard } from "./utils/create-furniture-card";

export const FurnituresListUserInterface = {
    set furnituresList(furnitures_list) {
        const cards_container = getDataElement("item-cards-container");
        furnitures_list.forEach((furniture) => {
            let furniture_card = createFurnitureCard(furniture);
            cards_container.appendChild(furniture_card);
        });
    }
}
