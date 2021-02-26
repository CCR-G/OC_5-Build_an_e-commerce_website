import { FurnituresListUserInterface } from "../user-interfaces/furnitures-list-ui";
import { getFurnituresList } from "../api/get-furniture-list";

getFurnituresList()
    .catch((error) => {
        throw new Error(error.message);
    })
    .then((furnitures_list) => {
        FurnituresListUserInterface.content = furnitures_list;
    });

