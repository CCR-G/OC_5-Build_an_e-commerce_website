import { Furniture } from "../classes/furniture";

/**
 * Asynchronous function retrieving and returning the furnitures complete list from the API.
 * @return {Promise<Furniture[]>} An array of Furniture.
 */
export async function getFurnituresList() {
    const api_response = await fetch(`http://localhost:3000/api/furniture`);

    if (!api_response.ok) {
        throw new Error(`Error ${api_response.status} : List of furnitures could not be retrieved.`);
    }

    let furnitures_list = [];

    const json_furnitures_list = await api_response.json();
    json_furnitures_list.forEach((json_furniture) => {
        furnitures_list.push(
            new Furniture(json_furniture)
        );
    });

    return furnitures_list;
}