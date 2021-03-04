import { getFurniture } from "../../api/get-furniture";
import { REDIRECT } from "../../utils/redirect";

import { getFurnitureIdFromURL } from "./utils/get-furniture-id-from-url";
import { handleUserInterface } from "./utils/handle-user-interface";

generateFurniturePage();

function generateFurniturePage() {
    const furniture_id = getFurnitureIdFromURL();
    if (!furniture_id) {
        REDIRECT.home();
        return;
    }

    getFurniture(furniture_id)
        .catch(() => {
            REDIRECT.home();
            return;
        })
        .then(handleUserInterface);
}
