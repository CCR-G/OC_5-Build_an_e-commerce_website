/**
 * Describe the Furniture object and what it contains.
 * @class Furniture
 */

export class Furniture {

    /**
     * @constructs Furniture
     * @param {JSON} json_item - JSON representing the product
     */

    constructor(json_item) {
        this.id = json_item._id;
        this.name = json_item.name;
        this.price = json_item.price;
        this.description = json_item.description;
        this.varnish = json_item.varnish;
        this.imageUrl = json_item.imageUrl;
    }
}
