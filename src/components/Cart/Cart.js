import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    // 1 no way
    // const totalReducer = (previous, product) => previous + product.price;
    // const total = cart.reduce(totalReducer, 0)



    // 2.No way

    // const total = cart.reduce((previous, product) => previous + product.price, 0)

    // 3.No way

    let totalQuantity = 0;

    let total = 0;
    for (const product of cart) {
        product.quantity = !product.quantity ? 1 : product.quantity;
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax = (total + shipping) * 0.10;
    const grandTotal = total + tax + shipping;

    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Orderd:{totalQuantity}</h5>
            <h6>Total :{total.toFixed(2)}</h6>
            <p>Shipping: {shipping.toFixed(2)}</p>
            <p>Tax: {tax.toFixed(2)}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;