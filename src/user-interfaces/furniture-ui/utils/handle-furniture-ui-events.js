export function handleAddToBasketEvent(event) {
    event.preventDefault();

    document.dispatchEvent(
        new CustomEvent('ADD_TO_BASKET_FORM_SENT', {
            detail: {
                quantity: parseInt(event.target.quantity_input.value),
                customisation: event.target.customisation_select.value,
            }
        }),
    );

    event.target.reset();
}