

import { cart } from '../data/cart.js';
import { products, getProduct } from '../data/products.js';
import { formatCurrency } from './utils/money.js';

function calculateTotalPrice() {
    let totalPrice = 0;
    cart.forEach((cartItem) => {
        const product = getProduct(cartItem.productId);
        totalPrice += product.priceCents * cartItem.quantity;
    });
    return totalPrice;
}

function renderPaymentSummary() {

    const totalPrice = calculateTotalPrice();
    const totalElement = document.querySelector('.order-total-price');
    if (totalElement) {
        totalElement.textContent = formatCurrency(totalPrice);
    }
}

let cartSummaryHTML = '';
cart.forEach((cartItem) => {
    const productId = cartItem.productId;
    const matchingProduct = getProduct(productId);

    cartSummaryHTML += `
        <div class="order-details-grid">
            <div class="product-image-container">
                <img class="product-image" src="${matchingProduct.image}">
            </div>
            <div class="product-details">
                <div class="product-name">${matchingProduct.name}</div>
                
                <div class="product-quantity">Quantity: ${cartItem.quantity}</div>
                <button class="buy-again-button button-primary">
                    <img class="buy-again-icon" src="images/icons/buy-again.png">
                    <a href="amazon.html"><span class="buy-again-message">Buy it again</span></a>
                </button>
            </div>
        </div>
    `;
});

const orderContainer = document.querySelector('.js-order-container');
if (orderContainer) {
    orderContainer.innerHTML = `
        <div class="order-header">
            <div class="order-header-left-section">
                <div class="order-date">
                    <div class="order-header-label">Order Placed:</div>
                    
                </div>
                <div class="order-total">
                    <div class="order-header-label">Total:</div>
                    <div class="order-total-price">$0.00</div>
                </div>
            </div>
            <div class="order-header-right-section">
                <div class="order-header-label">Order ID:</div>
                <div>27cba69d-4c3d-4098-b42d-ac7fa62b7664</div>
            </div>
        </div>
        ${cartSummaryHTML}
        <div class="product-actions">
            <a href="tracking.html">
                <button class="track-package-button button-secondary">Track package</button>
            </a>
        </div>
    `;
}

renderPaymentSummary();
