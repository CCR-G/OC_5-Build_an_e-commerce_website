/** Class representing an Order sent back by the API. */
export class Order {

    /**
    * Create a order.
    * @param {JSON} json_order - The JSON representing the order sent back by the API.
    */

    constructor(json_order) {
        this.orderId = json_order.orderId;
        this.furnituresIds = json_order.products;
        this.contact = json_order.contact;
    }
}