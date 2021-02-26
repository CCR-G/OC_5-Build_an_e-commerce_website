import { getDataElement } from "./get-data-element";
import { insertFurnitureDetails } from "./insert-furniture-details";

export function createFurnitureCard(furniture) {
    let card_template = getDataElement("item-card-template");
    let furniture_card = document.importNode(card_template.content, true);
    insertFurnitureDetails(furniture, furniture_card);
    return furniture_card;
}