/**
 * Describe the Contact object and what it contains.
 * @class Contact
 */

export class Contact {
    constructor(firstname, surname, address, town, email) {
        this.firstName = firstname;
        this.lastName = surname;
        this.address = address;
        this.city = town;
        this.email = email;
    }
}
