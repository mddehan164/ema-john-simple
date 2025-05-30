import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const Product = (props) => {

    const {name, img, seller, price, stock} = props.product;
    return (
        <div className='product'>
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className='product-name'>{name}</h3> <br />
                <p><small> by: {seller}</small></p> <br />
                <p>${price}</p> <br />
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button className='cart-btn' onClick={()=> props.handleClick(props.product)}> <FontAwesomeIcon icon={faCartShopping} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;