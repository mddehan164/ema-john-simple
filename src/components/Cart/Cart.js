import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const roundNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    };
    const total = roundNumber(cart.reduce( (total, product) => total + product.price, 0));
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }else if(total > 10){
        shipping = 4.99;
    }else if(total > 0){
        shipping = 12.99;
    }
    let tax  = roundNumber(total / 10);
    const grandTotal = roundNumber((total + shipping + tax));
    return (
        <div className='cart-container'>
            <h2>Order summary</h2>
            <p>Items orderd : {cart.length}</p><br />
            <div className="details">
                <p><small>Items: {total} $</small></p>
                <p><small>Shipping & Handling: {shipping} $</small></p>
                <p><small>Total before tax: {total + shipping} $</small></p>
                <p><small>estimated Tax: {tax} $</small></p>
                <h4>Order Total : {grandTotal} $</h4>
            </div>
        </div>
    );
};

export default Cart;