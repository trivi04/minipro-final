import {cart, removeFromCart,calculateCartQuantity} from '../data/cart.js';
import {products,getProduct} from '../data/products.js';
import {formatCurrency} from './utils/money.js';


let cartSummaryHTML = '';

cart.forEach((cartItem) => {
  const productId = cartItem.productId;

  const matchingProduct=getProduct(productId);

  cartSummaryHTML += `
    <div class="cart-item-container
      js-cart-item-container-${matchingProduct.id}">
      

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
          &#8377 ${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
           
            <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

      
      </div>
    </div>
  `;
});

document.querySelector('.js-order-summary')
  .innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link')
  .forEach((link) => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
console.log(cart);
      const container = document.querySelector(
        `.js-cart-item-container-${productId}`
      );
      container.remove();
      function updateCartQuantity() {
        const cartQuantity = calculateCartQuantity();
        document.querySelector('.js-return-to-home-link')
          .innerHTML = `${cartQuantity} items`;
      }
      
      updateCartQuantity();
    });
  });
  let cartQuantity = 0;

cart.forEach((cartItem) => {
  cartQuantity += cartItem.quantity;
});


document.querySelector('.js-return-to-home-link')
  .innerHTML = `${cartQuantity} items`;


function renderPaymentSummary(){
    let productPriceCents=0;
    cart.forEach((cartItem)=>{
      const product=getProduct(cartItem.productId);
productPriceCents+= product.priceCents*cartItem.quantity;
    });
    console.log(productPriceCents);
   let tax=productPriceCents*0.05;
   let charges=15.00;
   let total=tax+productPriceCents+charges*100;
   console.log(total);
    const PaymentSummaryHTML=`
<div class="payment-summary-title">
            Order Summary
          </div>
          <div class="payment-summary-row">
            <div>Items:</div>
            <div class="payment-summary-money">&#8377 ${formatCurrency(productPriceCents)}</div>
          </div>
          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money"> &#8377 15</div>
          </div>
          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">&#8377 ${formatCurrency(productPriceCents)}</div>
          </div>
          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">&#8377 ${formatCurrency(tax)}</div>
          </div>
          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">&#8377 ${formatCurrency(total)}</div>
          </div>
          <button class="place-order-button button-primary">
            Place your order
          </button>`;
          document.querySelector('.js-payment-summary')
  .innerHTML = PaymentSummaryHTML;
  }
  renderPaymentSummary();
  
