import { FurnituresListUserInterface } from "../user-interfaces/furniture-list-user-interface";
import { getFurnituresList } from "../api/get-furniture-list";

generateItemsListPage();

function generateItemsListPage() {
    getFurnituresList()
        .catch((error) => {
            console.log(error.message);
        })
        .then((furnitures_list) => {
            FurnituresListUserInterface.furnituresList = furnitures_list;
        });
}
