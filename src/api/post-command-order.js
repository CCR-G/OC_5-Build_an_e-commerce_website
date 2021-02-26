export async function postCommandOrder(command_request) {
    const order = await fetch(`http://localhost:3000/api/furniture/order`, {
        method: "POST",
        body: JSON.stringify(command_request.get()),
        headers: { "Content-type": "application/json" }
    });

    if (!order.ok) {
        throw new Error(`Error ${item.status} : There has been a problem.`);
    }

    return order.json();
}
