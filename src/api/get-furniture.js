import { Furniture } from "../classes/furniture";

/**
 * Asynchronous function retrieving and returning a furniture by its id from the API.
 * @param {string} furniture_id - ID of the furniture requested.
 * @return {Promise<Furniture>} A Furniture.
 */
export async function getFurniture(furniture_id) {
    const api_response = await fetch(`http://localhost:3000/api/furniture/${furniture_id}`);

    if (!api_response.ok) {
        throw new Error(`Error ${api_response.status} : Furniture ${furniture_id} could not be retrieved.`);
    }

    const json_furniture = await api_response.json();
    const furniture = new Furniture(json_furniture);

    return furniture;
}
