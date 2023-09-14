const cartItems = [];
let cartTotal = 0;

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    cartTotal += price;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalDisplay = document.getElementById("cart-total");
    cartList.innerHTML = "";
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${item.name}</span>
            <span>$${item.price.toFixed(2)}</span>
        `;
        cartList.appendChild(listItem);
    });
    totalDisplay.textContent = cartTotal.toFixed(2);
}