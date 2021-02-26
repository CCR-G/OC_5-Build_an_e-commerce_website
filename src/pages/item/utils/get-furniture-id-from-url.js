export function getFurnitureIdFromURL() {
    const search_params = document.location.search;
    const url_param = new URLSearchParams(search_params);
    const item_id = url_param.get("id");

    return item_id ? item_id : null;
}
