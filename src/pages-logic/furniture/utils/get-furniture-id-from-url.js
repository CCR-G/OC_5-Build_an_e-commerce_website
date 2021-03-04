export function getFurnitureIdFromURL() {
    const search_params = document.location.search;
    const url_param = new URLSearchParams(search_params);
    const furniture_id = url_param.get("id");

    return furniture_id ? furniture_id : null;
}
