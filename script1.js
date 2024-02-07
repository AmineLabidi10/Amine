// Sample menu items
let menuItems = [
    {
        name: 'Item 1',
        description: 'This is item 1.',
        price: 10.99,
        image: 'item1.jpg'
    },
    {
        name: 'Item 2',
        description: 'This is item 2.',
        price: 15.99,
        image: 'item2.jpg'
    },
    // Add more menu items here
];

let menuShowcase = document.getElementById('menu-showcase');

menuItems.forEach(item => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('menu-item');

    let itemImg = document.createElement('img');
    itemImg.src = item.image;

    let itemH3 = document.createElement('h3');
    itemH3.textContent = item.name;

    let itemP = document.createElement('p');
    itemP.textContent = item.description;

    let itemPrice = document.createElement('p');
    itemPrice.textContent = `$${item.price.toFixed(2)}`;

    itemDiv.appendChild(itemImg);
    itemDiv.appendChild(itemH3);
    itemDiv.appendChild(itemP);
    itemDiv.appendChild(itemPrice);

    menuShowcase.appendChild(itemDiv);
});

// Sample reservation system (doesn't actually send emails)
document.getElementById('reservation-form').addEventListener('submit'), event => {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let partySize = document.getElementById('party-size').value;
    let date = document.getElementById('date').value;
    let time = document.getElementById('time').value;

}