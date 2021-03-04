import { Contact } from "./contact";

/** Class representing a Command Request. */
export class CommandRequest {

    /**
     * Create a command request.
     * @param {Contact} contact - A Contact object representing the contact and its details.
     * @param {string[]} furnitures_id - An array containing the ids of all furnitures in basket.
     */

    constructor(contact, furnitures_id) {
        this.contact = contact;
        this.products = furnitures_id;
    }
}
