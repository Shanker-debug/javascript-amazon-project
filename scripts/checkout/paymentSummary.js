import {cart} from '../../data/cart.js';
import { getProduct } from '../../data/products.js';


export function renderPaymentSummary() {
    let productPriceCents = 0;
    cart.forEach((cartItems) => {
        const product = getProduct(cartItems.productId);
        productPriceCents += product.priceCents * cartItems.quantity;

    });

    console.log(productPriceCents);

}