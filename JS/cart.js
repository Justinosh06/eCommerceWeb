let cartDataset = [];

const cartData = localStorage.getItem("cart");

if (cartData) {
    try {
        cartDataset = JSON.parse(cartData);
    } catch (error) {
        console.error("Error parsing cart data:", error);
        cartDataset = [];
    }
} else {
    console.log("Cart not found in localStorage");
}

function cart(){
    shopping_cart.classList.toggle("open");

    navbar.classList.remove("open");
}

function formatPrice(price) {
    return `$${parseFloat(price).toFixed(2)}`;
}

function updateCartUI() {
    const cartTableBody = document.getElementById("data-cart");
    cartTableBody.innerHTML = ""; // Clear the cart

    let total = 0;

    cartDataset.forEach((item) => {
        const cartRow = document.createElement("tr");
        cartRow.classList.add("order");
        cartRow.innerHTML = `
            <td class="cart-name">${item.name}</td>
            <td class="cart-price">${formatPrice(item.price)}</td>
            <td>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1">
            </td>
            <td class="cart-itemprice">${formatPrice(item.price * item.quantity)}</td>
            <td>
                <button class="delete-button"><i class="fa-solid fa-trash"></i></button>
            </td>
        `;

        // Event listener to update quantity when input changes
        const quantityInput = cartRow.querySelector(".quantity-input");
        quantityInput.addEventListener("input", () => {
            const newQuantity = parseInt(quantityInput.value, 10);
            if (!isNaN(newQuantity) && newQuantity >= 1) {
                item.quantity = newQuantity;
                updateCartStorage();
                updateCartUI();
            }
        });

        // Event listener to delete item when button is clicked
        const deleteButton = cartRow.querySelector(".delete-button");
        deleteButton.addEventListener("click", () => {
            const itemIndex = cartDataset.findIndex((cartItem) => cartItem.name === item.name);
            if (itemIndex !== -1) {
                cartDataset.splice(itemIndex, 1);
                updateCartStorage();
                updateCartUI();
            }
        });

        cartTableBody.appendChild(cartRow);

        total += item.price * item.quantity;
    });

    const cartTotal = document.getElementById("cart-total");
    cartTotal.innerHTML = `<strong>Total:</strong> ${formatPrice(total)}`;
}

document.addEventListener("DOMContentLoaded", function() {
    // Your JavaScript code here, including the call to updateCartUI()
    updateCartUI();
});