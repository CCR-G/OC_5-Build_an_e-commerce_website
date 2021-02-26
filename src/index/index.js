import { FurnituresListUserInterface } from "../user-interfaces/furniture-list-user-interface";
import { getFurnituresList } from "../api/get-furniture-list";

getFurnituresList()
    .catch((error) => {
        console.log(error.message);
    })
    .then((furnitures_list) => {
        FurnituresListUserInterface.furnituresList = furnitures_list;
    });

