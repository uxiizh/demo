// script.js
let cart = [];

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', event => {
        let product = event.target.parentElement;
        let id = product.getAttribute('data-id');
        let name = product.getAttribute('data-name');
        let price = parseFloat(product.getAttribute('data-price'));
       
        cart.push({ id, name, price });
        updateCart();
    });
});

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let totalPrice = document.getElementById('total-price');
    let cartCount = document.getElementById('cart-count');
   
    cartItems.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });
    totalPrice.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}