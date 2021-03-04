/** Class representing a furniture product. */
export class Furniture {

    /**
    * Create a furniture.
    * @param {JSON} json_furniture - The JSON representing the furniture product.
    */

    constructor(json_furniture) {
        this._id = json_furniture._id;
        this.name = json_furniture.name;
        this.price = json_furniture.price;
        this.description = json_furniture.description;
        this.varnish = json_furniture.varnish;
        this.imageUrl = json_furniture.imageUrl;
    }
}
