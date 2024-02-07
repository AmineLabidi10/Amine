// Sample menu items
const menuItems = [
    { name: 'Dish 1', image: 'dish1.jpg', description: 'Description for Dish 1', price: 10.99 },
    { name: 'Dish 2', image: 'dish2.jpg', description: 'Description for Dish 2', price: 12.99 },
    // Add more menu items as needed
];

// Function to display menu items dynamically
function displayMenu() {
    const menuContainer = document.getElementById('menu-container');
    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p>Price: $${item.price.toFixed(2)}</p>
        `;
        menuContainer.appendChild(menuItem);
    });
}

// Function to handle form submissions for reservations
function submitReservation() {
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;
    const contact = document.getElementById('contact').value;

    // Basic form validation
    if (!date || !time || !guests || !contact) {
        alert('Please fill in all fields.');
        return;
    }

    // Display reservation details
    const reservationDetails = document.getElementById('reservation-details');
    reservationDetails.innerHTML = `
        <p>Date: ${date}</p>
        <p>Time: ${time}</p>
        <p>Number of Guests: ${guests}</p>
        <p>Contact Information: ${contact}</p>
        <button onclick="cancelReservation()">Cancel Reservation</button>
    `;
}

// Function to simulate canceling a reservation
function cancelReservation() {
    const reservationDetails = document.getElementById('reservation-details');
    reservationDetails.innerHTML = '<p>Reservation canceled.</p>';
}

// Display menu items when the page loads
displayMenu();
  