import { getDataElement } from "../common-utils/get-data-element";

export const CommandConfirmUserInterface = {
    set commandPrice(command_price) {
        const price_container = getDataElement("command-price");
        price_container.textContent = command_price;
    },

    set commandNumber(command_number) {
        const command_number_container = getDataElement("command-number");
        command_number_container.textContent = command_number;
    }
}
