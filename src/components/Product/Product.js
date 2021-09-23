import React from 'react';
import './Product.css'
const Product = (props) => {
    // console.log(props)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">

            <div className="imgg">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>{seller}</small></p>
                <p>Price: {price}</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <button onClick={() => props.handleAddToCart(props.product)} className="btn-regular">add to Cart</button>
            </div>

        </div>
    );
};

export default Product;