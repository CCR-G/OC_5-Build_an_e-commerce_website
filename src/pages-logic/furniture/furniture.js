import { getFurniture } from "../../api/get-furniture";
import { Redirect } from "../../utils/redirect";

import { getFurnitureIdFromURL } from "./utils/get-furniture-id-from-url";
import { handleUserInterface } from "./utils/handle-user-interface";

generateFurniturePage();

function generateFurniturePage() {
    const furniture_id = getFurnitureIdFromURL();
    if (!furniture_id) {
        Redirect.home();
        return;
    }

    getFurniture(furniture_id)
        .catch(() => {
            Redirect.home();
            return;
        })
        .then(handleUserInterface);
}
