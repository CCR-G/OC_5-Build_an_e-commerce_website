generateItemsListPage();

function generateItemsListPage() {
    getFurnituresList()
        .catch((error) => {
            console.log(error.message);
        })
        .then(insertItemCardsInPage);
}

async function getFurnituresList() {
    const furnitures_list = await fetch(`http://localhost:3000/api/furniture`);

    if (!furnitures_list.ok) {
        throw new Error(`Error ${furnitures_list.status} : List of item could not be retrieved.`);
    }

    const json_list = await furnitures_list.json();

    return json_list;
}

function insertItemCardsInPage(furnitures_list) {
    const item_cards_container = getDataElement("item-cards-container");
    furnitures_list.forEach((item) => {
        item_cards_container.appendChild(createFurnitureCard(item));
    });
}

function createFurnitureCard(item) {
    let item_card_template = getDataElement("item-card-template");

    let item_card_iteration = document.importNode(item_card_template.content, true);

    let card_name = getDataElement("item-name", item_card_iteration);
    card_name.textContent = item.name;

    let card_price = getDataElement("item-price", item_card_iteration);
    card_price.textContent = item.price;

    let card_link = getDataElement("item-link", item_card_iteration);
    card_link.href = `item.html?id=${item._id}`;
    card_link.title = `Naviguer vers la page ${item.name}`;

    let card_image = getDataElement("item-image", item_card_iteration);
    card_image.src = item.imageUrl;

    return item_card_iteration;
}
