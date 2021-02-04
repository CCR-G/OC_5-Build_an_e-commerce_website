/**
 * Retrieves the first HTML element corresponding to the data attribute's value passed as argument and throws an error otherwise.
 * The search scope can be an HTMLElement or defaults to the entire Document.
 *
 * @function getDataElement
 * @param {string} data_attribute_value - Value given to the data attribute of the element to look for
 * @param {HTMLElement} [search_scope=document] - Where to look for the data attribute, defaults to the entire Document

 * @returns {HTMLElement} First element matching the data attribute's value
 */

export function getDataElement(data_attribute_value, search_scope = document) {
    const element = search_scope.querySelector(`[data='${data_attribute_value}']`);

    if (!(element instanceof HTMLElement)) {
        throw new Error(`data='${data_attribute_value}' could not be found or is not an HTMLElement`);
    }

    return element;
}
