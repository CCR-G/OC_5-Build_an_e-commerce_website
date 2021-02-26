import { getFurniture } from "../api/get-furniture";
import { Router } from "../router";
import { getFurnitureIdFromURL } from "./utils/get-furniture-id-from-url";
import { setupUserInterface } from "./utils/setup-user-interface";

generateItemPage();

function generateItemPage() {
    const item_id = getFurnitureIdFromURL();
    if (!item_id) {
        Router.home();
        return;
    }

    getFurniture(item_id)
        .catch(() => {
            Router.home();
            return;
        })
        .then(setupUserInterface);
}
