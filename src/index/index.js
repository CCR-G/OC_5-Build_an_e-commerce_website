import { FurnituresListUserInterface } from "../user-interfaces/furniture-list-user-interface";

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

async function getFurnituresList() {
    const furnitures_list = await fetch(`http://localhost:3000/api/furniture`);

    if (!furnitures_list.ok) {
        throw new Error(`Error ${furnitures_list.status} : List of item could not be retrieved.`);
    }

    const json_list = await furnitures_list.json();

    return json_list;
}
