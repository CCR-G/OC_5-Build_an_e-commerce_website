export function handleClearBasketEvent() {
    document.dispatchEvent(
        new CustomEvent('CLEAR_BASKET_BUTTON_CLICKED'),
    );
}

export function handleCommandEvent(event) {
    event.preventDefault();

    document.dispatchEvent(
        new CustomEvent('COMMAND_FORM_SENT', {
            detail: {
                full_name: event.target.full_name.value,
                used_name: event.target.used_name.value,
                address: event.target.address.value,
                town: event.target.town.value,
                email: event.target.email.value,
            }
        }),
    )

    event.target.reset();
}
