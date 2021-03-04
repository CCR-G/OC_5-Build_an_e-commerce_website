import { getDataElement } from "../../common-utils/get-data-element";
import { insertFurnitureDetails } from "../../common-utils/insert-furniture-details";

export function createFurnitureCard(furniture) {
    let card_template = getDataElement("furniture-card-template");
    let furniture_card = document.importNode(card_template.content, true);

    insertFurnitureDetails(furniture, furniture_card);

    return furniture_card;
}