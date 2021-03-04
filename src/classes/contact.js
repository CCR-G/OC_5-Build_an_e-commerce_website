/** Class representing a Contact with its details. */
export class Contact {

    /**
    * Create a Contact.
    * @param {string} firstname - The contact's first name.
    * @param {string} lastname - The contact's last name.
    * @param {string} address - The contact's address.
    * @param {string} city - The city where the contact lives.
    * @param {string} email - The contact's email address.
    */

    constructor(firstname, lastname, address, city, email) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.address = address;
        this.city = city;
        this.email = email;
    }
}
