import {cart,addToCart,calculateCartQuantity} from '../data/cart.js';
import {products,products1} from '../data/products.js'
import { formatCurrency } from './utils/money.js';
//module only works with live server

function generateProductHTML(products) {
    let productsHTML = '';
    products.forEach((product) => {
        productsHTML += `
            <div class="product-container">
                <div class="product-image-container">
                    <img class="product-image" src="${product.image}">
                </div>
                <div class="product-name limit-text-to-2-lines">
                    ${product.name}
                </div>

                <div class="product-price">
                &#8377 ${formatCurrency(product.priceCents)}
                </div>
                <div class="product-quantity-container">
                <div class="js-quantity-selector" data-product-id="${product.id}">
                    
                    </div>
                </div>
                <div class="product-spacer"></div>
                <div class="added-to-cart js-added-to-cart" data-product-id="${product.id}">
                    <img src="images/icons/checkmark.png">
                    Added
                </div>
                <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${product.id}">
                    Add to Cart
                </button>
            </div>`;
    });
    return productsHTML;
}

let products1HTML = generateProductHTML(products); 
let products2HTML = generateProductHTML(products1); 
document.querySelector('.js-product-grid').innerHTML = products1HTML;
document.querySelector('.js-product-grid-1').innerHTML = products2HTML;



const carousels = document.querySelectorAll(".products-grid");
const arrowBtnSets = document.querySelectorAll(".main");

carousels.forEach((carousel, index) => {
    const arrowBtns = arrowBtnSets[index].querySelectorAll("i");
    const firstWidth = carousel.querySelector(".product-container").offsetWidth;

    let isDragging = false;
    let startX;
    let scrollLeft;

    arrowBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            carousel.scrollLeft += btn.id === "left" ? -firstWidth : firstWidth;
        });
    });

    const dragStart = (e) => {
        isDragging = true;
        startX = e.pageX;
        scrollLeft = carousel.scrollLeft;
    }

    const dragging = (e) => {
        if (!isDragging) return;
        const x = e.pageX;
        const walk = (x - startX) * 3; // Adjust the speed of scrolling
        carousel.scrollLeft = scrollLeft - walk;
    }

    const dragEnd = () => {
        isDragging = false;
    }

    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mousemove", dragging);
    carousel.addEventListener("mouseup", dragEnd);
    carousel.addEventListener("mouseleave", dragEnd);
});



function updateCartQuantity(){
   const cartQuantity= calculateCartQuantity();
    document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
}
const addedMessageTimeouts={};
document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const { productId } = button.dataset;
        
        addToCart(productId);
        updateCartQuantity();
        const addedMessage = document.querySelector(`.js-added-to-cart[data-product-id="${productId}"]`);
        addedMessage.classList.add('added-to-cart-visible');

        const previousTimeoutId = addedMessageTimeouts[productId];
        if (previousTimeoutId) {
          clearTimeout(previousTimeoutId);
        }
        const timeoutId = setTimeout(() => {
            // addedMessage.classList.remove('added-to-cart-visible');
            addedMessage.classList.add('hidden');
          }, 2000);
          addedMessageTimeouts[productId] = timeoutId;
        console.log(cart);
    });
});

