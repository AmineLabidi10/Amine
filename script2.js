// Sample menu data
const menuItems = [
    {
        name: "Pizza Margherita",
        image: "images/margherita.jpg",
        description: "Classic tomato, mozzarella, and basil pizza.",
        price: 12.99
    },
    {
        name: "Spaghetti Carbonara",
        image: "images/carbonara.jpg",
        description: "Creamy pasta with eggs, parmesan, and bacon.",
        price: 14.99
    },
    // ... Add more menu items here ...
];

// Function to dynamically display menu items
function displayMenuItems() {
    const menuList = document.getElementById("menu-items");
    menuList.innerHTML = ""; // Clear existing items

    for (const menuItem of menuItems) {
        // Create elements for each item
        const itemContainer = document.createElement("li");
        const itemImage = document.createElement("img");
        const itemName = document.createElement("h3");
        const itemDescription = document.createElement("p");
        const itemPrice = document.createElement("span");

        // Set attributes and content
        itemImage.src = menuItem.image;
        itemName.textContent = menuItem.name;
        itemDescription.textContent = menuItem.description;
        itemPrice.textContent = `$${menuItem.price}`;

        // Append elements to container
        itemContainer.appendChild(itemImage);
        itemContainer.appendChild(itemName);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(itemPrice);

        // Append container to menu list
        menuList.appendChild(itemContainer);
    }
}

// Call display function on page load
displayMenuItems();

const reservationForm = document.getElementById("reservations");

reservationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission

    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const guests = document.getElementById("guests").value;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Validate form input
    if (!date || !time || !guests || !name || !email) {
        alert("Please fill in all required fields!");
        return;
    }

    // Simulate reservation confirmation
    const reservationDetails = {
        date,
        time,
        guests,
        name,
        email
    };

    alert(`Your reservation has been confirmed!\nDetails:\nDate: ${reservationDetails.date}\nTime: ${reservationDetails.time}\nGuests: ${reservationDetails.guests}\nName: ${reservationDetails.name}\nEmail: ${reservationDetails.email}`);

    // Clear form after confirmation
    reservationForm.reset();
});